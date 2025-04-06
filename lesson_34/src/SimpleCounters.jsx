import React from 'react';
const CounterContext = React.createContext();

function CounterProvider({ children }) {
    const [count, setCount] = React.useState(0);
    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
}

function CounterButton({ label }) {
    const { count, setCount } = React.useContext(CounterContext);
    return <button onClick={() => setCount(count + 1)}>{label}: {count}</button>;
}

export default function SimpleCounters() {
    return (
        <CounterProvider>
            <CounterButton label="A" />
            <CounterButton label="B" />
        </CounterProvider>
    );
}
