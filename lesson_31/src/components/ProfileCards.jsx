import ProfileCard from "./ProfileCard"
import ProfileStyles from "./ProfileCard.module.css"

export default function ProfileCards() {
  const profiles = [
    { username: "John", email: "john@gmail.com", phone: 123 },
    { username: "Jane", email: "jane@gmail.com", phone: 123 },
    { username: "Jack", email: "jack@gmail.com", phone: 123 },
    { username: "Mike", email: "mike@gmail.com", phone: 123 },
    { username: "Sara", email: "sara@gmail.com", phone: 123 },
  ]
  return (
    <section className={ProfileStyles['profile-cards']}>
      {
        profiles.map((profileObject, index) => {
          // return <ProfileCard username={username} email={email} key={email} />
          return <ProfileCard key={index} {...profileObject} />
        })
      }
    </section>
  )
}