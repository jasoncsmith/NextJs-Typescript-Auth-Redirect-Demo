import React from 'react';
import styles from './post.module.css';

export interface IPost {
    id: number;
    userId: number;
    body: string;
    title: string;
}

function Post({ title, body }: { title: string; body: string }) {
    return (
        <div className={styles.post}>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
}

export default Post;
