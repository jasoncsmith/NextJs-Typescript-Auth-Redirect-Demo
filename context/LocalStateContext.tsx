import {
    createContext,
    useState,
    useContext,
    useEffect,
    SetStateAction,
    Dispatch,
} from 'react';
import Loader from '../components/Loader';

type IUser = string | null;

interface IContext {
    user: IUser;
    setUser: Dispatch<SetStateAction<IUser>>;
    storeUser: (name: string) => void;
    removeUser: () => void;
}

function getUser(): IUser | undefined {
    try {
        return localStorage.getItem('user');
    } catch (error: unknown) {
        return undefined;
    }
}

function storeUser(name: string): void {
    if (typeof name === 'string' && name.trim() === '') {
        return undefined;
    }

    try {
        localStorage.setItem('user', JSON.stringify(name));
    } catch (error: unknown) {
        return undefined;
    }
}

function removeUser(): void {
    try {
        localStorage.removeItem('user');
    } catch (error: unknown) {
        return undefined;
    }
}

const retrievedUser: IUser | undefined = getUser();
const storedUser: IUser =
    typeof retrievedUser === 'string' ? JSON.parse(retrievedUser) : null;

const LocalStateContext = createContext<IContext>({
    user: '',
    setUser: () => {},
    storeUser,
    removeUser,
});

function LocalStateProvider({
    children,
}: {
    children: JSX.Element;
}): JSX.Element {
    const [user, setUser] = useState<IUser>(storedUser);
    const [mounted, setMounted] = useState(false); // must wait so we can get storage value

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <Loader />;

    return (
        <LocalStateContext.Provider
            value={{ user, setUser, storeUser, removeUser }}
        >
            {children}
        </LocalStateContext.Provider>
    );
}

function useLocalState(): IContext {
    const context = useContext(LocalStateContext);
    return context;
}

export { LocalStateProvider, useLocalState };
