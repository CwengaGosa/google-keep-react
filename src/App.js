import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

const NOTES = [];

const App = () => {
  // setting usestates
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // function to add a note to the array
  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  // function to edit a note
  const editNote = (editedNote) => {
    setNotes((prevNotes) => {
      const newArray = prevNotes.map((note) => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        return note;
      });
      return newArray;
    });
  };

  // function to delete a note
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };

  // function to open and close modal
  const toggleModal = () => {
    setIsModalOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} /> {/*  selectedNote={selectedNote} */}
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
    </div>
  );
};

export default App;
