'use client';

import { useState, useEffect } from 'react';
import { useLocalState } from '../../context/LocalStateContext';
import Loader from '../../components/Loader';
import styles from './page.module.css';

interface IPost {
    id: number;
    userId: number;
    body: string;
    title: string;
}

async function get(): Promise<IPost[]> {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await resp.json();
}

export default function Posts(): JSX.Element {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { user } = useLocalState();

    useEffect(function () {
        setLoading(true);
        get()
            .then((posts) => setPosts(posts))
            .catch(() => setError('There was an error retrieving posts'))
            .finally(() => setLoading(false));
    }, []);

    if (loading === true) {
        return <Loader />;
    }

    return (
        <main>
            <header className={styles.header}>
                <h2>
                    Welcome <strong className={styles.strong}>{user}</strong>!
                </h2>
            </header>
            <div className={styles.posts}>
                {error ? (
                    <div style={{ color: 'red' }}>{error}</div>
                ) : (
                    posts.map(({ id, title, body }: IPost) => (
                        <div
                            key={id}
                            className={styles.post}
                        >
                            <h5>{title}</h5>
                            <p>{body}</p>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}
