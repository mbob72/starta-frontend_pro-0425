import { useState } from 'react'
import './App.scss'

function App() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleUsername = function (e) {
    setFormState({
      ...formState,
      username: e.target.value,
    })
  }

  const handleEmail = function (e) {
    setFormState({
      ...formState,
      email: e.target.value,
    })
  }

  const handlePassword = function (e) {
    setFormState({
      ...formState,
      password: e.target.value
    })
  }

  return (
    <div className="form-block">
      <h1>Sign Up</h1>
      <form className='form'>
        <div>
          <label htmlFor="">Username</label>
          <input onChange={handleUsername} value={formState.username} type="text" id='username' />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input onChange={handleEmail} value={formState.email} type="email" id='email' />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input onChange={handlePassword} value={formState.password} type="password" id='password' />
        </div>
        <button>Submit</button>
        <div>
          <p>Form State</p>
          <pre>
            {JSON.stringify(formState, 0, 2)}
          </pre>
        </div>
      </form>
    </div>
  )
}

export default App
