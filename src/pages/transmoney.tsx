import React from "react";

import Layout from "@components/Layout";

import Progress from "@components/Progress";

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export default function Transmoney() {
    return (
        <Layout pageTitle="Features" pageDescription="Features page">
            <div className=" bg-purple-900 mt-[108px] xl:mt-32 pt-[100px] mb-[76px]">
                <div className="container mx-auto">
                    <h2 className="mx-auto mb-[16px] text-3xl lg:text-4xl font-medium text-white-900 mt-8 md:mt-0 leading-normal text-center max-w-[947px]">
                        Receive Money In A Minute With <span className="text-pink-900">Sufficient</span> Cost Around The World
                    </h2>
                    <p className=" max-w-[947px] mb-[56px] text-white-900 font-medium leading-normal text-center mx-auto">With our efficient network and competitive cost structure, you can enjoy the benefits of fast and reliable transactions without breaking the bank. Feel at ease knowing that your money is securely transferred</p>
                    <Progress />
                </div>
            </div>

            <div className="container mx-auto">
                <div className="py-[45px] px-[150px] max-w-[746px] bg-white-900 rounded-2xl mx-auto">
                    <h3 className="tmb-[16px] text-[24px] font-bold leading-normal">Request Money</h3>
                    <p className="text-[20px] font-medium leading-[24px]">Who do you need to request payment from?</p>

                    <Tabs selectedTabClassName="active" selectedTabPanelClassName="active">
                        <TabList className="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5">
                            <Tab className="nav-item">
                                <span className="nav-link border-no lh-1 ls-normal">Company</span>
                            </Tab>
                            <Tab className="nav-item">
                                <span className="nav-link border-no lh-1 ls-normal">Individual</span>
                            </Tab>
                        </TabList>

                        <div className="tab-content">
                            <TabPanel className="tab-pane">
                                <form action="#">
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" id="singin-email-2" name="singin-email" placeholder="Username or Email Address *" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="singin-password-2" placeholder="Password *" name="singin-password" required />
                                    </div>
                                    <div className="form-footer">
                                        <div className="form-checkbox">
                                            <input type="checkbox" className="custom-checkbox" id="signin-remember-2" name="signin-remember" />
                                            <label className="form-control-label" htmlFor="signin-remember-2">Remember me</label>
                                        </div>
                                        <a href="#" className="lost-link">Lost your password?</a>
                                    </div>
                                    <button className="btn btn-dark btn-block btn-rounded" type="submit">Login</button>
                                </form>
                                <div className="form-choice text-center">
                                    <label className="ls-m">or Login With</label>
                                    <div className="social-links">
                                        <a href="#" className="social-link social-google fab fa-google border-no"></a>
                                        <a href="#" className="social-link social-facebook fab fa-facebook-f border-no"></a>
                                        <a href="#" className="social-link social-twitter fab fa-twitter border-no"></a>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel className="tab-pane">
                                <form action="#">
                                    <div className="form-group">
                                        <label htmlFor="register-email-2">Your email address:</label>
                                        <input type="email" className="form-control" id="register-email-2" name="register-email" placeholder="Your Email address *" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="register-password-2">Password:</label>
                                        <input type="password" className="form-control" id="register-password-2" name="register-password" placeholder="Password *" required />
                                    </div>
                                    <div className="form-footer">
                                        <div className="form-checkbox">
                                            <input type="checkbox" className="custom-checkbox" id="register-agree-2" name="register-agree"
                                                required />
                                            <label className="form-control-label" htmlFor="register-agree-2">I agree to the privacy policy</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-dark btn-block btn-rounded" type="submit">Register</button>
                                </form>
                                <div className="form-choice text-center">
                                    <label className="ls-m">or Register With</label>
                                    <div className="social-links">
                                        <a href="#" className="social-link social-google fab fa-google border-no"></a>
                                        <a href="#" className="social-link social-facebook fab fa-facebook-f border-no"></a>
                                        <a href="#" className="social-link social-twitter fab fa-twitter border-no"></a>
                                    </div>
                                </div>
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