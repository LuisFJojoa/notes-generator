import { useCallback, useContext } from "react";
import { Link } from "react-router-dom"

import { IconContext } from "react-icons";
import { BsFillArchiveFill, BsUpload, BsTrashFill, BsPencilFill, BsFillFileEarmarkFill } from 'react-icons/bs'

import { NoteContext } from "../context/NoteContext";

// const CharacterByHero = ({ alter_ego, characters}) => {
//   if (alter_ego === characters) return (<></>)
//   return (<p>{characters}</p>)
// }
// {
//   id, superhero, publisher, alter_ego, first_appearance, characters
// }
export const NoteItem = ({ id, title, content, lastEdited, state, onShow}) => {


  const { removeNote, editNote, changeNoteState } = useContext(NoteContext)
  
  const onChangeState = () => {
    console.log("State changed: " + id);
    const payload = {
      id:id,
      state: (state === 'archived') ? 'no-archived': 'archived'
    }
    changeNoteState(payload)
  }

  const onDeleteNote = () => {
    console.log("Note deleted: " + id);
    removeNote(id)
  }

  const onEditNote = () => {
    onShow(id)
  }

  const iconStyle = { margin: '0 4' }
  const svgState = (state === 'archived') ? <BsUpload onClick={onChangeState} style={iconStyle} /> : <BsFillArchiveFill onClick={onChangeState} style={iconStyle} />;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-9">
            <div className="card-body col d-flex justify-content-start">
              <div className="col-2">

                <BsFillFileEarmarkFill size={70} />
              </div>
              <div className="col-10">

                <h3 className="card-title"><b>{title}</b></h3>
                <p className="card-text text-muted">
                  <b>Last edited:</b> {lastEdited}
                </p>
              </div>
              {/* 
              <Link to={`/hero/${id}`}>Más info...</Link> */}
            </div>
          </div>
          <div className="col-3 d-flex justify-content-end align-items-end mb-3 pe-4">
            <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
              {svgState}
              <BsPencilFill onClick={onEditNote} style={iconStyle} />
              <BsTrashFill onClick={onDeleteNote} style={iconStyle} />
            </IconContext.Provider>
          </div>
        </div>
      </div>

    </div>
  )
}