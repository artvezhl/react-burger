import React from 'react';

export default function Orders() {
    return (
        <section
            style={{
                width: '100%',
                maxWidth: '580px',
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            <div className="mr-9">
                <h4 className="text text_type_main-medium">Готовы:</h4>
                <ul
                    style={{
                        listStyleType: 'none',
                        paddingLeft: 0,
                    }}
                >
                    <li
                        className="text text_type_digits-default"
                        style={{
                            marginBottom: '8px',
                            color: 'var(--success)',
                        }}
                    >
                        034534
                    </li>
                    <li
                        className="text text_type_digits-default"
                        style={{
                            marginBottom: '8px',
                            color: 'var(--success)',
                        }}
                    >
                        034533
                    </li>
                    <li
                        className="text text_type_digits-default"
                        style={{
                            marginBottom: '8px',
                            color: 'var(--success)',
                        }}
                    >
                        034532
                    </li>
                    <li
                        className="text text_type_digits-default"
                        style={{
                            marginBottom: '8px',
                            color: 'var(--success)',
                        }}
                    >
                        034531
                    </li>
                    <li
                        className="text text_type_digits-default"
                        style={{
                            marginBottom: '8px',
                            color: 'var(--success)',
                        }}
                    >
                        034530
                    </li>
                </ul>
            </div>
            <div
                style={{
                    marginLeft: 'auto',
                    marginRight: '120px',
                }}
            >
                <h4 className="text text_type_main-medium">В работе:</h4>
                <ul
                    style={{
                        listStyleType: 'none',
                        paddingLeft: 0,
                    }}
                >
                    <li
                        className="text text_type_digits-default"
                        style={{
                            marginBottom: '8px',
                        }}
                    >
                        034529
                    </li>
                    <li
                        className="text text_type_digits-default"
                        style={{
                            marginBottom: '8px',
                        }}
                    >
                        034528
                    </li>
                    <li
                        className="text text_type_digits-default"
                        style={{
                            marginBottom: '8px',
                        }}
                    >
                        034527
                    </li>
                    <li
                        className="text text_type_digits-default"
                        style={{
                            marginBottom: '8px',
                        }}
                    >
                        034526
                    </li>
                </ul>
            </div>
            <div className="text text_type_main-medium mt-10 mb-10">
                Выполнено за все время <br />
                <span
                    className="text text_type_digits-large"
                    style={{
                        textShadow:
                            '0 0 16px rgba(51, 51, 255, 0.25), 0 0 8px rgba(51, 51, 255, 0.25), 0 4px 32px rgba(51, 51, 255, 0.5)',
                    }}
                >
                    29 674
                </span>
            </div>
            <div className="text text_type_main-medium">
                Выполнено за сегодня <br />
                <span
                    className="text text_type_digits-large"
                    style={{
                        textShadow:
                            '0 0 16px rgba(51, 51, 255, 0.25), 0 0 8px rgba(51, 51, 255, 0.25), 0 4px 32px rgba(51, 51, 255, 0.5)',
                    }}
                >
                    317
                </span>
            </div>
        </section>
    );
}
