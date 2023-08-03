// Data
import data from './data.json';

const AboutSection = () => {
  return (
    <>
        <div className="mx-auto container text-center">
            <p className="text-3xl lg:text-4xl font-bold text-dark-900 mt-8 md:mt-0 leading-normal">About <span className="text-pink-900">Transpay</span></p>

            <p className="text-base lg:text-xl text-dark-900 opacity-60 tracking-wider mt-8 w-full md:w-8/12 mx-auto px-5">we are dedicated to providing seamless and secure money transfer services to individuals and businesses alike. With our user-friendly platform.</p>
        </div>

        <div className="relative">
            <video className="w-9/12 mx-auto rounded-3xl mt-20" controls poster="/me.jpg">
                <source src={data.video[0].videoUrl} type={data.video[0].type} />
                Your browser does not support the video tag.
            </video>
            <span className="absolute left-[9%] top-[-1rem] md:top-[-3rem] w-3 h-3 md:w-6 md:h-6 bg-[#EB5757] rounded-sm"></span>
            <span className="absolute left-[1%] top-[36%] w-3 h-3 md:w-6 md:h-6 bg-[#85DAB9] rounded-full"></span>
            <span className="absolute left-[7%] bottom-[-1rem] md:bottom-[-3rem] w-3 h-3 md:w-6 md:h-6 bg-[#091686] rounded-full"></span>
            <span className="absolute right-[8%] top-[-1.2rem] md:top-[2rem] w-3 h-3 md:w-6 md:h-6 bg-[#219653] rounded-full"></span>
            <span className="absolute right-[2%] top-[60%] w-3 h-3 md:w-6 md:h-6 bg-[#333333] rounded-sm"></span>
            <span className="absolute right-[7%] bottom-[-2rem] md:bottom-[-5rem] w-3 h-3 md:w-6 md:h-6 bg-[#85DAB9] rounded-full"></span>
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto container mt-20 md:mt-36 px-5'>
            <div className="col-span-1">
                <p className="text-3xl lg:text-4xl font-bold text-dark-900 mt-8 md:mt-0 leading-normal">How we <span className="text-pink-900">support</span> our Users across the world</p>

                <p className="text-base lg:text-xl text-gray-300 tracking-wider mt-8">We provide a user-friendly platform that makes money transfers quick and hassle-free. Our intuitive interface guides you through the process, ensuring a smooth experience from start to finish.</p>

                <div className="flex flex-col sm:flex-row mt-8">
                    <div className="mr-10">
                        <div className="flex items-center space-x-2">
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
                        <p className="text-2xl font-normal text-gray-900 mt-2"><span className="font-bold">4.9</span> / 5 rating</p>
                        <p className="text-xl md:text-2xl font-bold text-gray-300 mt-2">Prime Leonard</p>
                    </div>
                    <div className='mt-6 sm:mt-0'>
                        <div className="flex items-center space-x-2">
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
                            <svg className="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                        <p className="text-2xl font-normal text-gray-900 mt-2"><span className="font-bold">4.8</span> / 5 rating</p>
                        <p className="text-xl md:text-2xl font-bold text-gray-300 mt-2">Kelechi</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 ml-0 lg:ml-20 mt-10 lg:mt-0">
                {data.services.map((item, index) => (
                    <div className="group relative flex gap-x-6 rounded-lg p-0 lg:px-4 py-4 text-sm leading-6 hover:bg-gray-50" key={'service ' + index}>
                        <div className="flex h-[60px] w-[60px] flex-none items-center justify-center rounded-lg shadow-4xl">
                            <img className="h-8 w-auto" src={item.imageUrl} alt={item.title} />    
                        </div>
                        <div className="flex-auto">
                            <a href="#" className="block font-semibold text-gray-900 text-xl">
                                {item.title}
                            </a>
                            <p className="mt-1 text-gray-300 text-lg">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='grid md:grid-cols-10 grid-cols-1 items-center mx-auto container my-20 md:my-36 px-5'>
            <div className="col-span-1 md:col-span-5 lg:col-span-4">
                <p className="text-3xl lg:text-4xl font-bold text-dark-900 mt-8 md:mt-0 leading-normal">Zero transfer <br className='hidden md:inline-block' />Fees & <span className="text-pink-900">affordable</span> <br className='hidden md:inline-block' />International Rates</p>
                <p className="text-base lg:text-xl text-gray-300 tracking-wider mt-8">Your money stay in your wallet, and money arrives in anyone your sending funds too as fast as possible.</p>
                <button type="button" className="hidden xl:block text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform mt-8">Transfer Now</button>
            </div>
            <div className="col-span-1 md:col-span-5 lg:col-span-6 mt-10 md:mt-0 ml-0 md:ml-10 md:ml-0 relative">
                <img src="/service/4.png" alt="zero" className="object-contain w-4/5 lg:w-3/5 lg:mr-auto md:mr-0 ml-auto mr-auto" />
                <img src="/service/5.png" alt="zero widgets" className="absolute top-[5%] w-[14rem] md:w-[14rem] lg:w-auto" />
                <img src="/service/6.png" alt="zero widgets" className="absolute top-[20%] right-[0] md:right-[-5%] lg:right-[10%] w-[8rem] md:w-[10rem] lg:w-auto" />
                <img src="/service/7.png" alt="zero widgets" className="absolute bottom-[10%] w-[14rem] md:w-[14rem] lg:w-auto" />
            </div>
        </div>
    </>
  );
};

export default AboutSection;
