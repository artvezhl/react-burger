import React from "react";

import listStyles from './constructor-list.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default class ConstructorList extends React.Component {
    render() {
        return (
            <div className={ listStyles.commonList }>
                <article>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                    />
                </article>
                <div className={ listStyles.constructorList }>
                    <article className={ listStyles.item }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Говяжий метеорит (отбивная)"
                            price={350}
                            thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                        />
                    </article>
                    <article className={ listStyles.item }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Говяжий метеорит (отбивная)"
                            price={350}
                            thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                        />
                    </article>
                    <article className={ listStyles.item }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Говяжий метеорит (отбивная)"
                            price={350}
                            thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                        />
                    </article>
                    <article className={ listStyles.item }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Говяжий метеорит (отбивная)"
                            price={350}
                            thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                        />
                    </article>
                    <article className={ listStyles.item }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Говяжий метеорит (отбивная)"
                            price={350}
                            thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                        />
                    </article>
                    <article className={ listStyles.item }>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Говяжий метеорит (отбивная)"
                        price={350}
                        thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                    />
                </article>
                </div>
                <article>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                    />
                </article>
            </div>
        )
    }
}
