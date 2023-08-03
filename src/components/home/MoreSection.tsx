import React from "react";

const MoreSection = () => {
  return (
    <div className="bg-purple-900 py-16 md:py-24 px-5 mt-24 sm:mt-52 relative">
        <div className="mx-auto container text-center">
            <p className="text-3xl lg:text-4xl font-bold text-white-900 leading-normal md:w-8/12 mx-auto">Our worldwide <span className="text-pink-900">integration</span> partner work with long time relationship</p>

            <button type="button" className="text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform mt-8 mx-auto">Explore More</button>
        </div>
    </div>
  );
};

export default MoreSection;
