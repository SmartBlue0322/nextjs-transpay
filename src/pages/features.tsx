
import React from "react";

// import PageHeader from "@components/Pageheader";

import data from '../components/home/data.json';

import Layout from "@components/Layout";

export default function Features() {
    return (
        <Layout pageTitle="Features" pageDescription="Features page">
            <div className="bg-white-900 mt-[108px] xl:mt-32">
                <div className="page-header text-center bg-[url('/bg1.jpg')] bg-center py-[125px]">
                    <h2 className="text-white-900 font-semibold text-[42px] leading-[63px] mb-[16px]">Our Feature</h2>
                    <p className="text-white-900 font-medium text-[16px] leading-[30px]">Simplifying Money Transfer and Receive</p>
                </div>
                <div className="container mx-auto px-5 py-40">
                    <div className="features">
                        <div className="flex flex-wrap -mx-[10px] items-center mb-[7rem]">
                            <div className=" lg:flex-1 px-[10px] lg:mb-0 mb-[20px]">
                                <img src="/feature1.jpg" />
                            </div>
                            <div className=" flex-1 px-[10px]">
                                <h3 className="text-[28px] font-semibold leading-normal">Fast and Secure Transactions</h3>
                                <p className="max-w-[560px] text-[20px] font-medium leading-[30px]">Enjoy lightning-fast and secure money transfers and receiving processes, ensuring your funds reach their destination promptly and safely.</p>
                                <ul className="mt-10">
                                    <li className="relative inline-flex items-start w-full pr-4 py-2 lg:text-lg font-medium text-gray-700">
                                        <img className="w-auto mr-4 mt-1" src="/track/5.png" alt="check icon" />                        
                                        Sign Up Account
                                    </li>
                                    <li className="relative inline-flex items-start w-full pr-4 py-2 lg:text-lg font-medium text-gray-700">
                                        <img className="w-auto mr-4 mt-1" src="/track/5.png" alt="check icon" />                        
                                        Receive & Send Payments from worldwide
                                    </li>
                                    <li className="relative inline-flex items-start w-full pr-4 py-2 lg:text-lg font-medium text-gray-700">
                                        <img className="w-auto mr-4 mt-1" src="/track/5.png" alt="check icon" />                        
                                        Your funds will be transferred to your local bank account
                                    </li>
                                </ul>
                                <button type="button" className="hidden xl:block text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform mt-8">Open Account Now</button>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-[10px] items-center mb-[7rem]">
                            <div className="lg:flex-1 px-[10px] lg:order-last lg:mb-0 mb-[20px]">
                                <img src="/feature2.jpg" />
                            </div>
                            <div className="lg:flex-1 px-[10px]">
                                <h3 className="text-[28px] font-semibold leading-normal">Competitive Exchange Rates</h3>
                                <p className="max-w-[522px] text-[20px] font-medium leading-[30px]">Take advantage of competitive exchange rates, ensuring you get the most value out of your money when converting currencies.</p>
                                <ul className="mt-10">
                                    <li className="relative inline-flex items-start w-full pr-4 py-2 lg:text-lg font-medium text-gray-700">
                                        <img className="w-auto mr-4 mt-1" src="/track/5.png" alt="check icon" />                        
                                        24/7 Customer Support
                                    </li>
                                    <li className="relative inline-flex items-start w-full pr-4 py-2 lg:text-lg font-medium text-gray-700">
                                        <img className="w-auto mr-4 mt-1" src="/track/5.png" alt="check icon" />                        
                                        Transparent Fees
                                    </li>
                                    <li className="relative inline-flex items-start w-full pr-4 py-2 lg:text-lg font-medium text-gray-700">
                                        <img className="w-auto mr-4 mt-1" src="/track/5.png" alt="check icon" />                        
                                        Secure Encryption
                                    </li>
                                </ul>
                                <button type="button" className="hidden xl:block text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform mt-8">Open Account Now</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="transpay bg-purple-900 pt-[61px] pb-[92px] lg:px-[149px] px-[20px]">
                    <div className="container">

                        <h2 className="mb-[16px] text-3xl lg:text-4xl font-bold text-white-900 mt-8 md:mt-0 leading-normal text-center">
                            Transpay core <span className="text-pink-900">feature</span>
                        </h2>
                        <p className="lg:w-[665px] mb-[56px] text-white-900 font-medium leading-normal text-center mx-auto">Enjoy the convenience of transferring money anytime, anywhere, through our user-friendly mobile and web platforms</p>

                        <div className="feature-box-section flex flex-wrap -mx-[8px]">
                            {
                                data.corefeature.map((feature, index) => (
                                    <div className=" px-[8px] lg:flex-1 sm:flex-[50%] mb-[16px]" key={'featurebox' + index}>
                                        <div className="feature-box p-[16px] rounded-2xl bg-white-900 bg-opacity-20">
                                            <img src={feature.imageUrl} className=" mb-5"/>
                                            <h3 className="mb-4 text-white-900">{feature.title}</h3>
                                            <p className="text-white-900 opacity-60">{feature.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className=" text-[42px] font-semibold leading-[150%] bg-white-900 py-20 text-center lg:w-[1040px] mx-auto">
                        <h2 className="mb-[36px]">Our worldwide integration partner work with long time relationship</h2>
                        <button type="button" className="mx-auto text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform mt-8">Learn More</button>
                    </div>
                </div>
            </div>
        </ Layout>
        
    )
}