import { useDeleteNoteMutation } from "../features/notes/notesApi";

const NoteItem = ({ note }) => {
  const [deleteNote] = useDeleteNoteMutation();

  return (
    <div>
      <p>{note.text}</p>

      <button onClick={() => deleteNote(note._id)}>
        Delete
      </button>
    </div>
  );
};

export default NoteItem;