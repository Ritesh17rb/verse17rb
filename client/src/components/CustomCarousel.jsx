import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomCarousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className="mx-auto">
            {images.map((image, index) => (
                <div className="col" key={index}>
                    <div className="card custom-card mb-3" style={{ width: '300px', height: '450px' }}>
                        <img src={image} className="card-img-top" alt={`Image ${index}`} style={{ width: '100%', height: '60%' }} />
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CustomCarousel;
