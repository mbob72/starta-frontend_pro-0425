import './App.scss'

function App() {
  return (
    <div className="form-block">
      <h1>Sign Up</h1>
      <form className='form'>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" id='username' />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" id='email' />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" id='password' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
