import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useUserContext } from '../../../context/user';

import styles from './index.module.scss';

const BtnLogout = (): JSX.Element | null => {
    const { user, removeUser } = useUserContext();

    function logout() {
        removeUser();
    }

    if (!user) {
        return null;
    }

    return (
        <Button
            type="button"
            onClick={logout}
            className={styles.button}
        >
            Logout
        </Button>
    );
};

export default observer(BtnLogout);
