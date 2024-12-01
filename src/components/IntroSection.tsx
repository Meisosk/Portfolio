function IntroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-auto lg:h-2/3 text-center bg-[#161513] relative overflow-hidden px-4 py-8 lg:py-0">
      <div className="flex flex-col lg:flex-row w-full justify-around items-center h-full z-10">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center  text-center lg:text-left mb-8 lg:mb-0 lg:w-1/3">
          <p className="text-white text-3xl lg:text-5xl mb-4">Welcome To...</p>
          <div className="flex flex-col items-center ">
            <img
              src="headshot-2.png"
              alt="Meir's headshot"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full mb-4"
            />
            <h1 className="font-bold text-3xl lg:text-4xl mb-2 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              MEIR SOSKIL
            </h1>
            <p className="text-white text-lg sm:text-xl mb-4">
              Product Designer based in Baltimore
            </p>
            <a
              href="/path/to/resume"
              className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-base sm:text-lg py-2 px-6 sm:px-9 rounded-lg flex items-center space-x-2  hover:from-purple-700 hover:to-pink-600 transition-all duration-500 hover:opacity-90"
            >
              <span>Download Resume</span>
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-3/5 lg:mr-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6 justify-items-start">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p className="text-white text-sm sm:text-lg ml-4">
                (443)-695-5839
              </p>
            </div>

            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href="mailto:MeirSoskil@gmail.com"
                className="ml-4 text-sm sm:text-lg text-white"
              >
                MeirSoskil@gmail.com
              </a>
            </div>

            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-white text-start text-sm sm:text-lg ml-4">
                Baltimore, Maryland
              </p>
            </div>

            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <a
                href="https://www.linkedin.com/in/meir-soskil/"
                className="ml-4 text-sm sm:text-lg text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <hr className="mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-white text-sm sm:text-md font-bold">
                Over one year of professional development experience...
              </p>
              <p className="text-white text-xs sm:text-sm mt-4">
                I’ve had the opportunity to work with E-commerce and
                SaaS-centric companies, delivering fast, efficient, and
                well-designed code that meets business and customer needs.
              </p>
            </div>
            <div>
              <p className="text-white text-sm sm:text-md font-bold">
                Passionate about learning and growing every day...
              </p>
              <p className="text-white text-xs sm:text-sm mt-4">
                With a solid foundation in both front-end and back-end
                technologies, I thrive on turning creative concepts into reality
                in the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute left-8 sm:left-96 top-52 sm:top-36 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"></div>
        <div className="absolute right-10 sm:right-20 bottom-10 sm:bottom-20 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"></div>
      </div>
    </div>
  );
}

export default IntroSection;
