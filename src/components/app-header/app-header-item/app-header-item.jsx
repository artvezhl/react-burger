import React from "react";
import itemStyles from "./app-header-item.module.css";

function AppHeaderItem(props) {
    return (
        <li className={`mt-4 mb-4 pt-4 pb-4 pl-5 pr-5 ${itemStyles.header__item}`}>
            <a className={props.children ? `mr-2  ${itemStyles.header__iconWrapper}` : null}>
                { props.children }
                <p className='text text_type_main-default'>{ props.text }</p>
            </a>
        </li>
    );
}

export default AppHeaderItem;