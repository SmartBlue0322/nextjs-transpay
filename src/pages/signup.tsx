import React from "react";

import Link from "next/link";

import Layout from "@components/Layout";

export default function Signout() {
    return (
        <Layout pageTitle="Signin" pageDescription="Signin page">
            <div className="bg-purple-900 mt-[108px] xl:mt-32">
                <div className="container mx-auto px-5 py-40">
                    {/* <div className="grid lg:grid-cols-2 grid-cols-1"> */}
                    <div className=" flex -mx-5">
                        <div className="col-span-1 flex-1 px-5">
                            <img src="/sign/2.jpg" alt="SignOut" className="rounded-2xl" />
                        </div>
                        <div className="col-span-1 flex-1 lg:mr-20 px-5">
                            <div className="rounded-2xl bg-white-900 px-[46px] py-[30px] mb-5">
                                <div>
                                    <h3 className="text-[#757575] text-base font-normal leading-normal">Welcome! 👋</h3>
                                </div>
                                <h2 className=" mb-4 text-gray-700 text-2xl font-bold leading-normal">Create your account</h2>
                                <form action="#">
                                    <div className="form-group mb-3">
                                        <label className=" text-gray-700 text-base font-bold leading-normal mb-2">Full name</label>
                                        <div className="relative">
                                            <svg className="absolute top-1/2 left-3 -translate-y-1/2"  width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.8288 14.1085C15.6249 13.1506 16.1786 12.0151 16.4431 10.7979C16.7076 9.5808 16.675 8.31787 16.3481 7.11599C16.0213 5.91411 15.4097 4.80863 14.5653 3.89307C13.7208 2.97752 12.6683 2.27881 11.4967 1.85608C10.3251 1.43334 9.06889 1.29899 7.83439 1.46442C6.59989 1.62984 5.42339 2.09016 4.40441 2.80643C3.38544 3.5227 2.55397 4.47386 1.98034 5.57944C1.40671 6.68502 1.1078 7.91249 1.10889 9.15803C1.10931 10.9687 1.74737 12.7213 2.91112 14.1085L2.90003 14.1179C2.93884 14.1645 2.98319 14.2044 3.0231 14.2504C3.07299 14.3075 3.12677 14.3613 3.17832 14.4167C3.33354 14.5852 3.4932 14.7471 3.66062 14.899C3.71162 14.9456 3.76428 14.9888 3.81584 15.0332C3.99323 15.1862 4.17562 15.3314 4.36466 15.4667C4.38905 15.4833 4.41122 15.5049 4.43562 15.5221V15.5154C5.73399 16.4291 7.28288 16.9195 8.87051 16.9195C10.4581 16.9195 12.007 16.4291 13.3054 15.5154V15.5221C13.3298 15.5049 13.3514 15.4833 13.3764 15.4667C13.5648 15.3308 13.7478 15.1862 13.9252 15.0332C13.9767 14.9888 14.0294 14.945 14.0804 14.899C14.2478 14.7465 14.4075 14.5852 14.5627 14.4167C14.6143 14.3613 14.6675 14.3075 14.7179 14.2504C14.7573 14.2044 14.8022 14.1645 14.841 14.1173L14.8288 14.1085ZM8.86996 4.72313C9.36335 4.72313 9.84566 4.86944 10.2559 5.14355C10.6661 5.41767 10.9859 5.80727 11.1747 6.26311C11.3635 6.71894 11.4129 7.22053 11.3167 7.70444C11.2204 8.18835 10.9828 8.63285 10.6339 8.98173C10.285 9.33061 9.84055 9.5682 9.35664 9.66446C8.87272 9.76071 8.37114 9.71131 7.9153 9.5225C7.45947 9.33368 7.06986 9.01394 6.79575 8.6037C6.52164 8.19346 6.37533 7.71115 6.37533 7.21776C6.37533 6.55614 6.63815 5.92163 7.10599 5.45379C7.57382 4.98596 8.20834 4.72313 8.86996 4.72313ZM4.43894 14.1085C4.44856 13.3806 4.74437 12.6857 5.26237 12.1743C5.78037 11.6628 6.47891 11.3758 7.20687 11.3755H10.533C11.261 11.3758 11.9595 11.6628 12.4775 12.1743C12.9955 12.6857 13.2914 13.3806 13.301 14.1085C12.0852 15.2041 10.5066 15.8104 8.86996 15.8104C7.23334 15.8104 5.65475 15.2041 4.43894 14.1085Z" fill="#0B4654" fill-opacity="0.5"/>
                                            </svg>
                                            <input type="text" className="form-control pl-11 py-3 w-full rounded-md border-[1px] border-solid border-gray-600 " id="signin-email-2" name="signin-email" placeholder="Full name" />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className=" text-gray-700 text-base font-bold leading-normal mb-2">Your email</label>
                                        <div className="relative">
                                            <svg className="absolute top-1/2 left-3 -translate-y-1/2" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.39149 0.99646C3.31139 0.99646 0 4.30785 0 8.38795C0 12.4681 3.31139 15.7794 7.39149 15.7794H11.0872V14.3011H7.39149C4.18359 14.3011 1.4783 11.5959 1.4783 8.38795C1.4783 5.18005 4.18359 2.47476 7.39149 2.47476C10.5994 2.47476 13.3047 5.18005 13.3047 8.38795V9.44494C13.3047 10.0289 12.7799 10.6054 12.196 10.6054C11.612 10.6054 11.0872 10.0289 11.0872 9.44494V8.38795C11.0872 6.3479 9.43155 4.69221 7.39149 4.69221C5.35144 4.69221 3.69575 6.3479 3.69575 8.38795C3.69575 10.428 5.35144 12.0837 7.39149 12.0837C8.41152 12.0837 9.34285 11.6698 10.0081 10.9972C10.4885 11.655 11.3164 12.0837 12.196 12.0837C13.6521 12.0837 14.783 10.9011 14.783 9.44494V8.38795C14.783 4.30785 11.4716 0.99646 7.39149 0.99646ZM7.39149 10.6054C6.16451 10.6054 5.17405 9.61494 5.17405 8.38795C5.17405 7.16097 6.16451 6.17051 7.39149 6.17051C8.61848 6.17051 9.60894 7.16097 9.60894 8.38795C9.60894 9.61494 8.61848 10.6054 7.39149 10.6054Z" fill="#0B4654" fill-opacity="0.5"/>
                                            </svg>
                                            <input type="text" className="form-control pl-11 py-3 w-full rounded-md border-[1px] border-solid border-gray-600 " id="signin-email-2" name="signin-email" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className=" text-gray-700 text-base font-bold leading-normal mb-2">Password</label>
                                        <div className="relative">
                                            <svg className="absolute top-1/2 left-3 -translate-y-1/2" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5654 6.56156H15.0437C15.2397 6.56156 15.4277 6.63943 15.5663 6.77805C15.705 6.91667 15.7828 7.10467 15.7828 7.30071V16.1705C15.7828 16.3665 15.705 16.5545 15.5663 16.6932C15.4277 16.8318 15.2397 16.9096 15.0437 16.9096H3.2173C3.02126 16.9096 2.83326 16.8318 2.69464 16.6932C2.55602 16.5545 2.47815 16.3665 2.47815 16.1705V7.30071C2.47815 7.10467 2.55602 6.91667 2.69464 6.77805C2.83326 6.63943 3.02126 6.56156 3.2173 6.56156H4.6956V5.82241C4.6956 4.6462 5.16284 3.51817 5.99455 2.68646C6.82625 1.85476 7.95429 1.38751 9.13049 1.38751C10.3067 1.38751 11.4347 1.85476 12.2664 2.68646C13.0981 3.51817 13.5654 4.6462 13.5654 5.82241V6.56156ZM12.0871 6.56156V5.82241C12.0871 5.03827 11.7756 4.28625 11.2211 3.73178C10.6667 3.17731 9.91463 2.86581 9.13049 2.86581C8.34635 2.86581 7.59433 3.17731 7.03986 3.73178C6.48539 4.28625 6.1739 5.03827 6.1739 5.82241V6.56156H12.0871ZM8.39134 10.9965V12.4748H9.86964V10.9965H8.39134ZM5.43475 10.9965V12.4748H6.91305V10.9965H5.43475ZM11.3479 10.9965V12.4748H12.8262V10.9965H11.3479Z" fill="#0B4654" fill-opacity="0.5"/>
                                            </svg>
                                            <input type="password" className="form-control pl-11 py-3 w-full rounded-md border-[1px] border-solid border-gray-600 " id="signin-email-2" name="signin-email" placeholder="Password" />
                                            <button>

                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-checkbox mb-8 flex items-center justify-center">
                                        <input type="checkbox" className="custom-checkbox w-[24px] h-[24px] mr-[8px]" id="register-agree-2" name="register-agree"
                                            required />
                                        <label className="form-control-label text-sm font-normal leading-[130%]" htmlFor="register-agree-2">I have read and agree to the Terms of Service</label>
                                    </div>
                                    <button  type="button" className="text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform w-full mb-4">Sign Up</button>
                                    <label className=" block text-sm font-medium leading-normal text-[#625BF7] text-center">or</label>
                                </form>
                            </div>
                            <button className=" py-[14px] px-[24px] mx-auto mb-[16px] rounded-full w-[256px] h-[48px] text-base text-white-900 font-medium leading-[19.2px] border-2 border-[#eee] flex">
                                <img className=" pr-[10px]" src="/google-icon.png" />
                                Connect with Google
                            </button>
                            <h3 className="text-[16px] font-normal leading-[120%] text-white-900 text-center">Already have an account? <a href="#" className="text-[#F833C0]">Sign in</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}