import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`p-4 shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">NotesApp</Link>
        
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/add" className="hover:text-green-500">Add Note</Link>
          <button onClick={toggleTheme} className="bg-gray-700 text-white px-3 py-1 rounded">
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
