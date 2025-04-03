import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const { addNote } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");                                                                                                         
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    addNote({ title, content });
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-300 shadow-md rounded-lg p-6 w-[600px] h-[400px] flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center mb-4">Add Your Note Here</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text" placeholder="Title" value={title}  onChange={(e) => setTitle(e.target.value)}  className="border border-gray-300 p-2 rounded mb-2 text-black"
          />
          <textarea
            placeholder="Content"  value={content}  onChange={(e) => setContent(e.target.value)}  className="border border-gray-300 p-2 rounded mb-2 text-black"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
