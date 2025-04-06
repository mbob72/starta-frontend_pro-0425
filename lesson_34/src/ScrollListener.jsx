import { useEffect } from 'react';
export const ScrollListener = ({ start }) => {

    useEffect(() => {
        const handleScroll = () => console.log(window.scrollX);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return <div>{start ? 'Listen scroll' : 'No listening'}</div>
}