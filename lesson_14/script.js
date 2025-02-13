// основные тивы запросов: GET, POST (DELETE, PUT, PATCH ...)
// GET используется для получения данных (данные передаются в URL)
// https//mywebsite.com/user?
// username=john_doe
// &
// age=18

// POST
// POST используется для изменения данных или же добавления новых данных (Данные передаются в теле запроса)

// fetch => по умолчанию GET
// fetch('https://dummyjson.com/recipes')
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (payload) {
//     console.log(payload.recipes)
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// Отправить запрос по адресу 'https://dummyjson.com/users'
// получить пользователей 
// пройтись по всем пользователям и выводить в консоли их "firstName", "lastName" и "email"

// fetch('https://dummyjson.com/users')
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (data) {
//     data.users.forEach(user => {
//       console.log("firstName:" + user.firstName, "lastName:" + user.lastName, "email:" + user.email);
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// Написать функцию (getUserById) которая получает первым параметром id пользователья, вторым параметром callback функцию (которая выводит в консоли "firstName", "lastName" и "email"), и вызывает эту функцию на ответе запроса
// 'https://dummyjson.com/users/1'
// Адрес 'https://dummyjson.com/users/${id пользователья}'
// function getUserById(userId, callback) {...}
// getUserById(15, function(...) {...})

function getUserById(id, callback) {
  fetch(`https://dummyjson.com/users/${id}`)
    // .then(function (response) {
    //   return response.json()
    // })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      callback(data)
    })
    .catch((error) => {
      console.log(error);
    })
}

// получить пользователья и рисовать html карточку с такой структурой
{/* 
<div class="person-card">
  <div class="avatar-block">
    <img src="https://dummyjson.com/icon/emilys/128" alt="avatar">
  </div>
  <div class="person-details">
    <p><b>Name:</b> Emily Johnson</p>
    <p><b>Email:</b> emily.johnson@x.dummyjson.com</p>
    <p><b>Phone:</b> 81 965-431-3024</p>
  </div>
</div> 
*/}

const bodyBlock = document.querySelector("body")
// Math.ceil(Math.random() * 208) => [1 - 208]
getUserById(Math.ceil(Math.random() * 208), function (user) {
  // bodyBlock.innerHTML = `
  // <main>
  //   <div class="person-card">
  //     <div class="avatar-block">
  //       <img src="${user.image}" alt="avatar">
  //     </div>
  //     <div class="person-details">
  //       <p><b>Name:</b> ${user.firstName} ${user.lastName}</p>
  //       <p><b>Email:</b> ${user.email}</p>
  //       <p><b>Phone:</b> ${user.phone}</p>
  //     </div>
  //   </div>
  // </main>
  // `
  const mainBlock = document.createElement("main") // <main></main>
  const personCardDiv = document.createElement("div") // <div></div>
  personCardDiv.classList.add("person-card") // <div class="person-card"></div>
  const avatarBlockDiv = document.createElement("div")
  avatarBlockDiv.classList.add("avatar-block")
  const imageElem = document.createElement("img") // <img>
  imageElem.setAttribute("alt", "avatar") // <img alt="avatar">
  imageElem.setAttribute("src", user.image) // <img src="${user.image}" alt="avatar">
  avatarBlockDiv.append(imageElem)
  const personDetailsDiv = document.createElement("div")
  personDetailsDiv.classList.add("person-details")

  const nameP = document.createElement("p")
  const nameTitleBold = document.createElement("b")
  nameTitleBold.innerText = "Name:"
  nameP.innerText = `${user.firstName} ${user.lastName}`
  nameP.prepend(nameTitleBold)

  const emailParagraph = document.createElement("p")
  const emailTitleBold = document.createElement("b")
  emailTitleBold.innerText = "Email:"
  emailParagraph.innerText = user.email
  emailParagraph.prepend(emailTitleBold)

  const phoneP = document.createElement("p")
  const phoneTitleBold = document.createElement("b")
  phoneTitleBold.innerText = "Phone:"
  phoneP.innerText = user.phone
  phoneP.prepend(phoneTitleBold)

  personDetailsDiv.append(nameP, emailParagraph, phoneP)
  personCardDiv.append(avatarBlockDiv, personDetailsDiv)
  mainBlock.append(personCardDiv)

  bodyBlock.append(mainBlock)

  // append - добавить элемент внутрь другого элемента в самый конец
  // prepend - добавить элемент внутрь другого элемента в самое начало
  // <div>
  //   ...prepend
  //   <p></p>
  //   <p></p>
  //   ...append
  // </div>
})