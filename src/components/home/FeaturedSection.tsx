import React from "react";

// Data
import data from './data.json';

const FeaturedSection = () => {
  return (
    <div className="bg-purple-900 py-16 md:py-24 px-5">
      <div className="mx-auto container text-center">
        <p className="text-3xl lg:text-4xl font-bold text-white-900 leading-normal">Why should you choose <span className="text-pink-900">Transpay</span>?</p>

        <p className="text-base lg:text-xl text-white-900 opacity-80 tracking-wider mt-8 w-full md:w-8/12 mx-auto px-5">Here’s Top 4 reasons why using a Transpay account for manage your money.</p>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container space-x-2 mx-auto mt-4 md:mt-12 lg:mt-20 px-5'>
        {data.features.map((item, index) => (
          <div className="col-span-1 pr-4 mt-10 lg:mt-0" key={'feature ' + index}>
            <img className="h-10 w-auto" src={item.imageUrl} alt={item.title} />
            <p className="text-base lg:text-xl text-white-900 opacity-80 font-bold tracking-wider mt-4">{item.title}</p>
            <p className="lg:text-lg text-white-900 opacity-60 tracking-wider mt-4 leading-normal">{item.description}</p>
            <button type="button" className="text-seagreen-900 hover:opacity-90 transition font-semibold lg:text-lg text-center inline-flex items-center mt-4">
              Learn more <svg className="fill-seagreen-900 ml-2" height="12px" width="12px" version="1.1" id={'featured icon ' + index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" strokeWidth="4" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
            </button>
          </div>))}
      </div>
    </div>
  );
};

export default FeaturedSection;
