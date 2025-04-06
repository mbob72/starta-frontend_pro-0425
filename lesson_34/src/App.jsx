import { useEffect, useState } from 'react'
import './App.scss'
import NameRepeater from "./NameRepeater.jsx";

function App() {

  useEffect(() => {
    console.log('Компонент примонтирован');
  }, []);

  const [name, setName] = useState('');

  console.log('render')


  return (
    <div className="form-block">
      Put the name please
      <input className={'input'} onChange={(e) => setName(e.target.value)} />
      <NameRepeater  name={name}/>
    </div>
  )
}

export default App
