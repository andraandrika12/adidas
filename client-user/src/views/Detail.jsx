import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { fetchProductDetail } from '../store/action/actionCreator'
import Newimage from '../components/Newimage'


function Detail() {
    const dispatch = useDispatch()
    const location = useLocation();
    const path = location.pathname;
    const parts = path.split('/');

    const id = parts[3];
    console.log(id)
    const productDetail = useSelector(function (state) {
        console.log(state)
        return state.products.detail
    })

    useEffect(() => {
        dispatch(fetchProductDetail(id))
    }, [id, dispatch]);




    return (
        <>
            <Navbar />
            <div className="adjustement">

                <Link to="/"><span><i className="fa fa-long-arrow-left"></i>&nbsp; &nbsp;BACK</span></Link>
                <a ><span>Home</span></a>

                {productDetail ? (
                    <div id="productDescription">
                        <div className='container' id='container-detail'>
    
                                <Newimage />
    
                        </div>

                        <div id="descriptionBox" className='container position-absolute'>
                            <div className="productHeading">{productDetail.name}</div>
                            <div className="productColors">Night Marine,Night Sky,Stone</div>
                            <div className="productPrice">Rp.{productDetail.price}</div>
                            <div className="productPriceLabel">(Inclusive of all taxes)</div>
                            <div className="sizeLabel">Select size</div>
                            <button className="sizeButton">7</button>
                            <button className="sizeButton">8</button>
                            <button className="sizeButton">9</button>
                            <button className="sizeButton">10</button>
                            <button className="addtoCartBtn">TAMBAH KE KERANJANG</button>
                            <button className="addtoCartBtn">BELI SEKARANG</button>
                        </div>
                        <div id="specificationBox">
                            <ul className="specHeading">{productDetail.name}</ul>
                            <p className="productColors">{productDetail.description}</p>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Detail