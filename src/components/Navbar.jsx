
import { useState } from "react";
import { LuAlignRight } from "react-icons/lu";
import { LuX } from "react-icons/lu";

const Navbar = () => {
    const [mobile, setMobile] = useState(false);

  return (
    <nav className="fixed top:0 w-full z-50 transition-all duration-300 bg-slate-950/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div className="w-6 h-6 sm:w-8 sm:h-8">
              <img src="vite.svg" alt="ProDev Institute" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Pro</span>
              <span className="text-blue-400">Dev</span>
            </span>
          </div>

          {/*nav links */}
          <div className=" hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm: lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm: lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm: lg:text-base"
            >
              Testimonials
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobile((prev) => !prev)}
          >
            {mobile ? (
              <LuX className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
            ) : (
              <LuAlignRight className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer " />
            )}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#features"
              onClick={() => setMobile(false)}
              className="text-gray-300 hover:text-white text-sm: lg:text-base block"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobile(false)}
              className="text-gray-300 hover:text-white text-sm: lg:text-base block"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobile(false)}
              className="text-gray-300 hover:text-white text-sm: lg:text-base block"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
