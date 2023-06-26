import React from 'react';
import { useLocalState } from '../context/LocalStateContext';
import Login from '../components/Login';
import Nav from '../components/Nav';

export default function App({ children }: { children: React.ReactNode }) {
    const { user } = useLocalState();

    return (
        <div>
            <Nav />
            {!user ? <Login /> : children}
        </div>
    );
}
