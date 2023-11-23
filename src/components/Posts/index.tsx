'use client';

import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import Loader from '../Loader';
import Post, { PostProps } from '../Post';
import styles from './index.module.scss';

// async function get(): Promise<PostProps[]> {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return await resp.json();
// }

interface PostsProps {
    posts: PostProps[];
}

function Posts({ posts: data }: PostsProps): JSX.Element {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(
        function () {
            setLoading(!data);
            setPosts(data);
        },
        [data]
    );

    if (loading) {
        return <Loader />;
    }

    return (
        <div className={styles.posts}>
            {error ? (
                <div style={{ color: 'red' }}>{error}</div>
            ) : (
                posts.map((p) => (
                    <Post
                        key={p.id}
                        {...p}
                    />
                ))
            )}
        </div>
    );
}

export default observer(Posts);
