import {useState, useEffect} from 'react';

export const ApiFetch = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))

    }, [])

    return <div className={'top-margin'}>Data fetched:
        {data === null ? <div>...loading</div> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
}