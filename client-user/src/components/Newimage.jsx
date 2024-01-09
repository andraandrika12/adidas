import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import Slider from "react-slick";
import { fetchProductDetail } from '../store/action/actionCreator';

function Newimage () {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div  style={{ width: '500px', marginLeft: '160px' }}>
            {productDetail && productDetail.Images ? (
                <>
                    <Slider {...settings}>
                        {productDetail.Images.map((image, index) => (
                            <div key={index}>
                                <h3><img src={image.imgUrl} className="productImg" alt={`Image ${index}`} /></h3>
                            </div>
                        ))}
                    </Slider>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
    
}

export default Newimage;
