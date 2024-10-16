import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 flex flex-col items-center justify-around">
      <div className="container mx-auto p-4 md:p-8 lg:p-20">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
            Bizimlə əlaqə
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="text-center">
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <h2 className="mt-4 text-lg md:text-xl font-medium text-red-500 dark:text-white">Bizim ofis</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">070 675 30 82<br />070 301 16 26</p>
          </div>

      

          <div className="text-center">
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <h2 className="mt-4 text-lg md:text-xl font-medium text-red-500 dark:text-white">Email</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">email əlaqə<br />camsistems@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
