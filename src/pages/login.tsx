import React from 'react';
import Head from 'next/head';
import { signIn } from 'next-auth/client';
import styles from '../styles/pages/Login.module.css'


export default function Login() {

    return (
        <div className={styles.loginOverlay}>
            <Head>
                <title>Login | move.it</title>
            </Head>
            <img className={styles.loginBigLogo} src="/big-logo.svg" alt="moveit" />

            <img className={styles.loginLogo} src="logo-move-it.svg" alt="move.it" />

            <div className={styles.loginText}>
                <strong>Bem-vindo</strong>
                <img src="/icons/git.svg" alt="Git Hub" />
                <div>
                    Faça login com seu GitHub para começar
                </div>
            </div>
            <div className={styles.loginBox}>
                <button type="button" onClick={() => signIn('github')} ><div /></button>
            </div>
        </div >
    )
}