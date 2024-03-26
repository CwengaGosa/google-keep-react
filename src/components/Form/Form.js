import React, { useState } from "react";
import "./Form.css";
import { uid } from "uid";

const Form = (props) => {
  console.log(props);
  // destructuring
  const { edit, toggleModal, selectedNote } = props;

  // creating useStates
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [isActiveForm, setIsActiveForm] = useState(edit);

  // getting title and text input values
  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value);
    setIsActiveForm(true);
  };

  // when form submitted
  const submitFormHandler = (event) => {
    event.preventDefault();

    // if we are not editing
    if (!edit) {
      // create note
      props.addNote({
        id: uid(),
        title,
        text,
      });

      // display inactive form
      setIsActiveForm(false);
    } else {
      props.editNote({
        id: selectedNote.id,
        title,
        text
      })
      toggleModal();
    }
    // clear input fields
    setTitle("");
    setText("");
  };

  // when inactive form is clicked on active form is true
  const formClickHandler = () => {
    setIsActiveForm(true);
  };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form
          onSubmit={submitFormHandler}
          className={isActiveForm ? "form" : ""}
        >
          {/* display title when isactive form is true */}
          {isActiveForm && (
            <input
              type="text"
              className="note-title"
              placeholder="Title"
              onChange={titleChangeHandler}
              value={title}
            />
          )}

          <input
            className="note-text"
            type="text"
            placeholder="Take a note..."
            onChange={textChangeHandler}
            value={text}
          />
          {/* if active form is true display active form actions */}
          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
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
                <div className="tooltip">
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
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button type="submit" className="close-btn">
                Close
              </button>
            </div>
          ) : (
            // else display inactive form actions
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-icons-outlined hover">check_box</span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
