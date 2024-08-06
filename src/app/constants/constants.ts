import {
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
  rahulsinghPhoto,
  shyamPhoto,
  tarunkumarPhoto,
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
  jobRole: [
    "Front End Developer .",
    "Professional Coder .",
    "UI/UX Engineer .",
    "Web Application Developer .",
  ],
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
    modalttile: "Key Features",
    modalDes: [
      "📊 Dynamic data visualization powered by Recharts integration and customizable dashboards.",
      "🔍 Effortlessly track, manage, and resolve bugs with our sleek and intuitive interface.",
      "🚀 Empower your team with real-time collaboration, fostering a culture of efficiency and innovation.",
      "🤪 Injected a touch of humor by assigning 'programming language' names to team members, adding a playful twist to bug-fixing adventures.",
      "🎥 Please watch the video attached to feel the magic firsthand, then click on the Bug Tracker link to experience it yourself!",
    ],
    links: [
      "https://www.linkedin.com/posts/nandiki-chandrashekhar-532362235_nextjs-reactjs-typescript-activity-7189496291188531200-uWBJ?utm_source=share&utm_medium=member_desktop",
    ],
  },
  {
    title: "E-commerce Website",
    des: "This project is a vibrant and dynamic e-commerce platform developed using React, HTML, CSS, and incorporating React state management, hooks, authentication, and authorization features.",
    src: NextTrendshome,
    githubLink: "",
    webLink: "https://nandikieshop.ccbp.tech/",
    isComplete: true,
    modalttile: "Key Features",
    modalDes: [
      "React Framework: Utilizing React for the frontend development ensures a fast, responsive, and interactive user experience, making the codebase more maintainable and scalable.",
      "HTML & CSS: HTML provides the structure of the website, while CSS enhances its visual appeal.",
      "React State Management: Managing state effectively is crucial for ensuring data consistency and seamless user interactions. By employing React's state management techniques, such as Context API or Redux.",
      "React Hooks: React hooks revolutionized state management and side-effect handling in functional components. Hooks like useState and useEffect enable you to manage component state and perform side effects such as data fetching and subscriptions.",
      "Authentication and Authorization: Implementing authentication and authorization features ensures that only authorized users can access certain parts of the website and perform specific actionsBy integrating authentication mechanisms such as JWT (JSON Web Tokens).",
    ],
  },
  {
    title: "Youtube Clone",
    des: "Youtube Clone is a dynamic web application that brings the beloved features of YouTube into a whimsical and entertaining platform. ",
    src: Nextwatch,
    githubLink: "",
    webLink: "https://nandikiutubeapp.ccbp.tech/",
    isComplete: true,
    modalttile: "Key Features",
    modalDes: [
      "With Youtube Clone,users can dive into a world of endless entertainment, watching videos, trailers, and more with just a few clicks. The intuitive interface and smooth navigation make it easy",
      "One of the standout features of Youtube Clone is its robust authentication and authorization system. By implementing secure login mechanisms.",
      "With its playful design and powerful functionality, Youtube Clone brings the magic of YouTube to life in a whole new way.",
    ],
  },
  {
    title: "Jobby App",
    des: "Jobby App is a cutting-edge platform designed to revolutionize the job search experience.",
    src: JobbyImg,
    githubLink: "",
    webLink: "https://nandikijobby.ccbp.tech/",
    isComplete: true,
    modalttile: "Key Features",
    modalDes: [
      "Built using React, HTML, CSS, and employing React state management and hooks, it boasts a seamless and intuitive user experience.",
      "One of the key highlights of Jobby App is its robust authentication and authorization system, ensuring that user data remains secure while providing a personalized experience tailored to individual preferences. ",
    ],
  },
  {
    title: "Wikipedia App",
    des: "Wikipedia App is a whimsical yet powerful application that brings the vast knowledge of Wikipedia to your fingertips.",
    src: wikiAppImg,
    githubLink: "",
    webLink: "https://nandikiwikiapp.ccbp.tech/",
    isComplete: true,
    modalttile: "Key Features",
    modalDes: [
      "At the heart of Wikipedia App is its lightning-fast search functionality. The app features a user-friendly search bar where users can type in any topic they wish to learn about. Leveraging the speed and efficiency of React, the app  allowing users to quickly access the information they need.",
      "With Wikipedia App, users can dive into a world of knowledge on virtually any subject imaginable. From history and science to pop culture and beyond, easily accessible through its intuitive interface.",
      "Whether users are conducting research, satisfying their curiosity, or simply expanding their horizons, Wikipedia App offers a fun and efficient way to explore the endless wonders of Wikipedia.this app is sure to become a favorite tool for knowledge-seekers of all ages.",
    ],
  },
  {
    title: "Vedio/Audio Calling App",
    des: "Embark on a seamless communication journey with our innovative Video/Audio Calling App, poised to redefine the way you connect with others. Leveraging the power of Next.js and TypeScript, along with a carefully curated selection of complementary packages.",
    src: VedioStreemingImg,
    githubLink: "",
    webLink: "",
    isComplete: false,
    modalttile: "Key Features",
    modalDes: [
      "Our app aims to replicate the fluid and intuitive experience of leading video conferencing solutions like Zoom while adding our own unique touches to enhance user satisfaction. With a focus on simplicity and functionality.",
      "Powered by advanced features such as real-time video streaming, crystal-clear audio transmission, and dynamic screen sharing capabilities, our app ensures that every conversation is smooth, immersive, and productive. Whether you're hosting a virtual meeting, catching up with friends and family, or collaborating on a project with colleagues, our Video/Audio Calling App provides the perfect platform for seamless communication.",
      "Additionally, our commitment to security and privacy means that you can trust our app to protect your sensitive information and ensure that your conversations remain confidential. Through robust encryption protocols and stringent authentication measures, we prioritize the safety and security of our users' data at every step.",
      "Join us on the forefront of modern communication technology and experience the future of video and audio calling with our Next.js and TypeScript-powered app.",
    ],
  },
  {
    title: "Chatbot.ai",
    des: "Revolutionary Chatbot.ai App, poised to redefine the way students, teachers, and individuals across all walks of life engage with learning and information. Harnessing the unparalleled capabilities of ChatGPT, along with the dynamic duo of Next.js and TypeScript, and complemented by a carefully curated selection of additional packages.",
    src: chatbotImg,
    githubLink: "",
    webLink: "",
    isComplete: false,
    modalttile: "Key Features",
    modalDes: [
      "One of the key features of our app is its audio functionality, allowing users to engage in interactive conversations with ChatGPT using natural language. Whether you're a student seeking help with homework, a teacher looking for lesson inspiration, or a politician gathering information for a speech, our app provides instant access to a wealth of knowledge and resources.",
      "Our Chatbot.ai App is designed to be more than just a traditional chatbot  it's a comprehensive learning companion, accessible to all audiences regardless of their educational background or expertise. With a seamless and intuitive user interface, navigating the app is a breeze, ensuring that users can focus on learning without any distractions.",
      "In the education sector, our Chatbot.ai App serves as a powerful tool for both students and educators, facilitating learning in and out of the classroom.",
      "Join us on the forefront of education technology and experience the future of learning with our Chatbot.ai App. With its innovative features, seamless user interface, and unparalleled versatility, it's poised to transform the way we learn and communicate in the digital age.",
    ],
  },
  // Add more project objects as needed
];

export const EducationData = [
  {
    title: "B.Tech in Mechanical Engineering ",
    subTitle: "Career Point University (2014 - 2018)",
    result: "8.3/10",
    des: `🔧 Mechanical Engineer | Innovator | Problem Solver 🔧
    Mechanical engineering is a multifaceted discipline that encompasses the design, analysis, manufacturing, and maintenance of mechanical systems, ranging from simple machines to complex industrial equipment. It's a field that blends principles of physics, mathematics, and materials science to solve real-world problems and innovate new technologies.`,
    modalttile: "Crossing Boundaries",
    modalDes: [
      "Simulation and Modeling: Both mechanical and software engineers heavily rely on simulation and modeling techniques to design and analyze systems. Mechanical engineers use software tools like Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD), Similarly, software engineers utilize modeling techniques to design algorithms, simulate software behavior, and predict system performance.",
      "Automation and Control Systems: Automation is a central theme in both mechanical and software engineering. Understanding principles of control theory and programming languages is crucial for engineers in both disciplines.",
      "Internet of Things (IoT) and Embedded Systems: With the advent of IoT, the boundaries between mechanical and software engineering are becoming increasingly blurred.",
      "Product Lifecycle Management (PLM) and Software Development Lifecycle (SDLC): Both mechanical and software engineers follow structured processes for product development. Understanding these lifecycle processes enables engineers to collaborate effectively across disciplines and deliver high-quality products.",
    ],
  },

  {
    title: "Senior Secondary School Education",
    subTitle: "Bright Land School (2012 - 2014)",
    result: "79%",
    modalttile: "Passionate Science & Math Graduate",
    modalDes: [
      "I pursued an education that nurtured my analytical thinking and problem-solving skills. Through rigorous coursework and hands-on experiments, I developed a keen interest in understanding the natural world and its underlying mathematical frameworks.",
      "With a solid grounding in Physics, Chemistry, and Maths, I embark on each academic endeavor fueled by curiosity and a thirst for knowledge. My educational journey has been a testament to my dedication to understanding the intricate workings of the universe.",
      "From conducting experiments to diving deep into mathematical theories, I thrive on the challenge of unraveling the mysteries that govern our world. As a Senior Secondary School graduate, I am poised to continue my exploration of these fundamental principles with unwavering enthusiasm and determination.",
    ],
    des: `🎓 Senior Secondary School Graduate | Physics, Chemistry, and Maths Enthusiast 🎓
    Dedicated Senior Secondary School graduate with a strong foundation in Physics, Chemistry, and Maths. Passionate about exploring the fundamental principles of science and mathematics,`,
  },

  {
    title: "Secondary School Education",
    subTitle: "Bright Land School (2012)",
    result: "72%",
    modalttile: "STEM Enthusiast",
    modalDes: [
      "Developed a strong academic foundation in mathematics, science, and technology, laying the groundwork for future educational pursuits.",
      "Engaged in diverse learning experiences that fostered critical thinking, problem-solving skills, and collaboration. Thrived in a dynamic academic environment, embracing challenges with enthusiasm and perseverance.",
    ],
    des: `🎓 Secondary School Graduate | Foundation in STEM 🎓

    Proud graduate of secondary school with a focus on STEM (Science, Technology, Engineering, and Mathematics) subjects.`,
  },
];

export const WorkExperienceData = [
  {
    title: "Software Engineer(R&D)",
    subTitle: "MetricStream - (Sept 2022 - Present)",
    result: "Bengaluru",
    modalttile: "Experienced Frontend Developer",
    modalDes: [
      " Since joining MetricStream, I've resolved over 250 issues and spearheaded the development of 30 new features, all within a span of two years.",
      "One of my key contributions lies in my role as the prime responsible for group by reports and layout preferences in reports, where I've demonstrated my ability to translate complex requirements into elegant frontend solutions.",
      "I've also contributed extensively to our testing infrastructure, adding multiple unit test cases using Jest to validate the reliability and stability of our codebase.",
      "I closely monitor CI/CD pipelines to ensure smooth integration and deployment processes, utilize GitLab for version control, and leverage Jira for efficient issue tracking and resolution.",
      "Active participation in over 50 code reviews has been a cornerstone of my role at MetricStream.  By providing constructive feedback, identifying potential improvements, and sharing best practices, I've helped ensure that every line of code meets our rigorous standards for performance, reliability, and maintainability.",
    ],
    des: `Thrilled to be part of the dynamic team at MetricStream as a Frontend Developer, I'm passionate about crafting exceptional user experiences and pushing the boundaries of industry standards in Governance, Risk, and Compliance (GRC). Leveraging my expertise in Next.js, React.js, Redux state management and React Hook Forms, `,
  },
  {
    title: "Software Developer",
    subTitle: "AppPerfect Corp - (Mar 2022 - Mar 2022)",
    result: "Udaipur",
    modalttile: "Experienced Frontend Developer",
    links: ["https://www.amplabs.ai/"],
    modalDes: [
      "One of my most notable achievements was the conceptualization and successful delivery of a highly efficient Bulk Upload Feature for the Battery Archive project at AMPLABS(Link is provided below). This feature not only streamlined project workflows but also significantly enhanced productivity, marking a pivotal advancement in project efficiency.",
      "In addition to spearheading the Bulk Upload Feature, I was also the driving force behind implementing a robust Customer Feedback Feature, which played a crucial role in enhancing user engagement and satisfaction. By actively listening to user feedback and incorporating their suggestions into the development process, we were able to create a seamless and intuitive user experience.",
    ],
    des: "Delighted to have been part of the AppPerfect Corp team as a Frontend Developer, collaborating closely with cross-functional teams to identify challenges and implement best practices in app development. ",
  },
  {
    title: "Intern",
    subTitle: "NxtWave - (Sept 2021 - Mar 2022)",
    result: "Hyderabad",
    modalttile: " A Journey with JavaScript, React and Beyond",
    modalDes: [
      "Transitioning into the dynamic world of web design was an exhilarating leap forward in my journey as a software developer. Building upon my foundational knowledge, discovering the power of JavaScript to breathe life into static web pages. Mastering JavaScript was like unlocking a whole new dimension of creativity, enabling me to infuse interactivity and responsiveness into my projects.",
      "With a solid grasp of JavaScript under my belt, I seamlessly transitioned to harnessing the capabilities of React JS and Hooks.But it wasn't just about mastering the tools; it was about understanding the principles behind them.",
      "Reflecting on my journey as a Full Stack Developer Intern at Nxtwave, I am immensely grateful for the enriching experience it provided me. But perhaps the most valuable lesson I learned was how to adapt and thrive in the ever-evolving landscape of web development.",
      "As I embark on the next phase of my career, I carry with me not just technical skills, but also a mindset of continuous learning and innovation. The journey has only just begun, and I am eager to see where it takes me next in this dynamic and exciting industry.",
    ],
    des: "Thrilled to have embarked on my journey as a Full Stack Developer Intern at Nxtwave, where I honed foundational web development skills using HTML, CSS, and Bootstrap.",
  },
];

export const AchievementData = [
  {
    title: "Substantial Hike and Appraisal",
    subTitle: "MetricStream,Bengaluru",
    result: "Success",
    modalttile: "Driving Client Success at MetricStream",
    modalttileAdd: "Impact",
    modalDes: [
      "Strategic Layout Development: Spearheaded the development of innovative layout functionalities, enhancing the user experience and streamlining processes for clients.",
      "Advanced Reporting Solutions: Engineered comprehensive group-by reports, providing clients with insightful data analysis and actionable insights to drive informed decision-making.",
    ],
    modalDesAdd: [
      "Financial Recognition: Secured a noteworthy hike and appraisal, reflecting the tangible value added to MetricStream's operations through my contributions.",
      "Client Satisfaction: Delivered tailored solutions that met and exceeded the expectations of high-profile clients, fostering long-term partnerships and solidifying MetricStream's reputation as a trusted industry leader.",
    ],
    des: "As a pivotal member of the team, I played a prime role in architecting layout functionalities and crafting group-by reports for esteemed clients such as Barclays and Guidewire, among others.",
  },
  {
    title: "GATE Qualification (2018 & 2020)",
    subTitle: "Ace Academy, Hyderabad",
    result: "Qualified",
    modalttile: "A Journey of Dedication and Growth",
    modalDes: [
      "During my preparation for GATE, I embraced a rigorous regimen that sharpened my problem-solving skills and fostered conceptual thinking.",
      "The process of mastering diverse topics underscored my aptitude for acquiring new skills and knowledge swiftly a trait that continues to serve me well in my professional journey.",
      " As a front-end developer, I thrive in crafting intricate solutions and bringing creative visions to life, empowered by the analytical prowess and problem-solving acumen honed through my GATE journey.",
    ],
    des: "Through my GATE achievements, I not only demonstrated academic excellence but also showcased my ability to thrive in high-pressure environments, innovate, and overcome challenges a testament to my unwavering commitment to personal and professional growth.",
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
      { name: "SQL", icon: PiFileSql },
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

export const testimonialsData = [
  {
    name: "Tarun Nayak",
    position: "Principal Engineer",
    company: "MetricStream",
    imgSrc: tarunkumarPhoto,
    content:
      "Fondly known as Chandu, is an invaluable member of our team at MetricStream. Over the past 2 years, his exceptional dedication and hard work have been evident in every project he undertakes.  With over 30 new features spearheaded, Chandu's contributions are nothing short of outstanding. His expertise in frontend development, meticulous approach to testing, and active participation in code reviews make him an indispensable asset to our team.",
  },
  {
    name: "Shyam Vytla",
    position: "Staff Engineer",
    company: "MetricStream",
    imgSrc: shyamPhoto,
    content:
      "I have had the pleasure of witnessing Chandrashekhar's exceptional talent and dedication firsthand. Chandu's ability to swiftly resolve bugs, work tirelessly, and implement innovative features has significantly elevated our frontend development efforts. He has consistently impressed both colleagues and stakeholders alike. Chandu's contributions have not only significantly enhanced our projects but have also inspired and motivated those around him. ",
  },
  {
    name: "Rahul Singh",
    position: "Software Engineer",
    company: "Mercedes Benz",
    imgSrc: rahulsinghPhoto,
    content:
      "My Childhood friend Chandu, I've had the privilege of witnessing his journey from our school days to our engineering years. Chandu has always been a shining example of dedication, perseverance, and patience. His superior intellect and willingness to share his knowledge not only made him an outstanding student but also a guiding light for those around him, including myself. His unwavering commitment to excellence serves as an inspiration to all who know him.",
  },
  // Add more testimonial objects as needed
];
