import {useState} from 'react'
import './App.scss'
import ThemeComponent from "./ThemeProvider.jsx";


function App() {

    const [start, setStart] = useState(false);


    return (
        <div className="form-block">
            <button onClick={() => setStart(!start)}>Theme Context</button>
            <ThemeComponent />
        </div>
    )
}

export default App
