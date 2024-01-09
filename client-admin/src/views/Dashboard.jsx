import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { deleteProduct, fetchProducts } from "../store/actions/actionCreator";

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch()

    const products = useSelector(function (state) {
        console.log(state)
        return state.products.data
    })

    const handleDeleteProduct = (e) => {
        // e.preventDefault();
        dispatch(
            deleteProduct(e)
        )

    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchProducts())
            setIsLoading(false);
        }, 1000);
    }, [dispatch]);

    return (
        <>
            {isLoading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            ) : (
                <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="top ">
                    </div>

                    <div className="dash-content">
                        <div className="overview">
                            <div className="title">
                                <i className="uil uil-files-landscapes"></i>
                                <span className="text">Products</span>
                            </div>
                            <section className="ms-sm-auto px-md-2" id="product-section">

                                <button className="btn btn-dark rounded-pill" id="new-product">
                                    <Link to="/add-product" id="button-text-fix"><span className="icon material-symbols-outlined" >add New Product</span></Link>
                                </button>
                            </section>
                        </div>
                        <div className="row">
                            <div className="col-12 table-responsive">
                            </div>
                        </div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th scope="col">NO</th>
                                <th scope="col">NAME</th>
                                <th scope="col">CATEGORY</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">CREATED BY</th>
                                <th scope="col">MAIN IMAGE</th>
                                <th scope="col" width="50px">IMAGES</th>
                                <th scope="col" width="80px">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map((product, index) => (
                                <tr className="text-center" key={product.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.Category.name}</td>
                                    <td>Rp{product.price.toLocaleString('id-ID')}</td>
                                    <td>{product.User.email}</td>
                                    <td><img src={product.mainImg} alt="" className="img-product" /></td>
                                    <td>
                                        <button className="btn btn-dark rounded-pill btn-sm">
                                            <Link to={"/galery-product/" + product.id} id="button-text-fix">
                                                Show Images
                                            </Link>
                                        </button>
                                    </td>
                                    <td className="justify-content-center">
                                        <button className="btn btn-dark rounded-pill mx-2" id="getProductId">
                                            <Link to={"/edit-product/" + product.id} id="button-text-fix">
                                                <span className="icon material-symbols-outlined">Edit</span>
                                            </Link>
                                        </button>
                                        <button onClick={() => handleDeleteProduct(product.id)} className="btn btn-danger rounded-pill mx-2" id="getProductId">
                                            <span className="icon material-symbols-outlined">Delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </section>
            )}
        </>
    )
}