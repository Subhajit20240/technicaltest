import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { useParams } from "react-router-dom";

const NoteDetail = () => {
    const { notes } = useContext(NotesContext);
    const { id } = useParams();
    const note = notes.find(note => note.id === parseInt(id));

    return (
        <div>
            {note ? (
                <>
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                </>
            ) : (
                <p>Note not found.</p>
            )}
        </div>
    );
};

export default NoteDetail;
