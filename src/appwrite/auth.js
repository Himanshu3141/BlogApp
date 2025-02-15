import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    constructor() {
        this.client = new Client(); 
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                try {
                    return await this.login({ email, password });
                } catch (loginError) {
                    console.error("Login failed after account creation:", loginError);
                    return userAccount;
                }
            }
            return userAccount;
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Login failed", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.warn("No authenticated user found", error);
            return null;
        }
    }

    async logout() {
        try {
            const currentUser = await this.getCurrentUser();
            if (currentUser) {
                await this.account.deleteSessions("current");
            } else {
                console.warn("No active session found");
            }
        } catch (error) {
            console.error("Logout failed", error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;
