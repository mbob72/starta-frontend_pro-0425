import ProfileStyles from "./ProfileCard.module.css"
import { useState } from "react";
// props = properties
// export default function ProfileCard(props) {
export default function ProfileCard({ username, email, phone }) {
  // создаем начальное состояние для значения
  // useState возвращает массив из 2 элементов
  // 1 элемент само значение 
  // 2 элемент это функция которая меняет значение и говорит реакту чтобы тот перерисововал компонент
  let [userRate, setUserRate] = useState(0)
  let [showPhone, setShowPhone] = useState(true)

  const handleUprateClick = () => {
    // console.log(`Button clicked in profile card of ${username}`)
    // назначаем новое значение для userRate и перерисововаем компонент
    setUserRate(userRate + 1) // 1
    console.log(userRate) // 0
    setUserRate(function (rate) {
      console.log(rate) // 1
      return rate + 1
    })
    // console.log(userRate)
  }

  const handleDownrateClick = () => {
    if (!userRate) return
    setUserRate(--userRate)
  }

  const handlShowPhone = () => {
    // showPhone = true
    setShowPhone(!showPhone) // !true = false
    console.log(showPhone) // true (просто так не можем получить доступ к пред. значению)
    // showPhone = false
    setShowPhone(function (value) {
      console.log(value) // Здесь внутри callback уже можем получить доступ к пред. значению не дожидаясь ререндера
      return !value
    }) // !false = true
    // showPhone = true
  }

  return (
    <div className={ProfileStyles["profile-card"]}>
      <div className={ProfileStyles.media}>
        <img src="https://avatar.iran.liara.run/public/boy" alt="person" />
      </div>
      <div className="content">
        <p className={ProfileStyles.title}>{username || "John"}</p>
        <p>{email ? email : "john@gmail.com"}</p>
        <p>{showPhone ? phone : ""}</p>
        <p>User rate: {userRate}</p>
        <button onClick={handleUprateClick}>Up rate</button>
        <button onClick={handleDownrateClick}>Down rate</button>

        <button onClick={handlShowPhone}>Show phone</button>
      </div>
    </div>
  )
}

