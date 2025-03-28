import { useState } from 'react'
import './App.scss'

function App() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null
  })

  const handleUsername = function (e) {
    setFormState({
      ...formState,
      username: e.target.value,
    })

    if (e.target.value.trim() === "") {
      setErrors({
        ...errors,
        username: "Username is required"
      })
      return
    }
    if (e.target.value.length <= 3) {
      setErrors({
        ...errors,
        username: "Username need to be more then 3 symbols"
      })
      return
    }

    setErrors({
      ...errors,
      username: null
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

  const handlerFormSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <div className="form-block">
      <h1>Sign Up</h1>
      <form onSubmit={handlerFormSubmit} className='form'>
        <div>
          <label htmlFor="username">Username
            {errors.username && <span style={{
              color: 'red',
              fontSize: "12px",
              marginLeft: "10px"
            }}>{errors.username}</span>}
          </label>
          <input className={errors.username ? "error" : ""} onChange={handleUsername} value={formState.username} type="text" id='username' />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={handleEmail} value={formState.email} type="email" id='email' />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={handlePassword} value={formState.password} type="password" id='password' />
        </div>
        <button disabled={true}>Submit</button>
        <div>
          <p>Errors</p>
          <pre>
            {JSON.stringify(errors, 0, 2)}
          </pre>
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
