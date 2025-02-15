import React, { useState, useEffect } from "react";
import appwriteService from '../appwrite/config';
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";
import authService from "../appwrite/auth";


function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        authService.getCurrentUser().then((user) => {
            setCurrentUser(user);
        });
    }, []);

    if (!currentUser) {
        return (
            <div className="w-full pt-6 pb-4 text-center">
                <Container>
                    <div className="flex flex-wrap justify-center items-center min-h-[70vh]">
                        <div className="p-4 w-full max-w-md bg-white rounded-xl shadow-lg">
                            <Link to="/login" className="text-2xl font-bold text-gray-800 hover:underline">
                                Login to read posts
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full pt-6 pb-4 bg-gray-100">
            <Container>
                <div className="flex flex-wrap justify-center gap-4">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
