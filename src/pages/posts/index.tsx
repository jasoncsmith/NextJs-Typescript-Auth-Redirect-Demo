import { observer } from 'mobx-react';
import Head from 'next/head';
import Posts from '../../components/Posts';
import ProtectedPage from '../../components/ProtectedPage';

export async function getServerSideProps() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await resp.json();

    return { props: { posts } };
}

function PostsPage(props: { posts: [] }) {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <ProtectedPage component={<Posts posts={props.posts} />} />
        </>
    );
}

export default observer(PostsPage);
