import React from "react";

// Data
import data from './data.json';

const LocationSection = () => {
  return (
    <div className="bg-purple-900 py-16 md:py-24 px-5 mt-24 md:mt-52 relative">
        <img className="absolute w-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4" src="/worldmap2.png" alt="world map" />

        <div className="mx-auto container text-center">
            <p className="text-3xl lg:text-4xl font-bold text-white-900 leading-normal">Where are your clients <span className="text-pink-900">located</span>?</p>

            <select className="block p-4 text-xl text-white-900 rounded-md bg-white-900 bg-opacity-20 w-[21rem] max-w-[80vw] mx-auto mt-6 border-r-[12px] border-solid border-white-900 border-opacity-5" defaultValue="">
                <option value="" className="text-dark-900">Select a location</option>
                <option value="US" className="text-dark-900">United States</option>
                <option value="CA" className="text-dark-900">Canada</option>
                <option value="FR" className="text-dark-900">France</option>
                <option value="DE" className="text-dark-900">Germany</option>
            </select>

            <p className="text-base lg:text-xl text-white-900 opacity-80 tracking-wider mt-8 w-full md:w-8/12 mx-auto px-5">Offer your clients to pay via</p>
        </div>

        <div className='container grid md:grid-cols-3 grid-cols-1 container space-x-2 mx-auto mt-4 md:mt-12 lg:mt-20'>
            {data.location.map((item, index) => (
            <div className="col-span-1 pr-4 mt-10 lg:mt-0 " key={'location ' + index}>
                <img className="h-16 w-auto mx-auto" src={item.imageUrl} alt={item.title} />
                <p className="text-base lg:text-xl text-white-900 text-center font-bold tracking-wider mt-4">{item.title}</p>
            </div>))}
        </div>
    </div>
  );
};

export default LocationSection;
