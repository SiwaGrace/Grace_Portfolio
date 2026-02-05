import React from "react";
import {
  Phone,
  Mail,
  // MapPin,
  // linkedin,
  // lithub,
  // twitter,
  // instagram,
  // whatsapp,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import myPicture from "../../assets/myPicture.png";
// import myPicture from "../../assets/mine.jpg";
// import myPicture from "../../assets/whitebg.png";

const About = () => {
  const contactLinks = [
    // {
    //   icon: Calendar,
    //   href: "https://calendar.google.com",
    //   color: "blue-500",
    //   label: "Calendar",
    // },
    {
      icon: Phone,
      href: "tel:+233592899661",
      color: "green-500",
      label: "Telephone",
    },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=esidjograce@gmail.com",
      color: "red-500",
      label: "Email me",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/siwad/",
      color: "blue-700",
      label: "LinkedIn",
    },
    // {
    //   icon: MapPin,
    //   href: "https://goo.gl/maps/example",
    //   color: "purple-500",
    //   label: "Location",
    // },
    // {
    //   icon: github,
    //   href: "https://github.com/yourusername",
    //   color: "gray-800",
    //   label: "GitHub",
    // },
    // {
    //   icon: twitter,
    //   href: "https://twitter.com/yourusername",
    //   color: "blue-400",
    //   label: "Twitter",
    // },
    // {
    //   icon: instagram,
    //   href: "https://instagram.com/yourusername",
    //   color: "pink-500",
    //   label: "Instagram",
    // },
    // {
    //   icon: whatsapp,
    //   href: "https://wa.me/233123456789",
    //   color: "green-600",
    //   label: "WhatsApp",
    // },
  ];

  const name = "Grace Djobokou";
  return (
    <section id="about" className="mt-10 py-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <div className="w-96 h-96 md:w-[400px] md:h-[400px] relative">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full absolute top-0 left-0"
            >
              <defs>
                <clipPath id="blobClip">
                  <path
                    d="M66.3,-17.1C74.6,4,62.2,36.3,38.3,54C14.4,71.6,-21,74.6,-39.8,59.8C-58.6,45,-60.8,12.3,-51.4,-10.4C-42,-33,-21,-45.6,4,-46.9C29,-48.2,58,-38.3,66.3,-17.1Z"
                    transform="translate(100 100) scale(1.4)"
                  />
                </clipPath>
              </defs>

              <path
                d="M66.3,-17.1C74.6,4,62.2,36.3,38.3,54C14.4,71.6,-21,74.6,-39.8,59.8C-58.6,45,-60.8,12.3,-51.4,-10.4C-42,-33,-21,-45.6,4,-46.9C29,-48.2,58,-38.3,66.3,-17.1Z"
                transform="translate(100 100) scale(1.4)"
                // fill="#fabbdd"
                stroke="#f7b0d7g"
                strokeWidth="4"
              />

              <image
                href={myPicture}
                width="200"
                height="300"
                clipPath="url(#blobClip)"
                preserveAspectRatio="xMidYMid slice"
                x="20"
                y="30"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Hello, I am
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 ">{name}</h1>
          <h2 className="text-xl font-semibold text-gray-700">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 leading-relaxed mt-2">
            I am a software engineer based in Ghana, specializing in frontend
            development. My skills include HTML, CSS, JavaScript, Tailwind CSS,
            Bootstrap, and React. I enjoy solving problems, learning new
            technologies, and building intuitive web applications. Outside of
            coding, I love learning languages and playing instruments. Let’s
            build something amazing together!
          </p>

          {/* Contact Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-4 text-gray-600">
            {contactLinks.map(({ icon: Icon, href, color, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-${color} transition-colors`}
                title={label} // <-- tooltip on hover
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
