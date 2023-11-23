import Link from 'next/link';
import Script from 'next/script';
import Head from 'next/head';

import styles from './index.module.scss';

const Home = () => (
    <>
        <Head>
            <title>Home</title>
        </Head>
        <div className={styles.home}>
            Home Page. Go see some <Link href={'/posts'}>Posts</Link>
        </div>
    </>
);

export default Home;
