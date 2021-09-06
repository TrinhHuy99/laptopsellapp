import banner from 'assets/images/bannerlaptop.jpg';
import banner1 from 'assets/images/bannerlaptop1.jpg';
import banner2 from 'assets/images/bannerlaptop2.jpg';
import banner3 from 'assets/images/bannerlaptop3.jpg';
import banner4 from 'assets/images/bannerlaptop4.jpg';
import banner5 from 'assets/images/bannerlaptop5.jpg';
import banner6 from 'assets/images/bannerlaptop6.jpg';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Banner/index.scss';
function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <React.Fragment>
            <div className="banner">
                <Slider {...settings}>
                    <img src={banner} alt="banner"></img>
                    <img src={banner1} alt="banner1"></img>
                    <img src={banner2} alt="banner2"></img>
                    <img src={banner3} alt="banner3"></img>
                    <img src={banner4} alt="banner4"></img>
                    <img src={banner5} alt="banner5"></img>
                    <img src={banner6} alt="banner6"></img>
                </Slider>
            </div>
        </React.Fragment>

    );
}
export default Banner;