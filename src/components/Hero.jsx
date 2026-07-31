import { useEffect, useState } from "react";
import {
  LuArrowBigRightDash,
  LuArrowRight,
  LuChevronDown,
  LuPlay,
  LuSparkles,
} from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";

const Hero = () => {
  const [mouseCursor, setMouseCursor] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");

  useEffect(() => {
    function handleMouseMove(e) {
      setMouseCursor({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mouseCursor.x}px ${mouseCursor.y}px, rgba(60, 130, 246, 50%), transparent 40%)`,
        }}
      />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 mb-7 rounded-full animate-in slide-in-from-bottom duration-1000">
              <LuSparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300">
                Introducing ProDev Academy
              </span>
            </div>
            {/*title header .............................*/}
            <h1 className="text-5xl sm:text-xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-1500 delay-100 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Code Faster
              </span>
              <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Build Better
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                With ProDev Academy
              </span>
            </h1>

            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-2000 delay-200 leading-relaxed">
              Accelerate your development workflow with intelligent code
              completion, automated testing, and smart debugging. Ship
              production-ready code 10x faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="group px-6 sm:px-8 py-3 sm:py-6.5 bg-gradient-to-b from-blue-600 to blue-400 rounded-lg font-semibold text-sm sm:base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                <span>Start Coding</span>
                <LuArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white rounded-lg font-semibold text-sm sm:base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                  <LuPlay className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                </div>
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border-white/10">
              <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border-white/5">
                {/*IDE HEADER */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 smz:py-3 bg-white/5 backdrop-blur-sm border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="flex justify-center space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 " />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 " />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 " />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      ProDev
                    </span>
                  </div>
                  <LuChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                </div>
                <div className="relative p-3 sm:p-4 h-full ">
                  {/*file tabs */}

                  <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-hidden">
                    <button
                      onClick={() => setActiveTab("App.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "App.jsx"
                          ? "bg-blue-500/30 text-white border-blue-400/2"
                          : "bg-white/5"
                      } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      App.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Hero.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "Hero.jsx"
                          ? "bg-blue-500/30 text-white border-blue-400/2"
                          : "bg-white/5"
                      } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      Hero.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Navbar.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                        activeTab === "Navbar.jsx"
                          ? "bg-blue-500/30 text-white border-blue-400/2"
                          : "bg-white/5"
                      } text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      Navbar.jsx
                    </button>
                  </div>

                  {/*code contents */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
