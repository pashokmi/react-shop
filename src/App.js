import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
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

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    // console.log(event.target.value)
    setSearchValue(event.target.value);
  }
  return (
    <>
      <Header onClickCart={() => setCartOpened(true)}/>
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)}/>}
      <div className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <h2 className="hero__title">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h2>
            <label className="hero__label">
              <button className="hero__btn">Поиск</button>
              {searchValue &&
              <button
                onClick={() =>
                setSearchValue('')}
                className="hero__close"></button>}
              <input onChange={onChangeSearchInput} className="hero__input" value={searchValue} type="text"
                     placeholder="Поиск..."/>
            </label>
          </div>
          <div className="hero__inner">

            {items.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
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
