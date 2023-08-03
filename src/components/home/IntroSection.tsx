export default function IntroSection() {
  return (
    <div className="bg-purple-900 mt-[108px] xl:mt-32">
        <div className="container flex flex-col md:flex-row items-strech justify-center md:justify-between mx-auto py-6 px-6 md:py-12 min-h-[900px] md:min-h-[500px] lg:min-h-[900px]">
            <div className="flex flex-col justify-center md:w-[40%] mb-0 md:mb-20">
                <h2 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-bold text-white-900">Transfer<br className="hidden md:inline-block"/> your <span className="text-seagreen-900">funds </span><br/>across borders <br className="hidden md:inline-block"/>with ease.</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-[300px] xl:w-fit md:w-auto w-max max-w-[50vw]" width="488" height="35" viewBox="0 0 488 35" fill="none">
                  <path d="M4.8269 30.6973C74.4576 11.0771 267.74 -16.3912 483.827 30.6973" stroke="#93E9BE" strokeWidth="8" strokeLinecap="round"/>
                </svg>
                <p className="text-base lg:text-xl text-white-900 opacity-60 tracking-wider mt-8 xl:mt-8">Send and receive money across Asia the fast and easy way. Enjoy free transfers and the lowest cross-border rates.</p>
                <div className="flex flex-col lg:flex-row mt-8 xl:mt-16">
                  <button type="button" className="text-white-900 bg-gradient-to-t from-purple-600 to-pink-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[3rem] text-md md:text-lg px-6 py-3.5 text-center transform">Explore More</button>
                  <div className="flex mt-6 lg:mt-0 items-center">
                    <span className="lg:mx-6 ml-0 mr-6 text-white-900 text-whilder ">How it works</span>
                    <button className="hover:scale-110 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <path d="M17.8269 28.1401V16.54C17.8269 15.7902 18.6216 15.3071 19.2872 15.6523L29.7273 21.0656C30.4241 21.427 30.452 22.4135 29.7768 22.8137L19.3367 29.0004C18.6701 29.3954 17.8269 28.9149 17.8269 28.1401Z" fill="white" stroke="white"/>
                        <circle cx="22.3269" cy="22.3951" r="20.5" stroke="white" strokeWidth="2"/>
                      </svg>
                      <span className="sr-only">Icon description</span>
                    </button>
                  </div>
                </div>
            </div>
            <div className="relative md:w-[60%] mt-8 md:mt-0 md:ml-auto flex items-center justify-center md:justify-end mb-0 md:mb-20">
                <img src="/worldmap.png" alt="intro banner" className="object-contain w-full" />
                <img src="/intro-back.png" alt="intro banner background widgets" className="max-w-100 absolute w-3/5 md:w-auto top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2" />
                <img src="/intro-card.png" alt="intro banner background widgets" className="absolute bottom-0 md:bottom-32 right-1/4 translate-x-1/2 -translate-y-1/2 xl:w-auto md:w-[150px] w-[14%]" />
            </div>
        </div>
    </div>
  )
}
