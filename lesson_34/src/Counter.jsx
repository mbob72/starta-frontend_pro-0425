import { useState, useEffect } from 'react'
export const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCounter(c => c + 1);
        }, 1000);
    }, []);

    return <div>
        <div>Seconds: {counter}</div>
    </div>

}