// Data
import data from './data.json';

const SolutionSection = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 items-center mx-auto container my-20 md:my-36 px-5'>
        <div className="col-span-1 md:pr-4">
            <p className="text-3xl lg:text-4xl font-bold text-dark-900 leading-normal">Payment <br className='hidden md:inline-block' /><span className="text-pink-900">Solutions</span> for everyone.</p>
            <p className="text-base lg:text-xl text-gray-600 tracking-wider mt-8">Our payment solutions are built with inclusivity in mind. We understand that each person's financial situation is unique, which is why we offer flexible payment plans and transparent pricing options to ensure affordability.</p>
            <button type="button" className="text-purple-900 hover:opacity-90 transition font-semibold lg:text-lg text-center inline-flex items-center mt-8">
              Find more solution <svg className="fill-purple-900 ml-2" height="12px" width="12px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" strokeWidth="4" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
            </button>
        </div>
        <div className="col-span-1 mt-10 md:mt-0 ml-0 md:ml-10 md:ml-0 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.solution.map((item, index) => (
                <div key={'solution' + index} className='relative'>
                    <img className="h-auto w-full rounded-lg" src={item.imageUrl} alt={item.title} />
                    <p className='absolute left-0 right-0 bottom-0 p-4 font-normal lg:text-xl text-white-900 bg-dark-900 bg-opacity-50 hover:bg-opacity-80 transition text-center'>{item.title}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default SolutionSection;
