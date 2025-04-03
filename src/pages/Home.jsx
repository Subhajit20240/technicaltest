import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { notes, deleteNote } = useContext(NotesContext);

  return (
    <div className="home mt-4 flex flex-wrap justify-center gap-6">
      <div className="top py-4 text-center">
        <h1 className="text-2xl font-bold mb-4">WELCOME TO HOME PAGE</h1>
        <Link to="/add" className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 mt-5 inline-block">
          + Add Note
        </Link>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {notes.length === 0 ? (
          <p className="text-gray-500 text-center text-xl font-semibold w-full">No notes available.</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="bg-blue-100 shadow-md rounded-lg p-6 w-[400px] h-[300px] flex flex-col justify-between ">
              <Link to={`/note/${note.id}`} className="text-xl font-semibold break-words text-blue-700">
                {note.title}
              </Link>
              <p className="text-md font-medium text-gray-500">{note.subtitle}</p>
              <p className="text-gray-600 flex-grow overflow-auto break-words">{note.content}</p>
              <div className="flex justify-between mt-4">
                {/* <Link to={`/note/${note.id}`} className="bg-green-500 text-white px-3 py-1 rounded">View</Link> */}
                <button onClick={() => deleteNote(note.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;