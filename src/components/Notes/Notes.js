import "./Notes.css";
import Note from "./Note";

// accessing functions from parent App.js
const Notes = (props) => {
  // destructuring our functions
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;

  return (
    <div className="notes">
      {
        // if there are no notes, display <p>
        notes.length === 0 ? (
          <p>Notes you add appear here.</p>
        ) : (
          // else display notes
          notes.map((note, index) => (
            <Note
              key={index}
              note={note}
              deleteNote={deleteNote}
              toggleModal={toggleModal}
              setSelectedNote={setSelectedNote}
            />
          ))
        )
      }
    </div>
  );
};

export default Notes;
