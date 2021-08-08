import React from "react";

import loginStyles from './login.module.css';
import AuthForm from "../components/auth-form/auth-form";

export function LoginPage () {
    return (
        <main className={loginStyles.main}>
            <AuthForm />
            {/*<div className={loginStyles.form}>*/}

            {/*</div>*/}
        </main>
    );
}