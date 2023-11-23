'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, TextField } from '@mui/material';
import styles from './index.module.scss';
import { useUserContext } from '@/src/context/user';

const enum STATUS {
    IDLE = 'IDLE',
    SUBMITTED = 'SUBMITTED',
}

interface IUser {
    fullName: string;
}

interface IErrors {
    fullName?: string;
}

interface ITouched {
    fullName?: boolean;
}
type IStatus = STATUS.IDLE | STATUS.SUBMITTED;

export default function Login() {
    const { user, setUser } = useUserContext();
    const [profile, setProfile] = useState<IUser>({ fullName: '' });
    const [status, setStatus] = useState<IStatus>(STATUS.IDLE);
    const [touched, setTouched] = useState<ITouched>({ fullName: false });
    const router = useRouter();

    function getErrors(): IErrors {
        const errors: IErrors = {};

        if (!profile.fullName.trim()) {
            errors.fullName = 'Name Required';
        }
        return errors;
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;

        setProfile({
            fullName: value,
        });
    }

    function reset(): void {
        setProfile({ fullName: '' });
        setStatus(STATUS.IDLE);
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
        const { name } = e.target;

        setTouched({
            [name]: true,
        });
    }

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();

        setStatus(STATUS.SUBMITTED);

        if (Object.keys(getErrors()).length > 0) {
            return;
        }

        setUser(profile.fullName);

        router.push('/posts').then(reset);
    }

    const errors: IErrors = getErrors();

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <div>
                <TextField
                    name="fullName"
                    type="text"
                    placeholder="Name"
                    label="Name"
                    value={profile.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outlined"
                    tabIndex={1}
                    error={
                        (touched.fullName === true ||
                            status === STATUS.SUBMITTED) &&
                        errors.fullName
                            ? true
                            : false
                    }
                    helperText={
                        (touched.fullName === true ||
                            status === STATUS.SUBMITTED) &&
                        errors.fullName
                    }
                />
            </div>
            <Button
                className={styles.formBtnSubmit}
                type="submit"
                size={'large'}
            >
                LOGIN
            </Button>
        </form>
    );
}
