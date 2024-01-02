import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import ProductAll from "./Component/ProductAll/ProductAll";
import path from "./Component/Ultis/Path";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import Cart from "./Component/Cart/Cart";
import CheckOut from "./Component/CheckOut/CheckOut";

function Layout() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(12);
  const [cartItems, setCartItems] = useState([]);
  const [isActive, setIsActive] = useState(1);
  const [filterType, setFilterType] = useState("ALL");
  const [sortPrice, setSortPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [checkPrice, setCheckPrice] = useState("");
  const [checkType, setCheckType] = useState([]);
  const [checkSize, setCheckSize] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sizes, setSizes] = useState();
  const [filteredKeyEnterItems, setFilteredKeyEnterItems] = useState([]);
  const [count, setCount] = useState(1);

  const dataToInsert = [
    {
      id: 1,
      name: "Nike Air Force 1 07",
      images: [
        {
          id: 1,
          avt: "air-force-1-07-shoes.png",
        },
        {
          id: 2,
          avt: "air-force-1-07-shoes-1.png",
        },
        {
          id: 3,
          avt: "air-force-1-07-shoes-2.png",
        },
        {
          id: 4,
          avt: "air-force-1-07-shoes-3.png",
        },
        {
          id: 5,
          avt: "air-force-1-07-shoes-4.png",
        },
      ],
      type: "Jordan",
      size: [
        {
          id: 1,
          name: 37,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1500000",
      discount: 10,
    },

    {
      id: 2,
      name: "air jordan low pwgRgs",
      images: [
        {
          id: 1,
          avt: "air-jordan-1-low-se-older-shoes-pwgRgs.png",
        },
        {
          id: 2,
          avt: "air-jordan-1-low-se-older-shoes-pwgRgs-1.png",
        },
        {
          id: 3,
          avt: "air-jordan-1-low-se-older-shoes-pwgRgs-2.png",
        },
        {
          id: 4,
          avt: "air-jordan-1-low-se-older-shoes-pwgRgs-3.png",
        },
        {
          id: 5,
          avt: "air-jordan-1-low-se-older-shoes-pwgRgs-4.png",
        },
      ],

      type: "Jordan",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1200000",
      discount: 0,
    },

    {
      id: 3,
      name: "air jordan mid",
      images: [
        {
          id: 1,
          avt: "air-jordan-1-mid-se-craft-shoes-X.png",
        },
        {
          id: 2,
          avt: "air-jordan-1-mid-se-craft-shoes-X-1.png",
        },
        {
          id: 3,
          avt: "air-jordan-1-mid-se-craft-shoes-X-2.png",
        },
        {
          id: 4,
          avt: "air-jordan-1-mid-se-craft-shoes-X-3.png",
        },
        {
          id: 5,
          avt: "air-jordan-1-mid-se-craft-shoes-X-4.png",
        },
      ],

      type: "Jordan",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1500000",
      discount: 0,
    },

    {
      id: 4,
      name: "dunk-low-retro-shoes-X",
      images: [
        {
          id: 1,
          avt: "dunk-low-retro-shoes-X.png",
        },
        {
          id: 2,
          avt: "dunk-low-retro-shoes-X-1.png",
        },
        {
          id: 3,
          avt: "dunk-low-retro-shoes-X-2.png",
        },
        {
          id: 4,
          avt: "dunk-low-retro-shoes-X-3.png",
        },
        {
          id: 5,
          avt: "dunk-low-retro-shoes-X-4.png",
        },
      ],
      type: "Nike",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1500000",
      discount: 5,
    },

    {
      id: 5,
      name: "revolution-6-road-running-shoes-X",
      images: [
        {
          id: 1,
          avt: "revolution-6-road-running-shoes-X.png",
        },
        {
          id: 2,
          avt: "revolution-6-road-running-shoes-X-1.png",
        },
        {
          id: 3,
          avt: "revolution-6-road-running-shoes-X-2.png",
        },
        {
          id: 4,
          avt: "revolution-6-road-running-shoes-X-3.png",
        },
        {
          id: 5,
          avt: "revolution-6-road-running-shoes-X-4.png",
        },
      ],

      type: "Nike",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1500000",
      discount: 10,
    },

    {
      id: 6,
      name: "tech-hera-shoes",
      images: [
        {
          id: 1,
          avt: "tech-hera-shoes.png",
        },
        {
          id: 2,
          avt: "tech-hera-shoes-1.png",
        },
        {
          id: 3,
          avt: "tech-hera-shoes-2.png",
        },
        {
          id: 4,
          avt: "tech-hera-shoes-3.png",
        },
        {
          id: 5,
          avt: "tech-hera-shoes-4.png",
        },
      ],

      type: "Nike",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1500000",
      discount: 10,
    },

    {
      id: 7,
      name: "tech-hera-shoes-X",
      images: [
        {
          id: 1,
          avt: "tech-hera-shoes-X.png",
        },
        {
          id: 2,
          avt: "tech-hera-shoes-X-1.png",
        },
        {
          id: 3,
          avt: "tech-hera-shoes-X-2.png",
        },
        {
          id: 4,
          avt: "tech-hera-shoes-X-3.png",
        },
        {
          id: 5,
          avt: "tech-hera-shoes-X-4.png",
        },
      ],
      type: "Nike",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1500000",
      discount: 10,
    },

    {
      id: 8,
      name: "pegasus-40-road",
      images: [
        {
          id: 1,
          avt: "pegasus-40-road-running-shoes-0Z9lqN.png",
        },
        {
          id: 2,
          avt: "pegasus-40-road-running-shoes-0Z9lqN-1.png",
        },
        {
          id: 3,
          avt: "pegasus-40-road-running-shoes-0Z9lqN-2.png",
        },
        {
          id: 4,
          avt: "pegasus-40-road-running-shoes-0Z9lqN-3.png",
        },
        {
          id: 5,
          avt: "pegasus-40-road-running-shoes-0Z9lqN-4.png",
        },
      ],
      type: "Nike",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1500000",
      discount: 10,
    },

    {
      id: 9,
      name: "impact-4-basketball-shoes-X",
      images: [
        {
          id: 1,
          avt: "impact-4-basketball-shoes-X.png",
        },
        {
          id: 2,
          avt: "impact-4-basketball-shoes-X-1.png",
        },
        {
          id: 3,
          avt: "impact-4-basketball-shoes-X-2.png",
        },
        {
          id: 4,
          avt: "impact-4-basketball-shoes-X-3.png",
        },
        {
          id: 5,
          avt: "impact-4-basketball-shoes-X-4.png",
        },
      ],
      type: "Nike",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1500000",
      discount: 10,
    },

    {
      id: 10,
      name: "air-jordan-1-mid-se-shoes-X",
      images: [
        {
          id: 1,
          avt: "air-jordan-1-mid-se-shoes-X.png",
        },
        {
          id: 2,
          avt: "air-jordan-1-mid-se-shoes-X-1.png",
        },
        {
          id: 3,
          avt: "air-jordan-1-mid-se-shoes-X-2.png",
        },
        {
          id: 4,
          avt: "air-jordan-1-mid-se-shoes-X-3.png",
        },
        {
          id: 5,
          avt: "air-jordan-1-mid-se-shoes-X-4.png",
        },
      ],
      type: "Jordan",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1500000",
      discount: 10,
    },

    {
      id: 11,
      name: "impact-4-basketball-shoes-X",
      images: [
        {
          id: 1,
          avt: "impact-4-basketball-shoes-X.png",
        },
        {
          id: 2,
          avt: "impact-4-basketball-shoes-X-1.png",
        },
        {
          id: 3,
          avt: "impact-4-basketball-shoes-X-2.png",
        },
        {
          id: 4,
          avt: "impact-4-basketball-shoes-X-3.png",
        },
        {
          id: 5,
          avt: "impact-4-basketball-shoes-X-4.png",
        },
      ],
      type: "Nike",
      size: [
        {
          id: 1,
          name: 37,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1000000",
      discount: 10,
    },

    {
      id: 12,
      name: "air-jordan-1-mid-se-shoes-X",
      images: [
        {
          id: 1,
          avt: "air-jordan-1-mid-se-shoes-X.png",
        },
        {
          id: 2,
          avt: "air-jordan-1-mid-se-shoes-X-1.png",
        },
        {
          id: 3,
          avt: "air-jordan-1-mid-se-shoes-X-2.png",
        },
        {
          id: 4,
          avt: "air-jordan-1-mid-se-shoes-X-3.png",
        },
        {
          id: 5,
          avt: "air-jordan-1-mid-se-shoes-X-4.png",
        },
      ],
      type: "Jordan",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 43,
        },
      ],
      price: "1200000",
      discount: 10,
    },

    {
      id: 13,
      name: "tech-hera-shoes-X",
      images: [
        {
          id: 1,
          avt: "tech-hera-shoes-X.png",
        },
        {
          id: 2,
          avt: "tech-hera-shoes-X-1.png",
        },
        {
          id: 3,
          avt: "tech-hera-shoes-X-2.png",
        },
        {
          id: 4,
          avt: "tech-hera-shoes-X-3.png",
        },
        {
          id: 5,
          avt: "tech-hera-shoes-X-4.png",
        },
      ],
      type: "Nike",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1500000",
      discount: 10,
    },

    {
      id: 14,
      name: "pegasus-40-road",
      images: [
        {
          id: 1,
          avt: "pegasus-40-road-running-shoes-0Z9lqN.png",
        },
        {
          id: 2,
          avt: "pegasus-40-road-running-shoes-0Z9lqN-1.png",
        },
        {
          id: 3,
          avt: "pegasus-40-road-running-shoes-0Z9lqN-2.png",
        },
        {
          id: 4,
          avt: "pegasus-40-road-running-shoes-0Z9lqN-3.png",
        },
        {
          id: 5,
          avt: "pegasus-40-road-running-shoes-0Z9lqN-4.png",
        },
      ],
      type: "Nike",
      size: [
        {
          id: 1,
          name: 38,
        },
        {
          id: 2,
          name: 39,
        },
        {
          id: 3,
          name: 40,
        },
        {
          id: 4,
          name: 41,
        },
        {
          id: 5,
          name: 42,
        },
      ],
      price: "1250000",
      discount: 10,
    },
  ];

  const validateProductDetail = () => {
    let errors = {};
    let isValid = true;
    if (!sizes) {
      errors.size = "Vui lòng chọn Phân loại hàng !";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const onAdd = (product, size) => {
    // if (product.soLuong === 0) {
    //     toast.error('Sản phẩm đã hết hàng !');
    // } else {
    if (validateProductDetail()) {
      const exist = cartItems.find((cartItem) => {
        return cartItem.id === product.id && size === cartItem.size;
      });

      if (exist) {
        setCartItems(
          cartItems.map((cartItem) => {
            return cartItem.id === product.id && size === cartItem.size
              ? {
                  ...exist,
                  quantity: count + cartItem.quantity,
                  total:
                    (count + cartItem.quantity) *
                    (cartItem.price -
                      (cartItem.price * cartItem.discount) / 100),
                  size: sizes,
                }
              : cartItem;
          })
        );
        toast.success("Thêm sản phẩm thành công !");
      } else {
        setCartItems([
          ...cartItems,
          {
            ...product,
            quantity: count,
            total:
              count *
              (product.price - (product.price * product.discount) / 100),
            size: sizes,
          },
        ]);
        toast.success("Thêm sản phẩm thành công !");
      }
      setCount(1);
      setSizes("");
    }
  };

  const onDelete = (product) => {
    setCartItems(
      cartItems.filter((cartItem) => {
        return cartItem.id !== product.id || cartItem.size !== product.size;
      })
    );
    toast.success("Xóa sản phẩm thành công !");
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    // check active color
    setIsActive(pageNumber);
  };

  const handleNext = () => {
    setIsActive(isActive + 1);
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setIsActive(isActive - 1);
    setCurrentPage(currentPage - 1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setFilteredKeyEnterItems(
        dataToInsert.filter((item) => {
          return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        })
      );
    }
  };

  // Paginaion
  // chỉ mục cuối sản phẩm
  const indexOfLastProduct = currentPage * productPerPage;
  // chỉ mục đầu tiên sản phẩm
  const indeOfFirstProduct = indexOfLastProduct - productPerPage;
  return (
    <div className="App">
      <Header
        setProductPerPage={setProductPerPage}
        setFilterType={setFilterType}
        setCurrentPage={setCurrentPage}
        setIsActive={setIsActive}
        cartItems={cartItems}
      />

      <Routes>
        <Route
          path={path.Products}
          element={
            <Home
              onAdd={onAdd}
              indexOfLastProduct={indexOfLastProduct}
              indeOfFirstProduct={indeOfFirstProduct}
              productPerPage={productPerPage}
              pagination={pagination}
              isActive={isActive}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              setProductPerPage={setProductPerPage}
              setFilterType={setFilterType}
              filterType={filterType}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              maxPrice={maxPrice}
              minPrice={minPrice}
              checkType={checkType}
              setCheckType={setCheckType}
              setCheckSize={setCheckSize}
              checkSize={checkSize}
              setSortPrice={setSortPrice}
              sortPrice={sortPrice}
              dataToInsert={dataToInsert}
            />
          }
        />

        <Route
          path={path.ProductAll}
          element={
            <ProductAll
              onAdd={onAdd}
              indexOfLastProduct={indexOfLastProduct}
              indeOfFirstProduct={indeOfFirstProduct}
              productPerPage={productPerPage}
              pagination={pagination}
              isActive={isActive}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              setProductPerPage={setProductPerPage}
              setFilterType={setFilterType}
              filterType={filterType}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              maxPrice={maxPrice}
              minPrice={minPrice}
              checkType={checkType}
              setCheckType={setCheckType}
              setCheckPrice={setCheckPrice}
              checkPrice={checkPrice}
              setCheckSize={setCheckSize}
              checkSize={checkSize}
              setSortPrice={setSortPrice}
              sortPrice={sortPrice}
              dataToInsert={dataToInsert}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleKeyPress={handleKeyPress}
              filteredKeyEnterItems={filteredKeyEnterItems}
            />
          }
        />

        <Route
          path={path.ProductDetails}
          element={
            <ProductDetails
              dataToInsert={dataToInsert}
              count={count}
              onAdd={onAdd}
              setCount={setCount}
              sizes={sizes}
              setSizes={setSizes}
              formErrors={formErrors}
            />
          }
        />

        <Route
          path={path.Cart}
          element={<Cart onDelete={onDelete} cartItems={cartItems} />}
        />

        <Route
          path={path.CheckOut}
          element={<CheckOut cartItems={cartItems} />}
        />
      </Routes>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        // pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Layout;
