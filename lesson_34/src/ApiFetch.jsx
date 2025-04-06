import {useState, useEffect} from 'react';

let count = 0;
const fetchDecorator = async () => {
    console.log(count)
    return (count++ % 3) ? Promise.reject()
        : fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
}

export const ApiFetch = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchDecorator()
            .then(json => setData(json))

    }, [])

    return <div className={'top-margin'}>Data fetched:
        {data === null ? <div>...loading</div> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
}