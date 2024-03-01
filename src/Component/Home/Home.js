import React from "react";
import clsx from "clsx";
import { motion, spring } from "framer-motion";
import Slider from "react-slick";
import styles from "./Home.module.scss";
import "./Home.css";
import slide from "../../assets/Image/slider_1.webp";
import Product from "../Product/Product";
import IconTop from "../IconTop/IconTop";
import deliver from "../../assets/Image/deliver.svg";
import phone from "../../assets/Image/phone.svg";
import present from "../../assets/Image/present.svg";
import change from "../../assets/Image/change.svg";
import Pagination from "../Pagination/Pagination";
import SliderProduct from "../SliderProduct/SliderProduct";
import Accessory from "../Accessory/Accessory";

function Home(props) {
  const {
    indexOfLastProduct,
    indeOfFirstProduct,
    productPerPage,
    pagination,
    isActive,
    handleNext,
    handlePrevious,
    setFilterType,
    filterType,
    setProducts,
    maxPrice,
    minPrice,
    checkType,
    checkSize,
    sortPrice,
    dataToInsert,
  } = props;

  const types = [
    {
      id: 0,
      name: "ALL",
    },
    {
      id: 1,
      name: "Jordan",
    },
    {
      id: 2,
      name: "Nike",
    },
    {
      id: 3,
      name: "Converse",
    },
    {
      id: 4,
      name: "Vans",
    },
    {
      id: 5,
      name: "MLB",
    },
  ];

  const titles = [
    {
      id: 1,
      image: deliver,
      title1: "Giao hàng toàn quốc",
      title2: " Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ",
    },
    {
      id: 2,
      image: phone,
      title1: "Hỗ trợ online 24/24",
      title2: " Luôn hỗ trợ khách hàng 24/24 tất cả các ngày trong tuần",
    },
    {
      id: 3,
      image: change,
      title1: "Đỗi hàng dễ dàng",
      title2:
        " Miễn phí đổi trả trong vòng 30 ngày đầu tiên cho tất cả các mặt hàng",
    },
    {
      id: 4,
      image: present,
      title1: "Quà tặng hấp dẫn",
      title2: " Chương trình khuyễn mãi cực lớn và hấp dẫn hàng tháng",
    },
  ];

  const settings = {
    // dots: true,
    speed: 1000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: (
      <button className="slick-arrow slick-prev">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    ),
    nextArrow: (
      <button className="slick-arrow slick-next">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    ),
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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };

  const filteredProduct = dataToInsert
    .filter(
      (product) =>
        (filterType === "" || filterType === "ALL"
          ? product
          : filterType === product.type
          ? product
          : "") &&
        (maxPrice
          ? (minPrice === "" ||
              product.price - (product.price * product.discount) / 100 >=
                minPrice) &&
            (maxPrice === "" ||
              product.price - (product.price * product.discount) / 100 <
                maxPrice)
          : minPrice === "" ||
            product.price - (product.price * product.discount) / 100 >=
              minPrice) &&
        (checkType.length === 0 || checkType.includes(product.type)) &&
        (checkSize.length === 0 || checkSize.includes(product.size.name))
    )
    .sort((a, b) => {
      const discountedPriceA = a.price - (a.price * a.discount) / 100;
      const discountedPriceB = b.price - (b.price * b.discount) / 100;
      if (sortPrice === "Giá thấp đến cao") {
        return discountedPriceA - discountedPriceB;
      } else if (sortPrice === "Giá cao đến thấp") {
        return discountedPriceB - discountedPriceA;
      } else {
        return "";
      }
    });

  const homeProducts = filteredProduct.slice(
    indeOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className={clsx(styles.home)}>
      <div className={clsx(styles.service, "lg:mb-[200px] xs:mb-[280px]")}>
        <img style={{ maxWidth: "100%" }} src={slide} alt="" />
        <div
          className={clsx(
            styles.service_container,
            "xl:w-[1300px] lg:bottom-[-26%] "
          )}
        >
          <Slider {...settings}>
            {titles.map((item) => {
              return (
                <div
                  key={item.id}
                  className={clsx(styles.service_container__wrapper)}
                >
                  <div className="flex justify-center">
                    <img src={item.image} alt="" />
                  </div>
                  <div
                    className={clsx(
                      styles.service_container__info,
                      "text-center"
                    )}
                  >
                    <h3 className="lg:text-base xs:text-xs my-2.5">
                      {item.title1}
                    </h3>
                    <p className="lg:text-base xs:text-xs xs:mb-0">
                      {item.title2}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div
        className="xl:w-[1170px] lg:w-[960px] md:w-[720px] sm:w-[540px] xxs:w-[460px] xs:w-[300px] border-b-2 mx-auto overflow-hidden"
        data-aos="fade-up"
      >
        <div
          className={clsx(
            styles.product,
            "xl:w-[1170px] lg:w-[960px] md:w-[720px] sm:w-[540px] xxs:w-[460px] xs:w-[300px] mx-auto"
          )}
          data-aos="fade-up"
        >
          <h2 className="lg:text-4xl py-2 hover:text-orange-500 cursor-pointer uppercase md:text-3xl xxs:text-2xl xs:text-xl text-center">
            Sản phẩm bán chạy
          </h2>
          <p
            className="lg:text-2xl xxs:text-xl xs:text-base text-center"
            style={{ color: "#616161" }}
          >
            Các sản phẩm có tại cửa hàng
          </p>
        </div>

        <SliderProduct dataToInsert={dataToInsert} />
      </div>

      <div className="mt-10" data-aos="fade-up">
        <div
          className={clsx(
            styles.product,
            "xl:w-[1170px] lg:w-[960px] md:w-[720px] sm:w-[540px] xxs:w-[460px] xs:w-[300px] mx-auto"
          )}
          data-aos="fade-up"
        >
          <h2 className="lg:text-4xl hover:text-orange-500 cursor-pointer uppercase md:text-3xl xxs:text-2xl xs:text-xl text-center">
            giày thể thao
          </h2>
          <p
            className="lg:text-2xl xxs:text-xl xs:text-base text-center"
            style={{ color: "#616161" }}
          >
            Các sản phẩm có tại cửa hàng
          </p>

          <ul
            className={clsx(
              styles.product_ul,
              "d-flex mx-8 pb-2.5 pl-0 md:justify-center sm:overflow-auto xs:overflow-hidden xs:overflow-scroll "
            )}
            style={{ marginTop: 10 }}
          >
            {types.map((type) => {
              return (
                <li
                  key={type.id}
                  className={clsx(
                    styles.product_li,
                    filterType === type.name ? styles.active : ""
                  )}
                >
                  <label
                    className=" md:text-xl xs:text-lg"
                    style={{ cursor: "pointer" }}
                    htmlFor={`type-${type.id}`}
                  >
                    <input
                      style={{ display: "none" }}
                      id={`type-${type.id}`}
                      type="radio"
                      name="type"
                      value={type.name}
                      onChange={(e) => setFilterType(e.target.value)}
                    />
                    {type.name}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className={clsx(
            styles.Product,
            "xl:w-[1170px] lg:w-[960px] md:w-[720px] sm:w-[540px] xxs:w-[460px] xs:w-[300px] mx-auto  "
          )}
        >
          <motion.div
            initial={{ y: "4rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: spring,
            }}
          >
            {homeProducts.length > 0 ? (
              <div
                className={clsx(
                  styles.productWrapper,
                  "grid lg:grid-cols-4 sm:grid-cols-3 xxs:grid-cols-2 xs:grid-cols-1"
                )}
              >
                {homeProducts.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      indexOfLastProduct={indexOfLastProduct}
                      indeOfFirstProduct={indeOfFirstProduct}
                      filterType={filterType}
                      productPerPage={productPerPage}
                      pagination={pagination}
                      isActive={isActive}
                      handleNext={handleNext}
                      handlePrevious={handlePrevious}
                      setProducts={setProducts}
                      minPrice={minPrice}
                      maxPrice={maxPrice}
                      checkType={checkType}
                      checkSize={checkSize}
                      sortPrice={sortPrice}
                      dataToInsert={dataToInsert}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="py-3 rounded-md text-red-500 font-semibold bg-orange-200 text-center">
                Không có sản phẩm nào trong danh mục này
              </div>
            )}

            {homeProducts.length > 0 ? (
              <Pagination
                productPerPage={productPerPage}
                totalProduct={filteredProduct.length}
                pagination={pagination}
                isActive={isActive}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
              />
            ) : (
              ""
            )}
          </motion.div>
        </div>
      </div>

      <Accessory />
      <IconTop />
    </div>
  );
}

export default Home;
