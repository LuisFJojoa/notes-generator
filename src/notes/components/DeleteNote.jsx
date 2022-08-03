import { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { NoteContext } from "../context/NoteContext";
import "./ModalForm.css";

export const DeleteNote = ({ onClose, show, modalTitle, noteId }) => {

  const { removeNote } = useContext(NoteContext)

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const onDeleteNote = () => {
    console.log('Delete note');
    removeNote(noteId)
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 200 }}
    >
      <div className="modal" onClick={onClose} role="dialog">
        <div className="modal-content p-3" onClick={e => e.stopPropagation()}>
          <div className="modal-header d-flex justify-content-center">
            <h1x className="modal-title">{modalTitle}</h1x>
          </div>
          <div className="modal-footer d-flex justify-content-center ">
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-danger" onClick={onDeleteNote}>Delete</button>
          </div>
        </div>
      </div>
    </CSSTransition >,
    document.getElementById("root")
  );
};

