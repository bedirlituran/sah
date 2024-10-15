import React from 'react';

const Pricing = () => {
  return (
    <>
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-6 text-black">Kamera Paketləri</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Hər kəs üçün sərfəli təhlükəsizlik kamera paketləri</p>
          </div>
          <p className="mx-auto mt-4 max-w-md text-center text-lg leading-6 text-black">
            CamSystems ilə ehtiyaclarınıza uyğun mükəmməl təhlükəsizlik planını seçin.
          </p>
     
          <div className="isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Basic Security Camera Plan */}
            <div className="rounded-2xl p-6 ring-1 xl:p-8 ring-yellow-400">
              <h3 id="tier-basic" className="text-lg font-semibold leading-6 text-orange-600">Əsas Kamera Paketi</h3>
              <p className="mt-2 text-sm leading-6 text-green-600">Pulsuz qoşulma.</p>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-3xl font-bold tracking-tight text-pink-900">30 AZN</span>
                <span className="text-sm font-semibold leading-6 text-purple-600">/aylıq</span>
              </p>
              <a href="#" aria-describedby="tier-basic" className="mt-4 block rounded-md py-1.5 px-2.5 text-center text-sm font-semibold leading-6 bg-cyan-600 text-gray-600 shadow-sm hover:bg-red-500">Qoşul</a>
              <ul role="list" className="mt-4 space-y-2 text-sm leading-6 text-gray-400">
                <li className="flex gap-x-2">1 Kamera</li>
                <li className="flex gap-x-2">1080p HD görüntü</li>
                <li className="flex gap-x-2">24/7 video izləmə</li>
              </ul>
            </div>
            {/* Standard Security Camera Plan */}
            <div className="rounded-2xl p-6 ring-1 xl:p-8 ring-gray-700">
              <h3 id="tier-standard" className="text-lg font-semibold leading-6 text-gray-900">Standart Kamera Paketi</h3>
              <p className="mt-2 text-sm leading-6 text-cyan-600">Pulsuz qoşulma.</p>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-3xl font-bold tracking-tight text-yellow-700">50 AZN</span>
                <span className="text-sm font-semibold leading-6 text-teal-600">/aylıq</span>
              </p>
              <a href="#" aria-describedby="tier-standard" className="mt-4 block rounded-md py-1.5 px-2.5 text-center text-sm font-semibold leading-6 bg-green-600 text-white shadow-sm hover:bg-green-800">Qoşul</a>
              <ul role="list" className="mt-4 space-y-2 text-sm leading-6 text-pink-600">
                <li className="flex gap-x-2">3 Kamera</li>
                <li className="flex gap-x-2">1080p HD görüntü</li>
                <li className="flex gap-x-2">Hərəkət sensoru</li>
                <li className="flex gap-x-2">24/7 video izləmə</li>
              </ul>
            </div>
            {/* Premium Security Camera Plan */}
            <div className="rounded-2xl p-6 ring-1 xl:p-8 bg-gray-900 ring-gray-900">
              <h3 id="tier-premium" className="text-lg font-semibold leading-6 text-white">Premium Kamera Paketi</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">Tam təhlükəsizlik həlli.</p>
              <p className="mt-4 flex items-baseline gap-x-1">
                <span className="text-3xl font-bold tracking-tight text-white">90 AZN</span>
                <span className="text-sm font-semibold leading-6 text-white">/aylıq</span>
              </p>
              <a href="#" aria-describedby="tier-premium" className="mt-4 block rounded-md py-1.5 px-2.5 text-center text-sm font-semibold leading-6 bg-white/10 text-white hover:bg-white/20">Qoşul</a>
              <ul role="list" className="mt-4 space-y-2 text-sm leading-6 text-gray-300">
                <li className="flex gap-x-2">5 Kamera</li>
                <li className="flex gap-x-2">4K UHD görüntü</li>
                <li className="flex gap-x-2">Hərəkət sensoru</li>
                <li className="flex gap-x-2">Gecə görmə</li>
                <li className="flex gap-x-2">24/7 video izləmə</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
