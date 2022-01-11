import React, { ReactElement } from 'react';

import notFoundStyles from './notFound.module.css';

export const NotFoundPage = (): ReactElement => {
    return (
        <div className={`${notFoundStyles.notFound} text text_type_main-medium`}>
            <h2 className="text text_type_digits-large text_color_inactive">404</h2>
            Nothing to show. <br />
            Please return back or follow to the main page.
        </div>
    );
};
