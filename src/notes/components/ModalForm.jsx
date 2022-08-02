import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./ModalForm.css";

export const ModalForm = ({ onClose, show, title, children }) => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

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
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="recipient-name" className="col-form-label"><b>Title:</b></label>
                <input type="text" className="form-control" id="recipient-name" />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label"><b>Content:</b></label>
                <textarea rows="7" className="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-success" onClick={onClose}>Save changes</button>
          </div>
        </div>
      </div>
    </CSSTransition >,
    document.getElementById("root")
  );
};

