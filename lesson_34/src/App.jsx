import {useState} from 'react'
import './App.scss'
import {Nested} from "./Nested.jsx";


function App() {

    const [start, setStart] = useState(false);


    return (
        <div className="form-block">
            <button onClick={() => setStart(!start)}>Nested Counters</button>
            <Nested />
        </div>
    )
}

export default App
