import React from "react";
import fashionImg from "../assets/images/fashion-img.svg";
import skincareImg from "../assets/images/skincare-img.svg";
import shoesImg from "../assets/images/shoes-img.svg";
import electronicImg from "../assets/images/electronic-img.svg";

const Categories: React.FC = () => {
  const categories = [
    {
      name: "Fashion",
      items: "30,000 items",
      image: fashionImg,
    },
    {
      name: "Skincare",
      items: "2,000 items",
      image: skincareImg,
    },
    { name: "Shoes", items: "10,000 items", image: shoesImg },
    {
      name: "Electronic",
      items: "10,000 items",
      image: electronicImg,
    },
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-[120px]">
        <h2 className="text-[32px] font-bold text-gray-900 mb-8">
          Browse Categories of
          <br />
          The Store
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px]">
          {/* First column with 2 horizontal cards */}
          <div className="flex flex-col gap-[26px]">
            {categories.slice(0, 2).map((category, index) => (
              <div
                key={index}
                className="relative h-[180px] rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 hover:bg-black/20 transition-all duration-300">
                  <div className="flex items-start justify-end h-full pt-8 pr-8">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">
                        {category.name}
                      </h3>
                      <p className="text-base">{category.items}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second column with 2 vertical cards */}
          <div className="flex gap-[26px]">
            {categories.slice(2, 4).map((category, index) => (
              <div
                key={index}
                className={`relative ${
                  index === 0 ? "w-[287px]" : "w-[361px]"
                } h-[386px] rounded-lg overflow-hidden group cursor-pointer`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 hover:bg-black/10 transition-all duration-300">
                  <div className="flex items-start justify-end h-full pr-8 pt-8">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-bold mb-1">
                        {category.name}
                      </h3>
                      <p className="text-base">{category.items}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
