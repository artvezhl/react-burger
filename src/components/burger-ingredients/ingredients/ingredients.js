import React from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default class Ingredients extends React.Component {
    render() {
        return (
            <div
                className="mt-10 mb-6 pl-1 pr-1"
                style={{
                    height: '53vh',
                    overflowY: 'scroll',
                }}
            >
                <h4 className="text text_type_main-medium dashed mb-6">{ this.props.title }</h4>
                <ul className="dashed" style={{
                    listStyleType: 'none',
                    padding: 0,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                }}>
                    {
                        this.props.data.map(item => {
                            if (item.type === this.props.activeMealType)
                                return (
                                    <li
                                        className="dashed"
                                        key={item._id}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            position: "relative"
                                        }}
                                    >
                                        <img className="dashed" src={item.image} alt={item.name}/>
                                        <div className="text text_type_digits-default mt-1 mb-1 dashed" style={{
                                            display: "flex",
                                        }}>
                                            <p style={{
                                                margin: 0,
                                                marginRight: 9,
                                            }}>{item.price}  </p>
                                            <CurrencyIcon className="ml-2" type="primary dashed" />
                                        </div>
                                        <p className="text text_type_main-default dashed" style={{
                                            textAlign: "center",
                                            paddingBottom: 24,
                                        }}>{item.name}</p>
                                        <Counter count={1} size="default" style={{
                                            position: 'relative',
                                            top: 0,
                                            bottom: 0,
                                        }} />
                                    </li>
                                )
                            return null;
                        })
                    }

                </ul>
            </div>
        );
    }
}