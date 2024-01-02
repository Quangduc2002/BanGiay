import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CheckOut(props) {
  const { cartItems } = props;
  const [payment, setPayment] = useState("");
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  let tongTien = 0;

  return (
    <div className="min-w-screen min-h-screen bg-gray-50 py-5">
      <div className=" lg:w-[1170px] lg:m-auto xs:px-5 lg:px-0 mb-4">
        <div className="mb-2">
          <NavLink
            to={"/Cart"}
            className="focus:outline-none hover:underline no-underline text-gray-500 text-sm"
          >
            <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
          </NavLink>
        </div>
        <div className="mb-2">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-600">
            Checkout.
          </h1>
        </div>
      </div>

      <div className="lg:w-[1170px] lg:m-auto lg:border lg:rounded-md w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div className="w-full">
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-7/12 lg:pr-10">
              {cartItems &&
                cartItems.map((cartItem) => {
                  tongTien += cartItem.total;
                  return (
                    <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                      <div className="w-full flex items-center">
                        <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                          <img
                            src={`https://raw.githubusercontent.com/Quangduc2002/BanGiay/main/src/assets/Image/${cartItem.images[0].avt}`}
                            alt=""
                          />
                        </div>
                        <div className="flex-grow pl-3">
                          <h6 className="font-semibold uppercase text-gray-600">
                            {cartItem.name}
                          </h6>
                          <p className="text-gray-400">x {cartItem.quantity}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-600 text-xl">
                            {VND.format(cartItem.total)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

              <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                <div className="w-full flex mb-3 items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Tổng tiền</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">
                      {VND.format(tongTien)}
                    </span>
                  </div>
                </div>
                <div className="w-full flex items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Phí vận chuyển</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold"> {VND.format(30000)}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                <div className="w-full flex items-center">
                  <div className="flex-grow">
                    <span className="text-gray-600">Tổng tiền đơn hàng</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">
                      {VND.format(tongTien + 30000)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3 md:w-5/12">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-3 items-center">
                  <div className="xxs:min-w-32 xs:min-w-[80px]">
                    <span className="text-gray-600 font-semibold">
                      Liên hệ:
                    </span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>Phạm Quang Đức</span>
                  </div>
                </div>

                <div className="w-full flex mb-3 items-center">
                  <div className=" xxs:min-w-32 xs:w-[80px]">
                    <span className="text-gray-600 font-semibold">
                      Số điện thoại:
                    </span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>0965420922</span>
                  </div>
                </div>

                <div className="w-full mb-3 flex items-center ">
                  <div className="xxs:min-w-32 xs:min-w-[80px]">
                    <span className="text-gray-600 font-semibold">
                      Địa chỉ:
                    </span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>Phú Xuyên-Hà Nội</span>
                  </div>
                </div>

                <div className="w-full flex mb-3 items-center flex-wrap">
                  <div className="w-full">
                    <span className="text-gray-600 font-semibold">
                      Phương thức thanh toán:
                    </span>
                  </div>

                  <select
                    onChange={(e) => setPayment(e.target.value)}
                    className="py-2 px-2 w-full mt-2.5 focus:ring focus:border-gray-300 outline-none block border border-gray-200 rounded-lg text-sm "
                  >
                    <option className="hidden">Phương thức thanh toán</option>
                    <option value="Thanh toán khi nhận hàng">
                      Thanh toán khi nhận hàng
                    </option>
                    <option value="Chuyển khoản ngân hàng">
                      Chuyển khoản ngân hàng
                    </option>
                  </select>
                </div>
              </div>

              {payment === "Chuyển khoản ngân hàng" && (
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full p-3 border-b border-gray-200">
                    <div className="mb-5"></div>
                    <div>
                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Tên thẻ
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="PHAM QUANG DUC"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Số thẻ
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="0000 0000 0000 0000"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-3">
                    <label
                      for="type2"
                      className="flex items-center cursor-pointer"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                        width="80"
                        alt=""
                        className="ml-3"
                      />
                    </label>
                  </div>
                </div>
              )}

              <div>
                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                  <i className="mdi mdi-lock-outline mr-1"></i>{" "}
                  {payment === "Chuyển khoản ngân hàng"
                    ? "Thanh toán ngay"
                    : "Mua ngay"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
