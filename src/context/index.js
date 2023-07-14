import { createContext, useContext, useState, useEffect } from "react";


const AppContext = createContext(null);

const url = 'https://fakestoreapi.com/products?limit=9';

const ContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        getProducts(url)
    }, [])

    const getProducts = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const filteredData = data.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    rating: item.rating.rate,
                }
            })
            setProducts(filteredData)
        })
        .catch(error => {
            console.log(error.message)
            const errorMsg = 'An error occured, please try again after sometime.'
            setError(errorMsg)
        })
    }

    return (
        <AppContext.Provider 
            value={{ products, setProducts, error }}
        >
            { children }
        </AppContext.Provider>
    )
}

export const useMyContext = () => {
    return useContext(AppContext)
}


export default ContextProvider;