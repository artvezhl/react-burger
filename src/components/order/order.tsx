import React, { ReactElement } from 'react';

import OrderIngredient from './order-ingredient/order-ingredient';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const orderNumber = 657438;
const orderDate = 'Сегодня, 16:20 i-GMT+3';
const burgerName = 'Death Star Starship Main бургер';

const saucePic = 'https://code.s3.yandex.net/react/code/sauce-02.png';
const bunPic = 'https://code.s3.yandex.net/react/code/bun-01.png';
const firstMealPic = 'https://code.s3.yandex.net/react/code/meat-01.png';
const secondMealPic = 'https://code.s3.yandex.net/react/code/meat-02.png';
const thirdMealPic = 'https://code.s3.yandex.net/react/code/sp_1.png';
const fourthMealPic = 'https://code.s3.yandex.net/react/code/core.png';
const orderStatus = 'Выполнен';
const name = 'Флюоресцентная булка R2-D3';

const price = 13425;

const Order = (): ReactElement => {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: '640px',
                margin: '0 auto',
            }}
        >
            <p
                className={`text text_type_main-default mb-10`}
                style={{
                    textAlign: 'center',
                }}
            >
                #{orderNumber}
            </p>
            <h3 className="text text_type_main-medium mb-3">{burgerName}</h3>
            <p
                className={`text text_type_main-default mb-15`}
                style={{
                    color: 'var(--success)',
                }}
            >
                {orderStatus}
            </p>
            <p className="text text_type_main-medium mb-6">Состав:</p>
            <div
                style={{
                    height: '100%',
                }}
            >
                <div
                    className="pr-6"
                    style={{
                        height: 'calc(100vh - 220px)',
                        maxHeight: '312px',
                        overflowY: 'scroll',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    <OrderIngredient name={name} image={bunPic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={saucePic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={firstMealPic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={secondMealPic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={thirdMealPic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={fourthMealPic} index={10} count={2} price={350} />
                    <OrderIngredient name={name} image={saucePic} index={10} count={2} price={350} />
                </div>
                <div
                    className="mt-10"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <p className={`text text_type_main-default text_color_inactive`}>{orderDate}</p>
                    <p
                        className="text text_type_digits-default"
                        style={{
                            paddingLeft: '9px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {price}
                        <span className="ml-2">
                            <CurrencyIcon type="primary" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Order;
