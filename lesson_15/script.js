// создать функцию (getUserWithPostsByName(username, callback)) которая в себе принимает два параметра, первый это имя пользователья, второй параметр callback функция которая вызывается на ответе. функция (getUserWithPostsByName) отправляет запрос по адресу (https://dummyjson.com/users/search?q=${username}), оттуда забирает первого пользователья и просто выводит в консоли данные пользователья внутри callback функции
// alert("Пользователь не найден")

// async function getUserWithPostsByName(username, callback) {
// const getUserWithPostsByName = async (username, callback) => {
const getUserWithPostsByName = async (username, callback) => {
  // fetch(`https://dummyjson.com/users/search?q=${username}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.users.length !== 0) {
  //       let user = data.users[0]
  //       fetch(`https://dummyjson.com/users/${user.id}/posts`)
  //         .then((res) => res.json())
  //         .then(postsObj => {
  //           let payload = {
  //             user: user,
  //             posts: postsObj.posts
  //           }
  //           callback(payload);
  //         })
  //     } else {
  //       alert('Пользовател ' + username + " не существует");
  //     }
  //   });

  let searchResponse = await fetch(`https://dummyjson.com/users/search?q=${username}`)
  let data = await searchResponse.json()
  if (data.users.length !== 0) {
    let user = data.users[0]
    let postsResponse = await fetch(`https://dummyjson.com/users/${user.id}/posts`)
    let postsObj = await postsResponse.json()
    let payload = {
      user: user,
      posts: postsObj.posts
    }
    callback(payload)
    return
  }

  alert('Пользовател ' + username + " не существует");
};

getUserWithPostsByName('Doe', (data) => {
  console.log(data)
});

// Передавать внутрь callback данные в виде такого объекта и выводить в консоли отдельно posts и отдельно user 
// {
//   user: data, // объект пользователья 
//   posts: []
// }

// После получения пользователья взять его id и получить все его посты по запросу , и вставить как значение для свойства posts