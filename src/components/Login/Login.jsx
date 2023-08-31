import React, { useContext, useState } from "react";
// import loginImg from "../../../assets/login.jpg";
// import Logo from "../../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
// import { AuthContext } from "../../../Context/AuthProvider";
// import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
// import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";

const Login = () => {
  //TODO: Some Upgradtion Here
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  //   const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  //   const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // signIn(data.email, data.password).then((result) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "User Has Been Login",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate(from, { replace: true });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <section className="py-2 mb-12">
        <div className=" flex h-full flex-wrap items-center  justify-center lg:justify-center">
          <div className="md:w-8/12 w-[90%] lg:ml-2 lg:w-5/12  mt-0">
            <section className="">
              <div className="flex flex-col items-center justify-center   mx-auto ">
                <a
                  href="#"
                  className="flex gap-2 items-center mb-3 text-2xl font-semibold text-gray-900 "
                >
                  {/* <img className="w-10 rounded-3xl" src={Logo} alt="" /> */}
                  <h2
                    style={{ fontFamily: "Signika Negative', sans-serif" }}
                    className="text-xl items-center  font-bold"
                  >
                    Progress Wave
                  </h2>
                </a>
                <div className="w-full  bg-gradient-to-r from-gray-200 to-lime-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
                  <div className="p-6 text-gray-800 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                      Login to your account
                    </h1>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-3 md:space-y-3"
                      action="#"
                    >
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Your email
                        </label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Your Mail..."
                        />
                        {/* {errors.name && (
                        <span className="text-red-600">Email is required</span>
                      )} */}
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Password
                        </label>
                        <input
                          {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                          })}
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          placeholder="Enter Your Password...."
                          className=" border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <button
                          type="button"
                          className="absolute right-4 bottom-[1px] transform -translate-y-1/2 text-gray-400"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <FaEye className="h-6 w-6 rounded-full bg-white" />
                          ) : (
                            <FaEye className="h-6 w-6 rounded-full bg-white" />
                          )}
                        </button>
                        {/* {errors.name && (
                          <span className="text-red-600">
                            Password is required
                          </span>
                        )} */}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className="w-4 h-4 border  border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                              required
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className=" ">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                      {/* <p className="text-red-600 text-sm">{error}</p> */}
                      <button
                        type="submit"
                        className="w-full  text-md bg-gradient-to-tr from-teal-900 to-indigo-500  text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 shadow-2xl font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Sign in
                      </button>
                      <p className="text-center ">Or</p>
                      <button class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-24 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 ">
                        <svg
                          class="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="800px"
                          height="800px"
                          viewBox="-0.5 0 48 48"
                          version="1.1"
                        >
                          {" "}
                          <title>Google-color</title>{" "}
                          <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                          <g
                            id="Icons"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            {" "}
                            <g
                              id="Color-"
                              transform="translate(-401.000000, -860.000000)"
                            >
                              {" "}
                              <g
                                id="Google"
                                transform="translate(401.000000, 860.000000)"
                              >
                                {" "}
                                <path
                                  d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                  id="Fill-1"
                                  fill="#FBBC05"
                                >
                                  {" "}
                                </path>{" "}
                                <path
                                  d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                  id="Fill-2"
                                  fill="#EB4335"
                                >
                                  {" "}
                                </path>{" "}
                                <path
                                  d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                  id="Fill-3"
                                  fill="#34A853"
                                >
                                  {" "}
                                </path>{" "}
                                <path
                                  d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                  id="Fill-4"
                                  fill="#4285F4"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </svg>
                        <span>Continue with Google</span>
                      </button>
                      <p className="text-sm font-light  ">
                        Don’t have an account yet?{" "}
                        <Link
                          to="/register"
                          className="font-medium  text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Sign up Now
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
