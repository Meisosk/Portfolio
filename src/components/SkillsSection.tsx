function SkillsSection() {
  const skills = [
    { name: "HTML", icon: "/icons/html-5.png" },
    { name: "CSS", icon: "/icons/css-3.png" },
    { name: "JavaScript", icon: "/icons/js.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "React", icon: "/icons/atom.png" },
    { name: "Bootstrap", icon: "/icons/bootstrap.png" },
    { name: "Tailwind", icon: "/icons/tailwind-css.svg" },
    { name: "Node.js", icon: "/icons/nodejs.png" },
    { name: "git", icon: "/icons/git.png" },
    { name: "PostgreSQL", icon: "/icons/postgre.png" },
    { name: "SQL", icon: "/icons/sql-file-format-symbol.png" },
    { name: "MUI", icon: "/icons/muilogo.png" },
  ];

  return (
    <div className="relative py-16 px-8 bg-[#161513] text-white">
      {/* Background Circles */}
      <div className="absolute top-28 left-20 w-44 h-44  bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>
      <div className="absolute top-96 left-[40rem] w-28 h-28  bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>
      <div className="absolute top-52 left-[55rem] w-28 h-28  bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>
      <div className="absolute bottom-52 right-4 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>

      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center w-2/3 ">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-[rgba(174,206,255,0.27)] rounded-xl p-6 transition-transform transform hover:scale-105 w-48 backdrop-blur-[8.6px] border-2 border-t-0 border-l-0 border-[rgba(174,206,255,0.6)] shadow-lg"
            >
              <img src={skill.icon} alt={skill.name} className="h-16 mb-4" />
              <span className="text-white text-lg font-medium">
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
