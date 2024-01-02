import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import imgLogin from "../../assets/Image/imgLogin.avif";
import path from "../Ultis/Path";

function Login(props) {
  const [account, setAccount] = useState(false);
  return (
    <div className="bg-blue-400 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 h-[500px]">
          {!account && (
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">Chào bạn :)</h1>
                <div className="w-full mt-4">
                  <div className="form-horizontal w-3/4 mx-auto">
                    <div className="flex flex-col mt-4">
                      <input
                        id="email"
                        type="text"
                        className="flex-grow h-8 px-2 border rounded border-grey-400"
                        name="email"
                        value=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <input
                        id="password"
                        type="password"
                        className="flex-grow h-8 px-2 rounded border border-grey-400"
                        name="password"
                        required
                        placeholder="Password"
                      />
                    </div>

                    <div className="flex flex-col my-4">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      >
                        Đăng nhập
                      </button>
                    </div>

                    <div className="flex flex-row justify-between my-4">
                      <button
                        onClick={() => setAccount(true)}
                        className="bg-blue-500 w-50 mr-2 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      >
                        Đăng kí
                      </button>

                      <button className="bg-blue-500 w-50 ml-2 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                        <NavLink
                          to={path.Products}
                          className="text-white no-underline"
                        >
                          Trở lại
                        </NavLink>
                      </button>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="no-underline hover:underline text-blue-dark text-md">
                      Quên mật khẩu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {account && (
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">Chào bạn :)</h1>
                <div className="w-full mt-4">
                  <div className="form-horizontal w-3/4 mx-auto">
                    <div className="flex flex-row mt-4">
                      <input
                        id="surName"
                        type="text"
                        className="flex-grow h-8 px-2 w-50 mr-2 border rounded border-grey-400"
                        name="hoTen"
                        value=""
                        placeholder="Họ tên"
                      />

                      <input
                        id="name"
                        type="text"
                        className="flex-grow w-50 ml-2 h-8 px-2 border rounded border-grey-400"
                        name="name"
                        value=""
                        placeholder="Tên"
                      />
                    </div>

                    <div className="flex flex-col mt-4">
                      <input
                        id="email"
                        type="text"
                        className="flex-grow h-8 px-2 border rounded border-grey-400"
                        name="email"
                        value=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <input
                        id="password"
                        type="password"
                        className="flex-grow h-8 px-2 rounded border border-grey-400"
                        name="password"
                        required
                        placeholder="Mật khẩu"
                      />
                    </div>

                    <div className="flex flex-col mt-4">
                      <input
                        id="password"
                        type="password"
                        className="flex-grow h-8 px-2 rounded border border-grey-400"
                        name="password"
                        required
                        placeholder="Nhập lại mật khẩu"
                      />
                    </div>

                    <div className="flex flex-col my-4">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      >
                        Đăng kí
                      </button>
                    </div>

                    <div className="flex flex-row justify-between my-4">
                      <button
                        onClick={() => setAccount(false)}
                        className="bg-blue-500 w-50 mr-2 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-3 rounded"
                      >
                        Đăng nhập
                      </button>

                      <button className="bg-blue-500 w-50 ml-2 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                        <NavLink
                          to={path.Products}
                          className="text-white no-underline"
                        >
                          Trở lại
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="hidden md:block md:w-1/2 rounded-r-lg">
            <img className="h-full" src={imgLogin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
