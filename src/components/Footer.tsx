const Footer = () => {
    return (
        <footer className="bg-dark-900">
            <div className="mx-auto w-full container px-5 pt-16 md:pt-24 lg:pt-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-1 order-2 md:order-1">
                        <h2 className="mb-6 lg:text-2xl font-semibold text-white-900 text-right mt-4 md:mt-8">About</h2>
                        <ul className="flex flex-col text-right text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="text-white-900 opacity-60 hover:opacity-100 transition text-base lg:text-xl">Services</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="text-white-900 opacity-60 hover:opacity-100 transition text-base lg:text-xl">Advisor</a>
                            </li>
                            <li>
                                <a href="#" className="text-white-900 opacity-60 hover:opacity-100 transition text-base lg:text-xl">Blog and News</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 order-1 md:order-2">
                        <p className="text-2xl lg:text-4xl font-bold text-white-900 leading-normal text-center">Get In Touch</p>

                        <p className="text-base lg:text-xl text-white-900 opacity-60 tracking-wider md:mt-4 lg:mt-12 w-full sm:w-10/12 xl:w-8/12 mx-auto px-5 text-center !leading-9">Connect with us today for hassle-free money transfers and reliable transaction solutions</p>

                        <form className="mt-4 lg:mt-12">
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-dark-900 sr-only">Your Email Address</label>
                            <div className="relative w-full sm:w-10/12 xl:w-8/12 mx-auto">
                                <input type="email" id="email" className="block p-4 pl-10 md:text-lg text-gray-900 border border-gray-300 rounded-full bg-gray-50 w-full" placeholder="Your Email Address" required />
                                <button type="submit" className="absolute right-0 bottom-0 top-0 h-100 text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-md md:text-lg px-6 py-4 text-center transform">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-span-1 order-3">
                        <h2 className="mb-6 lg:text-2xl font-semibold text-white-900 mt-4 md:mt-8">Register</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="text-white-900 opacity-60 hover:opacity-100 transition text-base lg:text-xl">FAQ</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="text-white-900 opacity-60 hover:opacity-100 transition text-base lg:text-xl">Support Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="text-white-900 opacity-60 hover:opacity-100 transition text-base lg:text-xl">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="text-white-900 opacity-60 hover:opacity-100 transition text-base lg:text-xl">Terms and Condition</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-8 lg:py-12 mt-6 lg:mt-12">
                    <div className="flex space-x-4 justify-center">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="38" height="38" viewBox="0 0 42 42" fill="none">
                                <path d="M20.625 2.77148C10.6589 2.77148 2.57812 10.8523 2.57812 20.8184C2.57812 30.7844 10.6589 38.8652 20.625 38.8652C30.5911 38.8652 38.6719 30.7844 38.6719 20.8184C38.6719 10.8523 30.5911 2.77148 20.625 2.77148ZM29.298 16.3751C29.3101 16.5645 29.3101 16.7618 29.3101 16.9552C29.3101 22.8688 24.8064 29.6807 16.5765 29.6807C14.0387 29.6807 11.6862 28.9435 9.70422 27.6746C10.0668 27.7148 10.4132 27.731 10.7838 27.731C12.8785 27.731 14.8041 27.022 16.3389 25.8215C14.373 25.7812 12.7214 24.4922 12.1575 22.7197C12.8463 22.8204 13.4667 22.8204 14.1757 22.6392C13.1634 22.4335 12.2536 21.8838 11.6008 21.0834C10.948 20.2829 10.5924 19.2812 10.5945 18.2483V18.1919C11.1866 18.5262 11.8835 18.7317 12.6127 18.7599C11.9997 18.3514 11.4971 17.798 11.1492 17.1487C10.8014 16.4994 10.6191 15.7743 10.6187 15.0377C10.6187 14.2039 10.8362 13.4425 11.2269 12.7819C12.3504 14.1649 13.7524 15.2961 15.3417 16.1019C16.931 16.9076 18.6721 17.3699 20.4518 17.4587C19.8193 14.4174 22.0913 11.9561 24.8225 11.9561C26.1116 11.9561 27.2717 12.4958 28.0895 13.366C29.1006 13.1766 30.0674 12.798 30.9294 12.2904C30.5951 13.3257 29.8942 14.1998 28.9636 14.7517C29.866 14.655 30.7361 14.4053 31.5417 14.0548C30.9335 14.9491 30.1721 15.7427 29.298 16.3751Z" fill="white"/>
                            </svg>
                            <span className="sr-only">Twitter Page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white mt-[2px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="40" height="40" viewBox="0 0 42 42" fill="none">
                                <g clipPath="url(#clip0_82_412)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.75 16.9105C0.75 25.1137 6.70788 31.9351 14.5 33.3184V21.4012H10.375V16.8184H14.5V13.1512C14.5 9.02623 17.1579 6.73548 20.9171 6.73548C22.1079 6.73548 23.3921 6.91836 24.5829 7.10123V11.3184H22.475C20.4579 11.3184 20 12.3262 20 13.6105V16.8184H24.4L23.6671 21.4012H20V33.3184C27.7921 31.9351 33.75 25.1151 33.75 16.9105C33.75 7.78461 26.325 0.318359 17.25 0.318359C8.175 0.318359 0.75 7.78461 0.75 16.9105Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_82_412">
                                    <rect width="33" height="33" fill="white" transform="translate(0.75 0.318359)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="sr-only">Facebook Page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white mt-[2px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="43" height="43" viewBox="0 0 42 42" fill="none">
                                <g clipPath="url(#clip0_82_410)">
                                    <path d="M16.7502 0.978516C8.00186 0.978516 0.910156 8.07022 0.910156 16.8185C0.910156 25.5668 8.00186 32.6585 16.7502 32.6585C25.4985 32.6585 32.5902 25.5668 32.5902 16.8185C32.5902 8.07022 25.4985 0.978516 16.7502 0.978516ZM12.8727 23.3839H9.66506V13.0615H12.8727V23.3839ZM11.2491 11.7943C10.236 11.7943 9.58091 11.0765 9.58091 10.1888C9.58091 9.28297 10.2558 8.58667 11.2903 8.58667C12.3249 8.58667 12.9585 9.28297 12.9783 10.1888C12.9783 11.0765 12.3249 11.7943 11.2491 11.7943ZM24.5877 23.3839H21.3801V17.6633C21.3801 16.3318 20.9148 15.4276 19.7548 15.4276C18.8688 15.4276 18.3424 16.0397 18.1098 16.6288C18.024 16.8383 18.0025 17.1353 18.0025 17.4307V23.3822H14.7933V16.3532C14.7933 15.0646 14.752 13.9871 14.7091 13.0598H17.496L17.6428 14.4937H17.7072C18.1296 13.8205 19.1641 12.8272 20.895 12.8272C23.0053 12.8272 24.5877 14.2412 24.5877 17.2805V23.3839Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_82_410">
                                    <rect width="33" height="33" fill="white" transform="translate(0.25 0.318359)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="sr-only">Linkedin Page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="37" height="37" viewBox="0 0 42 42" fill="none">
                                <path d="M21.3718 15.4485C18.415 15.4485 16.0021 17.8614 16.0021 20.8182C16.0021 23.775 18.415 26.188 21.3718 26.188C24.3286 26.188 26.7416 23.775 26.7416 20.8182C26.7416 17.8614 24.3286 15.4485 21.3718 15.4485ZM37.477 20.8182C37.477 18.5946 37.4972 16.3911 37.3723 14.1715C37.2474 11.5934 36.6593 9.30527 34.774 7.42002C32.8847 5.53074 30.6007 4.94663 28.0226 4.82175C25.7989 4.69688 23.5954 4.71702 21.3758 4.71702C19.1522 4.71702 16.9487 4.69688 14.7291 4.82175C12.151 4.94663 9.86289 5.53477 7.97764 7.42002C6.08836 9.3093 5.50425 11.5934 5.37937 14.1715C5.25449 16.3951 5.27464 18.5986 5.27464 20.8182C5.27464 23.0378 5.25449 25.2453 5.37937 27.4649C5.50425 30.0431 6.09238 32.3312 7.97764 34.2164C9.86692 36.1057 12.151 36.6898 14.7291 36.8147C16.9527 36.9396 19.1562 36.9194 21.3758 36.9194C23.5995 36.9194 25.803 36.9396 28.0226 36.8147C30.6007 36.6898 32.8888 36.1017 34.774 34.2164C36.6633 32.3271 37.2474 30.0431 37.3723 27.4649C37.5012 25.2453 37.477 23.0418 37.477 20.8182ZM21.3718 29.0803C16.7997 29.0803 13.1097 25.3904 13.1097 20.8182C13.1097 16.2461 16.7997 12.5561 21.3718 12.5561C25.9439 12.5561 29.6339 16.2461 29.6339 20.8182C29.6339 25.3904 25.9439 29.0803 21.3718 29.0803ZM29.9723 14.1473C28.9048 14.1473 28.0427 13.2853 28.0427 12.2178C28.0427 11.1502 28.9048 10.2882 29.9723 10.2882C31.0398 10.2882 31.9018 11.1502 31.9018 12.2178C31.9022 12.4712 31.8525 12.7223 31.7556 12.9565C31.6587 13.1908 31.5166 13.4036 31.3374 13.5829C31.1581 13.7621 30.9453 13.9042 30.7111 14.0011C30.4768 14.0979 30.2258 14.1476 29.9723 14.1473Z" fill="white"/>
                            </svg>
                            <span className="sr-only">Instagram Page</span>
                        </a>
                    </div>
                    <span className="lg:text-xl text-gray-500 tracking-wider text-center mt-4 sm:mt-0">Copyright@transpay - {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
