import React from "react";

import ListStyles from './constructor-list.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

export default class ConstructorList extends React.Component {
    render() {
        return (
            <div className={ ListStyles.constructorList }>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={350}
                    thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={350}
                    thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={350}
                    thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={350}
                    thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={350}
                    thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={350}
                    thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                />
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
            </div>
        )
    }
}
