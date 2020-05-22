import React, { useState, useEffect } from 'react';
import PostItem from "./PostItem";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                response.json()
                    .then(data => {
                        setPosts(data);
                    });
            });
    }, []);

    return (
        <>
            {/* Input criado para, ao digitar, forçar uma alteração no State e forçar o componente a renderizar */}
            {/* A alteração de estado coloca o componente no estado de 'Reconciliation' */}
            <input type="text" onChange={ event => setNewPost(event.target.value) } value={ newPost } />

            <ul>
                {
                    posts.map(post => (
                        <PostItem key={ post.id } post={ post } />
                    ))
                }
            </ul>
        </>
    );
};

export default PostList;
