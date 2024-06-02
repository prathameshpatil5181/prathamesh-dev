import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Real-time Chat application",
    description:
      "Developed a real-time chat application using Next.js for the frontend and Node.js with TypeScript for the backend. Implemented features such as instant messaging and user authentication, leveraging WebSocket technology forseamless real-time data transfer. Deployed the application on AWS and utilized Nginx as a reverse proxy to enhance performance and scalability, significantly improving the user communication experience.",
    image: "/chatt.png",
    github: "https://github.com/prathameshpatil5181/Chat_application",
    link: "",
  },
  {
    name: "Coding website",
    description:
      "Developed a competitive coding platform using React for the frontend, Node.js for the backend, and TypeScript for type safety and maintainability. Utilized Utilized Docker to run user-submitted code in isolated containers, ensuring security and scalability. Implemented multi-language support, allowing users to code in various programming languages",
    image: "/Nunito.png",
    github: "https://github.com/prathameshpatil5181/CodeQuest.git",
    link: "",
  },
  {
    name: "Gesture controlled Robot",
    description:
      "Developed a Gesture-Controlled Omnidirectional Robot using Open CV for real-time gesture recognition.Integrated motion control algorithms for precise movements based on recognized gestures and seamlessly connected software with hardware via Bluetooth communication, showcasing advanced human-robot interaction.",
    image: "/robot.png",
    github: "https://github.com/prathameshpatil5181/Gesture-Controlled-Robot",
    link: "https://www.youtube.com/shorts/i4WMXv_TiZg",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx} >
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 items-center">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
