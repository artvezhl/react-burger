import React from "react";
import PropTypes from 'prop-types';

import itemStyles from "./app-header-item.module.css";
import {Link, useLocation} from "react-router-dom";

export default function AppHeaderItem({text, path = '/', children}) {
    const { pathname } = useLocation();

    const textColor = pathname !== path ? 'text_color_inactive' : '';

    return (
        <li className={`mt-4 mb-4 pt-4 pb-4 pl-5 pr-5 ${itemStyles.header__item}`}>
            <Link to={path} className={children ? `mr-2 ${itemStyles.header__iconWrapper}` : null}>
                { children }
                <p className={`text text_type_main-default ${textColor} ${itemStyles.header__link}`}>{ text }</p>
            </Link>
        </li>
    );
}

AppHeaderItem.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}