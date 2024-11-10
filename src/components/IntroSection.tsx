import "/headshot-2.png";

function IntroSection() {
  return (
    <div className="flex items-center justify-evenly h-screen text-center bg-[#161513] relative overflow-hidden">
      <div className="flex w-full justify-evenly items-center h-full z-10 ">
        <div className="z-10 h-full flex flex-col justify-evenly">
          <p className="text-white text-5xl">Welcome To...</p>
          <div>
            <img
              src="headshot-2.png"
              alt="Meir's headshot"
              className="w-64 h-64 rounded-full mb-4"
            />
            <h1 className=" font-bold text-4xl mb-2 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              MEIR SOSKIL
            </h1>
            <p className="text-white text-lg mb-4">
              Product Designer based in London
            </p>
            <a
              href="/path/to/resume" // Add your resume link here
              className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg py-2 px-9 rounded-lg flex justify-center items-center space-x-2"
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
        <div className="w-3/5">
          <div className="grid grid-cols-2 gap-6 mb-6 justify-items-start">
            <div className="flex items-center ">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p className="text-white text-lg ml-4">(443)-695-5839</p>
            </div>

            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href="mailto:MeirSoskil@gmail.com"
                className="ml-4 text-lg text-white"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />{" "}
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-white text-lg ml-4">Baltimore, Maryland</p>
            </div>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                <rect x="2" y="9" width="4" height="12" />{" "}
                <circle cx="4" cy="4" r="2" />
              </svg>
              <a
                href="https://www.linkedin.com/in/meir-soskil/"
                className="ml-4 text-lg text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <hr className="mb-8" />
          <div className="grid grid-cols-2 gap-4 justify-items-start">
            <p className="text-white text-md font-bold">
              Over one year of profesional development experience...
            </p>
            <p className="text-white text-md font-bold">
              Passionate about learning and growing every day...
            </p>
            <p className="text-white text-sm  mx-auto mt-4 text-left">
              I’ve had the opportunity to work with E-commerce and SaaS-centric
              companies, delivering fast, efficient, and well-designed code that
              meets business and customer needs.
            </p>
            <p className="text-white text-sm  mx-auto mt-4 text-left">
              With a solid foundation in both front-end and back-end
              technologies, I thrive on turning creative concepts into life in
              the digital world.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute left-96 top-36 w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"></div>
        <div className="absolute right-20 bottom-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"></div>
      </div>
    </div>
  );
}

export default IntroSection;
