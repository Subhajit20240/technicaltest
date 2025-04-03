import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((res) => {
        setNotes(res.data.map(note => ({ id: note.id, title: note.title, content: note.body })));
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  const addNote = (newNote) => {
    setNotes([...notes, { id: Date.now(), ...newNote }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {loading ? <p className="text-gray-500 text-center">Loading notes...</p> : children}
    </NotesContext.Provider>
  );
};
