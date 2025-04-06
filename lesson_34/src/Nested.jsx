import React from "react";
function Child({ count, setCount }) {
    return <button className="top-margin" onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

function Middle({ count, setCount }) {
    return <div className={'top-margin'}>
        <div>Half count: {count / 2 }</div>
        <Child count={count} setCount={setCount} />
    </div>
}

export function Nested() {
    const [count, setCount] = React.useState(0);
    return <Middle count={count} setCount={setCount} />
}
