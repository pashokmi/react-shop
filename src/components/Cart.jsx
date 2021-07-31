import React from 'react';

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__wrapper">
                <div className="cart__top">
                    <h3 className="cart__title">Корзина</h3>
                    <buutton className="cart__btn">x</buutton>
                </div>
                <div className="cart__items">

                    <div className="cart__item">
                        <picture>
                            <source srcSet="img/2.webp" type="image/webp"/>
                            <img className="cart__img"
                                 src="img/2.jpg" alt="sneakers"/>
                        </picture>
                        <div className="cart__descr">
                            <h3 className="cart__name">Мужские Кроссовки Nike Air Max 270</h3>
                            <span className="cart__prise">12 999 руб.</span>
                        </div>
                        <buutton className="cart__close">x</buutton>
                    </div>


                </div>
                <div className="cart__bottom">
                    <p className="cart__all-name">Итого: </p>
                    <span className="cart__all-price">21 498 руб. </span>
                </div>
                <button className="cart__all-btn">Оформить заказ</button>

            </div>

        </div>
    );
};

export default Cart;