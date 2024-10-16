import React from "react";

const Reklam = () => {
  return (
    <div className="relative pt-8 p-6 sm:p-12 lg:p-16 sm:pt-0 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 justify-center">
        {/* Sol içerik */}
        <div className="content mx-auto text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <hr className="w-8 bg-orange-500 border" />
            <span className="text-[18px] lg:text-[20px] font-medium text-gray-800">
              HAQQIMIZDA
            </span>
          </div>
          <p className="text-[28px] sm:text-[32px] lg:text-[40px] xl:text-[45px] font-bold leading-tight mt-4">
            20 İllik Təcrübə ilə Xidmət.
            <br />
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-700">
            Biz, 20 illik təcrübəmizlə müştərilərimizin ehtiyaclarına uyğun yüksək
            <br className="hidden md:block" /> keyfiyyətli xidmətlər təqdim
            edirik
          </p>
          <div className="flex flex-col items-start pt-4 gap-6 justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded shadow border border-yellow-300 checked:bg-yellow-600 checked:border-yellow-600"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <label className="ml-2 text-gray-700 font-bold text-base sm:text-lg">
                  Keyfiyyətli məhsul
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded shadow border border-yellow-300 checked:bg-yellow-600 checked:border-yellow-600"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <label className="ml-2 text-gray-700 font-bold text-base sm:text-lg">
                  24/7 Xidmət və nəzarət
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded shadow border border-yellow-300 checked:bg-yellow-600 checked:border-yellow-600"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <label className="ml-2 text-gray-700 font-bold text-base sm:text-lg">
                  Texniki baxış və konsultasiya
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded shadow border border-yellow-300 checked:bg-yellow-600 checked:border-yellow-600"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <label className="ml-2 text-gray-700 font-bold text-base sm:text-lg">
                  Etibarli iş
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-8 justify-center md:justify-start">
            <button className="font-medium text-[14px] flex items-center px-4 py-2 md:py-3 md:px-6 rounded-lg bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500 transition duration-300 hover:scale-105 text-white shadow-md">
              DAHA ƏTRAFLI
              <span className="animate-ping absolute right-0 top-0 w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-700"></span>
            </button>
          </div>
        </div>

        {/* Sağ içerik */}
        <div className="relative sm:mt-0 mt-8 px-4 shadow-xl sm:px-0 mx-auto">
          <img
            className="w-full h-auto max-w-[500px] max-h-[600px] animate__animated animate__fadeInRight object-cover"
            src="https://www.geniuscript.com/serity-wp/wp-content/uploads/2020/06/about-img.jpg"
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default Reklam;
