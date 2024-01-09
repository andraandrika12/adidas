import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { editCategory, fetchCategoryDetail } from "../store/actions/actionCreator";
import Swal from "sweetalert2";


export default function Editcategory() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const category = useSelector((state) => state.categories.detail)

    
    const [input, setInput] = useState({
        name: "",
        createdAt: "",
        updatedAt: ""
    })

    
    const location = useLocation();
    const id = location.pathname.split('/').pop();

    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setInput({
            ...input,
            [name]: value,
        });
    }

    const handleEditCategory = (e) => {
        e.preventDefault(); 
        dispatch(editCategory(input, id))
        .then(res => {
            Swal.fire(
                'Successfully created',
                '',
                'success'
            )
            navigate('/category')
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
            })
        })
    }

    useEffect(() => {
        if (id){
            dispatch(fetchCategoryDetail(id));

        } 
    }, [id]);

    useEffect(() => {
        if (category) {
            setInput(category);
        }
    }, [category]);
    
    

    return (
        <>
            <div className="bg-white w-100">
                <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-category-section">
                    <div
                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="display-2">Edit Category</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <form onSubmit={handleEditCategory} id="category-form">
                                <div className="mb-3">
                                    <label><span className="text-danger fw-bold"></span></label>
                                    <input onChange={(e) => handleOnChange(e)} value={input.name} name='name' type="text" className="form-control" id="category-name" placeholder="Enter category name" required />
                                </div>
                                <div className="row mt-5 mb-3">
                                    <div className="col-6">
                                        <Link to="/category" className="btn btn-lg btn-secondary rounded-pill w-100 p-2" >Cancel</Link>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-lg btn-dark rounded-pill w-100 p-2" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}