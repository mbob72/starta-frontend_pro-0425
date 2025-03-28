import { useState } from 'react'
import './App.scss'

function App() {
  const [username, setUsername] = useState("")
  const handleUsername = function (e) {
    setUsername(e.target.value)
  }

  const [email, setEmail] = useState("")
  const handleEmail = function (e) {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState("")
  const handlePassword = function (e) {
    setPassword(e.target.value)
  }

  return (
    <div className="form-block">
      <h1>Sign Up</h1>
      <form className='form'>
        <div>
          <label htmlFor="">Username {username}</label>
          <input onChange={handleUsername} value={username} type="text" id='username' />
        </div>
        <div>
          <label htmlFor="">Email {email}</label>
          <input onChange={handleEmail} value={email} type="email" id='email' />
        </div>
        <div>
          <label htmlFor="">Password {password}</label>
          <input onChange={handlePassword} value={password} type="password" id='password' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
