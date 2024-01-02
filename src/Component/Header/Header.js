import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Header.module.scss";
import logo from "../../assets/Image/Logo.png";
import path from "../Ultis/Path";
import "./Header.css";

function Header(props) {
  const {
    setProductPerPage,
    setFilterType,
    setCurrentPage,
    setIsActive,
    cartItems,
  } = props;
  const [scrollY, setScrollY] = useState("");
  const [menu, setMenu] = useState(false);

  const types = [
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

  const pathHome = () => {
    setProductPerPage(8);
    setCurrentPage(1);
    setIsActive(1);
    setFilterType("ALL");
    setMenu(false);
  };

  const pathProduct = () => {
    setProductPerPage(6);
    setCurrentPage(1);
    setIsActive(1);
    setFilterType("ALL");
    setMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    //cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        styles.middle,
        scrollY >= 50 ? styles.active : "",
        "lg:flex lg:justify-center"
      )}
    >
      <div
        className={clsx(
          styles.middle_container,
          "d-flex align-items-center lg:w-[1170px!important]  xs:w-auto xs:mx-10"
        )}
      >
        <div className={clsx(styles.middle_logo)}>
          <img src={logo} alt="" />
        </div>

        <div className={clsx(styles.middle_menu, "lg:block xs:hidden")}>
          <ul className="d-flex">
            <li>
              <NavLink
                className={clsx(styles.middle_menu__link)}
                to={path.Products}
                onClick={() => pathHome()}
              >
                Trang chủ
              </NavLink>
            </li>

            <li>
              <NavLink
                className={clsx(styles.middle_menu__link)}
                to={"/gioithieu"}
              >
                Giới thiệu
              </NavLink>
            </li>
            <li
              className={clsx(
                styles.middle_menu__product,
                styles.middle_menu__linkHover
              )}
            >
              <NavLink
                className={clsx(styles.middle_menu__link)}
                to={path.ProductAll}
                onClick={() => pathProduct()}
              >
                <span>Sản phẩm</span>
                <i
                  style={{ margin: "0px 6px " }}
                  className="fa-sharp fa-solid fa-chevron-down"
                ></i>
              </NavLink>
              <ul
                style={{ marginTop: 10 }}
                className={clsx(
                  styles.middle_menu__product__item,
                  styles.middle_menu__linkHover__item
                )}
              >
                {types.map((type) => (
                  <li key={type.id}>{type.name}</li>
                ))}
              </ul>
            </li>
            <li>
              <NavLink
                className={clsx(styles.middle_menu__link)}
                to={"/tintuc"}
              >
                Tin tức
              </NavLink>
            </li>
            <li>
              <NavLink
                className={clsx(styles.middle_menu__link)}
                to={"/lienhe"}
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={clsx(styles.middle_right)}>
          <ul className="d-flex">
            <li>
              <NavLink
                className={clsx(styles.middle_menu__link)}
                to={path.Login}
              >
                <i className="fa-solid fa-user"></i>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                className={clsx(styles.middle_menu__link)}
                to={path.Cart}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
              <span className="text-white absolute bg-[#ee4d2d] text-xs px-1.5 -top-1.5 -right-2.5 rounded-full">
                {cartItems.length}
              </span>
            </li>
            <li>
              <i
                onClick={() => setMenu(true)}
                className="fa-solid fa-bars  lg:hidden text-white"
              ></i>
            </li>
          </ul>
        </div>

        <div
          className={clsx(
            styles.menu,
            menu ? styles.current : "",
            "fixed inset-0 z-40 flex w-60 lg:hidden"
          )}
        >
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5 justify-end">
              <i
                onClick={() => setMenu(false)}
                className="fa-solid fa-xmark"
              ></i>
            </div>

            <div className="mt-2">
              <ul>
                <li className="py-2">
                  <NavLink
                    className={clsx(styles.middle_menu__link, "text-black")}
                    to={path.Products}
                    onClick={() => pathHome()}
                  >
                    Trang chủ
                  </NavLink>
                </li>

                <li className="py-2">
                  <NavLink
                    className={clsx(styles.middle_menu__link, "text-black")}
                    to={"/gioithieu"}
                    onClick={() => setMenu(false)}
                  >
                    Giới thiệu
                  </NavLink>
                </li>
                <li className={clsx("py-2")}>
                  <NavLink
                    className={clsx(styles.middle_menu__link, "text-black")}
                    to={path.ProductAll}
                    onClick={() => pathProduct()}
                  >
                    <span>Sản phẩm</span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    className={clsx(styles.middle_menu__link, "text-black")}
                    to={"/tintuc"}
                    onClick={() => setMenu(false)}
                  >
                    Tin tức
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    className={clsx(styles.middle_menu__link, "text-black")}
                    to={"/lienhe"}
                    onClick={() => setMenu(false)}
                  >
                    Liên hệ
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {menu && (
          <div
            onClick={() => {
              setMenu(false);
            }}
            className={clsx(styles.model, "lg:invisible")}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
