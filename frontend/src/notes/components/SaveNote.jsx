import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useAxios } from "../../hooks/useAxios";
import { useForm } from "../../hooks/useForm";
import "./ModalForm.css";
import "./SaveNote.css"

export const SaveNote = ({ onClose, show, renderedNote, onCreateNote, onUpdateNote }) => {

  const result = useAxios()
  const [initialDataToFrom, setInitialDataToForm] = useState({
    action: 'edit',
    title: 'Edit note',
    event: 'Save changes'
  })
  
  const [inputCategory, setInputCategory] = useState('');
  const { title, content, categories: renderedCategories } = renderedNote
  const splitResult = renderedCategories?.split(',')
  const [categories, setCategories] = useState([])
  
  const [formState, setFormState] = useState({});

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });  
  };


  useEffect(() => {
    setCategories(splitResult || [])
    setFormState({
      title,
      content
    })
    {
      (title)
        ? setInitialDataToForm({
          action: 'edit',
          title: 'Edit note',
          event: 'Save changes'
        })
        : setInitialDataToForm({
          action: 'create',
          title: 'New note',
          event: 'Add note'
        })
    }
  }, [renderedNote])


  const onCategoryChange = ({ target }) => {
    setInputCategory(target.value);
  };

  const onKeyDown = (evt) => {
    const { key, target } = evt;
    const trimmedInput = inputCategory.trim();
    if (key === 'Enter' || target.name === 'addNote') {
      evt.preventDefault();
      if (trimmedInput.length && !categories.includes(trimmedInput)) {
        setCategories(prevState => [...prevState, trimmedInput]);
      }
      setInputCategory('');
    }
  };

  const onDeleteCategory = (evt) => {
    evt.preventDefault();
    setCategories(prevState => prevState.filter((category, i) => i !== parseInt(evt.target.name)))
  }

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const onSaveNote = () => {

    if (initialDataToFrom.action === 'edit') {

      const note = {
        id: renderedNote.id,
        title: formState.title,
        content: formState.content,
        state: renderedNote.state,
        categories: categories.join()
      }

      console.log('Edit note');

      console.log(note);
      //onUpdateNote(note, false)

    } else {
      const note = {
        title: formState.title,
        content: formState.content,
        state: 'no-archived',
        categories: categories.join()
      }
      console.log('Create note');
      onCreateNote(note)
    }
  }

  useEffect(()=> {

  },[])

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
            <h2 className="modal-title">{initialDataToFrom.title}</h2>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label"><b>Title:</b></label>
                <input name="title" type="text" className="form-control" id="recipient-name" value={formState.title} onChange={onInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label"><b>Content:</b></label>
                <textarea name="content" rows="7" className="form-control" id="message-text" value={formState.content} onChange={onInputChange}></textarea>
              </div>

              {/* ADD--CATEGORIES */}
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label"><b>Categories:</b></label>
                <div className="container d-flex flex-wrap p-0">
                  {categories?.map((category, index) => < div key={index} className="category" > {category} <button name={index} onClick={onDeleteCategory}>x</button> </ div >)}
                </div>
              </div>
              <div className="form-group mt-3 mb-3 d-flex flex-col">
                <div className="col-9">
                  <input rows="7" className="form-control" id="message-text" placeholder="new category" value={inputCategory} onKeyDown={onKeyDown} onChange={onCategoryChange} />
                </div>
                <div className="col-3 d-flex justify-content-end">
                  <button type="button" className="btn btn-success" name="addNote" onClick={onKeyDown}>Add category</button>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-success" onClick={onSaveNote}>{initialDataToFrom.event}</button>
          </div>
        </div>
      </div>
    </CSSTransition >,
    document.getElementById("root")
  );
};

