import { Button } from '@mui/material';
import { useLocalState } from '../context/LocalStateContext';

const BtnLogout = (): JSX.Element => {
    const { user, setUser, removeUser } = useLocalState();

    function logout() {
        setUser('');
        removeUser();
    }

    if (!user) {
        return <></>;
    }

    return (
        <Button
            type="button"
            onClick={logout}
            style={{ marginLeft: 50 }}
        >
            Logout
        </Button>
    );
};

export default BtnLogout;
