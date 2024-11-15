function SkillsSection() {
  const skills = [
    { name: "HTML", icon: "/icons/html-5.png" },
    { name: "CSS", icon: "/icons/css-3.png" },
    { name: "JavaScript", icon: "/icons/js.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "SQL", icon: "/icons/sql-file-format-symbol.png" },
    { name: "git", icon: "/icons/git.png" },
    { name: "React", icon: "/icons/atom.png" },
    { name: "Bootstrap", icon: "/icons/bootstrap.png" },
    { name: "Tailwind", icon: "/icons/tailwind-css.svg" },
    { name: "MUI", icon: "/icons/muilogo.png" },
    { name: "Node.js", icon: "/icons/nodejs.png" },
    { name: "PostgreSQL", icon: "/icons/postgre.png" },
  ];

  return (
    <div className="relative py-8 px-4 sm:py-16 sm:px-8 bg-[#161513] text-white">
      {/* Background Circles */}
      <div className="absolute top-20 left-10 sm:top-28 sm:left-20 w-32 h-32 sm:w-44 sm:h-44 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>
      <div className="absolute top-72 sm:top-96 left-[50%] sm:left-[40rem] w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>
      <div className="absolute top-44 sm:top-52 left-[70%] sm:left-[55rem] w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>
      <div className="absolute bottom-32 sm:bottom-52 right-2 sm:right-4 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        My Skills
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center max-w-full sm:w-2/3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-[rgba(174,206,255,0.27)] rounded-xl p-4 sm:p-6 transition-transform transform hover:scale-105 w-36 sm:w-48 backdrop-blur-[8.6px] border-2 border-t-0 border-l-0 border-[rgba(174,206,255,0.6)] shadow-lg"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-12 sm:h-16 mb-3 sm:mb-4"
              />
              <span className="text-white text-sm sm:text-lg font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
