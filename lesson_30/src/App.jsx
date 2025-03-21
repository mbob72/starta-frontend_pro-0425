import './App.css'
// import { Fragment } from 'react'
// import { createElement } from 'react'
import Header from "./Header.jsx"
import ProfileCards from './ProfileCards.jsx'

function App() {
  // const imgElem = createElement(
  //   'img',
  //   { src: "https://avatar.iran.liara.run/public/boy", alt: "person" }
  // )

  // const mediaElem = createElement(
  //   'div',
  //   { className: 'media' },
  //   imgElem
  // )

  // const profileCard = createElement(
  //   'div',
  //   { className: 'profile-card' },
  //   mediaElem
  // )

  return (
    <>
      <Header />
      <ProfileCards />
    </>
  )
}

export default App
