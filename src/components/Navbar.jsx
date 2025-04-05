import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">
        YourName
      </Link>
      <div className="space-x-6 text-md">
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/projects" className={isActive("/projects")}>
          Projects
        </Link>
      </div>
    </nav>
  );
}
