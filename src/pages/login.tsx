import React from 'react';
import Head from 'next/head';
import { signIn } from 'next-auth/client';
import login from '../styles/pages/Login.module.css'

import arrow from '../styles/icons/ArrowIcon.module.css'


export default function Login() {

    return (
        <div className={login.loginOverlay}>
            <Head>
                <title> Login | Move.it</title>
            </Head>
            <img className={login.loginBigLogo} src="/big-logo.svg" alt="moveit" />

            <img className={login.loginLogo} src="logo-move-it.svg" alt="move.it" />

            <div className={login.loginText}>
                <strong>Bem-vindo</strong>
                <img src="/icons/git.svg" alt="Git Hub" />
                <div>
                    Faça login com seu GitHub para começar
                </div>
            </div>
            <div className={login.loginBox}>
                <button type="button" onClick={() => signIn('github')}><div className={arrow.arrowBody} /></button>
            </div>
        </div >
    )
}