'use client';

import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalStateProvider } from '../context/LocalStateContext';
import './globals.css';
import App from './App';

const darkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={darkTheme}>
                    <LocalStateProvider>
                        <App>{children}</App>
                    </LocalStateProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
