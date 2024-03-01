import React from "react";
import clsx from "clsx";
import styles from "../Home/Home.module.scss";
import image1 from "../../assets/Image/acces_1.webp";
import image2 from "../../assets/Image/acces_2.webp";
import image3 from "../../assets/Image/acces_3.webp";

function Accessory(props) {
  return (
    <div className="mb-10">
      <div className="xl:w-[1170px] lg:w-[960px] md:w-[720px] sm:w-[540px] xxs:w-[460px] xs:w-[300px] mx-auto overflow-hidden">
        <div
          className={clsx(
            "xl:w-[1170px] lg:w-[960px] md:w-[720px] sm:w-[540px] xxs:w-[460px] xs:w-[300px] mx-auto"
          )}
          data-aos="fade-up"
        >
          <h2
            className={clsx(
              styles.title,
              "lg:text-4xl relative py-2 text-[#3f3fdb]  cursor-pointer uppercase md:text-3xl xxs:text-2xl xs:text-xl text-center"
            )}
          >
            <span className={clsx(styles.title_Accessory, "relative")}>
              phụ kiện
            </span>
          </h2>
          <p
            className="lg:text-2xl xxs:text-xl xs:text-base text-center"
            style={{ color: "#616161" }}
          >
            Các sản phẩm có tại cửa hàng
          </p>
        </div>

        <div className="md:flex gap-6 ">
          <div
            className={clsx(styles.image, " relative  md:mb-0 xs:mb-6")}
            data-aos="fade-right"
          >
            <img className={clsx("h-full")} src={image1} alt="" />
            <div className="absolute bottom-8 left-8 text-white z-2">
              <h3 className="hover:text-orange-500 cursor-pointer">
                Khóa giày
              </h3>
              <div className="hover:text-orange-500 cursor-pointer w-max">
                <span>Xem thêm</span>&nbsp;&nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className={clsx(styles.image, "relative mb-6")}>
              <img src={image2} alt="" />
              <div className="absolute bottom-8 left-8 text-white z-2">
                <h3 className="hover:text-orange-500 cursor-pointer">
                  Tất giày
                </h3>
                <div className="w-max hover:text-orange-500 cursor-pointer">
                  <span>Xem thêm</span>&nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className={clsx(styles.image, "relative")}>
              <img src={image3} alt="" />
              <div className="absolute bottom-8 left-8 text-white z-2">
                <h3 className="hover:text-orange-500 cursor-pointer ">
                  Dây giày
                </h3>
                <div className="w-max hover:text-orange-500 cursor-pointer">
                  <span>Xem thêm</span>&nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessory;
