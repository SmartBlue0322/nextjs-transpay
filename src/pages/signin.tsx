import React from "react";

import Link from "next/link";

import Layout from "@components/Layout";

export default function Signin() {
    return (
        <Layout pageTitle="Signin" pageDescription="Signin page">
            <div className="bg-purple-900 mt-[108px] xl:mt-32">
                <div className="container mx-auto px-5 py-40">
                    <div className="flex -mx-5 items-center">
                        <div className="px-5 lg:flex-[50%]">
                            <img src="/sign/1.jpg" alt="SignIn" className="rounded-2xl"></img>
                        </div>
                        <div className="lg:flex-[50%] px-5 lg:mr-20">
                            <div className="rounded-2xl bg-white-900 px-11 py-12 mb-5">
                                <div>
                                    <h3 className="text-[#757575] text-base font-normal leading-normal">Welcome back! 👋</h3>
                                </div>
                                <h2 className=" mb-4 text-gray-700 text-2xl font-bold leading-normal">Sign in to your account</h2>
                                <form action="#">
                                    <div className="form-group mb-3">
                                        <label className=" text-gray-700 text-base font-bold leading-normal mb-2">Your email</label>
                                        <div className="relative">
                                            <svg className="absolute top-1/2 left-3 -translate-y-1/2" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.39149 0.99646C3.31139 0.99646 0 4.30785 0 8.38795C0 12.4681 3.31139 15.7794 7.39149 15.7794H11.0872V14.3011H7.39149C4.18359 14.3011 1.4783 11.5959 1.4783 8.38795C1.4783 5.18005 4.18359 2.47476 7.39149 2.47476C10.5994 2.47476 13.3047 5.18005 13.3047 8.38795V9.44494C13.3047 10.0289 12.7799 10.6054 12.196 10.6054C11.612 10.6054 11.0872 10.0289 11.0872 9.44494V8.38795C11.0872 6.3479 9.43155 4.69221 7.39149 4.69221C5.35144 4.69221 3.69575 6.3479 3.69575 8.38795C3.69575 10.428 5.35144 12.0837 7.39149 12.0837C8.41152 12.0837 9.34285 11.6698 10.0081 10.9972C10.4885 11.655 11.3164 12.0837 12.196 12.0837C13.6521 12.0837 14.783 10.9011 14.783 9.44494V8.38795C14.783 4.30785 11.4716 0.99646 7.39149 0.99646ZM7.39149 10.6054C6.16451 10.6054 5.17405 9.61494 5.17405 8.38795C5.17405 7.16097 6.16451 6.17051 7.39149 6.17051C8.61848 6.17051 9.60894 7.16097 9.60894 8.38795C9.60894 9.61494 8.61848 10.6054 7.39149 10.6054Z" fill="#0B4654" fill-opacity="0.5"/>
                                            </svg>
                                            <input type="text" className="form-control pl-11 py-3 w-full rounded-md border-[1px] border-solid border-gray-600 " id="signin-email-2" name="signin-email" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div className="form-group mb-7">
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
                                    <button  type="button" className="text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform w-full mb-4">Continue</button>
                                    <Link href="#">Forget your password?</Link>
                                </form>
                            </div>
                            <h3 className="text-base font-normal leading-normal text-white-900 text-center">Don't have an account? <Link href="#">Sign up</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}