import {useState} from 'react'
import './App.scss'
import {ScrollListener} from "./ScrollListener.jsx";


function App() {

    const [start, setStart] = useState(false);


    return (
        <div className="form-block">
            <button onClick={() => setStart(!start)}>Scroll Listener</button>
            {start && <ScrollListener start={start}/>}
        </div>
    )
}

export default App
