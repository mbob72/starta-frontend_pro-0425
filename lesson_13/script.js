// event loop
// console.log("Заходи в кафе")

// console.log("Заказываем кофе")
// setTimeout(function () {
//   console.log("Заберите ваше кофе")
// }, 3000)

// console.log("Сидеть за столом и читать ленту")

// 1 получить автора продукта
// 2 получить его почту
// 3 отправить сообщение на почту
// function sendRequest(address, callback) {
//   let responses = {
//     productSellerID: 1256,
//     sellerEmail: "john_doe@gmail.com",
//     successMessage: "Сообщение успешно отправлено"
//   }
//   setTimeout(function () {
//     console.log(`Send request to ${address}`)
//     callback(responses)
//   }, 2000)
// }

// console.log(1)
// // callback hell
// let produciId = 10
// sendRequest(`/get/product/${produciId}/seller/`, function ({ productSellerID }) {
//   let addressForGetEmail = `/get/seller/email/${productSellerID}`
//   sendRequest(addressForGetEmail, function ({ sellerEmail }) {
//     let messageToEmailAddress = `/send/email/${sellerEmail}`
//     sendRequest(messageToEmailAddress, function ({ successMessage }) {
//       console.log(successMessage)
//     })
//   })
// })
// console.log(2)

// =================== Promise ======================
// pending   -  момент создания Promise
// fulfilled -  статус когда все прошло успешно   -> (вызывается resolved => первый параметр колбек функции)
// rejected  -  статус когда все прошло неуспешно -> (вызывается rejected => второй параметр колбек функции)

// then    - запускается когда статус fulfilled (была вызвана resolved)
// catch   - запускается когда статус rejected  (была вызвана rejected)
// finally - запускается всегда в любом случае в самом конце
// console.log(1);
// new Promise(function (resolved, rejected) {
//   console.log(3)
//   let a = 5
//   if (a % 2 !== 0) {
//     resolved(a)
//   } else {
//     rejected("Число нечетное")
//   }
// }).then(function (data) {
//   console.log("then 1", data)
//   return "hello from then 1"
// }).then(function (data) {
//   console.log("then 2", data)
//   return "hello from then 2"
// }).then(function (data) {
//   console.log("then 3", data)
//   return "hello from then 3"
// }).then(function (data) {
//   console.log("then 4", data)
// }).catch(function (message) {
//   console.log("catch", message)
// }).finally(function () {
//   console.log("ФИНАЛ")
// })
// console.log(2);

function sendRequest(address) {
  let ps = new Promise(function (resolved, rejected) {
    let responses = {
      productSellerID: 1256,
      sellerEmail: "john_doe@gmail.com",
      successMessage: "Сообщение успешно отправлено"
    }
    console.log(`Send request to ${address}`)
    setTimeout(function () {
      if (Math.random() >= 0.5) {
        resolved(responses)
      } else {
        rejected(`Увы, не получилось отправить запрос по адресу: ${address}`)
      }
    }, 2000)
  })
  return ps
}

// console.log(1)
// let produciId = 10
// sendRequest(`/get/product/${produciId}/seller/`)
//   .then(function ({ productSellerID }) {
//     let addressForGetEmail = `/get/seller/email/${productSellerID}`
//     return sendRequest(addressForGetEmail)
//   })
//   .then(function ({ sellerEmail }) {
//     let messageToEmailAddress = `/send/email/${sellerEmail}`
//     return sendRequest(messageToEmailAddress)
//   })
//   .then(function ({ successMessage }) {
//     console.log(successMessage);
//   })
//   .catch(function (errorMessage) {
//     console.log("Catch", errorMessage)
//   })
// console.log(2)

console.log("Отрисовка навбара")
fetch("https://dummyjson.com/products")
  .then(function (response) {
    // response.json() возвращает Promise и парсит тело ответа запроса из JSON в js object
    // let data = response.json() // (JSON.parse(...))
    return response.json()
  })
  .then(function (data) {
    renderProducts(data.products)
  })

console.log("Отрисовка футера")

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
  }
}