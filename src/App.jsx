import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotesProvider } from "./context/NotesContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import NoteDetails from "../src/pages/NoteDetail";

function App() {
  return (
   
    <ThemeProvider>
      <NotesProvider>
        <Router>
          
          <div className="min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddNote />} />
              <Route path="/note/:id" element={<NoteDetails />} />
            </Routes>
          </div>
        </Router>
      </NotesProvider>
    </ThemeProvider>
  );
}

export default App;
