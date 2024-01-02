import React from "react";
import clsx from "clsx";
import styles from "./Sidebar.module.scss";

function Sidebar(props) {
  const {
    handleRadioChange,
    handleType,
    handleClearFilter,
    checkType,
    checkPrice,
    setSortPrice,
    sortPrice,
    filterProducts,
    setFilterProducts,
  } = props;

  const prices = [
    {
      id: 1,
      name: "Giá thấp đến cao",
    },
    {
      id: 2,
      name: "Giá cao đến thấp",
    },
  ];

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

  const sortPrices = [
    {
      id: 1,
      value: "0-500000",
      Content: "0 ₫ - 500.000 ₫",
    },
    {
      id: 2,
      value: "500000-1000000",
      Content: "500.000 ₫ - 1.000.000 ₫",
    },
    {
      id: 3,
      value: "1000000-5000000",
      Content: "1.000.000 ₫ - 5.000.000 ₫",
    },
    {
      id: 4,
      value: "5000000",
      Content: "5.000.000 ₫+",
    },
  ];

  return (
    <div className={clsx(styles.container, "lg:w-3/12 lg:px-5")}>
      <div className="lg:block xs:hidden">
        <div className={clsx(styles.container_item)}>
          <div className={clsx(styles.container_item__title)}>Sắp xếp</div>

          <div className={clsx(styles.container_item__content)}>
            <ul>
              {prices.map((price) => (
                <li key={price.id}>
                  <label htmlFor={`price-${price.id}`}>
                    <input
                      type="radio"
                      name="price"
                      id={`price-${price.id}`}
                      checked={sortPrice === price.name ? true : false}
                      value={price.name}
                      onChange={(e) => setSortPrice(e.target.value)}
                    />
                    &nbsp; {price.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={clsx(styles.container_item)}>
          <div className={clsx(styles.container_item__title)}>Thương hiệu</div>

          <div className={clsx(styles.container_item__content)}>
            <ul>
              {types.map((type) => (
                <li key={type.id}>
                  <label htmlFor={`type-${type.id}`}>
                    <input
                      id={`type-${type.id}`}
                      type="checkbox"
                      name="type"
                      checked={checkType.includes(type.name) ? true : false}
                      value={type.name}
                      onChange={(e) =>
                        handleType(e.target.value, e.target.checked)
                      }
                    />
                    &nbsp; {type.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={clsx(styles.container_item)}>
          <div className={clsx(styles.container_item__title)}>Giá sản phẩm</div>

          <div className={clsx(styles.container_item__content)}>
            <ul>
              {sortPrices.map((sortPrice) => (
                <li key={sortPrice.id}>
                  <label htmlFor={`sortPrice-${sortPrice.id}`}>
                    <input
                      type="radio"
                      name="sortPrice"
                      id={`sortPrice-${sortPrice.id}`}
                      value={sortPrice.value}
                      checked={checkPrice === sortPrice.value ? true : false}
                      onChange={(e) => handleRadioChange(e.target.value)}
                    />
                    &nbsp; {sortPrice.Content}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={clsx(styles.container_btn)}>
          <button onClick={() => handleClearFilter()}>Xóa tất cả</button>
        </div>
      </div>

      <div
        className={clsx(
          styles.menu,
          filterProducts ? styles.current : "",
          "fixed inset-0 z-40 flex w-76 lg:hidden"
        )}
      >
        <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
          <div className="flex px-4 pb-2 pt-3 justify-end">
            <i
              onClick={() => setFilterProducts(false)}
              className="fa-solid fa-xmark"
            ></i>
          </div>

          <div className="mt-2 px-6">
            <div className={clsx(styles.container_item)}>
              <div className={clsx(styles.container_item__title)}>Sắp xếp</div>

              <div className={clsx(styles.container_item__content)}>
                <ul>
                  {prices.map((price) => (
                    <li key={price.id}>
                      <label htmlFor={`price-${price.id}`}>
                        <input
                          type="radio"
                          name="price"
                          id={`price-${price.id}`}
                          value={price.name}
                          onChange={(e) => setSortPrice(e.target.value)}
                        />
                        &nbsp; {price.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={clsx(styles.container_item)}>
              <div className={clsx(styles.container_item__title)}>
                Thương hiệu
              </div>

              <div className={clsx(styles.container_item__content)}>
                <ul>
                  {types.map((type) => (
                    <li key={type.id}>
                      <label htmlFor={`type-${type.id}`}>
                        <input
                          id={`type-${type.id}`}
                          type="checkbox"
                          name="type"
                          checked={checkType.includes(type.name) ? true : false}
                          value={type.name}
                          onChange={(e) =>
                            handleType(e.target.value, e.target.checked)
                          }
                        />
                        &nbsp; {type.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={clsx(styles.container_item)}>
              <div className={clsx(styles.container_item__title)}>
                Giá sản phẩm
              </div>

              <div className={clsx(styles.container_item__content)}>
                <ul>
                  {sortPrices.map((sortPrice) => (
                    <li key={sortPrice.id}>
                      <label htmlFor={`sortPrice-${sortPrice.id}`}>
                        <input
                          type="radio"
                          name="sortPrice"
                          id={`sortPrice-${sortPrice.id}`}
                          value={sortPrice.value}
                          onChange={(e) => handleRadioChange(e.target.value)}
                        />
                        &nbsp; {sortPrice.Content}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={clsx(styles.container_btn)}>
              <button onClick={() => handleClearFilter()}>Xóa tất cả</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
