import { FaGithub, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export const homeData = [
  {
    title: "Intelligent Analysis",
    description: "Advanced AI delivers precise, context-aware code reviews.",
    icon: "🧠",
  },
  {
    title: "Real-Time Insights",
    description: "Instant, actionable feedback to elevate your code.",
    icon: "⚡",
  },
  {
    title: "Broad Language Support",
    description: "Compatible with all major programming languages.",
    icon: "🌐",
  },
  {
    title: "Seamless Integration",
    description: "Effortlessly fits into your development pipeline.",
    icon: "🔄",
  },
];

export const backendURL =
  "http://localhost:3000/ai/get-review";
export const Footerdata = [
  {
    title: "GitHub",
    link: "https://github.com/yourusername",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/yourusername",
    icon: <FaLinkedin />,
  },
  {
    title: "Profile",
    link: "https://yourwebsite.com",
    icon: <FaUserCircle />,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/yourusername",
    icon: <FaSquareFacebook />,
  },
];