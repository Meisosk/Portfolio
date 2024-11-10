function HeaderSection() {
  return (
    <>
      <style>
        {`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer utilities {
    @keyframes fadeInLeft {
      0% {
        opacity: 0;
        transform: translateX(-100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      0% {
        opacity: 0;
        transform: translateX(100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-fade-in-left {
      animation: fadeInLeft 1s ease-in-out forwards;
    }

    .animate-fade-in-right {
      animation: fadeInRight 1s ease-in-out forwards;
    }
  }
`}
      </style>

      <div className="flex flex-col items-center justify-center h-screen text-center overflow-x-hidden">
        <hr className="border-t-8 border-white w-1/2 mb-4 animate-fade-in-left" />
        <h1 className="text-white font-bold text-5xl w-1/2 mb-4 leading-relaxed">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Hello, I'm Meir,{" "}
          </span>
          developer and designer based in Baltimore.
        </h1>
        <hr className="border-t-8 border-white w-1/2 mb-16 animate-fade-in-right" />
        <div className="flex space-x-4 z-10">
          <a href="#contact">
            <button className="bg-gradient-to-r from-[#9333ea73] to-[#ec48998f] text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-colors mr-6 duration-300 px-8 py-3">
              GET IN TOUCH
            </button>
          </a>

          <a href="#projects">
            <button className="border border-white text-white py-2 px-4 rounded-lg">
              VIEW PROJECTS
            </button>
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden ">
          <div className="absolute left-16 top-12 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"></div>
          <div className="absolute right-[-4rem] bottom-20 w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"></div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
