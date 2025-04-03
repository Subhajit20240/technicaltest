import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { notes, deleteNote } = useContext(NotesContext);

  return (
    <div className="w-3/4 bg-white shadow-md rounded-lg p-6">
      <Link to="/add" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        + Add Note
      </Link>
      <div className="mt-4">
        {notes.length === 0 ? (
          <p className="text-gray-500 text-center">No notes available.</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="bg-gray-200 p-4 my-2 rounded-md flex justify-between">
              <Link to={`/note/${note.id}`} className="text-lg font-semibold">
                {note.title}
              </Link>
              <button onClick={() => deleteNote(note.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
