import React, { FC } from 'react';

import itemStyles from './app-header-item.module.css';
import { Link, useLocation } from 'react-router-dom';
import { TAppHeaderItemProps } from './app-header-item-types';
import { TLocationState } from '../app-header-types';

const AppHeaderItem: FC<TAppHeaderItemProps> = ({ text, path = '/', setHover, children }) => {
    const { pathname } = useLocation<TLocationState>();

    const textColor = pathname !== path ? 'text_color_inactive' : '';

    return (
        <li className={`mt-4 mb-4 pt-4 pb-4 pl-5 pr-5 ${itemStyles.header__item}`}>
            <Link to={path} className={children ? `mr-2 ${itemStyles.header__iconWrapper}` : ''}>
                {children}
                <p
                    className={`text text_type_main-default ${textColor} ${itemStyles.header__link}`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {text}
                </p>
            </Link>
        </li>
    );
};

export default AppHeaderItem;
