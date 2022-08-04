import { IconContext } from "react-icons";
import { BsFillArchiveFill, BsUpload, BsTrashFill, BsPencilFill, BsFillFileEarmarkFill } from 'react-icons/bs'

import { getHoursToCreated } from '../helpers/convertDateToHours'

export const NoteItem = ({ id, title, updatedAt, state, onCreateEditModal, onDeleteModal, onUpdateNote}) => {


  
  const onChangeState = () => {
    const note = {
      id:id,
      state: (state === 'archived') ? 'no-archived': 'archived'
    }
    onUpdateNote(note, true)
  }

  const onDeleteNote = () => {
    onDeleteModal()
  }

  const onEditNote = () => {
    onCreateEditModal()
  }

  const iconStyle = { margin: '0 4' }
  const svgState = (state === 'archived') ? <BsUpload onClick={onChangeState} style={iconStyle} /> : <BsFillArchiveFill onClick={onChangeState} style={iconStyle} />;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-9">
            <div className="card-body d-flex justify-content-start">
              <div className="col-2 d-flex align-items-center">

                <BsFillFileEarmarkFill size={60} />
              </div>
              <div className="col-10">

                <h3 className="card-title text-truncate"><b>{title}</b></h3>
                <p className="card-text text-muted">
                  <b>Last edited:</b> {getHoursToCreated(updatedAt)}
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