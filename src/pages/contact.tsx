
import React from "react";

import Layout from "@components/Layout";

export default function Contact() {
    return (
        <Layout pageTitle="Features" pageDescription="Features page">
            <div className="bg-white-900 mt-[108px] xl:mt-32">
                <div className="page-header text-center bg-[url('/contact.jpg')] bg-center py-[110px]">
                    <h2 className="text-white-900 font-semibold text-[42px] leading-[63px] mb-[16px]">Contact us</h2>
                    <p className="text-white-900 font-medium text-[16px] leading-[30px] max-w-[583px] mx-auto">If you have any questions, concerns, or need assistance related to money transfers or receiving funds, our dedicated support team is here to help!</p>
                </div>

                <div className="container mx-auto my-[10rem]">
                    <div className="flex flex-wrap -mx-[10px] items-end">
                        <div className="lg:flex-1 px-[10px]">
                            <div className="contact-info rounded-2xl py-[22px] px-[33px] bg-seagreen-900 lg:mr-[3rem]">
                                <h2 className="mb-[8px] text-[28px] font-semibold">Contact Information</h2>
                                <p className="mb-[40px]">Say something to start a live chat!</p>
                                <ul>
                                    <li className="flex mb-[36px]">
                                        <svg className="mr-[15px]" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M20.9875 11.3214H22.9875C22.9875 6.19139 19.1145 2.32239 13.9775 2.32239V4.32239C18.0395 4.32239 20.9875 7.26539 20.9875 11.3214Z" fill="black"/>
                                            <path d="M13.9876 8.32238C16.0906 8.32238 16.9876 9.21938 16.9876 11.3224H18.9876C18.9876 8.09738 17.2126 6.32238 13.9876 6.32238V8.32238ZM17.4096 13.7654C17.2174 13.5907 16.9649 13.4976 16.7054 13.5056C16.4459 13.5136 16.1996 13.6222 16.0186 13.8084L13.6256 16.2694C13.0496 16.1594 11.8916 15.7984 10.6996 14.6094C9.50759 13.4164 9.14659 12.2554 9.03959 11.6834L11.4986 9.28938C11.685 9.10851 11.7937 8.8622 11.8017 8.60259C11.8098 8.34297 11.7165 8.09042 11.5416 7.89838L7.84659 3.83538C7.67163 3.64274 7.42847 3.52589 7.16874 3.50964C6.90901 3.4934 6.65318 3.57904 6.45559 3.74838L4.28559 5.60938C4.1127 5.7829 4.00951 6.01383 3.99559 6.25838C3.98059 6.50838 3.69459 12.4304 8.28659 17.0244C12.2926 21.0294 17.3106 21.3224 18.6926 21.3224C18.8946 21.3224 19.0186 21.3164 19.0516 21.3144C19.2961 21.3007 19.5269 21.197 19.6996 21.0234L21.5596 18.8524C21.7291 18.6549 21.8149 18.3992 21.7988 18.1394C21.7828 17.8797 21.6661 17.6365 21.4736 17.4614L17.4096 13.7654Z" fill="black"/>
                                        </svg>
                                        <a href="tel:10123456789" className="text-[18px] font-medium leading-[30px]">
                                            +1012 3456 789
                                        </a>
                                    </li>
                                    <li className="flex mb-[36px]">
                                        <svg className="mr-[15px]" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M22.9873 4.32239H2.9873V20.3224H22.9873V4.32239ZM20.9873 8.32239L12.9873 13.3224L4.9873 8.32239V6.32239L12.9873 11.3224L20.9873 6.32239V8.32239Z" fill="black"/>
                                        </svg>
                                        <a href="mailto:Transpay@gmail.com" className="text-[18px] font-medium leading-[30px]">Transpay@gmail.com</a>
                                    </li>
                                    <li className="flex mb-[62px]">
                                        <svg className="mr-[15px]" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M12.9873 1.82239C10.8001 1.82497 8.70315 2.69499 7.15653 4.24161C5.60992 5.78822 4.73989 7.88514 4.73731 10.0724C4.73469 11.8598 5.31855 13.5987 6.39931 15.0224C6.39931 15.0224 6.62431 15.3186 6.66106 15.3614L12.9873 22.8224L19.3166 15.3576C19.3496 15.3179 19.5753 15.0224 19.5753 15.0224L19.5761 15.0201C20.6563 13.5971 21.2399 11.859 21.2373 10.0724C21.2347 7.88514 20.3647 5.78822 18.8181 4.24161C17.2715 2.69499 15.1746 1.82497 12.9873 1.82239ZM12.9873 13.0724C12.394 13.0724 11.814 12.8964 11.3206 12.5668C10.8273 12.2372 10.4427 11.7686 10.2157 11.2204C9.98861 10.6723 9.9292 10.0691 10.045 9.48712C10.1607 8.90517 10.4464 8.37062 10.866 7.95107C11.2856 7.53151 11.8201 7.24579 12.402 7.13003C12.984 7.01428 13.5872 7.07369 14.1354 7.30075C14.6835 7.52781 15.1521 7.91233 15.4817 8.40568C15.8114 8.89902 15.9873 9.47904 15.9873 10.0724C15.9863 10.8677 15.6699 11.6302 15.1075 12.1926C14.5451 12.755 13.7827 13.0714 12.9873 13.0724Z" fill="black"/>
                                        </svg>
                                        132 Dartmouth Street Boston, Massachusetts 02156 United States
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:flex-1">
                            <form action="#">
                                <div className="row flex -mx-[10px] mb-[25px]">
                                    <div className="form-group flex-[50%] px-[10px]">
                                        <label className="block">First Name</label>
                                        <input className="w-full" placeholder="John"></input>
                                    </div>
                                    <div className="form-group flex-[50%] px-[10px]">
                                        <label className="block">Last Name</label>
                                        <input className="w-full" placeholder="Doe"></input>
                                    </div>
                                </div>
                                <div className="row flex -mx-[10px] mb-[30px]">
                                    <div className="form-group flex-[50%] px-[10px]">
                                        <label className="block">Email</label>
                                        <input  className="w-full" placeholder="Enteryour@gmail.com"></input>
                                    </div>
                                    <div className="form-group flex-[50%] px-[10px]">
                                        <label className="block">Phone Number</label>
                                        <input className="w-full" placeholder="+1 012 3456 789"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="block">Message</label>
                                    <input className="w-full" placeholder="Write your message."></input>
                                </div>
                                <button type="button" className="mx-auto mb-4 text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform mt-8">Send Message</button>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
        </Layout>
    )
}