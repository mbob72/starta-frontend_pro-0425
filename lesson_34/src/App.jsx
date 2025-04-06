import {useEffect, useState} from 'react'
import './App.scss'
import NameRepeater from "./NameRepeater.jsx";
import {Counter} from "./Counter.jsx";

function App() {

    const [start, setStart] = useState(false);


    return (
        <div className="form-block">
            <button onClick={() => setStart(!start)} >Start/Stop counter</button>
            {start && <Counter/>}
        </div>
    )
}

export default App
