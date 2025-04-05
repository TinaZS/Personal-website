import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  date,
  tag,
  image,
  link,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white shadow-sm rounded-xl overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-xs text-blue-500 uppercase font-semibold">{tag}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <h2 className="text-lg font-bold flex items-center gap-1">
            {title}
            <span>↗</span>
          </h2>
        </a>
        <p className="text-gray-600 text-sm mt-1 mb-2 line-clamp-3">
          {description}
        </p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </motion.div>
  );
}
