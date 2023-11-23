import { Html, Head, Main, NextScript } from 'next/document';
import { ReactNode } from 'react';

export default function Document({ children }: { children: ReactNode }) {
    return (
        <Html>
            <Head></Head>
            <Main />
            <NextScript />
        </Html>
    );
}
