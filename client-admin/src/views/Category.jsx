import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { deleteCategory, fetchCategories } from "../store/actions/actionCreator"

export default function Category() {
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch()

    const categories = useSelector(function (state) {
        console.log(state)
        return state.categories.data
    })

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear().toString().slice(-2);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const handleDeleteCategory = (e) => {
        // e.preventDefault();
        dispatch(
            deleteCategory(e)
        )

    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchCategories())
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

                    <div className="dash-content">
                        <div className="overview">
                            <div className="title">
                                <i className="uil uil-chart"></i>
                                <span className="text">Categories</span>
                            </div>
                            <section className="ms-sm-auto px-md-2" id="category-section">

                                <button className="btn btn-dark rounded-pill" id="new-category">
                                    <Link to="/add-category" id="button-text-fix" className="icon material-symbols-outlined" >add New
                                        Category</Link>
                                </button>
                            </section>
                        </div>
                        <section className=" ms-sm-auto px-md-4">
                            <div className="row">
                                <div className="col-12 table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr className="text-center">
                                                <th scope="col">#</th>
                                                <th scope="col">NAME</th>
                                                <th scope="col" >CREATED AT</th>
                                                <th scope="col" >UPDATED AT</th>
                                                <th scope="col" >ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categories && categories.map((category, index) => (
                                                <tr className="text-center" key={category.id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{category.name}</td>
                                                    <td>{formatDate(category.createdAt)}</td>
                                                    <td>{formatDate(category.updatedAt)}</td>
                                                    <td className="d-flex justify-content-center">
                                                        <button className="btn btn-dark rounded-pill mx-2" id="getProductId">
                                                            <Link to={"/edit-category/" + category.id}>
                                                                <span className="icon material-symbols-outlined">Edit</span>
                                                            </Link>
                                                        </button>
                                                        <button onClick={() => handleDeleteCategory(category.id)} className="btn btn-danger rounded-pill mx-2" id="getCategoryId">
                                                            <span className="icon material-symbols-outlined">Delete</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div >
                </section >
            )}
        </>
    )
}