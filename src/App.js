import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://610688cc1f3487001743796f.mockapi.io/items')
      .then((res) => {
      return res.json();
    })
      .then((json) => {
        setItems(json);
      })
  }, []);

  const onAddToCart = () => {

  }

  return (
    <>
      <Header onClickCart={() => setCartOpened(true)}/>
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)}/>}
      <div className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <h2 className="hero__title">Все кроссовки</h2>
            <label className="hero__label">
              <button className="hero__btn">Поиск</button>
              <input className="hero__input" type="text" placeholder="Поиск..."/>
            </label>
          </div>
          <div className="hero__inner">

            {items.map((obj) => (
                <Card
                  title={obj.title}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  onFavorite={() => console.log('Press Favorite')}
                  onPlus={onAddToCart}
                />
              )
            )}

          </div>
        </div>
      </div>
    </>

  )
    ;
}

export default App;
