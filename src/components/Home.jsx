import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Github, Linkedin } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-start px-6 py-20 bg-gradient-to-b from-white to-blue-50 text-center"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.h1
        variants={item}
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
      >
        Hey, I’m YourName 👋
      </motion.h1>

      <motion.p
        variants={item}
        className="text-lg text-gray-700 max-w-2xl mb-6"
      >
        I'm a developer and designer who loves turning complex ideas into clean,
        usable interfaces. Currently focused on AI tooling and personal
        productivity apps.
      </motion.p>

      <motion.div variants={item} className="mb-10">
        <Link
          to="/projects"
          className="inline-flex items-center px-5 py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition"
        >
          View Projects
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </motion.div>

      <motion.div
        variants={item}
        className="bg-white rounded-xl shadow-md p-6 max-w-3xl w-full text-left mb-10"
      >
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700 mb-2">
          I enjoy exploring the intersection of technology, creativity, and
          systems design. My background includes product design, frontend
          development, and a lot of late-night side projects.
        </p>
        <p className="text-gray-600 text-sm">
          Whether it's building internal tools for teams or designing elegant
          user flows, I'm happiest when solving real problems with real people.
        </p>
      </motion.div>

      <motion.div
        variants={item}
        className="bg-white rounded-xl shadow-md p-6 max-w-3xl w-full text-left mb-10"
      >
        <h2 className="text-xl font-semibold mb-2">What I’m Working On</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            🚀 Building a public speaking coaching app using AI + gesture
            tracking
          </li>
          <li>📚 Reading *Designing Interfaces* and exploring motion UX</li>
          <li>
            🌐 Contributing to open-source projects (React + accessibility)
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
