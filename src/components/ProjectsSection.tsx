import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function ProjectsSection() {
  const projects = [
    {
      title: "PetNook",
      icon: "/petNookPic.png",
      id: 1,
      desc: "Pet Nook is a heartwarming website designed to connect pet lovers with adorable animals in need of new homes. This platform provides a safe and nurturing environment for both prospective pet owners and caring individuals looking to rehome their beloved companion.",
      links: {
        github: "https://github.com/Meisosk/Homeward-Bound-Bonds",
        walkthrough: "https://watch.screencastify.com/v/bKiOdzfBDjnbqQRO4U4g",
      },
    },
    {
      title: "EcoQuest",
      icon: "/ecoQuestPic.png",
      id: 2,
      desc: "EcoQuest is a dynamic and engaging full-stack website designed to empower users on their path to a more sustainable and environmentally conscious lifestyle. This app allows users to calculate their carbon emissions and then accept exciting quests to reduce their environmental footprint.",
      links: {
        site: "https://eco-quest.netlify.app/",
        github: "https://github.com/Meisosk/ecoQuest",
        walkthrough:
          "https://drive.google.com/file/d/1HTuBP4txU2l04UuWVSCm5e5g8o6z5_SD/view",
      },
    },
    {
      title: "Meir's Meteorology",
      icon: "/meirsMeteorologyPic.png",
      id: 3,
      desc: "Meir's Meteorology is a powerful and user-friendly weather app designed to keep you informed about the weather in your area as well as around the world. With a range of features and accurate data, this app provides everything you need to plan your day and stay prepared for any weather scenario. ",
      links: {
        site: "https://meirs-meteorology.netlify.app/",
        github: "https://github.com/Meisosk/meirs-meteorology",
        walkthrough: "https://watch.screencastify.com/v/oBVQIzJ1tgavahbfjbwj",
      },
    },
    {
      title: "Music in Moton",
      icon: "/music-in-motion.png",
      id: 3,
      desc: "Music in Motion is a fitness app designed to elevate your workout experience with a perfect blend of motivation and rhythm. With avast array of workout options for anyone at any level it custom-generates a Spotify playlists, this app offers a dynamic approach to fitness, making every exercise session a memorable and energetic journey.",
      links: {
        site: "https://musicinmotion.netlify.app/",
        github: "https://github.com/Meisosk/Music-N-Motion?tab=readme-ov-file",
      },
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="relative flex flex-col items-center justify-center h-screen bg-[#161513] overflow-hidden text-white"
      >
        {/* Gradient Circles */}
        <div className="absolute top-0 left-10 w-20 h-20 sm:left-20 sm:w-36 sm:h-36 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>
        <div className="absolute top-24 right-2 w-24 h-24 sm:top-40 sm:right-4 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>
        <div className="absolute bottom-16 left-40 w-12 h-12 sm:bottom-32 sm:left-80 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>

        {/* Swiper */}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-4/5 sm:w-3/5 h-[60%] sm:h-1/2"
          loop={true}
          initialSlide={1}
          style={{
            boxShadow: "10px 10px 150px #6e00ff54, inset 0 0 50px #6e00ff54",
          }}
        >
          {projects.map((project) => (
            <SwiperSlide
              className="flex text-white items-center justify-center rounded-lg backdrop-blur-md bg-gradient-to-b from-[rgba(102,51,204,0.25)] to-[rgba(140,34,206,0.45)]"
              key={project.id}
            >
              <div className="h-full w-full flex flex-col items-center">
                {/* Project Image and Description */}
                <div className="h-4/5 flex flex-col sm:flex-row items-center">
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="h-32 sm:h-full w-auto"
                  />
                  <div className="flex items-center flex-col text-center sm:text-left">
                    <div className="m-6 sm:m-12">{project.desc}</div>
                    <div>
                      {project.links.site && (
                        <a href={project.links.site}>
                          <span className="text-blue-400 underline">
                            Live Site
                          </span>{" "}
                          |{" "}
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="text-blue-400 underline"
                        >
                          GitHub
                        </a>
                      )}{" "}
                      {project.links.walkthrough && (
                        <a href={project.links.walkthrough}>
                          {" "}
                          |{" "}
                          <span className="text-blue-400 underline">
                            Video Walkthrough
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {/* Project Title */}
                <div className="h-1/5 bg-[#0000005e] w-full flex justify-center items-center text-sm sm:text-base">
                  {project.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ProjectsSection;
