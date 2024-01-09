import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { fetchProductById } from "../store/action/actionCreator";

export default function Card() {
    // const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch()
    const location = useLocation();
    const categoryId = location.pathname.split('/').pop();

    const products = useSelector(function (state) {
        console.log(state)
    return state.products.dataById
    })

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchProductById(categoryId))
            setIsLoading(false);
        }, 1500);
    }, [categoryId, dispatch]);

    return (
        <>
            {isLoading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            ) : (
                <div id="parent" className="adjustement">
                    {products && products.map(product => (
                        <Link to={`/products-detail/${product.slug}/${product.id}`} key={product.id}>
                            <div id="allCardHover">
                                <div>
                                    <img src={product.mainImg} alt={product.name} />
                                </div>
                                <div>
                                    <p className="categorySection">{product.categoryName}</p>
                                    <h5 className="nameSection"><strong>{product.name}</strong></h5>
                                    <p className="priceDisplay">{product.price}</p>
                                    <p className="colorSection">3 warna</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}

