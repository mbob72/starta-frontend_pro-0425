import { useState, useEffect } from 'react'
import './App.scss'

function App() {

  useEffect(() => {
    console.log('Компонент примонтирован');
  }, []);

  console.log('render')


  return (
    <div className="form-block">
        useEffect inside me!
    </div>
  )
}

export default App
