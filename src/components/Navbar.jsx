import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`p-4 shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2"> NotesApp  </Link>
        
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/add" className="hover:text-green-500">Add Note</Link>
          <button  onClick={toggleTheme}  className="bg-gray-700 text-white px-3 py-1 rounded flex items-center gap-2">
            {darkMode ? <FaSun /> : <FaMoon />} 
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
