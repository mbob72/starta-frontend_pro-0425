import {useState} from 'react'
import './App.scss'
import SimpleCounters from "./SimpleCounters.jsx";


function App() {

    const [start, setStart] = useState(false);


    return (
        <div className="form-block">
            <button onClick={() => setStart(!start)}>Smart Counters</button>
            <SimpleCounters />
        </div>
    )
}

export default App
