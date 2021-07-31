import Card from "./components/Card";
import Header from "./components/Header";

const arr = [
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 6999,
        imageUrl: '/img/1.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Air Max 270',
        price: 3999,
        imageUrl: '/img/2.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 8999,
        imageUrl: '/img/3.jpg'
    },
    {
        title: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 6999,
        imageUrl: '/img/4.jpg'
    },
    {
        title: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 6999,
        imageUrl: '/img/5.jpg'
    },
    {
        title: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 6999,
        imageUrl: '/img/6.jpg'
    }]

function App() {
    return (
        <>
            <Header/>

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

                        {arr.map((obj) => (
                                <Card
                                    title={obj.title}
                                    price={obj.price}
                                    imageUrl={obj.imageUrl}/>
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
