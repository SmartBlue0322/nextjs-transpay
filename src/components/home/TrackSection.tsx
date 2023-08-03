import React, { useRef } from "react";

// Data
import data from './data.json';
const TrackSection = () => {
    const videoRef = useRef(null);

    const videoHandler = (control) => {
        if (control === "play") {
          videoRef.current.play();
        } else if (control === "pause") {
          videoRef.current.pause();
        }
    };

    return (
        <>
            <div className='grid md:grid-cols-10 grid-cols-1 items-center mx-auto container my-20 md:my-36 px-5'>
                <div className="col-span-1 md:col-span-5">
                    <div className="relative mr-auto md:mr-0 md:ml-8 lg:mr-20">
                        <video className="md:w-9/12 mx-auto rounded-3xl relative" ref={videoRef} src={data.video[1].videoUrl}
                        poster="/track.jpg">
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition">
                            <div className="controls">
                                <img className="h-20 w-20" alt="play icon" src="/track/6.png" onClick={() => videoHandler("play")} />
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="col-span-1 md:col-span-5 mt-10 md:mt-0 ml-0 md:ml-10 md:ml-0 relative">
                    <p className="text-3xl lg:text-4xl font-bold text-dark-900 leading-normal">How does it <span className="text-pink-900">work</span></p>
                    <p className="text-base lg:text-xl text-gray-600 tracking-wider mt-2">Revolutionizing money transfer: Instant, secure transactions. User-friendly interface for effortless sending and receiving</p>
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
            <div className="mx-auto container text-center px-5">
                <p className="text-3xl lg:text-4xl font-bold text-dark-900 leading-normal">Track the status of your <span className="text-pink-900">payments</span></p>
                <p className="text-base lg:text-xl text-gray-600 tracking-wider mt-8 w-full md:w-8/12 mx-auto px-5">"Stay informed: Easily track the status of your payments in real-time. Enjoy peace of mind with transparent visibility into every transaction</p>
            </div>
            <div className="relative mx-auto container text-center grid grid-cols-1 sm:grid-cols-2 md:block mt-8 xl:mt-20 space-x-4 space-y-4 px-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="793" height="478" viewBox="0 0 793 478" fill="none" className="w-full px-6 hidden md:inline-block col-span-2">
                    <path d="M287.177 2.59619C272.677 20.7164 220.923 90.7468 265.328 122.754C342.252 178.201 537.021 109.146 570.031 107.01C641.439 97.5497 784.255 97.3056 784.255 172.012C784.255 302.154 418.456 269.973 275.976 266.311C133.496 262.649 -12.7974 291.493 4.15551 375.76C53.3287 620.182 790.292 320.198 790.292 451.859" stroke="#F7556A" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10"/>
                    <path d="M287.177 2.59619C272.677 20.7164 220.923 90.7468 265.328 122.754C342.252 178.201 537.021 109.146 570.031 107.01C641.439 97.5497 784.255 97.3056 784.255 172.012C784.255 302.154 418.456 269.973 275.976 266.311C133.496 262.649 -12.7974 291.493 4.15551 375.76C53.3287 620.182 790.292 320.198 790.292 451.859" stroke="url(#paint0_linear_119_439)" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10"/>
                    <defs>
                        <linearGradient id="paint0_linear_119_439" x1="460.224" y1="1.34998" x2="460.224" y2="482.841" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F15678"/>
                        <stop offset="1" stopColor="#CE5ADA"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div className="col-span-1 static md:absolute md:top-[1%] lg:top-[-5%] md:left-[3%] lg:left-[23%] bg-white-900 shadow-5xl rounded-3xl p-5 md:w-[21rem] md:max-w-[90vw] !ml-0">
                    <img className="w-auto mx-auto" src="/track/1.png" alt="track icon" />
                    <p className="text-base lg:text-xl text-gray-600 tracking-wider mt-6 !leading-relaxed">Keep track of your payment requests</p>
                </div>
                <div className="col-span-1 static md:absolute md:top-[20%] lg:top-[16%] md:right-[2%] lg:right-[6%] bg-white-900 shadow-5xl rounded-3xl p-5 md:w-[21rem] md:max-w-[90vw] !ml-0 sm:!ml-4">
                    <img className="w-auto mx-auto" src="/track/2.png" alt="track icon" />
                    <p className="text-base lg:text-xl text-gray-600 tracking-wider mt-6 !leading-relaxed">Send reminders to get paid on time</p>
                </div>
                <div className="col-span-1 static md:absolute md:top-[52%] lg:top-[58%] md:left-[3%] lg:left-[5%] bg-white-900 shadow-5xl rounded-3xl p-5 md:w-[21rem] md:max-w-[90vw] !ml-0">
                    <img className="w-auto mx-auto" src="/track/3.png" alt="track icon" />
                    <p className="text-base lg:text-xl text-gray-600 tracking-wider mt-6 !leading-relaxed">Track the status of each payment</p>
                </div>
                <div className="col-span-1 static md:absolute top-[75%] md:right-[2%] lg:right-[12%] bg-white-900 shadow-5xl rounded-3xl p-5 md:w-[21rem] md:max-w-[90vw] !ml-0 sm:!ml-4">
                    <img className="w-auto mx-auto" src="/track/4.png" alt="track icon" />
                    <p className="text-base lg:text-xl text-gray-600 tracking-wider mt-6 !leading-relaxed">Clicking on a specific payment within your overview</p>
                </div>
            </div>
        </>
    );
};

export default TrackSection;
