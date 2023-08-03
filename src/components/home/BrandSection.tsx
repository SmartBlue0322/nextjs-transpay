// Data
import data from './data.json';

const BrandSection = () => {
  return (
    <div className="mx-auto container">
        <div className='px-6 py-12 shadow-3xl rounded-3xl -translate-y-12 md:-translate-y-24 lg:-translate-y-1/2 bg-white-900 text-center mx-5'>
            <p className="text-base lg:text-2xl text-dark-900 opacity-60 tracking-wider mt-4 mb-6">Over 2k+ software businesses growing with TransPay</p>

            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2'>
                {data.brands.map((brand, index) => {
                    return (
                        <div
                            key={index}
                            className="col-span-1 flex items-center justify-center mx-auto px-4 min-h-[86px]"
                        >
                            <img
                                src={brand.imageUrl || ''}
                                alt={brand.title}
                                className=""
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default BrandSection;
