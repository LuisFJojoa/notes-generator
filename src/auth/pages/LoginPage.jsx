import { useContext, useState } from 'react'
// import {auth} from '../services/firebaseconfig'
// import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

export const LoginPage = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('testuser@ensolver.com')
  const [password, setPassword] = useState('testuser_123')
  const [msgError, setMsgError] = useState(null)
  const { login } = useContext(AuthContext)

  // const RegisterUser = (e)=>{
  //     e.preventDefault()

  //     auth.createUserWithEmailAndPassword(email, password)
  //     .then(response => {
  //         navigate('/home',{
  //           replace:true
  //         })
  //     })
  //     .catch(err => {
  //         /* auth/invalid-email */
  //         /* auth/weak-password */
  //         if (err.code == 'auth/invalid-email') {
  //             setMsgError('Wrong Format email')
  //         }

  //         if (err.code == 'auth/weak-password'){
  //             setMsgError('Wrong Password, It must have 6 chars')
  //         }
  //     })
  // }

  const onLogin = () => {

    login('Ensolver user')
    navigate('/my-notes', {
      replace: true
    })
    // signInWithEmailAndPassword(auth, email, password)
    //   .then(response => {
    //   })
    //   .catch(err => {
    //     /* auth/invalid-email */
    //     /* auth/password-incorrect */
    //     console.log(err);
    //     if (err.code == 'auth/user-not-found') {
    //       setMsgError('Wrong user email, try again.')
    //     }

    //     if (err.code == 'auth/wrong-password') {
    //       setMsgError('Wrong Password, try again.')
    //     }

    //   })
  }

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={onLogin} className="form-group">
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="form-control"
            placeholder="Type your email"
            type="email"
            autoComplete="off"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control mt-4"
            placeholder="Type your password"
            type="password"
            autoComplete="off"
          />
        </form>
        <button
          className="btn btn-success btn-block"
          onClick={onLogin}>
          Login
        </button>
        {
          msgError != null ?
            (
              <div className="alert alert-danger mt-3 d-flex justify-content-center">
                {msgError}
              </div>
            )
            :
            (
              <span></span>
            )
        }
      </div>
      <div className="col"></div>
    </div>
  )
}
