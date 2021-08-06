import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import axios from "axios";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://610688cc1f3487001743796f.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://610688cc1f3487001743796f.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://610688cc1f3487001743796f.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj])
  }
  const onRemoveItem = (id) =>{
    axios.delete(`https://610688cc1f3487001743796f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    // console.log(event.target.value)
    setSearchValue(event.target.value);
  }
  return (
    <>
      <Header onClickCart={() => setCartOpened(true)}/>
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
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
                className="hero__close"/>}
              <input onChange={onChangeSearchInput} className="hero__input" value={searchValue} type="text"
                     placeholder="Поиск..."/>
            </label>
          </div>
          <div className="hero__inner">

            {items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item, index) => (
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
