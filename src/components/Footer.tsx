import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-8 lg:px-[120px]">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-12">
          <div className="flex flex-col gap-4 max-w-xs">
            <h3 className="text-[32px] font-bold text-gray-900">Bachira</h3>
            <p className="text-base text-[#535A56] leading-relaxed">
              Bachira is an online store dealing with all product Bachira
              provide cheap, high quality, products to customers
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-gray-900">For Beginner</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                About
              </a>
              <a
                href="#career"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                Career
              </a>
              <a
                href="#promotion"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                Promotion
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-gray-900">Overview</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#products"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                Product
              </a>
              <a
                href="#categories"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                Categories
              </a>
              <a
                href="#pricing"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                Pricing
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-gray-900">Explore Us</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#career"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                Our Career
              </a>
              <a
                href="#privacy"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                Terms & Conditions
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-gray-900">Connect Us</h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:support@bachira.com"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                support@bachira.com
              </a>
              <a
                href="tel:021-555-456"
                className="text-sm text-[#535A56] hover:text-[#3C9379] transition"
              >
                021 - 555 -456
              </a>
              <p className="text-sm text-[#535A56]">Sudirman, South Jakarta</p>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center border-t border-gray-200">
          <p className="text-sm text-[#535A56]">
            Copyright 2025 • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
