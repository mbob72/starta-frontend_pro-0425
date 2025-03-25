import ProfileStyles from "./ProfileCard.module.css"

// props = properties
// export default function ProfileCard(props) {
export default function ProfileCard({ username, email, phone }) {

  return (
    <div className={ProfileStyles["profile-card"]}>
      <div className={ProfileStyles.media}>
        <img src="https://avatar.iran.liara.run/public/boy" alt="person" />
      </div>
      <div className="content">
        <p>{username || "John"}</p>
        <p>{email ? email : "john@gmail.com"}</p>
        <p>{phone}</p>
      </div>
    </div>
  )
}
