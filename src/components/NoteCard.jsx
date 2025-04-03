import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { Link } from "react-router-dom";

const NoteCard = ({ note }) => {
    const { deleteNote } = useContext(NotesContext);

    return (
        <div className="note-card">
            <h3>{note.title}</h3>
            <p>{note.body.substring(0, 50)}...</p>
            <Link to={`/note/${note.id}`}>View Details</Link>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
    );
};

export default NoteCard;
