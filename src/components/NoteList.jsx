import { useGetNotesQuery } from "../features/notes/notesApi";

import NoteItem from "./NoteItem";

const NoteList = () => {
  const { data: notes, isLoading } = useGetNotesQuery();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;