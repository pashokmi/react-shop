import React from 'react';

const Cart = ({onClose, items = []}) => {
  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__top">
          <h3 className="cart__title">Корзина</h3>
          <buutton className="cart__btn" onClick={onClose}>x</buutton>
        </div>
        <div className="cart__items">

          {
            items.map((obj) => (
              <div className="cart__item">
                <img className="cart__img"
                     src={obj.imageUrl} alt="sneakers"/>
                <div className="cart__bottom">
                  <h3 className="cart__name">{obj.title}</h3>
                  <span className="cart__prise">{obj.price} руб.</span>
                  <button className="cart__close">x</button>
                </div>

              </div>
            ))}


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