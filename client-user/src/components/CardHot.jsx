import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div id="allCard">
                <Slider {...settings}>
                    <div className="card container-fluid" style="width: 18rem;">
                        <div id="img-card-hot">
                        <img src="https://www.adidas.co.id/media/wysiwyg/running-2023-tier1-sponsored-berlin-marathon-preactive-launch-com-hp-teaser-carousel-d.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Time to lace up!</strong></h5>
                            <p className="card-text">Get ready for the BMW BERLIN-MARATHON with ADIZERO.</p>
                            <a href="#" className="text-reset"><u>SHOP NOW</u></a>
                        </div>
                    </div>
                    <div className="card container-fluid" style="width: 18rem;">
                        <div id="img-card-hot">
                        <img src="https://www.adidas.co.id/media/wysiwyg/football-fw23-aclubs-lifestyle-onsite-tcc.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><strong>THIRD LFSTLR JERSEYS</strong></h5>
                            <p className="card-text">Dari performa hingga streetwear lifestyle, kreasi ulang jersey sepak bola dalam koleksi LFSTLR yang baru.</p>
                            <a href="#" className="text-reset"><u>CEK SEKARANG</u></a>
                        </div>
                    </div>
                    <div className="card container-fluid" style="width: 18rem;">
                        <div id="img-card-hot">
                        <img src="https://www.adidas.co.id/media/wysiwyg/ADIZERO_SELECT_CCM_TC_1050x1400.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><strong>BYW SELECT</strong></h5>
                            <p className="card-text">Designed to unlock speed</p>
                            <a href="#" className="text-reset"><u>SHOP NOW</u></a>
                        </div>
                    </div>
                    <div className="card container-fluid" style="width: 18rem;">
                    <div id="img-card-hot">
                        <img  src="https://www.adidas.co.id/media/wysiwyg/TC-ID-COuntry-Tee.png" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Indonesia Country Tee</strong></h5>
                            <p className="card-text">Rayakan kebinekaan di Indonesia dengan Indonesia Country Tee, kolaborasi antara adidas dan Tahilalats!</p>
                            <a href="#" className="text-reset"><u>BELI SEKARANG</u></a>
                        </div>
                    </div>
                    <div className="card container-fluid" style="width: 18rem;">
                    <div id="img-card-hot">
                        <img src="https://www.adidas.co.id/media/wysiwyg/APAC_FW23_FREE_HIKER_LOW_Teaser_Carousel_1050x1400px.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Take on the terrain</strong></h5>
                            <p className="card-text">Treat your feet to miles of comfort & support all hike long</p>
                            <a href="#" className="text-reset"><u>SHOP COLLECTION</u></a>
                        </div>
                    </div>
                    <div className="card container-fluid" style="width: 18rem;">
                    <div id="img-card-hot">
                        <img src="https://www.adidas.co.id/media/wysiwyg/running-fw23-switchfwd-launch-hp-tc-d.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><strong>switch fwd</strong></h5>
                            <p className="card-text">The new running shoe that turns your weight into forward motion.</p>
                            <a href="#" className="text-reset"><u>SHOP NOW</u></a>
                        </div>
                    </div>
                    <div className="card container-fluid" style="width: 18rem;">
                    <div id="img-card-hot">
                        <img  src="https://www.adidas.co.id/media/wysiwyg/3392485_-_CAM_Onsite_FW23_ULTRABOOST_LIGHT_CCM_1050x1400px.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><strong>ULTRABOOST LIGHT</strong></h5>
                            <p className="card-text">Epic energy. Lightest ever.</p>
                            <a href="#" className="text-reset"><u>SHOP NOW</u></a>
                        </div>
                    </div>
                    <div className="card container-fluid" style="width: 18rem;">
                    <div id="img-card-hot">
                        <img src="https://www.adidas.co.id/media/wysiwyg/FW23_SUPERSTAR_XLG_1_Aug_ID_TeaserCarousel_1050x1400.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Show up, stand out</strong></h5>
                            <p className="card-text">Made for the makers, the culture breakers. This is the Superstar XLG.</p>
                            <a href="#" className="text-reset"><u>SHOP NOW</u></a>
                        </div>
                    </div>
                </Slider >
            </div >
        );
    }
}