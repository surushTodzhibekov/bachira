import React from "react";
import productAirForce from "../assets/images/product-air-force.png";
import whiteSweater from "../assets/images/white-sweater.png";
import smartwatch from "../assets/images/smartwatch.png";
import airpods from "../assets/images/airpods.png";

const Products: React.FC = () => {
  const products = [
    {
      name: "Nike Air Force",
      price: "$2.999.999",
      image: productAirForce,
    },
    {
      name: "White Sweter",
      price: "$299.999",
      image: whiteSweater,
    },
    {
      name: "Android Smartwatch",
      price: "$1.399.999",
      image: smartwatch,
    },
    {
      name: "Apple Airpods",
      price: "$2.599.999",
      image: airpods,
    },
    {
      name: "Female White T-Shirt",
      price: "$999.999",
      image: whiteSweater,
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="px-8 lg:px-[120px]">
          <h2 className="text-[32px] font-bold text-gray-900 mb-8">
            Populer Products From
            <br />
            All Brands
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-[30px] pb-4 scrollbar-hide pl-8 lg:pl-[120px] pr-8 lg:pr-[120px]">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 hover:opacity-90 transition-shadow duration-300 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
            >
              <div className="w-[280px] h-[380px] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-base text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
