import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Briefcase, PenTool, Code2, Cpu } from "lucide-react";
import { Plus } from "lucide-react";

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
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <motion.div
      className="
        min-h-screen flex flex-col items-center justify-start px-6 py-20 
        text-center relative 
        bg-gradient-to-b from-[#faf4e8] via-[#f8efe3] to-[#f3e7d7]
      "
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Optional soft noise for aesthetic */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Heading */}
      <motion.h1
        variants={item}
        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
      >
        <span className="text-gray-800">Hi, I’m </span>
        <span
          className="text-[#e28f7a]"
          style={{ fontFamily: "Pixel, sans-serif" }}
        >
          Tina
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="text-lg text-gray-700 max-w-2xl mb-6 leading-relaxed"
      >
        I'm an AI & strategy consultant, with prior experience in UI/UX design,
        frontend development, and AI product management.
      </motion.p>

      {/* Skill Cards */}
      <motion.div
        variants={item}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mt-10 mb-14"
      >
        {[
          {
            icon: Briefcase,
            title: "AI Consulting",
            desc: "Beyond delivering strategy and optimizing workflows, I help organizations design, build, and launch ambitious AI solutions — internal and public facing. Translating tech insights to executive audiences",
            color: "bg-[#DBECF1]",
            iconColor: "text-[#2F768A]",
          },
          {
            icon: PenTool,
            title: "UI/UX Design",
            desc: "15+ years of visual arts experience applied to UI/UX & branding. Skilled in Adobe XD, Photoshop, and high fidelity wireframing",
            color: "bg-[#F5E6F0]",
            iconColor: "text-[#A3477B]",
          },
          {
            icon: Code2,
            title: "Frontend Development",
            desc: "Build modern websites for startups with a focus on performance and clean experience",
            color: "bg-[#E8F5E3]",
            iconColor: "text-[#4C8C51]",
          },
          {
            icon: Cpu,
            title: "Product Management",
            desc: "Define features, integrate customer feedback, and translate AI requirements to stakeholders",
            color: "bg-[#F6F1DA]",
            iconColor: "text-[#9C7A2C]",
          },
        ].map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04, y: -4 }}
            className="
              relative bg-white rounded-[22px] p-6 text-center 
              border border-gray-200 shadow-[4px_4px_0px_#e3dccf]
            "
            style={{
              boxShadow: "4px 4px 0px #d8cfc0", // pixel shadow
            }}
          >
            <div
              className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${skill.color}`}
            >
              <skill.icon className={`w-6 h-6 ${skill.iconColor}`} />
            </div>

            <h3 className="font-bold text-gray-900 mb-2 text-lg pixel-font">
              {skill.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div variants={item}>
        <Link
          to="/projects"
          className="
            inline-flex items-center px-6 py-3 text-white 
            bg-[#3b8794] hover:bg-[#2f6f78] 
            rounded-xl transition shadow-[3px_3px_0px_#2f6f78]
            hover:shadow-[5px_5px_0px_#2f6f78]
          "
          style={{ fontFamily: "Pixel, sans-serif" }}
        >
          See My Projects
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
