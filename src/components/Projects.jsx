// src/components/Projects.jsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Launching Multi-Agent AI Arbitrator",
    description:
      "Note: this is publicly disclosed. Help client build and launch the first AI Arbitrator",
    tag: "Consulting",
    image: import.meta.env.BASE_URL + "p1.png",
    // optional extra detail
    highlights: [
      "Define and prioritize product features, manage Jira backlog",
      "Tune LLM prompts and oversee responsible AI testing",
      "Provide recommendations for  Go-To-Market",
      "Translate AI / technical needs and requirements to executive stakeholders",
    ],
    techStack: [
      "LangSmith - Prompt Tuning",
      "High-level Architecture Design",
      "Presentation",
      "User Journey",
      "Jira",
    ],
    link: null, // add a URL later if you want
  },
  {
    title: "IOS APP: On Screen Translation Overlay",
    description:
      "Imagine traveling in Europe without speaking English, French, or German, and the local transportation app is only in the local language. You are about to miss your train because you can’t buy a ticket. Instead of taking a screenshot and opening up Google Translate: I built an iOS app that translates any on-screen text in real time using OCR and an LLM.",
    tag: "Solving real problems during travel",
    image: import.meta.env.BASE_URL + "p2.png",
    highlights: [
      "300+ downloads in the first month",
      "Used OCR / Vision framework to capture location of on-screen text",
      "Tuned prompts to make LLM translation much more accurate & in context than google translate",

      "Simple 5 step setup for users that takes 30 seconds",
      "Ability to translate anything on screen in real time",
    ],
    techStack: ["Swift", "OCR", "Prompt engineering", "iOS", "LLM"],
    link: null,
  },
  {
    title: "Paper Match: Tinder for Research Papers",
    description:
      "When conducting research, only 3 out of 30 papers downloaded are actually relevant. I built Paper Match, a semantic search and recommender platform that enhances the search and recommender algorithim to get what is really relevant for the researcher based on their feedback.",
    tag: "solving my own problems",
    image: import.meta.env.BASE_URL + "p4.png",
    highlights: [
      "Scraped and embedded ArXiv abstracts using OpenAI embedding API + Supabase + FAISS for semantic search",
      "Personalized recommendations with an iterative like/dislike feedback loop",
      "Instantly find similar papers and organize research into topic-based sessions",
      "RAG Q&A chatbot to answer questions about research papers  ",
      "15+ beta users with highly positive UI/UX feedback",
    ],
    techStack: [
      "React",
      "Python",
      "Flask",
      "OpenAI Chat / Embedding",
      "FAISS / Qdrant Vector DB",
      "Supabase auth + storage",
      "Vercel / Render deployment",
      "RAG",
    ],
    link: null,
  },
  {
    title: "Course Finder",
    description:
      "An interactive platform that lets Amherst College students explore courses visually, search by natural language, and discover suprising course connections.",
    tag: "Currently considered for Adoption at Amherst College",
    image: import.meta.env.BASE_URL + "p3.png",
    highlights: [
      "Interactive map with 10+ years of Amherst courses. Related classes closer together (using semantic similarity)",
      "Natural-language search that finds courses by theme",
      "“Surprise Me” recommendations for new courses based on student's academic history",
      "Presented during entire college faculty meeting, used by current students",
    ],
    techStack: [
      "Dimensionality Reduction",
      "Supabase",
      "Embedding",
      "RAG",
      "LangChain + Pydantic for structured data",
    ],
    link: null,
  },

  {
    title: "Minerva Ed: Multi-Agent Classroom Simulator",
    description:
      "Educators often struggle to predict where students will get confused — so we built Minerva, a multi-agent simulator that analyzes lecture materials and generates realistic student–teacher interactions to surface misunderstandings before class even begins.",
    tag: "1st Place @ HackUMass (600 participants)",
    image: import.meta.env.BASE_URL + "p5.png",
    highlights: [
      "Created Professor and student agents with different identities to simulate classroom Q&A and reveal likely points of confusion",
      "Ingested lecture notes to generate domain-specific teacher models that respond to student questions in context",
      "Produced summaries, question breakdowns, and recurring keyword reports to help instructors improve lectures",
      "Won 1st place at HackUMass for demonstrating a viable agent-interaction model for improving teaching quality",
    ],
    techStack: [
      "React",
      "Flask",
      "Python",
      "OpenAI API",
      "Multi-Agent Simulation",
      "Supabase",
    ],
    link: null,
  },
  {
    title: "The Difference",
    description:
      "I helped a health tech startup go from idea to launch — leading market research, brand strategy, and the full design of a custom iOS app now used by 7,000+ people.",
    tag: "First Employee",
    image: import.meta.env.BASE_URL + "p6.png",
    highlights: [
      "Planned and executed key launch strategies, including market research, competitor analysis, SWOT, and targeted user surveys",
      "Designed complete brand presence: company website, app landing pages, and email marketing campaigns",
      "Created a fully custom iOS app from the ground up — wireframes, high-fidelity prototypes, animations, onboarding, and logo design",
      "Produced product demo videos and motion graphics to support launch and user education",
    ],
    techStack: ["iOS Design", "Figma", "Brand Strategy", "Marketing"],
    link: null,
  },
];

export default function Projects() {
  return (
    <div
      className="
        min-h-screen 
        bg-gradient-to-b from-[#faf4e8] via-[#f8efe3] to-[#f3e7d7]
      "
    >
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* same grain as home */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="relative">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-center mb-3 tracking-tight text-[#e28f7a]"
            style={{ fontFamily: "Pixel, sans-serif" }}
          >
            Selected Projects
          </h1>

          <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            I enjoy building things and tinkering with new technologies. Here’s
            a curated selection of projects I’ve worked on across AI, product,
            and design.
          </p>

          {/* Vertical stack instead of grid */}
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
