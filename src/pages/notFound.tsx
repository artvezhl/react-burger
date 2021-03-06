import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import notFoundStyles from './notFound.module.css';
import { DEPLOY_URL } from '../services/constants';

export const NotFoundPage = (): ReactElement => {
    return (
        <div className={`${notFoundStyles.notFound} text text_type_main-medium`}>
            <h2 className="text text_type_digits-large text_color_inactive">404</h2>
            Тут пусто. <br />
            Вернитесь назад или перейдите на
            <Link className={notFoundStyles.link} to={`/${DEPLOY_URL}`}>
                Главную
            </Link>
        </div>
    );
};
