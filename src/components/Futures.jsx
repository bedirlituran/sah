"use client";
import React from "react";

const Futures = () => {
  const imageSets = [
    ["/image/mehsul1.png"],
    ["/image/mehsul2.png"],
    ["/image/mehsul3.png"],
    ["/image/mehsul7.png"],
    ["/image/mehsul5.png"],
    ["/image/mehsul6.png"],
  ];



  const model = [
    ["CAMSISTEMS"],
    ["CAMSISTEMS"],
    ["CAMSISTEMS"],
    ["CAMSISTEMS"],
    ["CAMSISTEMS"],
    ["CAMSISTEMS"],
  ];

  const description = [
    ["Model:2230 , Ip c kamera , Lens:8,0MM , 2Mp"],
    ["Model:2240 , Ip c kamera , Lens:3,6MM , 2Mp"],
    ["Model:965 ,  Ip c kamera , Lens:2,8MM , 2Mp"],
    ["Model:NH RN-200H, Ip kamera , Pal 36X , 2Mp"],
    ["Model:2210 , Ip kamera , Lens:2,8MM , 4Mp"],
    ["Model:2225 , Ip c kamera , Lens:3,6MM , 4Mp"],
  ];

  return (
    <div className="px-6 md:px-20 py-10 bg-opacity-10">
      {/* Başlık Bölümü */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Ən çox satılan məhsullarımız</h1>
        <p className="text-gray-600">CAMSİSTEMS ilə kəşf edin</p>
      </div>

      {/* Grid Yapısı */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Her kart kendi içinde karusel olacak şekilde ayarlandı */}
          {imageSets.map((images, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-[450px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                {/* Karusel için Slider */}
                {images.map((img, imgIndex) => (
                  <div key={imgIndex} className="border-none outline-none">
                    <img
                      src={img}
                      alt={`Resim ${imgIndex + 1}`}
                      className="w-full h-[350px] object-contain rounded-lg"
                    />
                  </div>
                ))}

                {/* Model, Fiyat, Açıklama */}
                <div className="p-4 text-left">
                  <h1 className="font-bold text-lg">
                    <span className="font-bold">Məhsul:</span> {model[index]}
                  </h1>
                  
                  <p className="text-gray-600 text-sm">{description[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="w-full bg-gray-100 py-6 flex justify-center mt-8">
        <p className="text-slate-700">
          <span className="text-blue-500">Kömək lazımdır? </span>
          Rəhbərlik üçün bu gün bizimlə əlaqə saxlayın.
        </p>
      </div>
    </div>
  );
};

export default Futures;
