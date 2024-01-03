import React from "react";
import Slider from "react-slick";
import Product from "../Product/Product";

function SliderProduct(props) {
  const { similarProducts, dataToInsert } = props;
  const similarProduct = {
    // dots: true,
    speed: 1000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...similarProduct}>
      {(dataToInsert ? dataToInsert : similarProducts).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Slider>
  );
}

export default SliderProduct;
