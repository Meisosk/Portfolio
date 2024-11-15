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

      <div className="flex flex-col items-center justify-center h-screen text-center overflow-x-hidden px-4">
        {/* Adjusted HR width for better visibility on small screens */}
        <hr className="border-t-8 border-white w-3/4 mb-4 animate-fade-in-left md:w-1/4 lg:w-3/5" />

        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl sm:w-full mb-4 leading-relaxed lg:w-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Hello, I'm Meir,{" "}
          </span>
          developer and designer based in Baltimore.
        </h1>

        {/* Adjusted HR width for consistency across devices */}
        <hr className="border-t-8 border-white w-3/4 mb-16 animate-fade-in-right md:w-1/4 lg:w-3/5" />

        <div className="flex flex-col sm:flex-row sm:space-x-4 z-10 gap-4 sm:gap-0">
          <a href="#contact">
            <button className="bg-gradient-to-r from-[#9333ea73] to-[#ec48998f] text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-colors mr-6 duration-300 px-8 py-3 w-full sm:w-auto">
              GET IN TOUCH
            </button>
          </a>

          <a href="#projects">
            <button className="border border-white text-white py-2 px-4 rounded-lg w-full sm:w-auto">
              VIEW PROJECTS
            </button>
          </a>
        </div>

        {/* Adjusted gradient circle sizes for better visibility */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden ">
          <div className="absolute left-16 top-12 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 sm:w-24 sm:h-24"></div>
          <div className="absolute right-[-4rem] bottom-20 w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 sm:w-48 sm:h-48 sm:right-0 sm:bottom-10"></div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
