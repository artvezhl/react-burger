import React from "react";

import ConstructorList from "./constructor-list/constructor-list";
import ConstructorTotal from "./constructor-total/constructor-total";

export default class BurgerConstructor extends React.Component {
    render() {
        return (
            <section className="constuctor mr-5 pt-25 pr-4 pl-4 solid">
                <ConstructorList/>
                <ConstructorTotal/>
            </section>
        );
    }
}