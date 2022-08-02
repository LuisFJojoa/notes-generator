import { Link } from "react-router-dom"

// const CharacterByHero = ({ alter_ego, characters}) => {
//   if (alter_ego === characters) return (<></>)
//   return (<p>{characters}</p>)
// }
// {
//   id, superhero, publisher, alter_ego, first_appearance, characters
// }
export const NoteItem = () => {

  
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
            <div className="col-7">
              
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}