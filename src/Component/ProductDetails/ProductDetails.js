import clsx from "clsx";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import styles from "./ProductDetails.module.scss";
import Product from "../Product/Product";

function ProductDetails(props) {
  const { dataToInsert, count, setCount, onAdd, sizes, setSizes, formErrors } =
    props;
  let { id } = useParams();

  var productDetail = dataToInsert.find((product) => product.id === +id);

  const similarProducts = dataToInsert.filter(
    (product) => product.type === productDetail.type
  );

  const [changeImages, setChangeImages] = useState(
    productDetail ? productDetail.images[0].avt : ""
  );

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const handleCountUp = () => {
    setCount(count + 1);
  };

  const handleCountDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const Images = {
    // dots: true,
    speed: 1000,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };

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
    <div>
      <div className={clsx(styles.backgroud)}>
        <div className={clsx(styles.backgroud_img)}></div>
        <div className={clsx(styles.backgroud_title, "text-center")}>
          <h2 className="xs:text-3xl">Sản phẩm</h2>
          <div>
            <span>Chi tiết sản phẩm</span>
            &nbsp; <span>/</span> &nbsp;
            <span style={{ color: "rgb(238, 77, 45)" }}>
              {productDetail.name}
            </span>
          </div>
        </div>
      </div>

      <div className="container flex-wrap px-4 mx-auto md:flex my-10">
        <div
          className={clsx(
            styles.left,
            "w-full lg:w-1/2 p-4 flex justify-center"
          )}
        >
          <div className="xs:max-w-md ">
            <div className="block w-full rounded-xl mb-4 lg:max-w-md px-2 ">
              <img
                className=" border rounded-md h-[432px]  sm:w-full xs:w-auto "
                alt=""
                src={`https://raw.githubusercontent.com/Quangduc2002/BanGiay/main/src/assets/Image/${
                  changeImages ? changeImages : productDetail.images[0].avt
                }`}
              />
            </div>
            <div className="flex overflow-hidden sm:w-auto xs:w-[346px]">
              <Slider {...Images}>
                {productDetail.images.map((image, index) => (
                  <div key={index} className="w-1/4 px-2 ">
                    <img
                      onClick={() => setChangeImages(image.avt)}
                      className={`h-[96px] w-[96px]  rounded-md hover:!border-orange-500 ${
                        changeImages === image.avt ? "border-orange-500" : ""
                      } border-1`}
                      alt=""
                      src={`https://raw.githubusercontent.com/Quangduc2002/BanGiay/main/src/assets/Image/${image.avt}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className={clsx(styles.right, "w-full lg:w-1/2 py-4 text-left")}>
          <div className="max-w-lg xs:max-w-md lg:mx-0 xs:mx-auto">
            <h1 className=" font-semibold text-4xl mb-2 font-heading">
              {productDetail.name}
            </h1>

            <p className="text-sm  font-medium mb-2 text-slate-500">
              {productDetail.type}
            </p>

            <div className="flex gap-4 mb-4 items-center">
              <div className={clsx("stars-outer m-0")}>
                <div className={clsx("stars-inner")}></div>
              </div>
              <p className="text-xs uppercase text-rhino-400 font-bold m-0">
                5 lượt đánh giá
              </p>
            </div>

            <div className="flex sm:gap-4 sm:mb-4 items-center sm:flex-nowrap xs:flex-wrap">
              <h2 className="text-4xl font-semibold text-rhino-700 text-rose-500">
                {VND.format(
                  productDetail.price -
                    (productDetail.price * productDetail.discount) / 100
                )}
              </h2>
              <p className="font-medium text-xl text-slate-400 line-through ">
                {VND.format(productDetail.price)}
              </p>
            </div>

            <div className={clsx(styles.container_item__content)}>
              <ul className="flex flex-wrap p-0 gap-2">
                {productDetail.size.map((size) => (
                  <li
                    className={`border rounded-md hover:bg-gray-200 cursor-pointer my-2 ${
                      sizes === size.name ? "bg-gray-200" : ""
                    } `}
                    key={size.id}
                  >
                    <label
                      className={clsx("cursor-pointer px-3 py-2.5 ")}
                      htmlFor={`size-${size.id}`}
                    >
                      <input
                        style={{ display: "none" }}
                        type="checkbox"
                        name="price"
                        id={`size-${size.id}`}
                        onClick={() => setSizes(size.name)}
                        value={size.name}
                      />
                      {size.name}
                    </label>
                  </li>
                ))}
              </ul>
              {formErrors.size && (
                <p className="text-rose-400">{formErrors.size}</p>
              )}
            </div>

            <div className="h-full sm:w-1/4 xs:w-1/2  mb-4 rounded-sm border border-coolGray-200 gap-3 inline-flex items-center justify-between">
              <span>
                <i
                  onClick={handleCountDown}
                  className="fa-solid fa-minus py-2 px-2 border-x hover:bg-gray-200 cursor-pointer"
                ></i>
              </span>
              <p className="m-0 ">{count}</p>
              <span>
                <i
                  onClick={handleCountUp}
                  className="fa-solid fa-plus py-2 px-2 border-x hover:bg-gray-200 cursor-pointer"
                ></i>
              </span>
            </div>

            <button
              onClick={() => onAdd(productDetail, sizes)}
              className="block px-3 py-3 sm:w-1/2 xs:w-full rounded-sm text-center text-white text-sm font-medium bg-purple-500 hover:bg-purple-600 transition duration-200"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>

      <div className="xl:w-[1170px] lg:w-[960px] md:w-[720px] sm:w-[540px] xxs:w-[460px] xs:w-[300px] mx-auto overflow-hidden">
        <Slider {...similarProduct}>
          {similarProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductDetails;
