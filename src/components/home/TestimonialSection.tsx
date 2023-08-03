const TestimonialSection = () => {
    return (
        <div className="mx-auto container px-5 mb-20 md:mb-36">
            <p className="text-3xl lg:text-4xl font-bold text-dark-900 leading-normal text-center">What Our <span className="text-pink-900">Client</span> Saying?</p>

            <p className="text-base lg:text-xl text-dark-900 opacity-60 tracking-wider mt-8 w-full md:w-8/12 mx-auto text-center">Real Stories from Satisfied Clients: Discover Their Experience with Our Money Transfer and Receive Services</p>

            <div className='flex mt-40 flex-col sm:flex-row'>
                <div className="relative inline-block mx-10">
                    <img className="w-auto shadow-6xl w-[400px] md:w-[500px] max-w-[50vw] sm:max-w-[30vw] mx-auto" src="/testimonial/1.jpg" alt="testimonial avatar" />
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
    );
};

export default TestimonialSection;
