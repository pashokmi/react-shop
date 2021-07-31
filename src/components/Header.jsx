import React from 'react';

const Header = () => {
    return (

        <div className="header">
            <div className="container">

                <div className="header__inner">

                    <div className="header__top">
                        <a className="logo" href="#">
                            logo

                            <img src="/img/logo.png" alt="logo"
                                 className="logo__img"/>

                        </a>
                        <div className="header__top-inner">
                            <h1 className="header__title">REACT SNEAKERS</h1>
                            <p className="header__descr">Магазин лучших кроссовок</p>
                        </div>

                    </div>

                    <div className="header__nav">
                        <button className="header__cart">
                            <span className="header__price">1205 руб.</span>
                        </button>
                        <button className="header__like">Like</button>
                        <button className="header__user">User</button>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Header;