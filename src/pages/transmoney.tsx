import React from "react";

import Layout from "@components/Layout";

import Progress from "@components/Progress";

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export default function Transmoney() {
    return (
        <Layout pageTitle="Features" pageDescription="Features page">
            <div className=" bg-purple-900 mt-[108px] xl:mt-32 pt-[100px] pb-[25%]">
                <div className="container mx-auto">
                    <h2 className="mx-auto mb-[16px] text-3xl lg:text-4xl font-medium text-white-900 mt-8 md:mt-0 leading-normal text-center max-w-[947px]">
                        Receive Money In A Minute With <span className="text-pink-900">Sufficient</span> Cost Around The World
                    </h2>
                    <p className=" max-w-[947px] mb-[56px] text-white-900 font-medium leading-normal text-center mx-auto">With our efficient network and competitive cost structure, you can enjoy the benefits of fast and reliable transactions without breaking the bank. Feel at ease knowing that your money is securely transferred</p>
                    <Progress />
                </div>
            </div>

            <div className="container mx-auto">
                <div className="py-[45px] px-[150px] max-w-[746px] bg-white-900 rounded-2xl mx-auto -translate-y-[50%] shadow-[#00000015] shadow-5xl">
                    <h3 className="tmb-[16px] text-[24px] font-bold leading-normal">Request Money</h3>
                    <p className="text-[20px] font-medium leading-[24px] mb-[22px]">Who do you need to request payment from?</p>

                    <Tabs selectedTabClassName="active" selectedTabPanelClassName="active">
                        <TabList className="flex items-center justify-center nav nav-tabs nav-fill mb-5">
                            <Tab className="nav-item mx-[8px] flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                                    <g clip-path="url(#clip0_825_389)">
                                        <path d="M34.3352 9.03302H25.4463V11.2552H34.3352V34.5886H25.4463V36.8108H36.5574V11.2552C36.5574 10.6659 36.3233 10.1006 35.9065 9.68389C35.4898 9.26715 34.9245 9.03302 34.3352 9.03302Z" fill="white"/>
                                        <path d="M21.9794 3.47736H6.69052C6.06578 3.47736 5.46664 3.72553 5.02489 4.16728C4.58313 4.60903 4.33496 5.20818 4.33496 5.83291V36.8107H24.335V5.83291C24.335 5.20818 24.0868 4.60903 23.645 4.16728C23.2033 3.72553 22.6041 3.47736 21.9794 3.47736ZM22.1127 34.5885H18.7794V31.2551H9.89052V34.5885H6.55718V5.83291C6.55718 5.8154 6.56063 5.79806 6.56733 5.78189C6.57403 5.76571 6.58385 5.75101 6.59624 5.73863C6.60862 5.72625 6.62332 5.71643 6.63949 5.70973C6.65567 5.70303 6.67301 5.69958 6.69052 5.69958H21.9794C21.9969 5.69958 22.0143 5.70303 22.0304 5.70973C22.0466 5.71643 22.0613 5.72625 22.0737 5.73863C22.0861 5.75101 22.0959 5.76571 22.1026 5.78189C22.1093 5.79806 22.1127 5.8154 22.1127 5.83291V34.5885Z" fill="white"/>
                                        <path d="M8.7793 9.03302H11.0015V11.2552H8.7793V9.03302Z" fill="white"/>
                                        <path d="M13.2241 9.03302H15.4463V11.2552H13.2241V9.03302Z" fill="white"/>
                                        <path d="M17.6685 9.03302H19.8907V11.2552H17.6685V9.03302Z" fill="white"/>
                                        <path d="M8.7793 14.5887H11.0015V16.8109H8.7793V14.5887Z" fill="white"/>
                                        <path d="M13.2241 14.5887H15.4463V16.8109H13.2241V14.5887Z" fill="white"/>
                                        <path d="M17.6685 14.5887H19.8907V16.8109H17.6685V14.5887Z" fill="white"/>
                                        <path d="M8.7793 20.1443H11.0015V22.3666H8.7793V20.1443Z" fill="white"/>
                                        <path d="M13.2241 20.1443H15.4463V22.3666H13.2241V20.1443Z" fill="white"/>
                                        <path d="M17.6685 20.1443H19.8907V22.3666H17.6685V20.1443Z" fill="white"/>
                                        <path d="M8.7793 25.7H11.0015V27.9222H8.7793V25.7Z" fill="white"/>
                                        <path d="M13.2241 25.7H15.4463V27.9222H13.2241V25.7Z" fill="white"/>
                                        <path d="M17.6685 25.7H19.8907V27.9222H17.6685V25.7Z" fill="white"/>
                                        <path d="M25.4463 14.5887H27.6685V16.8109H25.4463V14.5887Z" fill="white"/>
                                        <path d="M29.8906 14.5887H32.1128V16.8109H29.8906V14.5887Z" fill="white"/>
                                        <path d="M25.4463 20.1443H27.6685V22.3666H25.4463V20.1443Z" fill="white"/>
                                        <path d="M29.8906 20.1443H32.1128V22.3666H29.8906V20.1443Z" fill="white"/>
                                        <path d="M25.4463 25.7H27.6685V27.9222H25.4463V25.7Z" fill="white"/>
                                        <path d="M29.8906 25.7H32.1128V27.9222H29.8906V25.7Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_825_389">
                                        <rect width="40" height="40" fill="white" transform="translate(0 0.144348)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="nav-link border-no lh-1 ls-normal rounded-[4px]">Company</span>
                            </Tab>
                            <Tab className="nav-item mx-[8px] flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3906 2.22736C18.2909 2.22736 16.2773 3.06143 14.7926 4.54609C13.308 6.03076 12.4739 8.04439 12.4739 10.144C12.4739 12.2437 13.308 14.2573 14.7926 15.742C16.2773 17.2266 18.2909 18.0607 20.3906 18.0607C22.4902 18.0607 24.5038 17.2266 25.9885 15.742C27.4731 14.2573 28.3072 12.2437 28.3072 10.144C28.3072 8.04439 27.4731 6.03076 25.9885 4.54609C24.5038 3.06143 22.4902 2.22736 20.3906 2.22736ZM14.9739 10.144C14.9739 8.70743 15.5446 7.32968 16.5604 6.31386C17.5762 5.29804 18.954 4.72736 20.3906 4.72736C21.8271 4.72736 23.2049 5.29804 24.2207 6.31386C25.2365 7.32968 25.8072 8.70743 25.8072 10.144C25.8072 11.5806 25.2365 12.9584 24.2207 13.9742C23.2049 14.99 21.8271 15.5607 20.3906 15.5607C18.954 15.5607 17.5762 14.99 16.5604 13.9742C15.5446 12.9584 14.9739 11.5806 14.9739 10.144ZM20.3906 20.5607C16.5356 20.5607 12.9822 21.4374 10.3506 22.9174C7.75722 24.3774 5.80722 26.5874 5.80722 29.3107V29.4807C5.80556 31.4174 5.80389 33.8474 7.93556 35.584C8.98389 36.4374 10.4522 37.0457 12.4356 37.4457C14.4222 37.849 17.0139 38.0607 20.3906 38.0607C23.7672 38.0607 26.3572 37.849 28.3472 37.4457C30.3306 37.0457 31.7972 36.4374 32.8472 35.584C34.9789 33.8474 34.9756 31.4174 34.9739 29.4807V29.3107C34.9739 26.5874 33.0239 24.3774 30.4322 22.9174C27.7989 21.4374 24.2472 20.5607 20.3906 20.5607ZM8.30722 29.3107C8.30722 27.8924 9.34389 26.3524 11.5756 25.0974C13.7689 23.864 16.8822 23.0607 20.3922 23.0607C23.8989 23.0607 27.0122 23.864 29.2056 25.0974C31.4389 26.3524 32.4739 27.8924 32.4739 29.3107C32.4739 31.4907 32.4072 32.7174 31.2672 33.644C30.6506 34.1474 29.6172 34.639 27.8506 34.9957C26.0889 35.3524 23.6806 35.5607 20.3906 35.5607C17.1006 35.5607 14.6906 35.3524 12.9306 34.9957C11.1639 34.639 10.1306 34.1474 9.51389 33.6457C8.37389 32.7174 8.30722 31.4907 8.30722 29.3107Z" fill="black"/>
                                </svg>
                                <span className="nav-link border-no lh-1 ls-normal">Individual</span>
                            </Tab>
                        </TabList>

                        <div className="tab-content">
                            <TabPanel className="tab-pane">
                                <form action="#">
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control text-[16px] font-medium leading-[normal] py-[11px] px-[16px] w-full border-[#DEDEDE] border-[1px]" id="name" name="companyname" placeholder="Company name *" required />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control text-[16px] font-medium leading-[normal] py-[11px] px-[16px] w-full border-[#DEDEDE] border-[1px]" id="name" name="websiteurl" placeholder="Website URL *" required />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control text-[16px] font-medium leading-[normal] py-[11px] px-[16px] w-full border-[#DEDEDE] border-[1px]" id="name" name="contactname" placeholder="Contact name *" required />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control text-[16px] font-medium leading-[normal] py-[11px] px-[16px] w-full border-[#DEDEDE] border-[1px]" id="singin-email-2" name="singin-email" placeholder="Emails *" required />
                                    </div>
                                    <div className="form-footer mb-[17px]">
                                        <div className="form-checkbox flex justify-center">
                                            <input type="checkbox" className="custom-checkbox w-[24px] h-[24px] border-[#6F6AF8] mr-[8px]" id="signin-remember-2" name="signin-remember" />
                                            <label className="form-control-label text-[#00000050]" htmlFor="signin-remember-2">By clicking continue, I am agree with <a href="#" className="text-[#F833C0]">Terms & Policy</a></label>
                                        </div>
                                    </div>
                                    <button type="button" className="mx-auto text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform mt-8">Continue</button>
                                </form>
                            </TabPanel>

                            <TabPanel className="tab-pane">
                                <form action="#">
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control text-[16px] font-medium leading-[normal] py-[11px] px-[16px] w-full border-[#DEDEDE] border-[1px]" id="name" name="firstname" placeholder="First Name *" required />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control text-[16px] font-medium leading-[normal] py-[11px] px-[16px] w-full border-[#DEDEDE] border-[1px]" id="name" name="lastname" placeholder="Last Name *" required />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control text-[16px] font-medium leading-[normal] py-[11px] px-[16px] w-full border-[#DEDEDE] border-[1px]" id="name" name="websiteurl" placeholder="Website URL *" required />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control text-[16px] font-medium leading-[normal] py-[11px] px-[16px] w-full border-[#DEDEDE] border-[1px]" id="singin-email-2" name="singin-email" placeholder="Emails *" required />
                                    </div>
                                    <div className="form-footer mb-[17px]">
                                        <div className="form-checkbox flex justify-center">
                                            <input type="checkbox" className="custom-checkbox w-[24px] h-[24px] border-[#6F6AF8] mr-[8px]" id="signin-remember-2" name="signin-remember" />
                                            <label className="form-control-label text-[#00000050]" htmlFor="signin-remember-2">By clicking continue, I am agree with <a href="#" className="text-[#F833C0]">Terms & Policy</a></label>
                                        </div>
                                    </div>
                                    <button type="button" className="mx-auto text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform mt-8">Continue</button>
                                </form>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
                <h2 className="mx-auto mb-[22px] text-3xl lg:text-4xl font-semibold text-dark-900 mt-8 md:mt-0 leading-normal text-center max-w-[947px]">
                    Easy And Fast Way To <span className="text-pink-900">Receive Money</span>
                </h2>
                <p className=" max-w-[947px] mb-[50px] text-dark-900 font-medium leading-normal text-center mx-auto">Receiving money from around the world has never been easier. With our advanced money transfer service, you can swiftly receive funds in just one minute.</p>
                <Progress />
            </div>
            <div className="mx-auto container px-5 mb-20 md:mb-36">
                <p className="text-3xl lg:text-4xl font-bold text-dark-900 leading-normal text-center">What Our <span className="text-pink-900">Client</span> Saying?</p>

                <p className=" text-center text-base lg:text-xl text-dark-900 opacity-60 tracking-wider mt-8 w-full md:w-8/12 mx-auto text-center">Real Stories from Satisfied Clients: Discover Their Experience with Our Money Transfer and Receive Services</p>

                <div className='flex mt-40 flex-col sm:flex-row'>
                    <div className="relative inline-block mx-10"> 
                        <img className="w-auto shadow-6xl w-[400px] md:w-[336px] max-w-[50vw] sm:max-w-[30vw] mx-auto" src="/a.jpg" alt="testimonial avatar" />
                        <img className="w-auto rotate-[-5.36] absolute top-[-6rem] right-[0]" src="/testimonial/star.png" alt="star icon" />
                        <img className="w-auto rotate-[-5.36] absolute top-[-2.7rem] right-[-3.2rem]" src="/testimonial/star.png" alt="star icon" />
                        <img className="w-auto rotate-[-5.36] absolute top-[1rem] right-[-3.2rem]" src="/testimonial/star.png" alt="star icon" />
                    </div>
                    <div className='inline-flex flex-col items-start justify-center ml-0 sm:ml-12 md:ml-16 lg:ml-24 mt-16 sm:mt-0'>
                        <img className="w-auto" src="/testimonial/quote.png" alt="testimonial quote" />
                        <p className="text-base lg:text-2xl text-dark-900 tracking-wider mt-3 md:mt-6 !leading-loose">Their platform made it incredibly easy for me to send money to my family overseas. The process was quick, secure, and the fees were reasonable.</p>
                        <div className="flex items-center space-x-2 mt-3 md:mt-6">
                            <svg className="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                        <p className="text-base lg:text-2xl text-dark-900 font-semibold tracking-wider mt-3 md:mt-6 leading-loose">Maya Language</p>
                        <p className="text-base lg:text-2xl text-dark-900 opacity-60 tracking-wider mt-0 md:mt-6 leading-loose">President Multiverse</p>
                    </div>
                </div>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

            <div className=" py-12 bg-gradient-to-r from-purple-600 to-purple-900 text-center">
                <div className="container mx-auto py-20">
                    <h2 className="text-[42px] text-white-900 font-semibold leading-[150%] mb-[36px]">We Bring Everything In One Place To Make Your Money Transfer Process More Easier</h2>
                    <button type="button" className="text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform">Open New Account</button>
                </div>
            </div>
        </Layout>
    )
}                                                                                                                                                                                                                                       