// console.log("Hello world")

// // let const var

// // const text1 = "hello"
// // text1 = "world" // Assignment to constant variable.

// let text = 'Hello world'
// text = "Hi"
// console.log(text) // Hi

// // var value = "test"
// // var value = "test"
// // var value = "data"
// // console.log(value)
// // A-z 0-1 _ $

// // let 1user = "test" // error

// // let a = 'a'
// // let b = "1"
// let num1 = 4
// let num2 = 3

// console.log(num1 + num2)  // 7
// console.log(num1 - num2)  // 1
// console.log(num1 / num2)  // 1.3333333333333333
// console.log(num1 * num2)  // 12
// console.log(num1 ** num2) // 64
// console.log(num1 % num2)
// let str1 = "Hello "
// let str2 = "world"

// // конкатенация
// console.log(str1 + str2) // "Hello " + "world" = "Hello world"

// // интерполяция
// // let programmingLang = "javascript"
// // let str = `Hello world from ${programmingLang}`

// // console.log(str)

// let str = "string"
// // let num = 1
// // console.log(typeof str) // string
// // console.log(typeof num) // number

// console.log("2" + 1) // "2" + "1" = "21"
// console.log("2" - 1) // 2 - 1 = 1
// console.log("a" + 1) // "a" + "1" = "a1"
// console.log("a" - 1) // NaN  Not a number
// console.log(typeof NaN) // number

// let num = "5"
// console.log(typeof num) // string
// num = Number(num)
// console.log(typeof num) // number
// console.log(typeof +num) // number

// let str3 = 10
// console.log(typeof String(str3)) // string
// str3 = str3 + ''
// console.log(typeof str3) // string

// if (condition) {
//   // code...
// } else if (condition) {
//   // code...
// } else {
//   // code...
// }

// проверить если число меньше 10 выводить в консоли (число меньше 10)
// если число больше 10 выводить в консоли (число больше 10)
// если число равно 10 выводить в консоли (число равно 10)
// если пользователь ввел не число, выводить в консоли "введите только число"
// let number = prompt("Введите любое число")
// // +"a" = NaN
// // isNaN("a") // true
// // isNaN("5") // false
// // isNaN(4) // false

if (isNaN(number)) {
  console.log("введите только число")
} else if (number < 10) {
  console.log("число меньше 10")
} else if (number > 10) {
  console.log("число больше 10")
} else if (number === 10) {
  console.log("число равно 10")
}

// isNaN(number) ? console.log("введите только число") :
//   number < 10 ? console.log("число меньше 10") :
//     number > 10 ? console.log("число больше 10") :
//       number === 10 ? console.log("число равно 10") :
//         console.log("Ошибка")

// проверить число на четность или нечестность
let num = 4

// if (num % 2 === 0) {
//   console.log("число четное")
// } else {
//   console.log("число нечетное")
// }

// тернарный оператор
// условие ? логика при true : логика при false
num % 2 === 0 ? console.log("число четное") : console.log("число нечетное")