import React, {useState} from 'react';
import "./Modal.css";
import Form from "../Form/Form";

const Modal = (props) => {
  // destructuring props
  const { isModalOpen, selectedNote, toggleModal, editNote } = props;

  // creating useStates
  const [hasCursor, setHasCursor] = useState(false);

  const handleCloseModal = () => !hasCursor && toggleModal();
  const handleMouseOverModal = () => setHasCursor(true);
  const handleMouseOutModal = () => setHasCursor(false);
 
  
  return (
    // if modal is open the className will be openmodal to open the modal
    <div className={`modal ${isModalOpen ? "open-modal" : ""} `} onClick={handleCloseModal} >
      <div className="modal-content" onMouseOver={handleMouseOverModal} onMouseOut={handleMouseOutModal} >
        <Form selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote} edit />
      </div>
    </div>
  );
};

export default Modal;
