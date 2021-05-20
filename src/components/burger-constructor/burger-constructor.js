import React from "react";

export default class BurgerConstructor extends React.Component {
    render() {
        return (
            <section className="solid mr-5">
                <h2 className="dashed">Соберите бургер</h2>
                <div>
                    <h3>Булки</h3>
                    <h3>Соусы</h3>
                    <h3>Начинки</h3>
                </div>

            </section>
        );
    }
}