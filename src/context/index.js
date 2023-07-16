import { createContext, useContext, useState, useEffect } from "react";


const AppContext = createContext(null);

const url = 'https://fakestoreapi.com/products';

function ContextProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [error, setError] = useState('');
    const [cartAmount, setCartAmount] = useState(0);

    useEffect(() => {
        getProducts(url);
    }, []);

    function getProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.map(item => {
                    const shortenedTitle = item.title.slice(0, 20);

                    return {
                        id: item.id,
                        title: shortenedTitle,
                        image: item.image,
                        price: item.price,
                        rating: item.rating.rate,
                    };
                });
                setProducts(filteredData);
                setDisplayProducts(filteredData.slice(0, 8));
            })
            .catch(error => {
                console.log(error.message);
                const errorMsg = 'An error occured, please try again after sometime.';
                setError(errorMsg);
            });
    }

    return (
        <AppContext.Provider
            value={{ products, setProducts, error, cartAmount, setCartAmount,
            displayProducts, setDisplayProducts, }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useMyContext = () => {
    return useContext(AppContext)
}


export default ContextProvider;