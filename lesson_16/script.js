// console.log(1)
// try {
//   const usernameElem = document.querySelector(".test")
//   usernameElem.innerText = "John"
// } catch (error) {
//   console.log(error.message)
//   console.log("Такого элемента нет")
//   // console.log(error.name)
//   // console.log(error.stack)
// }
// console.log(2)

function valueToArray(val) {
  try {
    return Array.from(val)
  } catch (error) {
    return []
  }
}
// console.log(valueToArray(null))
// console.log(valueToArray("Hello"))
// console.log(valueToArray([1, 2, 3]))
// console.log(valueToArray(undefined))

// написать функцию getTextContent которая возвращает текстовой контент html элемента, указатаель на которого получает в аргументах, если html элемент не существует то вернуть пустую строку.

function getTextContent(elemSelector) {
  try {
    const htmlElem = document.querySelector(elemSelector)
    return htmlElem.innerText
  } catch (error) {
    return ""
  }
}

// console.log(getTextContent(".test")) // Test
// console.log(getTextContent("#test")) // ""

try {
  const usernameElem = document.querySelector(".test")
  usernameElem.innerText = "John"
} catch (error) {
  console.log(error.message)
} finally {
  console.log("finally")
}

// Создать функцию котоаря принимает в аргументах callback и вызивает эту функцию, если такой функции нет то в консоли вывести строку "Такой функции не существует"
function test() {
  console.log(2);
}
function callFn(callback) {
  try {
    callback()
  } catch (error) {
    console.log("нет такой функции");
  }
}
// callFn(test)
// let greet = 2
// callFn(greet)

// throw

function getTextContent2(elemSelector) {
  try {
    const htmlElem = document.querySelector(elemSelector)
    if (htmlElem === null) {
      // throw `Элемент по указателью ${elemSelector} не существует`
      // throw {
      //   element: elemSelector,
      //   message: "Элемент не существует"
      // }

      throw new Error(`Элемент по указателью ${elemSelector} не существует`)
    }
    return htmlElem.innerText
  } catch (error) {
    console.log(error);
    return ""
  }
}
// console.log(getTextContent2("#test"))
// console.log(getTextContent2(".test"))


const getUserWithPostsByName = async (username, callback) => {
  try {
    let searchResponse = await fetch(`https://dummyjson.com/users/search?q=${username}`)
    // searchResponse.ok === false
    // searchResponse.ok !== true
    // !searchResponse.ok 
    // !false = true
    // !true = false
    if (!searchResponse.ok) {
      throw new Error(`Неуспешный ответ со статусом ${searchResponse.status}`)
    }

    let data = await searchResponse.json()
    if (data.users.length === 0) {
      throw new Error(`Пользователь по имени ${username} не найден`)
    }

    let user = data.users[0]
    let postsResponse = await fetch(`https://dummyjson.com/users/${user.id}/posts`)
    let postsObj = await postsResponse.json()
    let payload = {
      user: user,
      posts: postsObj.posts
    }
    callback(payload)
    return
  } catch (error) {
    console.log(error.message)
  }
};

getUserWithPostsByName('Test', (data) => {
  console.log(data)
});