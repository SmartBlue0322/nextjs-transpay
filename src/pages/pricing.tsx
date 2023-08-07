
import React from "react";

import Layout from "@components/Layout";

export default function Pricing() {
    return (
        <Layout pageTitle="Signin" pageDescription="Signin page">
            <div className="bg-white-900 mt-[108px] xl:mt-32">
                <div className="container mx-auto px-5 py-40">
                    <div className="pricing-table mb-[50px]">
                        <h2 className="text-center text-[42px] lg:text-4xl font-bold text-dark-900 mt-8 md:mt-0 mb-4 mx-auto leading-normal lg:w-[800px]">Explore our extensive array of services offered <span className="text-pink-900">worldwide</span></h2>
                        <p className="text-center text-lg font-medium leading-[150%] text-dark-900 opacity-60 mb-12">
                            Know Exactly What You'll Pay for Hassle-free Money Transfers and Receives
                        </p>
                        <div className="flex -mx-[20px]">
                            <div className="flex-1 px-[20px]">
                                <div className="py-[63px] px-[38px] bg-white-900 rounded-2xl shadow-5xl">
                                <h2 className=" mb-3 text-[42px] font-bold leading-[150%]">Starter</h2>
                                    <span className="text-lg font-medium leading-[30px] opacity-60">Money Transfer Essentials Pack</span>
                                    <h3 className=" my-[38px] text-[42px] leading-normal uppercase text-black font-bold">Free</h3>
                                    <button type="button" className=" mb-[48px] w-full text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform">Sign up</button>
                                    <ul>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Instant Notification</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Online System</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">full access</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">live preview</li>
                                        <li className="text-[16px] leading-[30px] font-medium">24/7 Customer Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-1 px-[20px]">
                                <div className="py-[63px] px-[38px] bg-white-900 rounded-2xl shadow-5xl">
                                    <h2 className=" mb-3 text-[42px] font-bold leading-[150%]">Standard</h2>
                                    <span className="text-lg font-medium leading-[30px] opacity-60">Global Money Transfer Plus Pack</span>
                                    <h3 className=" my-[38px] text-[42px] leading-normal uppercase text-black font-bold"><sup className="text-[32px] font-semibold leading-normal mr-[10px]">$</sup>29<sub className="text-[16px] font-bold leading-normal">/mo/12month</sub></h3>
                                    <button type="button" className=" mb-[48px] w-full text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform">Buy Now</button>
                                    <ul>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Worldwide Coverage</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Currency Lock-in</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Instant Notification</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Online System</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">full access</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">live preview</li>
                                        <li className="text-[16px] leading-[30px] font-medium">24/7 Customer Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-1 px-[20px]">
                                <div className="py-[63px] px-[38px] bg-white-900 rounded-2xl shadow-5xl">
                                    <h2 className=" mb-3 text-[42px] font-bold leading-[150%]">Premium</h2>
                                    <span className="text-lg font-medium leading-[30px] opacity-60">Receive Money Premium Pack</span>
                                    <h3 className=" my-[38px] text-[42px] leading-normal uppercase text-black font-bold"><sup className="text-[32px] font-semibold leading-normal mr-[10px]">$</sup>99<sub className="text-[16px] font-bold leading-normal">/mo/12month</sub></h3>
                                    <button type="button" className=" mb-[48px] w-full text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform">Buy Now</button>
                                    <ul>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">No Hidden Fees</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Convenient Payout Methods</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Worldwide Coverage</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Currency Lock-in</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Instant Notification</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">Online System</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">full access</li>
                                        <li className="text-[16px] mb-[8px] leading-[30px] font-medium">live preview</li>
                                        <li className="text-[16px] leading-[30px] font-medium">24/7 Customer Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" py-12 bg-gradient-to-r from-purple-600 to-purple-900 text-center">
                    <div className="container mx-auto py-20">
                        <h2 className="text-[42px] text-white-900 font-semibold leading-[150%] mb-[36px]">Discover our Straight forward Fees and Rates for Easy Money Transfers and Receives</h2>
                        <button type="button" className="text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform">Open New Account</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}