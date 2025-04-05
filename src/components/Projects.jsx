import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "LogFlow AI",
    date: "Jan 10, 2025",
    description:
      "Log analyzer that turns raw system logs into real-time insights. Built for DevOps teams.",
    tag: "AI",
    image: "/logflow.png",
    link: "#",
  },
  {
    title: "Amherst Connect",
    date: "Nov 10, 2024",
    description:
      "A platform to unify and display campus events from multiple sources, updated in real time.",
    tag: "Campus",
    image: "/amherst.png",
    link: "#",
  },
  {
    title: "CodeMatch",
    date: "Aug 2, 2024",
    description:
      "Match developers by interest and availability using GPT-powered tagging.",
    tag: "Hackathon",
    image: "/3.png",
    link: "#",
  },
  {
    title: "Tempo Tracker",
    date: "May 18, 2024",
    description:
      "A mood + productivity tracker built for consultants — charts, journaling, and sleep log.",
    tag: "Wellness",
    image: "/logflow.png",
    link: "#",
  },
  {
    title: "PromptPal",
    date: "Feb 8, 2024",
    description:
      "Curate and test AI prompts across different models — export your best flows as templates.",
    tag: "AI Tools",
    image: "/4.png",
    link: "#",
  },
  {
    title: "Startup Library",
    date: "Jan 15, 2024",
    description:
      "An organized Notion-like directory of 300+ resources for early-stage founders.",
    tag: "Productivity",
    image: "/logflow.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">Selected Projects</h1>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
        I enjoy building things and tinkering with new technologies. Here’s a
        curated list of things I’ve worked on.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
