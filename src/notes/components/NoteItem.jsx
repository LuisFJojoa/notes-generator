import { Link } from "react-router-dom"
import { BsFillArchiveFill, BsUpload, BsTrashFill, BsPencilFill } from 'react-icons/bs'
import { IconContext } from "react-icons";

// const CharacterByHero = ({ alter_ego, characters}) => {
//   if (alter_ego === characters) return (<></>)
//   return (<p>{characters}</p>)
// }
// {
//   id, superhero, publisher, alter_ego, first_appearance, characters
// }
export const NoteItem = ({ id, title, content, lastEdit, state }) => {

  const onChangeState= () => {
    console.log("State changed: " +id);
  }

  const onDeleteNote= () => {
    console.log("Note deleted: " +id);
  }

  const onEditNote= () => {
    console.log("Note edited: " +id);
  }

  const iconStyle = { margin: '0 4'}
  const svgState = (state !== 'archived') ? <BsUpload onClick={onChangeState} style={iconStyle}/> : <BsFillArchiveFill onClick={onChangeState} style={iconStyle}/>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-5">
            <div className="card-body">
              <h2 className="card-title"><b>Some old note</b></h2>
              <p className="card-text">
                <small className="text-muted">Last edited: 09/08/2022</small>
              </p>
              {/* 
              <Link to={`/hero/${id}`}>Más info...</Link> */}
            </div>
          </div>
          <div className="col-7 d-flex justify-content-end align-items-end mb-3 pe-4">
            <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
              {svgState}
              <BsPencilFill onClick={onEditNote} style={iconStyle}/> 
              <BsTrashFill onClick={onDeleteNote} style={iconStyle}/>
            </IconContext.Provider>
          </div>
        </div>
      </div>

    </div>
  )
}