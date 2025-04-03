import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(NotesContext);
    
    return (
        <button onClick={toggleTheme} className="toggle-btn">
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};

export default ThemeToggle;
