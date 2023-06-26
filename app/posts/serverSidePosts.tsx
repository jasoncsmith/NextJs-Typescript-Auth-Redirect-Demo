import styles from './page.module.css';

interface IPost {
    id: number;
    userId: number;
    body: string;
    title: string;
}

async function getPosts(): Promise<IPost[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((resp) =>
        resp.json()
    );
}

export default async function Posts() {
    const posts: IPost[] = await getPosts();

    return (
        <section className={styles.page}>
            <h1 style={{ marginBottom: 25 }}>Posts</h1>

            {posts.map(({ id, title, body }: IPost) => (
                <div
                    key={id}
                    className={styles.card}
                >
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            ))}
        </section>
    );
}
