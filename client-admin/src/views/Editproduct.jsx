import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, editProduct, fetchProductDetail, fetchProducts } from "../store/actions/actionCreator";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Editproduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const category = useSelector((state) => state.categories.data);
    const productDetail = useSelector((state) => state.products.detail);

    const location = useLocation();
    const id = location.pathname.split('/').pop();

    const [input, setInput] = useState({
        name: '', description: '', price: '', mainImg: '', categoryId: '', authorId: '', newImage1: '',
        newImage2: '',
        newImage3: '',
    });



    const categories = useSelector(function (state) {
        return state.categories.data;
    });

    useEffect(() => {
        dispatch(fetchCategories())
        if (id){
            dispatch(fetchProductDetail(id));

        } 
    }, [id]);

    useEffect(() => {
        if (productDetail) {
            setInput(productDetail);
        }
    }, [productDetail]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setInput({
            ...input,
            [name]: value,
        });
    }


    const [isHidden1, setIsHidden1] = useState(false);
    const [isHidden2, setIsHidden2] = useState(false);
    const [isHidden3, setIsHidden3] = useState(false);


    const handleRemoveImage1 = () => {
        setIsHidden1(prevIsHidden1 => !prevIsHidden1);
    };
    const handleRemoveImage2 = () => {
        setIsHidden2(prevIsHidden2 => !prevIsHidden2);
    };
    const handleRemoveImage3 = () => {
        setIsHidden3(prevIsHidden3 => !prevIsHidden3);
    };

    const handleAddImage = () => {
        if (isHidden1) {
            setIsHidden1(prevIsHidden1 => !prevIsHidden1);
        }
        if (isHidden2) {
            setIsHidden2(prevIsHidden2 => !prevIsHidden2);
        }
        if (isHidden3) {
            setIsHidden3(prevIsHidden3 => !prevIsHidden3);
        }
    }

    const handleEditForm = (e) => {
        e.preventDefault();
        dispatch(editProduct(input, id))
            .then(res => {

                navigate('/products')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="bg-white w-100">
                <section
                    className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                    id="new-product-section"
                >
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="display-2">Edit Product</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <form id="product-form" onSubmit={handleEditForm} >
                                <div className="mb-3">
                                    <label>
                                        <span className="text-danger fw-bold"></span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="product-name"
                                        name="name"
                                        placeholder="Enter product name"
                                        required
                                        value={input.name}
                                        onChange={(e) => handleOnChange(e)}
                                    />

                                </div>
                                <div className="mb-3">
                                    <label>
                                        <span className="text-danger fw-bold"></span>
                                    </label>
                                    <select
                                        id="product-category"
                                        className="form-select"
                                        required
                                        name="categoryId"
                                        value={input.categoryId}
                                        onChange={(e) => handleOnChange(e)}
                                    >
                                        <option value="" selected disabled>
                                            --- CHOOSE CATEGORY ---
                                        </option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <span className="text-danger fw-bold"></span>
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="product-desc"
                                        placeholder="Enter product description"
                                        required
                                        name="description"
                                        value={input.description}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <span className="text-danger fw-bold"></span>
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        className="form-control"
                                        id="product-price"
                                        placeholder="Enter product price"
                                        required
                                        name="price"
                                        value={input.price}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>
                                        <span className="text-danger fw-bold"></span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="product-image"
                                        placeholder="Enter product main image"
                                        required
                                        name="mainImg"
                                        value={input.mainImg}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    {!isHidden1 ? (<div className="row mb-3" >
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={input.mainImg}
                                                name="newImage1"
                                                placeholder="Enter additional image"
                                                onChange={(e) => handleOnChange(e)}
                                                required
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <a
                                                className="btn btn-lg btn-secondary rounded-pill"
                                                onClick={() => handleRemoveImage1()}
                                            >
                                                Remove
                                            </a>
                                        </div>
                                    </div>) : null}
                                    {!isHidden2 ? (<div className="row mb-3" >
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={input.mainImg !== '' ? input.mainImg : productDetail?.Images?.[1]?.imgUrl}
                                                name="newImage2"
                                                placeholder="Enter additional image"
                                                onChange={(e) => handleOnChange(e)}
                                                required
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <a
                                                className="btn btn-lg btn-secondary rounded-pill"
                                                onClick={() => handleRemoveImage2()}
                                            >
                                                Remove
                                            </a>
                                        </div>
                                    </div>) : null}
                                    {!isHidden3 ? (<div className="row mb-3" >
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={input.mainImg !== '' ? input.mainImg : productDetail?.Images?.[2]?.imgUrl}
                                                name="newImage3"
                                                placeholder="Enter additional image"
                                                onChange={(e) => handleOnChange(e)}
                                                required
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <a
                                                className="btn btn-lg btn-secondary rounded-pill"
                                                onClick={() => handleRemoveImage3()}
                                            >
                                                Remove
                                            </a>
                                        </div>
                                    </div>) : null}

                                    {isHidden1 && isHidden2 && isHidden3 && (
                                        <a
                                            className="btn btn-lg btn-secondary rounded-pill"
                                            onClick={handleAddImage}
                                        >
                                            Add image
                                        </a>
                                    )}
                                </div>

                                <div className="row mt-5 mb-3">
                                    <div className="col-6">
                                        <Link to="/products" className="btn btn-lg btn-secondary rounded-pill w-100 p-2">
                                            Cancel
                                        </Link>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            className="btn btn-lg btn-dark rounded-pill w-100 p-2"
                                            type="submit"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
