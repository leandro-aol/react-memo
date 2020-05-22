import React from 'react';

const PostItem = ({ post }) => {
    return (
        <li>
            <strong>{ post.title }</strong>
            <p>{ post.body }</p>
        </li>
    );
};

export default PostItem;
