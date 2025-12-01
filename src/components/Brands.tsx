import React from "react";
import tokopedia from "../assets/brands/tokopedia.svg";
import bukalapak from "../assets/brands/bukalapak.svg";
import adidas from "../assets/brands/adidas.svg";
import gucci from "../assets/brands/gucci.svg";
import balenciaga from "../assets/brands/balenciaga.svg";

const Brands: React.FC = () => {
  const brands = [
    { name: "TOKOPEDIA", logo: tokopedia },
    { name: "BUKALAPAK", logo: bukalapak },
    { name: "ADIDAS", logo: adidas },
    { name: "GUCCI", logo: gucci },
    { name: "BALENCIAGA", logo: balenciaga },
  ];

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-[120px]">
        <h2 className="text-[32px] font-bold text-gray-900 text-center mb-16">
          We Collaborate With 250++ Leading Top
          <br />E Commerce and Brands
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-10">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="h-12 sm:h-14 lg:h-16 hover:opacity-80 transition-opacity duration-300 cursor-pointer flex items-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain max-w-[207px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
