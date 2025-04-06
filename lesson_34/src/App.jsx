import {useState} from 'react'
import './App.scss'
import SmartCounters from "./SmartCounters.jsx";


function App() {

    const [start, setStart] = useState(false);


    return (
        <div className="form-block">
            <button onClick={() => setStart(!start)}>Smart Counters</button>
            <SmartCounters />
        </div>
    )
}

export default App
