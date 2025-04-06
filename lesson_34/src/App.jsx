import {useState} from 'react'
import './App.scss'
import {ScrollListener} from "./ScrollListener.jsx";
import {ApiFetch} from "./ApiFetch.jsx";


function App() {

    const [start, setStart] = useState(false);


    return (
        <div className="form-block">
            <button onClick={() => setStart(!start)}>Fetch data</button>
            {start && <ApiFetch />}
        </div>
    )
}

export default App
