import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductDetail } from "../store/actions/actionCreator";
import unavailable from "../assets/images/unavailable.png"

export default function Imagecard() {
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.products.detail);

    const location = useLocation();
    const id = location.pathname.split('/').pop();

    useEffect(() => {
        if (id) {
            dispatch(fetchProductDetail(id));

        }
    }, [id]);

    return (
        <>
            <div className="card">
                <img src={productDetail.mainImg} alt="mainImg" className="card-img-top mx-auto d-block shadow" style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }} />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        {productDetail?.Images?.[0]?.imgUrl ? (
                            <img src={productDetail.Images[0].imgUrl} alt="imgUrl1" className="flex-fill mr-1 shadow" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        ) : (
                            <img src={unavailable} alt="imgUrl1" className="flex-fill mr-1 shadow" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                     
                        )}
                        {productDetail?.Images?.[1]?.imgUrl ? (
                            <img src={productDetail.Images[1].imgUrl} alt="imgUrl1" className="flex-fill mx-1 shadow" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        ) : (
                            <img src={unavailable} alt="imgUrl1" className="flex-fill mx-1 shadow" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        )}
                        {productDetail?.Images?.[2]?.imgUrl ? (
                            <img src={productDetail.Images[2].imgUrl} alt="imgUrl1" className="flex-fill ml-1 shadow" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        ) : (
                            <img src={unavailable} alt="imgUrl1" className="flex-fill ml-1 shadow" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}