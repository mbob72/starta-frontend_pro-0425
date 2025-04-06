import {useEffect, useState} from 'react'
import './App.scss'

function App({name}) {

    const [message, setMessage] = useState('')

    useEffect(() => {
        setMessage(`The name is: ${name}`)
    }, [name]);


    return (
        <div>
            {message}
        </div>
    )
}

export default App