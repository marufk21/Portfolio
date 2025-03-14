import Image from "next/image";
import vibesta from './assets/vibesta.jpg'
import streamtalk from './assets/streamtalk.jpg'
import electrikart from './assets/electrikart.png'
import infinichat from './assets/infinichat.jpg'
import f1extension from './assets/f1extension.png'

// Project-Orderlist
const projects = [
  {
    id: 1,
    title: "StreamTalk",
    link: "https://stream-talk.vercel.app/",
    github: "https://github.com/marufk21/StreamTalk",
    description: [
      "StreamTalk is a real-time video calling app built with Next.js, Socket.IO, and WebRTC, enabling seamless audio and video communication with high-quality peer-to-peer calls and low latency.",
      "It supports screen sharing and multi-participant calls, providing a responsive interface across devices, making it ideal for virtual meetings and staying connected with friends and family.",
    ],
    skills: ["NextJs", "WebRTC", "Sockets", "Tailwind CSS", "NodeJs"],
    image: streamtalk,
  },
  {
    id: 2,
    title: "Vibesta",
    link: "https://vibesta.onrender.com",
    github: "https://github.com/marufk21/Vibesta",
    description: [
      "A social media app allows users to sign up, log in, and access personalized features. They can share photos, create profiles, and interact with content through likes and comments in a dynamic feed of posts from people they follow.",
      "It also includes real-time chat messaging for seamless communication with friends and profile customization options, such as updating personal details and profile pictures.",
    ],
    skills: [
      "MERN Stack",
      "axios",
      "shadcn UI",
      "sockets",
      "bcrypt",
      "jwt-tokens",
    ],
    image: vibesta,
  },
  {
    id: 3,
    title: "Electrikart",
    link: "https://electrikart.netlify.app",
    github: "https://github.com/marufk21/ElectriKart",
    description: [
      "An Ecommerce Store with an interactive UI, including carousels and product cards. The Products Page has a sidebar for filtering search results by categories, colors, and price ranges for easy browsing.",
      "Each Single Product Page offers detailed information on functionality, images, descriptions, reviews, and availability.",
      "The Cart Page displays items in the user's cart, including images, prices, quantities, subtotal, and shipping fees, with options to remove items or clear the cart. The Contact Page allows users to provide feedback or file complaints, ensuring effective communication.",
    ],
    skills: ["ReactJS", "Hooks", "Context-API", "React-Router"],
    image: electrikart,
  },
  {
    id: 4,
    title: "InfinityChat",
    link: "https://main--infinichat.netlify.app/",
    github: "https://github.com/marufk21/InfiniChat",
    description: [
      "Infinitychat is an AI chatbot application designed to offer seamless messaging with a modern user interface. Key features include real-time messaging, an attractive user-friendly design, and enhanced functionality through Gemini API integration, ensuring an engaging and efficient chat experience for users.",
    ],
    skills: ["ReactJS", "Tailwind-CSS", "Gemini-API", "Chatbot"],
    image: infinichat,
  },
  {
    id: 5,
    title: "F1-Extension",
    link: "https://github.com/marufk21/F1-Racing-Extension",
    github: "https://github.com/marufk21/F1-Racing-Extension",
    description: [
      "F1 Racing Extension is a browser extension for Formula 1 enthusiasts that provides real-time updates about the races, including race results, schedules, and more. This extension enhances the F1 experience by offering up-to-date information directly in your browser.",
    ],
    skills: ["ReactJS", "Chrome Extensions", "JavaScript"],
    image: f1extension,
  },
];

// Project-Card
const ProjectCard = ({ project }) => (
  <div className="pt-8 px-4 project_card">
    <p className="text-slate-200 font-bold py-1">
      <a href={project.link} target="_blank" className="text-lg">
        <span className="inline-block">
          {project.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block h-4 w-4 ml-1 translate-y-px"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </a>
    </p>
    <div id="actionButtons" className="flex">
      <ul className="py-2 px-2">
        <li className="mr-5 text-xs">
          <a
            href={project.github}
            target="_blank"
            className="block hover:text-slate-200 text-slate-400"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <ul className="py-2">
      {project.description.map((desc, index) => (
        <li key={index} className="text-sm py-2 text-slate-300">
          {desc}
        </li>
      ))}
    </ul>
    <ul className="flex skills flex-wrap mt-2">
      {project.skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} />
      ))}
    </ul>

    <Image
      src={project.image}
      alt={`${project.title}_snapshot`}
      width={300}
      height={48}
      className="py-4 rounded bg-transparent"
    />
  </div>
);
const SkillTag = ({ skill }) => (
  <li className="mt-2 mr-1.5">
    <div className="text-teal-300 rounded-full leading-5 flex items-center bg-teal-400/10 px-3 py-1 font-medium text-xs">
      {skill}
    </div>
  </li>
);

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <main className="_main_container lg:flex lg:justify-between lg:gap-4">
        {/* LeftSide-Introduction--Navbar--ResumeDownload--SocialLinks */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          {/* Introduction */}
          <div className="personal_heading ">
            <h3 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Maruf Khan
            </h3>
            <p className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Full Stack Engineer
            </p>
            <p className="mt-4 max-w-xs leading-normal text-slate-300">
              I focus on coding web experiences that are navigable and engaging
              for everyone.
            </p>
            {/* Navbar */}
            <nav
              className="nav hidden lg:block"
              aria-label="In-page jump links"
            >
              <ul className="mt-16 w-max">
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#about"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3"
                    href="#experience"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* ResumeDownload */}
            <p className="mt-3 px-2 font-bold text-lg rounded bg-transparent text-slate-200 border-dashed border-slate-300">
              <a href="https://drive.google.com/drive/folders/1SYKXDHFdwqV2zSI1_TcN5j3dZzdgPNA-">
                View Resume
              </a>{" "}
            </p>
          </div>
          {/* SocialLinks */}
          <ul className="ml-1 mt-8 flex items-center">

            <li className="mr-5 text-xs">
              <a
                href="https://github.com/marufk21"
                target="_blank"
                className="block hover:text-slate-200 text-slate-400"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </li>

            <li className="mr-5 text-xs">
              <a
                href="https://www.linkedin.com/in/marufk21/"
                target="_blank"
                className="block hover:text-slate-200 text-slate-400"
              >
                <span className="sr-only">Linkedin</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </li>

            <li className="mr-5 text-xs">
              <a
                href="https://www.instagram.com/marufique"
                target="_blank"
                className="block hover:text-slate-200 text-slate-400"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 1000"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                </svg>
              </a>
            </li>
            <li className="mr-5 text-xs">
              <a
                href="https://x.com/marufique"
                target="_blank"
                className="block hover:text-slate-200 text-slate-400"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 248 204"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    id="white_background"
                    d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                  ></path>
                </svg>
              </a>
            </li>

          </ul>
        </header>
        {/* RightSide-About--Experience--Experience */}
        <main className="_main_content pt-24 lg:w-1/2 lg:py-24">
          {/* About */}
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 "
          >
            <div className="sticky top-0 z-20 bg-slate-900/75 backdrop-blur">
              <h2 className="text-2xl text-slate-300">About</h2>
            </div>

            <div>
              <p className="mb-4 mt-2 px-1 py-3 text-slate-200">
                I’m a Full Stack Software Engineer specializing in Frontend development
                with crafting high-performance web and cross-platform
                applications.
              </p>
              <p className="mb-4 mt-2 px-1 py-3 text-slate-200">
                My expertise lies in creating optimized, user-centric
                applications using React.js, Next.js, and MERN. A performance
                enthusiast at heart, I am committed to enhancing user
                experiences by continuously improving application efficiency.
                Alongside my frontend skills, I have a solid understanding of
                backend technologies and DevOps tools, and I am well-versed in
                Problem Solving.
              </p>
              <p className="mb-4 mt-2 px-1 py-3 text-slate-200">
                I am constantly exploring new technologies like React Native and
                backend frameworks to broaden my knowledge. As a dedicated
                learner and passionate developer, I enjoy sharing my insights
                through my side projects.
              </p>
              <p className="mb-4 mt-2 px-1 py-3 text-slate-200">
                Connect: +91 8171244560 | marufkhan2002@gmail.com
              </p>
            </div>
          </section>
          {/* Experience */}
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="sticky top-0 z-20 bg-slate-900/75 backdrop-blur">
              <h2 className="text-2xl text-slate-300">Experience</h2>
            </div>

            <div className="pt-8 px-4 experience_company  cursor-pointer ">
              <p className="text- text-slate-200 font-bold py-1">
                SDE Intern ,{" "}
                <a href="#" target="_blank">
                  <span className="inline-block">
                    WDMtech Pvt Ltd
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>{" "}
                </a>
                <p className="text-slate-300 text-sm py-2">
                  July 2024 - Dec 2025
                </p>
              </p>
              <p className="text-slate-300 py-2 ">
                Developed highly responsive, user-centric interfaces using
                React.js, Next.js, and Tailwind CSS, significantly enhancing
                user experience and resulting in a 25% increase in user
                satisfaction and engagement.
              </p>
              <p className="text-slate-300 py-2 ">
                Optimized the application architecture by implementing reusable
                React components and integrating Redux Toolkit for state
                management, which led to a 30% boost in code maintainability and
                scalability.Optimized the application architecture by
                implementing reusable React components and integrating Redux
                Toolkit for state management, which led to a 30% boost in code
                maintainability and scalability.
              </p>
              <p className="text-slate-300 py-2 ">
                Collaborated closely with stakeholders to gather feedback and
                iteratively refine feature design and functionality, leading to
                a 15% improvement in debugging tools, which reduced issue
                resolution time and enhanced the overall development workflow.
              </p>

              <ul className="flex skills flex-wrap mt-2">
                <li className="mt-2 mr-1.5">
                  <div className="text-teal-300 rounded-full leading-5 flex items-center bg-teal-400/10 px-3 py-1 font-medium text-xs">
                    JavaScript
                  </div>
                </li>

                <li className="mt-2 mr-1.5">
                  <div className="text-teal-300 rounded-full leading-5 flex items-center bg-teal-400/10 px-3 py-1 font-medium text-xs">
                    ReactJs
                  </div>
                </li>

                <li className="mt-2 mr-1.5">
                  <div className="text-teal-300 rounded-full leading-5 flex items-center bg-teal-400/10 px-3 py-1 font-medium text-xs">
                    NextJs
                  </div>
                </li>

                <li className="mt-2 mr-1.5">
                  <div className="text-teal-300 rounded-full leading-5 flex items-center bg-teal-400/10 px-3 py-1 font-medium text-xs">
                    Tailwind CSS
                  </div>
                </li>

                <li className="mt-2 mr-1.5">
                  <div className="text-teal-300 rounded-full leading-5 flex items-center bg-teal-400/10 px-3 py-1 font-medium text-xs">
                    HTML/CSS
                  </div>
                </li>

                <li className="mt-2 mr-1.5">
                  <div className="text-teal-300 rounded-full leading-5 flex items-center bg-teal-400/10 px-3 py-1 font-medium text-xs">
                    Redux
                  </div>
                </li>

                <li className="mt-2 mr-1.5">
                  <div className="text-teal-300 rounded-full leading-5 flex items-center bg-teal-400/10 px-3 py-1 font-medium text-xs">
                    REST API
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* Projects */}
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="sticky top-0 z-20 bg-slate-900/75 backdrop-blur">
              <h2 className="text-2xl text-slate-300">Projects</h2>
            </div>

            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            <div className="flex justify-center mt-4 ">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-slate-700 to-slate-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-2xl text-sm px-5 py-3 text-center mr-2 w-56 my-6 "
              >
                <a
                  href="https://github.com/marufk21?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click for more projects 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-5 w-4 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </section>
        </main>
      </main>
    </div>
  );
}
