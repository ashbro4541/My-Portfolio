import gshock from "../assets/images/gshock.png";
import speed400 from "../assets/images/speed400.png";
import React9 from "../assets/images/React9.png";
import profileproject from "../assets/images/profileproject.png"; // ✅ Make sure this image exists

export const headlines = [
  "Hi, I'm Yash.",
  "I'm a Software Developer",
  "Over the past few years, I've immersed myself in building and scaling backend software while actively tackling frontend challenges."
];

export const fixedNavItems = [
  { name: "Home" },
  { name: "About" },
  { name: "Projects" },
  { name: "Contact" }
];

export const projects = [
  {
    title: "Speed 400",
    image: speed400,
    linkGithub: "https://github.com/ashbro4541/speed400",
    linkOnline: "https://speed400.vercel.app/",
    description:
      "A sleek and dynamic website showcasing the Speed 400 bike, built with HTML, CSS, and JavaScript for a stunning and responsive user experience. 🚀",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"]
  },
  {
    title: "G-Shock",
    image: gshock,
    linkGithub: "https://github.com/ashbro4541/G-SHOCK",
    linkOnline: "",
    description:
      "A stylish and interactive G-Shock watch website built with HTML, CSS, and JavaScript, delivering a bold and responsive user experience. ⌚🚀",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "JSON"]
  },
  {
    title: "Almabridge Mentorship Platform",
    image: profileproject,
    linkGithub: null,
    linkOnline: "",
    description:
      "A dynamic platform connecting students with seniors and alumni for mentorship. Features include secure request system, profile creation, backend validation, notification system, and payment screenshot uploads. 💼📘",
    techStack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express",
      "MySQL"
    ]
  },
  {
    title: "Restoran Practice Project",
    image: React9,
    linkGithub: "https://github.com/ashbro4541/G-SHOCK",
    linkOnline: "https://restoran-pratice-project.vercel.app/",
    description:
      "A practice restaurant website built using React.js and modern styling tools like Tailwind CSS and Bootstrap. It mimics a real restaurant landing page with full responsiveness and clean design. 🍽️📱",
    techStack: ["HTML", "JavaScript", "Tailwind CSS", "Bootstrap", "React.js"]
  }
];

export const skillsWork = [
  "HTML5",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Netlify",
  "Vercel",
  "VS Code",
  "Postman",
  "Windows",
  "Linux"
];

export const certificates = ["MERN Stack", "AI Tools and ChatGPT"];

export const metadata = {
  title: "Yash Annasaheb Shinde",
  description:
    "This portfolio is a collection of my work that showcases my skills and creativity.",
  imageURL: "", // Optional: add open graph image
  pageUrl: "https://www.johnclaytonblanc.com"
};
