"use client";


import Link from 'next/link';
import styles from './LoginForm.module.css';
import { useFormState } from "react-dom";
import { login } from '@/lib/actions';

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);
    return (
        <form className={styles.form} action={formAction}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
        {state?.error}
        <Link href="/register">
          {"Don't have an account?"} <b>Register</b>
        </Link>
      </form>
    );
};

export default LoginForm;