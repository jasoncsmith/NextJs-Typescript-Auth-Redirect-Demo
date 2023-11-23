'use client';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import UserStore, { UserContext } from '../context/user';

import Nav from '../components/Nav';
import Header from '../components/Header';
import styles from './index.module.scss';

const darkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function App({ Component, pageProps, ...rest }: AppProps) {
    useEffect(() => {
        UserStore.init();
    }, []);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <UserContext.Provider value={UserStore}>
                    <Nav />
                    <Header />
                    <main className={styles.main}>
                        <Component {...pageProps} />
                    </main>
                </UserContext.Provider>
            </ThemeProvider>
        </>
    );
}
