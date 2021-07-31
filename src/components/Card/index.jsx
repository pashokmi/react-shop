import React from 'react';

import cardStyles from './Card.module.scss';

const Card = (props) => {
    const onClickButton = () =>{
        alert(props.title)
    }
    return (
        <article className={cardStyles.card}>
            <img className={cardStyles.card__img} src={props.imageUrl}
                 alt="sneakers"/>
            <h2 className={cardStyles.card__title}>{props.title}</h2>
            <div className={cardStyles.card__bye}>
                <div className={cardStyles.card__prise}>
                    <span className={cardStyles.card__prise_name}>Цена:</span>
                    <span className={cardStyles.card__prise_current}>{props.price} руб.</span>
                </div>
                <button className={cardStyles.card__add} onClick={ onClickButton }>add</button>
            </div>
        </article>
    );
};

export default Card;