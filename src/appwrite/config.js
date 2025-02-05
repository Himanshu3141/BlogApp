import conf from '../conf/conf.js'

import { Client,ID,Databases,Storage,Query } from "appwrite";


export class Service{
    client=new Client()
    Databases
    storage

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.Databases=new Databases(this.client)
        this.storage=new Storage(this.client)

    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }
        catch(error){
            throw error;
        }
    }


    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try{
            return await this.Databases.updateDocument(
                  conf.appwriteDatabaseId,
                  conf.appwriteCollectionId,
                  slug,
                  {
                    title,
                    content,
                    featuredImage,
                    status,
                  } 
            )
        }
        catch(error){
           throw error
        }
    }

    async deletePost({slug}){
        try{
             await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

             )
                return true
        }
        catch(error){
            throw error;
            return flase
        }
    }

    async getPost({slug}){
        try{
             return await this.Databases,getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
             )
        }
        catch(error){
            throw error;
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
          try{
             return await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
             )
          }
          catch(error){
             
          }
    }


// file upload service

    async uploadFile(file){
        try{
           return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
           )
        }
        catch(error){
            throw error;
            return false
        }
    }

    async deleteFile(fileId){
        try{
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        }
        catch(error){
            throw error;
        }
    }


    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }


}



const service=new Service()
export default service