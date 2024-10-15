"use client"
import React from 'react';



const Futures = () => {


  const imageSets = [
    [
      "/image/mehsul1.png",
    
    ],
    [
      "/image/mehsul2.png",
   
    ],
    [
      "/image/mehsul3.png",
    
    ],
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BUQbI21tkZfaahGX8xKZ23bxz1ivxji3DQ&s",
  
    ],
    [
      "/image/mehsul4.png",
  
    ],
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd0lfOTuDH3Q5X5WvIbkQSD6jMLRwogdLGaw&s",
 
    ],
  ];
  const price = [
    [
      "25AZN"
    ],

  ]
  return (
    <div className="px-6 md:px-20 py-10 bg-opacity-10">
      {/* Başlık Bölümü */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Ən çox satılan məhsullarımız</h1>
        <p className="text-gray-600">CAMSYSTEMS ilə kəşf edin</p>
      </div>
      <div className="container mx-auto px-6 py-10">
      
      {/* Grid Yapısı */}
      <div className="container mx-auto px-6 py-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Her kart kendi içinde karusel olacak şekilde ayarlandı */}
        {imageSets.map((images, index) => (
          <div key={index} className="relative">
            <div className="w-full h-[450px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              {/* Karusel için Slider */}
              <div>
                {images.map((img, imgIndex) => (
                  <div key={imgIndex} className='p-2 border-none outline-none'>
                    <img
                      src={img}
                      alt={`Resim ${imgIndex + 1}`}
                      className="w-full h-[350px] object-cover rounded-lg outline-none border-none"
                    />
                    <h1><span className='font-bold'>Mehsul:</span> 2mbpx reqemsal kamera</h1>
                    <h2><span className='font-semibold'>Qiymet:</span> {price[0]}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

      <div className="w-full bg-gray-100 py-6 flex justify-center mt-8">
        <p className="text-slate-700">
        <span className='text-blue-500'>Kömək lazımdır? </span>Rəhbərlik üçün bu gün bizimlə əlaqə saxlayın.
        </p>
      </div>
    </div>
  );
}

export default Futures;
