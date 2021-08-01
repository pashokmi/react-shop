import React from 'react';

import cardStyles from './Card.module.scss';

const Card = ({onFavorite, title, imageUrl, price, onPlus}) => {

    const [isAdded, setIsAdded] = React.useState();

    const onClickPlus = () => {
      onPlus();
        setIsAdded(!isAdded);
    }

    React.useEffect(() => {
        console.log('Переменная Изменилась');
    },[isAdded]) ;


    return (
        <article className={cardStyles.card}>
            <button className={cardStyles.card__favorite} onClick={ onFavorite}>add</button>
            <img className={cardStyles.card__img} src={imageUrl}
                 alt="sneakers"/>
            <h2 className={cardStyles.card__title}>{title}</h2>
            <div className={cardStyles.card__bye}>
                <div className={cardStyles.card__price}>
                    <span className={cardStyles.card__price_name}>Цена:</span>
                    <span className={cardStyles.card__price_current}>{price} руб.</span>
                </div>
                <img
                    className={cardStyles.card__add}
                    onClick={onClickPlus }
                    src={isAdded ? '/img/added.svg' : '/img/plus.svg'}
                    alt="plus"
                />

            </div>
        </article>
    );
};

export default Card;