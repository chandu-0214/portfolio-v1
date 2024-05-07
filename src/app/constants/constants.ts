import {
  MdContactPhone,
  MdOutlineMailOutline,
  MdWork,
  MdConnectWithoutContact,
} from "react-icons/md";
import { FaLocationDot, FaUsersGear } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import {
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaMobileAlt,
  FaGithub,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { SiVercel } from "react-icons/si";

import { SiNetlify } from "react-icons/si";

import { SiMui } from "react-icons/si";
import {
  bugtrackerImg,
  chatbotImg,
  JobbyImg,
  NextTrendshome,
  Nextwatch,
  VedioStreemingImg,
  wikiAppImg,
} from "../AddOnComponents";

export const sideNavLinks: any = [
  {
    icon: FaMobileAlt,
    label: "Phone",
    value: "+91-7976895037",
    bgColor: "",
    textColor: "",
    iconColor: "",
  },
  {
    icon: MdOutlineMailOutline,
    label: "E-mail",
    value: "ncr02141997@gmail.com",
    bgColor: "",
    textColor: "",
    iconColor: "text-green-400",
  },
  {
    icon: FaLocationDot,
    label: "Location",
    value: "Banglore,India",
    bgColor: "",
    textColor: "",
    iconColor: "",
  },
  {
    icon: SlCalender,
    label: "Birthday",
    value: "14-Feb-1997",
    bgColor: "",
    textColor: "",
    iconColor: "",
  },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/nandiki-chandrashekhar-532362235/",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaLinkedinIn,
    color: "text-blue-400",
  },
  {
    href: "https://www.instagram.com/97_chandu_reddy/",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaInstagram,
    color: "text-pink-400",
  },
  {
    href: "https://github.com/chandu-0214",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaGithub,
    color: "text-black",
  },
  // Add more social links here if needed
];

export const MainNavLinks = [
  {
    icon: IoHome,
    label: "Home",
    bgColor: "",
    textColor: "",
    iconColor: "",
    href: "/",
  },
  {
    icon: AiOutlineFundProjectionScreen,
    label: ["Projects", "Skills"],
    bgColor: "",
    textColor: "",
    iconColor: "",
    href: "/projects",
    isTypewriters: true,
  },
  {
    icon: MdWork,
    label: "Professional Experiences",
    bgColor: "",
    textColor: "",
    iconColor: "",
    href: "/work",
  },
  {
    icon: FaUsersGear,
    label: "Testimonial",
    bgColor: "",
    textColor: "",
    iconColor: "",
    href: "/testimonial",
  },
  {
    icon: FcAbout,
    label: "About",
    bgColor: "",
    textColor: "",
    iconColor: "",
    href: "/about",
  },
  {
    icon: MdConnectWithoutContact,
    label: "Contact",
    bgColor: "",
    textColor: "",
    iconColor: "",
    href: "/contact",
  },
];

export const Personaldetails = {
  myName: "Chandrashekhar",
  jobRole: ["Front End Developer.", "Professional Coder.", "UI Designer."],
  description1: `With over `,
  description2: ` years of experience, I've built and improved web apps using frontend technologies.  I'm driven by continuous learning, constantly improving to enhance productivity with a dynamic approach and unwavering dedication, 
  I'm ready to contribute impactful digital experiences and exceptional outcomes to new ventures.`,
};

export const BestSkill = [
  SiJavascript,
  FaReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
];

export const cardFeaturedData = [
  {
    title: "Frontend Web Development",
    des: "Experienced in building and delivering robust web applications using HTML, CSS, JavaScript, ReactJs, hooks, NextJs and TypeScript and MUI. Developed applications from scratch and enhanced ongoing projects.",
    icon: "AiOutlineAntDesign",
    modalttile: "Key Strengths and Attributes",
    modalDes: [
      "Continuously integrating new technologies like Next.js and TypeScript to stay ahead in the rapidly evolving web development landscape.",
      "Demonstrated ability to foster collaboration within teams, actively participating in problem-solving sessions, and providing valuable technical assistance to team members.",
      " Prioritizes effective communication and teamwork to ensure seamless project execution and delivery of exceptional outcomes.",
      "Strong problem-solving skills demonstrated through resolving technical issues and bugs reported by users, providing timely fixes and solutions.",
    ],
  },
  {
    title: "Software Engineering",
    des: "Proficient software engineer with experience in developing and implementing front-end architecture. Continuously expanding skillset with courses in Next.js and TypeScript to embrace cutting-edge solutions.",
    icon: "FaCode",
    modalttile: "Key Strengths and Attributes: Crafting Innovative",
    modalDes: [
      " Leveraged advanced tools like Next.js, React JS, Redux, and React Hook Forms to ensure the seamless implementation of features, contributing to the development of MetricStream's fastest and biggest GRC product.",
      "Utilized agile methodologies to drive iterative development cycles, enabling rapid prototyping and continuous improvement. Actively participated in sprint planning, stand-ups, and retrospectives to foster collaboration and streamline project delivery.",
      "Engaged in ongoing professional development, staying abreast of emerging technologies and best practices in software engineering. Committed to lifelong learning and self-improvement to remain at the forefront of the industry.",
      "Experience in full-stack development, including integrating RESTful APIs for data retrieval, authentication, and other functionalities.",
    ],
  },
  {
    title: "Teaching",
    des: "Expert in teaching React JS, HTML, CSS, and other frontend technologies to enthusiastic learners at A2N Academy.",
    icon: "GiTeacher",
    modalttile: "Passionate Educator",
    modalDes: [
      "Demonstrated ability to deliver engaging and comprehensive lessons, catering to diverse learning styles and skill levels.",
      "Proven track record of empowering over hundreds of students with in-depth knowledge and practical skills in web development.",
      "Known for clear and articulate explanations, fostering a supportive and interactive learning environment.",
      "Committed to the success of every student, providing personalized guidance and mentorship to help them achieve their goals.",
    ],
  },
  {
    title: "Mentor",
    des: "Engaging in live interactions with Nxtwave students, offering mentorship and guidance on navigating the path to the IT sector.",
    icon: "GrUserManager",
    modalttile: "Guiding Light",
    modalDes: [
      "Providing insights and advice on career pathways and strategies for securing high-paying job opportunities in the industry.",
      "Addressing student queries and doubts with clarity and expertise, helping them understand the steps needed to excel in the IT field.",
      "Sharing actionable tips and practical advice derived from personal experience and industry knowledge.",
      "Empowering students with the knowledge and confidence to pursue their aspirations in the tech industry.",
    ],
  },
  {
    title: "Sketching",
    des: "Passionate sketch artist proficient in free sketching, portrait sketching, hatching, and more since childhood.",
    icon: "RiSketching",
    modalttile: "Creative Expression",
    modalDes: [
      "Find solace, energy, and inspiration through the art of sketching, exploring new horizons and experiencing absolute happiness.",
      "Utilize sketching as a means of creative expression, capturing moments, emotions, and perspectives with precision and finesse.",
      "Continuously honing skills and pushing boundaries in sketching, embracing the joy and fulfillment it brings.",
    ],
  },
];

export const projectsData = [
  {
    title: "BUG TRACKER",
    des: "Our bug tracking system is here to rescue! Easily track, manage, and resolve bugs, ensuring smooth project development and deployment.",
    src: bugtrackerImg,
    githubLink: "https://github.com/chandu-0214/issue-tracker-v1",
    webLink: "https://bug-tracker-ncr.vercel.app/",
    isComplete: true,
    isNew: true,
  },
  {
    title: "E-commerce Website",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: NextTrendshome,
    githubLink: "",
    webLink: "https://nandikieshop.ccbp.tech/",
    isComplete: true,
  },
  {
    title: "Jobby App",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: JobbyImg,
    githubLink: "",
    webLink: "https://nandikijobapp.ccbp.tech/",
    isComplete: true,
  },
  {
    title: "Youtube Clone",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: Nextwatch,
    githubLink: "",
    webLink: "https://nandikiytclone.ccbp.tech/",
    isComplete: true,
  },
  {
    title: "Wikipedia App",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: wikiAppImg,
    githubLink: "",
    webLink: "https://nandikiwikiapp.ccbp.tech/",
    isComplete: true,
  },
  {
    title: "Vedio/Audio Calling App",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: VedioStreemingImg,
    githubLink: "",
    webLink: "",
    isComplete: false,
  },
  {
    title: "Chatbot.ai",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    src: chatbotImg,
    githubLink: "",
    webLink: "",
    isComplete: false,
  },
  // Add more project objects as needed
];

export const EducationData = [
  {
    title: "B.Tech in Mechanical Engineering ",
    subTitle: "Career Point University (2014 - 2018)",
    result: "8.3/10",
    des: `🔧 Mechanical Engineer | Innovator | Problem Solver 🔧

    Passionate B.Tech Mechanical Engineer adept in hardware design, integration, and UX. Experienced in IoT, robotics, and consumer electronics, ensuring seamless hardware-software integration.`,
  },
  // Expertise in testing, validation, and user-centric design principles, optimizing products for real-world efficiency and usability. Collaborative problem-solver driving innovation through cross-disciplinary collaboration. Committed to engineering excellence for impactful solutions. Let's connect to engineer a better future together.
  {
    title: "Senior Secondary School Education",
    subTitle: "Bright Land School (2012 - 2014)",
    result: "79%",
    des: `🎓 Senior Secondary School Graduate | Physics, Chemistry, and Maths Enthusiast 🎓

    Dedicated Senior Secondary School graduate with a strong foundation in Physics, Chemistry, and Maths. Passionate about exploring the fundamental principles of science and mathematics,`,
  },
  // I pursued an education that nurtured my analytical thinking and problem-solving skills. Through rigorous coursework and hands-on experiments, I developed a keen interest in understanding the natural world and its underlying mathematical frameworks.
  {
    title: "Secondary School Education",
    subTitle: "Bright Land School (2012)",
    result: "72%",
    des: `🎓 Secondary School Graduate | Foundation in STEM 🎓

    Proud graduate of secondary school with a focus on STEM (Science, Technology, Engineering, and Mathematics) subjects.`,
    // Developed a strong academic foundation in mathematics, science, and technology, laying the groundwork for future educational pursuits. Engaged in diverse learning experiences that fostered critical thinking, problem-solving skills, and collaboration. Thrived in a dynamic academic environment, embracing challenges with enthusiasm and perseverance.
  },
];

export const WorkExperienceData = [
  {
    title: "Software Engineer(R&D)",
    subTitle: "MetricStream - (Sept 2022 - Present)",
    result: "Bengaluru",
    des: `Thrilled to be part of the dynamic team at MetricStream as a Frontend Developer, where I development and implementation of robust front-end architectures to elevate user interface concepts. `,
  },
  // Leveraging Next.js, React.js, and React Hook Forms. Passionate about contributing to problem-solving sessions, Excited to continue pushing boundaries and delivering top-notch solutions in the realm of Governance, Risk, and Compliance (GRC) as we strive to redefine industry standards.
  {
    title: "Software Developer ",
    subTitle: "AppPerfect Corp - (Mar 2022 - Mar 2022)",
    result: "Udaipur",
    des: "Delighted to have been part of the AppPerfect Corp team as a Frontend Developer, collaborating closely with cross-functional teams to identify challenges and implement best practices in app development. ",
  },
  // Notably, I conceptualized and delivered a highly efficient Bulk Upload Feature for the Battery Archive project at AMPLABS, streamlining project workflows and enhancing productivity. Thriving in an environment of innovation and collaboration, I'm dedicated to driving impactful solutions that optimize user experiences and propel projects towards success
  {
    title: "Intern",
    subTitle: "NxtWave - (Sept 2021 - Mar 2022)",
    result: "Hyderabad",
    des: "Thrilled to have embarked on my journey as a Full Stack Developer Intern at Nxtwave, where I honed foundational web development skills using HTML, CSS, and Bootstrap.",
  },
  // Transitioning into dynamic web design, I mastered JavaScript and progressed to building versatile applications with React JS and Hooks, integrating crucial functionalities such as authentication, authorization, and local storage management. Delving into advanced tools like Material-UI (MUI), I expanded my skill set to create comprehensive React applications. Grateful for the enriching experience and eager to continue my growth in the ever-evolving realm of web development
];

export const AchievementData = [
  {
    title: "Lorem ipsum dolor sit amet.",
    subTitle: "Lorem ipsum dolor sit amet alternative.",
    result: "Success",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    subTitle: "Lorem ipsum dolor sit amet alternative.",
    result: "Success",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    subTitle: "Lorem ipsum dolor sit amet alternative.",
    result: "Success",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!",
  },
];

export const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Typescript", icon: SiTypescript },
      { name: "Python", icon: TbBrandPython },
      { name: "HTML 5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Sql", icon: PiFileSql },
    ],
  },
  {
    title: "Frameworks/Libraries",
    skills: [
      { name: "ReactJs", icon: FaReact },
      { name: "NextJs", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "NodeJs", icon: FaNodeJs },
      { name: "Tailwindcss", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "ExpressJs", icon: SiExpress },
      { name: "Mui", icon: SiMui },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Github", icon: FaGithub },
      { name: "Firebase", icon: RiFirebaseFill },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
];

export const FooterLinksData = [
  {
    title: "Quick Link",
    links: ["About", "Portfolio", "Services", "Blog", "Contact"],
  },
  {
    title: "RESOURCES",
    links: [
      "Authentication",
      "System Status",
      "Terms of Service",
      "Pricing",
      "Over Right",
    ],
  },
  {
    title: "DEVELOPERS",
    links: [
      "Documentation",
      "Authentication",
      "API Reference",
      "Support",
      "Open Source",
    ],
  },
];
