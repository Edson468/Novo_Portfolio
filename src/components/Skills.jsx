import React from 'react';

const skills = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain text-slate-900" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white border-t border-slate-100 shadow-sm relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Habilidades</h3>
        
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 w-full">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                <i className={`${skill.icon} text-4xl group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
