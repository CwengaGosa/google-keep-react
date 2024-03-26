import React, { useState } from "react";

const Note = (props) => {
  // destructuring props
  const { toggleModal, note, setSelectedNote } = props;

  // setting useStates
  // const [title, setTitle] = useState(note.title);
  // const [text, setText] = useState(note.text);
  const [isHover, setIsHover] = useState(false); // set ishover default to false (we are not hovering)

  // when we click on a note
  const noteClickHandler = () => {
    toggleModal();
    setSelectedNote(note);
  };

  // isHover is true when hovering over the note
  const hoverOverHandler = () => {
    setIsHover(true);
  };

  // isHover is false when hovering outside the note
  const hoverOutHandler = () => {
    setIsHover(false);
  };

  // implement delete function when archive is clicked
  const deleteHandler = () => props.deleteNote(note.id);

  return (
    <div
      className="note"
      id={note.id}
      onClick={noteClickHandler}
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
    >
      {/* if we are hovering display check cirle */}
      {isHover && (
        <span className="material-icons check-circle">check_circle</span>
      )}
      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>
      {/* if we are hovering disply note footer */}
      <div
        className="note-footer"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            add_alert
          </span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive" onClick={deleteHandler}>
          <span className="material-icons-outlined hover small-icon">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
};

export default Note;
