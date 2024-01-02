import React from "react";
import clsx from "clsx";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
function Product(props) {
  const { product } = props;

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div
      key={product.id}
      className={clsx(
        styles.productWrapper_item,
        "xl:w-[270px] lg:w-[218px] md:w-[218px] sm:w-[156px] xxs:w-[200px]  mx-[11px]"
      )}
    >
      <div className={clsx(styles.productWrapper_item__img, "imageHover")}>
        {product.discount > 0 ? (
          <span
            className={clsx(
              styles.productWrapper_item__discount,
              "text-center"
            )}
          >
            {`-${product.discount}%`}
          </span>
        ) : (
          ""
        )}
        <img
          src={`http://localhost:3000/image/${product.images[0].avt}`}
          alt=""
          className="bg-[#cbcbcb] xl:w-[270px] xl:h-[270px] lg:w-[218px] lg:h-[218px] md:w-[218px] md:h-[218px] sm:w-[156px] sm:h-[156px] xxs:w-[200px] xxs:h-[200px] xs:w-[150px] xs:h-[150px]  "
        />
        <div
          className={clsx(
            styles.productWrapper_item__productDetail,
            "productDetail flex justify-center "
          )}
        >
          <Link
            to={`/Chitietsanpham/${product.id}`}
            className={clsx(
              styles.productWrapper_item__productDetail__link,
              "lg:text-base xs:text-xs"
            )}
          >
            Chi tiết sản phẩm
          </Link>
        </div>
      </div>
      <div className={clsx(styles.productWrapper_item__info)}>
        <h3 title={product.name}>{product.name}</h3>
        <p className={clsx(styles.productWrapper_item__info__type)}>
          {product.type}
        </p>

        <p className={clsx(styles.productWrapper_item__info__price)}>
          {VND.format(product.price - (product.price * product.discount) / 100)}
        </p>

        {product.discount ? (
          <p className={clsx(styles.productWrapper_item__info__priceSale)}>
            {VND.format(product.price)}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Product;
