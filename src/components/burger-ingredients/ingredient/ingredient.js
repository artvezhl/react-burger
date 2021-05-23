import React from "react";

import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default class Ingredient extends React.Component {
    render() {
        return (
            <li
                className="dashed"
                key={ this.props.item._id }
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: "relative"
                }}
            >
                <img className="dashed" src={ this.props.item.image } alt={ this.props.item.name }/>
                <div className="text text_type_digits-default mt-1 mb-1 dashed" style={{
                    display: "flex",
                }}>
                    <p style={{
                        margin: 0,
                        marginRight: 9,
                    }}>{ this.props.item.price }  </p>
                    <CurrencyIcon className="ml-2" type="primary dashed" />
                </div>
                <p className="text text_type_main-default dashed" style={{
                    textAlign: "center",
                    paddingBottom: 24,
                }}>{ this.props.item.name }</p>
                <Counter count={1} size="default" style={{
                    position: 'relative',
                    top: 0,
                    bottom: 0,
                }} />
            </li>
        );
    }
}