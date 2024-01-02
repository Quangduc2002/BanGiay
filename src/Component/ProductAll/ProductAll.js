import React, { useState, useRef } from "react";
import clsx from "clsx";
import { motion, spring } from "framer-motion";
import Pagination from "../Pagination/Pagination";
import styles from "./ProductAll.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Product from "../Product/Product";

function ProductAll(props) {
  const {
    indexOfLastProduct,
    indeOfFirstProduct,
    productPerPage,
    pagination,
    isActive,
    handleNext,
    handlePrevious,
    setProductPerPage,
    filterType,
    setProducts,
    setMinPrice,
    setMaxPrice,
    maxPrice,
    minPrice,
    checkType,
    setCheckType,
    setCheckPrice,
    checkPrice,
    setCheckSize,
    checkSize,
    setSortPrice,
    sortPrice,
    dataToInsert,
    searchQuery,
    setSearchQuery,
    filteredKeyEnterItems,
    handleKeyPress,
  } = props;
  const [filterProducts, setFilterProducts] = useState(false);
  const search = useRef();
  const handleFilterByRange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleRadioChange = (value) => {
    setCheckPrice(value);
    switch (value) {
      case "0-500000":
        handleFilterByRange(0, 500000);
        break;
      case "500000-1000000":
        handleFilterByRange(500000, 1000000);
        break;
      case "1000000-5000000":
        handleFilterByRange(1000000, 5000000);
        break;
      case "5000000":
        handleFilterByRange(5000000);
        break;
      default:
        handleFilterByRange("all");
    }
  };

  const handleType = (value, checked) => {
    if (checked) {
      setCheckType([...checkType, value]);
    } else {
      setCheckType(checkType.filter((type) => value !== type));
    }
  };

  const hanldeSize = (value, checked) => {
    if (checked) {
      setCheckSize([...checkSize, value]);
    } else {
      setCheckSize(checkSize.filter((size) => value !== size));
    }
  };

  const handleClearFilter = () => {
    setMaxPrice("");
    setMinPrice("");
    setCheckType("");
    setProductPerPage(6);
    setCheckPrice("");
    setCheckSize("");
    setSortPrice("");
  };

  const filteredProduct = (
    filteredKeyEnterItems.length > 0 ? filteredKeyEnterItems : dataToInsert
  )
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
        (checkType.length === 0 || checkType.includes(product.type))
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
    <div>
      <div className={clsx(styles.backgroud)}>
        <div className={clsx(styles.backgroud_img)}></div>
        <div className={clsx(styles.backgroud_title, "text-center")}>
          <h2 className="xs:text-3xl">Tất cả sản phẩm</h2>
          <div>
            <span>Trang chủ</span>
            &nbsp; <span>/</span> &nbsp;
            <span style={{ color: "rgb(238, 77, 45)" }}>Sản phẩm</span>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          styles.container,
          "xl:w-[1170px] lg:w-[960px]  mx-auto relative"
        )}
      >
        <Sidebar
          handleRadioChange={handleRadioChange}
          handleType={handleType}
          handleClearFilter={handleClearFilter}
          hanldeSize={hanldeSize}
          checkType={checkType}
          checkPrice={checkPrice}
          checkSize={checkSize}
          setSortPrice={setSortPrice}
          sortPrice={sortPrice}
          filterProducts={filterProducts}
          setFilterProducts={setFilterProducts}
        />
        <div
          className={clsx(
            "lg:w-9/12 md:w-[720px] sm:w-[540px] xxs:w-[460px] xs:w-[300px] mx-auto"
          )}
        >
          <div className="flex lg:mx-0 xs:mx-4 pb-2.5 mb-2.5 sm:overflow-auto xs:overflow-hidden xs:overflow-scroll xxs:justify-end xs:justify-normal">
            <div className="flex">
              <span className="sm:block  xs:hidden">Hiển thị: &nbsp;</span>
              <select
                style={{
                  padding: "2px 10px",
                  border: "1px solid #ccc",
                  outline: "none",
                  borderRadius: 4,
                }}
                defaultValue={productPerPage}
                onChange={(e) => setProductPerPage(e.target.value)}
              >
                <option value={dataToInsert.length}>ALL</option>
                <option value={"3"}>3</option>
                <option value={"6"}>6</option>
                <option value={"9"}>9</option>
              </select>
            </div>

            <div className="lg:ml-3 lg:mr-0 xs:mr-3 relative">
              <div className="relative">
                <input
                  value={searchQuery}
                  ref={search}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm"
                  onKeyDown={handleKeyPress}
                  type="text"
                  className="relative m-0 rounded-r -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding py-[0.25rem] pl-3 pr-12 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                />
                <i className="fa-solid fa-magnifying-glass absolute px-3 py-[0.25rem] right-0 top-2/4 -translate-y-2/4 h-full flex items-center bg-[#3b71ca] rounded-r text-white hover:bg-[#285192] cursor-pointer"></i>
              </div>
            </div>

            <div className="lg:hidden xs:block text-xl  ">
              <i
                onClick={() => setFilterProducts(true)}
                className="fa-solid fa-filter"
              ></i>
            </div>

            {searchQuery.length !== 0 && (
              <ul
                className={clsx(
                  "absolute z-10 text-left shadow-gray-100 border rounded-md bg-white top-10 px-3 py-2.5 w-[346px]",
                  searchQuery.length === 0 ? styles.wrapper2_active : ""
                )}
              >
                {dataToInsert.map((product, index) => (
                  <li
                    className="px-3 py-1.5 hover:bg-neutral-200 cursor-pointer rounded-md"
                    key={index}
                    onClick={() => {
                      setSearchQuery(product.name);
                      search.current.focus();
                    }}
                  >
                    <div>
                      <i
                        style={{
                          marginRight: 16,
                          color: "#555",
                          fontSize: "14px",
                        }}
                        className="fa-solid fa-magnifying-glass"
                      ></i>
                      {product.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

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
                  "grid lg:grid-cols-3 sm:grid-cols-3 xxs:grid-cols-2 xs:grid-cols-1"
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
                      minPrice={minPrice}
                      maxPrice={maxPrice}
                      checkType={checkType}
                      setProducts={setProducts}
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
                totalProduct={
                  filteredKeyEnterItems.length > 0
                    ? filteredKeyEnterItems.length
                    : filteredProduct.length
                }
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

      {filterProducts && (
        <div
          onClick={() => setFilterProducts(false)}
          className={clsx(styles.model, "lg:invisible")}
        />
      )}
    </div>
  );
}

export default ProductAll;
