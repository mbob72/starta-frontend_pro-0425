let numArr = [14, 65, 25, 70, -5, -12, 30, -53, 24]

// let sum = 0
// for (let i = 0; i < numArr.length; i++) {
//   sum += numArr[i]
// }

let sum = numArr.reduce(function (acc, value) { // 14 65
  // acc = если указан второй параметр в reduce то принимает это значение, если нет то первый элемент из массива
  // value = каждый элемент массива
  // когда делаем return то значение справа попадает в аргумент acc для следующего шага
  return acc + value
})
// console.log(sum)

// let sumOfOdds = numArr.filter(function (num) {
//   if (num % 2 !== 0) {
//     return num % 2 !== 0
//   }
// }).map(function (odd) {
//   return odd ** 2
// }).reduce(function (acc, oddPower) {
//   return acc + oddPower
// })
// console.log(sumOfOdds);

let products = [
  {
    id: 1,
    title: "Велосипед",
    price: 2100,
    marks: [1, 5, 4],
  },
  {
    id: 2,
    title: "Самокат",
    price: 2500,
    marks: [1, 4, 3, 2, 5, 4, 3],
  },
  {
    id: 3,
    title: "Сноуборд",
    price: 1500,
    marks: [1, 5, 5, 1, 2],
  },
  {
    id: 4,
    title: "Скейт",
    price: 3000,
    marks: [1, 1, 4, 1, 4, 3],
  }
]

// найти общую сумму цен всех продуктов у которых цена больше 1501
function sumPrice(total, product) {
  //return total + products.price
  if (product.price > 1501) {
    return product.price + total
  }
  return total
}
let totalPrice = products.reduce(sumPrice, 0)
console.log(`Общая сумма товаров, цена которых больше 1501: ${totalPrice}`);

// [14, 65, 25, 70, -5, -12, 30, -53, 24]
// 14 65 => acc = 65
// 65 25 => acc = 65
// 65 70 => acc = 70

let maxNum = numArr.reduce(function (acc, num) { // 14, 65
  // if (acc > num) {
  //   return acc
  // }
  // return num

  // return Math.max(acc, num)
  return acc > num ? acc : num
})
console.log(maxNum);

// найти самый дорогой продукт и показать в консоли
let expProduct = products.reduce(function (acc, product) {
  // if (acc.price > product.price) {
  //   return acc
  // }
  // return product
  return acc.price > product.price ? acc : product
})
console.log(expProduct)

// Math.random
// Math.floor
// Math.ceil
// Math.round
// Math.max
// Math.min
// Math.abs
// Math.sqrt
// Math.pow
// 4 ** 0.5 // 2

// найти цену самого дорого продукта
let highPrice = products.reduce(function (acc, product) {
  return Math.max(acc, product.price)
}, products[0].price)
console.log(highPrice);

// Создать новый продуктов где в объект каждого продукта добавляется поле maxMark со значением максимальной оценки их массива marks, используя методы массивов
// [
//   {
//     id: 1,
//     title: "Велосипед",
//     price: 2100,
//     marks: [1, 5, 4],
//     maxMark: 5
//   },
//   {
//     id: 2,
//     title: "Самокат",
//     price: 2500,
//     marks: [1, 4, 3, 2, 3, 4, 3],
//     maxMark: 4
//   },
// ]

// let newProducts = products.map(function (product) {
//   product.maxMark = product.marks.reduce(function (acc, mark) {
//     return Math.max(acc, mark)
//   })
//   return product
// })

// let numbers = [1, 2, 3]
// let numbersCopy = [numbers] // [[1, 2, 3]]
// let numbersCopy = [...numbers] // [1, 2, 3] // копируется
// let clondeArray = structuredClone(numbers)

// let obj = {a: 1, b: 2, c: 3}
// let objCopy = {...obj} // {a: 1, b: 2, c: 3} // копия

//  ... = spread operator
// let newProducts = products.map(function (product) {
//   // [1, 4, 3, 2, 3, 4, 3]
//   product.maxMark = Math.max(...product.marks)
//   return product
// })

let newProducts = products.map(function (product) {
  // [1, 4, 3, 2, 3, 4, 3]
  let maxMarkValue = Math.max(...product.marks)
  let newPorductObject = {
    ...product,
    maxMark: maxMarkValue
  }
  return newPorductObject
})
console.log(newProducts);

// Создание нового массива на основе исходного (map)
// Когда надо делать одно и то же действие со всеми элементами массива (forEach)
// Если надо отфильтровать массив по каким то критериям (filter)
// Если задача связана с агрегацией (reduce)

// map
// sort
// forEach
// reduce
// filter
// find
// indexOf
// lastIndexOf
// includes
// splice
