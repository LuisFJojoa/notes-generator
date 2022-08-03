import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useForm } from "../../hooks/useForm";
import { NoteContext } from "../context/NoteContext";
import "./ModalForm.css";
import "./CreateEditModalForm.css"

export const CreateEditModalForm = ({ onClose, show, modalTitle, renderedNote }) => {

  const [inputCategory, setInputCategory] = useState('');
  const { editNote } = useContext(NoteContext)
  const { title, content } = renderedNote
  const [categories, setCategories] = useState([])

  const { onInputChange } = useForm({
    title: title,
    content: content
  })

  const onCategoryChange = ({target}) => {
    setInputCategory(target.value);
  };

  const onKeyDown = (e) => {
    const { key, target } = e;
    const trimmedInput = inputCategory.trim();
    if (key === 'Enter' || target.name === 'addNote') {
      e.preventDefault();
      if (trimmedInput.length && !categories.includes(trimmedInput)) {
        setCategories(prevState => [...prevState, trimmedInput]);
      }
    setInputCategory('');
    }
  };

  const deleteCategory = (index) => {
    setCategories(prevState => prevState.filter((category, i) => i !== index))
  }

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const onSaveNote = () => {
    console.log('Save note');
    editNote(renderedNote)
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
          <div className="modal-header">
            <h2 className="modal-title">{modalTitle}</h2>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label"><b>Title:</b></label>
                <input name="title" type="text" className="form-control" id="recipient-name" value={title || ''} onChange={onInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label"><b>Content:</b></label>
                <textarea name="content" rows="7" className="form-control" id="message-text" value={content} onChange={onInputChange}></textarea>
              </div>

              {/* ADD--CATEGORIES */}
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label"><b>Categories:</b></label>
                <div className="container d-flex flex-wrap">
                  {categories.map((category) => < div id="category" > {category} <button onClick={() => deleteCategory(index)}>x</button> </ div > )}
                </div>
              </div>
              <div className="form-group mt-3 d-flex flex-col">
                <div className="col-10">
                  <input rows="7" className="form-control" id="message-text" placeholder="new category" value={inputCategory} onKeyDown={onKeyDown} onChange={onCategoryChange}/>
                </div>
                <div className="col-2 d-flex justify-content-end">
                  <button type="button" className="btn btn-success" name="addNote" onClick={onKeyDown}>Add</button>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-success" onClick={onSaveNote}>Save changes</button>
          </div>
        </div>
      </div>
    </CSSTransition >,
    document.getElementById("root")
  );
};

