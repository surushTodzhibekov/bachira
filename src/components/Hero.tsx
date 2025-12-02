import React, { useState } from "react";
import logo from "../assets/logo.svg";
import heroImage from "../assets/images/hero_image.png";

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-8 lg:px-[120px] py-6 sm:py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer flex-shrink-0">
            <img src={logo} alt="Logo image" className="h-8 sm:h-9 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <a
              href="#home"
              onClick={handleScrollToSection}
              className="text-base font-medium text-gray-900 hover:text-[#3C9379] transition"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={handleScrollToSection}
              className="text-base font-medium text-gray-500 hover:text-[#3C9379] transition"
            >
              Products
            </a>
            <a
              href="#categories"
              onClick={handleScrollToSection}
              className="text-base font-medium text-gray-500 hover:text-[#3C9379] transition"
            >
              Categories
            </a>
            <a
              href="#brands"
              onClick={handleScrollToSection}
              className="text-base font-medium text-gray-500 hover:text-[#3C9379] transition"
            >
              Brands
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-5">
            <button className="text-base font-medium text-gray-900 hover:text-[#3C9379] transition">
              Login
            </button>
            <button className="bg-[#3C9379] text-white px-[18px] py-3 rounded-lg text-base font-medium hover:bg-[#2d6f5c] transition">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col space-y-1.5 p-2"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                onClick={handleScrollToSection}
                className="text-sm font-medium text-gray-900 hover:text-[#3C9379] transition py-2"
              >
                Home
              </a>
              <a
                href="#products"
                onClick={handleScrollToSection}
                className="text-sm font-medium text-gray-500 hover:text-[#3C9379] transition py-2"
              >
                Products
              </a>
              <a
                href="#categories"
                onClick={handleScrollToSection}
                className="text-sm font-medium text-gray-500 hover:text-[#3C9379] transition py-2"
              >
                Categories
              </a>
              <a
                href="#brands"
                onClick={handleScrollToSection}
                className="text-sm font-medium text-gray-500 hover:text-[#3C9379] transition py-2"
              >
                Brands
              </a>

              <button className="text-sm font-medium text-gray-900 hover:text-[#3C9379] transition py-2 text-left">
                Login
              </button>
              <button className="w-full bg-[#3C9379] text-white px-3 sm:px-[18px] py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#2d6f5c] transition mt-2">
                Register
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-8 lg:px-[120px] py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-[54px] font-bold text-gray-900 leading-tight">
              Best Place to Buy
              <br />
              Everything.
            </h1>

            <p className="text-sm text-[#535A56] leading-relaxed max-w-md">
              At Bachira, you can shop for all your favorite beauty brands,
              clothes, household products and more at a single place.
            </p>

            <div>
              <button className="bg-[#3C9379] text-white px-[22px] py-4 rounded-lg text-base font-medium hover:bg-[#2d6f5c] transition shadow-lg hover:shadow-xl">
                Shopping Now
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-auto aspect-square lg:aspect-auto lg:h-[624px]">
              {/* Placeholder for hero image - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={heroImage}
                  alt="Shopping illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
