import { useState } from "react";

import { useAddNoteMutation } from "../features/notes/notesApi";

const AddNote = () => {
  const [text, setText] = useState("");

  const [addNote] = useAddNoteMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    await addNote({ text });

    setText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddNote;