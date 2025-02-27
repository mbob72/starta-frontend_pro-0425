// 1.
let person = {
  name: "Сергей",
  getNormFunc: function () {
    // this = person
    return function () {
      // this = Window
      console.log(this.name)
    }
  },
  getArrowFunc: function () {
    // this = person
    return () => {
      // this = person
      console.log(this.name)
    }
  }
}

let normFunc = person.getNormFunc()
let arrowFunc = person.getArrowFunc()
// normFunc() // "" <=> undefined
// arrowFunc() // Сергей

// 2.
const obj = {
  value: "outer",
  createInnerObject: function () {
    // this = obj
    return {
      value: "inner",
      getArrowValue: () => {
        // this = obj
        console.log(this.value)
      },
      getNormValue: function () {
        // this = внутренный объект
        console.log(this.value)
      }
    }
  }
}

let innerObj = obj.createInnerObject()
// innerObj.getArrowValue() // outer
// innerObj.getNormValue() // inner

// Создайте объект calcualtor, который содержит свойство value (начальное значение = 0) и реализует методы для выполнения базовых математических операций: сложение, вычитание, умноженте, деление. Кадлый метод должен получить параметр num, изменять значение value согласно своей операции и возвращает this.
// add(num) + 
// sub(num) -
// mul(num) *
// div(num) /
// print() который просто выводит в консоли value
// let result = calculator.add(10).sub(5).mul(6).div(2)
// console.log(result.value)
// calculator.add(10).sub(5).mul(6).div(2).print()

let calculator = {
  value: 0,
  add: function (num) {
    this.value += num
    return this
  },
  sub: function (num) {
    this.value -= num
    return this
  },
  mul: function (num) {
    this.value *= num
    return this
  },
  div: function (num) {
    this.value /= num
    return this
  },
  print: function () {
    console.log(this.value)
  }
}
let step1 = calculator.add(10)
let step2 = step1.sub(5)
let step3 = step2.mul(6)
let step4 = step3.div(2)
// step4.print()
// calculator.add(10).sub(5).mul(6).div(2).print()

// =========== call, apply, bind  =============

// const sum = (a, b) => a + b
// function sum(a, b) {
//   return a + b
// }

function sum(firstname, lastname) {
  console.log(this.a + this.b)
  console.log(`Hello ${firstname} ${lastname}`)
}

let obj1 = {
  a: 5,
  b: 6,
}

let obj2 = {
  a: 1,
  b: 7
}

// apply, call, bind не работают для стрелочных функций

// sum.call(obj1, "John", "Doe")
// sum.call(obj2, "Jane", "Doe")

// отличие apply от call в то, что передаем аргументы внутри одного массива, а в call просто перечисляем через запятой. Call и aplly запускают функцию немедленно а bind возвращает функцию со строго закрепленным this

let args = ["John", "Doe"]
// sum.apply(obj1, args)

// sum.apply(obj2, ["Jane", "Doe"])

// function cleen() {
//   console.log(`Делаем уборку в комнате: ${this.roomName}`)
// }

// const kitchen = {
//   roomName: "Кухня"
// }

// const bath = {
//   roomName: "Ванная"
// }

// cleen.call(kitchen)
// cleen.apply(bath)
// console.log(Math.max.apply(null, [6, 2, -8, 12]))

// bind

function greet() {
  console.log(`Hello from ${this.fullname()}`)
}

let john = {
  firstname: "John",
  lastname: "Doe",
  fullname: function () {
    return `${this.firstname} ${this.lastname}`
  }
}

let jane = {
  firstname: "Jane",
  lastname: "Doe",
  fullname: function () {
    return `${this.firstname} ${this.lastname}`
  }
}

let johnGreet = greet.bind(john)
johnGreet()

let janeGreet = greet.bind(jane)
janeGreet()
// arguments содержит в себе все значения которые были переданы в функиию при вызове
function userGetToDo(job, job2) {
  // console.log(arguments)
  console.log(`${this.fullname()} собирается ${job} а потом ${job2}`);
}

const johnJob = userGetToDo.bind(john)
// johnJob("Бегать")
// johnJob("Учиться")

const janeJob = userGetToDo.bind(jane, "Учиться")
// janeJob()
// janeJob()
janeJob("Бегать")
janeJob("Кататься")

function increment(num1, num2) {
  console.log(num1 + num2)
}

const incrementBy5 = increment.bind(null, 5)
incrementBy5(10) // num1 = 5 num2 = 10
incrementBy5(20) // num1 = 5 num2 = 20

const incrementBy10 = increment.bind(null, 10)
incrementBy10(50) // num1 = 10 num2 = 50

const incrementStrogo = increment.bind(null, 10, 12)
incrementStrogo(50) // num1 = 10 num2 = 12 