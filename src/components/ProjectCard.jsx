// src/components/ProjectCard.jsx
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tag,
  image,
  link, // optional external link
  highlights = [], // optional array of bullet points
  techStack = [], // optional array of strings
}) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        bg-white rounded-[22px] overflow-hidden
        border border-[#e2d7c3]
        shadow-[4px_4px_0px_#d8cfc0]
      "
    >
      <div className="md:flex">
        {/* Left: image */}
        <div className="w-full overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt="Project preview"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: content */}
        <div className="md:w-3/5 p-5 flex flex-col gap-3">
          <p className="text-[11px] tracking-wide uppercase font-semibold text-[#3b8794]">
            {tag}
          </p>

          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

          <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

          {highlights.length > 0 && (
            <ul className="mt-1 space-y-1 text-sm text-gray-700 list-disc list-inside">
              {highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}

          {techStack.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="
                    px-2.5 py-1 rounded-full text-[11px] 
                    bg-[#f1e6d6] text-gray-800
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {link && link !== "#" && (
            <div className="mt-2">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1 text-xs md:text-sm
                  text-white bg-[#3b8794] hover:bg-[#2f6f78]
                  px-3 py-1.5 rounded-lg
                  shadow-[2px_2px_0px_#2f6f78]
                  hover:shadow-[3px_3px_0px_#2f6f78]
                  transition
                "
              >
                View project
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
