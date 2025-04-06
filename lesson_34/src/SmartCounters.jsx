import { useState } from 'react'
function CounterA() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>A: {count}</button>;
}

function CounterB() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>B: {count}</button>;
}

export default function SmartCounters() {
    return (
        <div>
            <CounterA />
            <CounterB />
        </div>
    );
}
