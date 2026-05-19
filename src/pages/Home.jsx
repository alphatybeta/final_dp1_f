import AddNote from "../components/AddNote";
import NoteList from "../components/NoteList";

const Home = () => {
  return (
    <div>
      <h1>Notes App</h1>

      <AddNote />

      <NoteList />
    </div>
  );
};

export default Home;