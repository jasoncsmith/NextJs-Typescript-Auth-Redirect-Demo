import React from 'react';
import { useUserContext } from '../../context/user';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';

const ProtectedPage = ({
    component,
}: {
    component: React.ReactNode;
}): React.ReactNode => {
    const { user } = useUserContext();
    const router = useRouter();

    if (!user) {
        router.push('/login');
        return null;
    }

    return component;
};

export default observer(ProtectedPage);
