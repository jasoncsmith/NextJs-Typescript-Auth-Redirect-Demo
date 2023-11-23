import { observer } from 'mobx-react';
import Head from 'next/head';
import Login from '@/src/components/Login';

function LoginPage() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Login />
        </>
    );
}

export default observer(LoginPage);
