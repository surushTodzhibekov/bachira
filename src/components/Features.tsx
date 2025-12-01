import React from "react";
import deliveryIcon from "../assets/featured/delivery-icon.svg";
import trustedIcon from "../assets/featured/trusted-icon.svg";
import support247Icon from "../assets/featured/24-7-icon.svg";

const Features: React.FC = () => {
  const features = [
    {
      icon: deliveryIcon,
      title: "Free Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
    },
    {
      icon: trustedIcon,
      title: "Trusted Platfrom",
      description:
        "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
    },
    {
      icon: support247Icon,
      title: "Here For You",
      description:
        "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor",
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-[120px]">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-gray-900 mb-4">
            Why Choose Bachira?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[100px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-5 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#535A56] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
