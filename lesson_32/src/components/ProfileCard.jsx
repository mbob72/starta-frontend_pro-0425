import ProfileStyles from "./ProfileCard.module.css"
import { useState } from "react";
// props = properties
// export default function ProfileCard(props) {
export default function ProfileCard({ username, email, phone }) {
  // создаем начальное состояние для значения
  // useState возвращает массив из 2 элементов
  // 1 элемент само значение 
  // 2 элемент это функция которая меняет значение и говорит реакту чтобы тот перерисововал компонент
  let userRateState = useState(0)
  let userRate = userRateState[0]
  let setUserRate = userRateState[1]

  const handleBtnClick = () => {
    // console.log(`Button clicked in profile card of ${username}`)
    // назначаем новое значение для userRate и перерисововаем компонент
    setUserRate(++userRate)
    // console.log(userRate)
  }

  return (
    <div className={ProfileStyles["profile-card"]}>
      <div className={ProfileStyles.media}>
        <img src="https://avatar.iran.liara.run/public/boy" alt="person" />
      </div>
      <div className="content">
        <p className={ProfileStyles.title}>{username || "John"}</p>
        <p>{email ? email : "john@gmail.com"}</p>
        <p>{phone}</p>
        <p>User rate: {userRate}</p>
        <button onClick={handleBtnClick}>Up rate</button>
      </div>
    </div>
  )
}

