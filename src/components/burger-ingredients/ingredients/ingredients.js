import React from "react";

import Ingredient from "../ingredient/ingredient";

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
                            if (item.type === this.props.activeMealType) {
                                return <Ingredient item={ item } />;
                            } else {
                                return null;
                            }
                        })
                    }

                </ul>
            </div>
        );
    }
}