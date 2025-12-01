// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#146b60] font-semibold border-b-2 border-[#19c27c]"
      : "text-gray-700 hover:text-[#146b60]";

  return (
    <nav
      className="
        w-full sticky top-0 z-20
        bg-[#f7ecde]/95 backdrop-blur
        border-b border-[#e1d4c2]
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: logo + status dot */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900"
          style={{ fontFamily: "Pixel, sans-serif" }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#19c27c] opacity-50" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#19c27c]" />
          </span>
          <span>Tina</span>
        </Link>

        {/* Right: nav links */}
        <div
          className="flex gap-6 text-sm md:text-base items-end"
          style={{ fontFamily: "Pixel, sans-serif" }}
        >
          <Link to="/" className={`pb-1 ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/projects" className={`pb-1 ${isActive("/projects")}`}>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
