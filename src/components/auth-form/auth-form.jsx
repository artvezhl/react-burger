import React from "react";

import formStyles from './auth-form.module.css';

export default function AuthForm ({ children }) {
    return (
        <div className={formStyles.auth}>
            {children}
        </div>
    );
}