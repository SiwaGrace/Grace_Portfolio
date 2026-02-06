import React from "react";
import {
  FileJson,
  Terminal,
  Atom,
  Server,
  Database,
  Cloud,
  CodeXml,
  Braces,
  Leaf,
} from "lucide-react";

const TechStack = () => {
  const iconStyles = {
    iconbase: " dark:text-accentColor group-hover:text-white",
  };
  const size = 32;

  const stacks = [
    {
      name: "Html",
      icon: <CodeXml className={`${iconStyles.iconbase}`} size={size} />,
      label: "HTML",
    },
    {
      name: "CSS",
      icon: <Braces className={`${iconStyles.iconbase}`} size={size} />,
      label: "CSS",
    },
    {
      name: "JavaScript",
      icon: <FileJson className={`${iconStyles.iconbase}`} size={size} />,
      label: "JavaScript",
    },
    {
      name: "TypeScript",
      icon: <Terminal className={`${iconStyles.iconbase}`} size={size} />,
      label: "TypeScript",
    },
    {
      name: "React",
      icon: <Atom className={`${iconStyles.iconbase}`} size={size} />,
      label: "React",
    },
    {
      name: "Node.js",
      icon: <Server className={`${iconStyles.iconbase}`} size={size} />,
      label: "Node.js",
    },
    {
      name: "MongoDb",
      icon: <Leaf className={`${iconStyles.iconbase}`} size={size} />,
      label: "MongoDb",
    },
    {
      name: "PostgreSQL",
      icon: <Database className={`${iconStyles.iconbase}`} size={size} />,
      label: "PostgreSQL",
    },
    // {
    //   name: "AWS",
    //   icon: <Cloud className={`${iconStyles.iconbase}`} size={size} />,
    //   label: "AWS",
    // },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20" id="stacks">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold dark:text-white">
          Tech <span className="text-primaryText">Stack</span>
        </h2>
        <p className="text-secondaryText">My playground of technologies</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="group flex flex-col items-center gap-4 transition-all duration-300 cursor-default hover:-translate-y-2"
          >
            <div
              className="size-16 rounded-xl bg-gray-100 dar dark:bg-accentColor/5 flex items-center justify-center border border-transparent dark:border-secondaryColor/30 group-hover:bg-accentColor 
             group-hover:shadow-lg group-hover:shadow-primary/10 transition-all"
            >
              {stack.icon}
            </div>
            {/* group-hover:text-accentColor/20 */}
            <span className="text-sm font-medium text-secondaryText dark:text-white group-hover:text-black transition-colors dark:group-hover:text-secondaryText  ">
              {stack.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
