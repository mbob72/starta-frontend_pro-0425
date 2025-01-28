// если не написать значение по умолчанию
// то num = undefined
// undefined ** 2 = NaN
function power(num = 2) { // num = 5
  let result = num ** 2   // result = 25
  // console.log(result)     // console.log(25) 

  return result           // return 25
}
// power(5)
// power(4)
// power(3)
// power()

let num1 = power(5)
// console.log(num1) // 25

function cook(food) {
  console.log(`Start cooking ${food}`)
}
// cook("Pizza")

function cook2(foods) {
  for (let i = 0; i < foods.length; i++) {
    console.log(`Start cooking ${foods[i]}`)
  }
}
// cook2(["Pizza", "Chicken", "Soup"])

// =======================================

function run(username) {
  console.log(`${username} go to run`)
}

function sleep(username) {
  console.log(`${username} go to sleep`)
}

function greet(username) {
  console.log(`Hello ${username}!`)
}

function start(username, job) { // username = employer = "John", job = sleep
  // какая-то сложная логика...
  job(username)
  // sleep("John")
}

let employer = "John"
// start(employer, greet)
// start(employer, run)
// start(employer, sleep)

// setTimeout
// function showAddBanner() {
//   alert("Купите наш продукт")
// }
// setTimeout(showAddBanner, 5000)

// setTimeout(function () {
//   alert("Купите наш продукт")
// }, 5000)

// forEach => void

// function forEach(arr, callback) {
//   // arr = numArr = [5, 1, 6, 8, 10, 25, -5, -32, 12, -3]
//   // callback = function (element) { // element = arr[i]
//   // console.log(element)
//   // }

//   for (let i = 0; i < arr.length; i++) {
//     // arr[i]
//     callback(arr[i])
//   }
// }

let numArr = [5, 1, 6, 8, 10, 25, -5, -32, 12, -3]
// forEach(numArr, function (element) { // 5, 1, 6 ...
//   console.log(element ** 2)
// })

// numArr.forEach(function (value, i) {
//   console.log(`numArr[${i}] = ${value}`)
// })

// 1. выводить только числа с четным индексом
// 2. получить сумму всех чисел
// 3. создать новый массив который будет состоять только из отрицательных чисел массива numArr

let sum = 0
let arrNegatives = []
// numArr.forEach(function (value, index) {
//   if (index % 2 === 0) {
//     console.log(value)
//   }
//   sum += value
//   if (value < 0) {
//     arrNegatives.push(value)
//   }
// })
// console.log(sum)
// console.log(arrNegatives)

// map => array
let newArr = numArr.map(function (value, index) {
  let power = value ** 2
  return power
})

// let newArr = []
// numArr.forEach(function (value, index) {
//   let power = value ** 2
//   newArr.push(power)
// })

console.log(newArr)

// Используя метод map создать новый массив где положительные числа из массива newArr преобразованы в отрицательные а отрицательные в положительные числа

let newArr2 = numArr.map(function (value, index) {
  // if (value > 0) {
  //   return -value
  // } else {
  //   return -value
  // }
  return -value
})
// console.log(newArr2);

let strArr = ['Lorem', 'Ipsum', 'is', 'simply', 'dummy', 'text', 'of', 'the', 'printing', 'and', 'typesetting', 'industry.', 'Lorem', 'Ipsum', 'has', 'been', 'the', "industry's", 'standard', 'dummy', 'text', 'ever', 'since', 'the', '1500s,', 'when', 'an', 'unknown', 'printer', 'took', 'a', 'galley', 'of', 'type', 'and', 'scrambled', 'it', 'to', 'make', 'a', 'type', 'specimen', 'book.', 'It', 'has', 'survived', 'not', 'only', 'five', 'centuries,', 'but', 'also', 'the', 'leap', 'into', 'electronic', 'typesetting,', 'remaining', 'essentially', 'unchanged.', 'It', 'was', 'popularised', 'in', 'the', '1960s', 'with', 'the', 'release', 'of', 'Letraset', 'sheets', 'containing', 'Lorem', 'Ipsum', 'passages,', 'and', 'more', 'recently', 'with', 'desktop', 'publishing', 'software', 'like', 'Aldus', 'PageMaker', 'including', 'versions', 'of', 'Lorem', 'Ipsum.']

// Используя метод map создать новый массив из массива строк strArr где каждое слово будет перевернуто

// 'Lorem'.split("") => ["L", "o" ...]
// ["L", "o" ...].reverse() => [..., "o", "L"]
// [..., "o", "L"].join("") => 'meroL'
let reversedStrArr = strArr.map(function (value) {
  return value.split(" ").reverse().join("")
})
console.log(reversedStrArr)