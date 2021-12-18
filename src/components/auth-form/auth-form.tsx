import React, { FC } from 'react';

import formStyles from './auth-form.module.css';

const AuthForm: FC = ({ children }) => {
    return <div className={formStyles.auth}>{children}</div>;
};

export default AuthForm;
