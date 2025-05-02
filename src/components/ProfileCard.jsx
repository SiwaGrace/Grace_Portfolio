import React from "react";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";
import myPicture from "../assets/me.jpg";

const ProfileCard = () => {
  const name = "Grace Djobokou";
  return (
    <section className="py-12 text-center">
      <h2 className="text-4xl font-bold mb-4 text-textColor dark:text-white">
        About Me
      </h2>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-300 p-6">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full h-[500px] max-w-4xl overflow-hidden p-4">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={myPicture}
              alt="My picture"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
              Hello everybody, I am
            </p>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <h2 className="text-lg font-semibold text-gray-600 mt-1">
              Junior UI/UX Developer
            </h2>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              I am a software engineer based in Ghana, with a strong foundation
              in frontend development. My expertise lies in HTML, CSS,
              JavaScript, Tailwind CSS, Bootstrap, and React. I enjoy solving
              problems, learning new technologies, and building intuitive web
              applications that make an impact. When I’m not coding, you’ll find
              me learning something new (a language or an instrument). Let’s
              build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
