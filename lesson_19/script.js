// Создать класс с именем Transaction,который  в конструкторе получает сумму транзакции(amount), описание транзакции(description), категорию(category), где поле amount является приватным. И создать геттер для получения amount

class Transaction {
  #amount
  test = "Тестовое поле"
  constructor(description, category, amount) {
    if (typeof amount !== "number") {
      throw new Error("Сумма должна быть числом")
    }
    this.description = description
    this.category = category
    this.#amount = amount
  }

  get amount() {
    return this.#amount
  }

  getAmount() {
    return this.#amount
  }
}

// super ссылается на constructor класса справа от extends
class Income extends Transaction {
  static type = "Доход"
  constructor(amount, description) {
    // this - до super не можем использовать
    super(description, Income.type, amount)
  }
}

// создать класс Expense который наследуется от Transaction, получает сумму расхода(положительное число при получении) и описание. А потом при вызове super передает в constructor Transaction отрицательное число. У класса есть свое приватное поле #amount (где хранится сумма расхода) и геттер для получения.

class Expense extends Transaction {
  static type = "Расход"
  #amount;
  constructor(amount, description) {
    super(description, Expense.type, amount)
    this.#amount = -amount
  }
  get amount() {
    return this.#amount
  }
}

// new Expense(100, "Долги")

// __proto__ это ссылка на prototype объекта от которого создан этот элемент
// prototype это свойство которое есть у функции(кроме стрелочных) и у классов.

// Создать класс Account который при создании получает имя пользователья. Внутри класса Account есть статические свойсто accounts который является массивом, есть обычное свойство transactions который тоже является массивом и приватное свойство balance со значением по умолчанию 0. Каждый раз при создании экземпляра Account добавить нового пользователья в static массив accounts, выводить в консоли "Аккаунт создан для ${имя}"

// Создать метод addTransaction(trx) для класса Account который поулчает в себе параметры транзакцию, меняет баланс у Account, и выводит в консоли просто данные транзакции
// this.#ballance += trx.amount
// john.addTransaction(new Income(100, "Зарплата"))
// john.balance

class Account {
  #balance = 0
  static accounts = []
  transactions = []

  constructor(username) {
    this.username = username

    Account.accounts.push(this)
    console.log(`Аккаунт создан для ${username}`);
  }

  get balance() {
    return this.#balance
  }

  addTransaction(trx) {
    if (this.#balance + trx.amount < 0) {
      throw new Error("У вас нет столько средств")
    }

    this.#balance += trx.amount
    this.transactions.push(trx)
  }

  transfer(toUser, amount, description) {
    if (!(toUser instanceof Account)) {
      throw new Error(`toUser не является экземпляром класса Account`)
    }
    this.addTransaction(new Expense(amount, description))
    toUser.addTransaction(new Income(amount, description))
  }

  get transactions() {
    return this.transactions
  }
}

const john = new Account("John")
john.addTransaction(new Income(1000, "Зарплата"))
john.addTransaction(new Income(350, "Премия"))
john.addTransaction(new Expense(100, "Продукты"))

const jane = new Account("Jane")
john.transfer(jane, 500, "Вернул долги")

console.log("John balance:" + john.balance);
console.log(john.transactions);

console.log("Jane balance:" + jane.balance);
console.log(jane.transactions);


// Создайте класс Library, который хранит статический массив книг. 
// Каждая книга – это объект с свойствами title и author. Добавьте 
// статический метод addBook(book), который добавляет книгу в библиотеку, 
// и статический метод listBooks(), который выводит список книг в консоль.
// class Library {
//   static books = []

//   static addBook(book) {

//   }

//   static listBooks() {

//   }
// }

// Library.addBook({
//   author: "sdfgsdfg",
//   title: "dsfgdfsgh"
// })

// Library.listBooks()

// class Animal {
//   move() {
//     // ...
//     console.log("Животное двигается")
//   }
// }

// class Bacteria extends Animal {

// }

// class Dog extends Animal {
//   move() {
//     super.move()
//     console.log("Животное ходит")
//   }
// }

// class Taxa extends Animal {
//   move() {
//     super.move()
//     console.log("Такса ходит")
//   }
// }

// class Fish extends Animal {
//   move() {
//     console.log("Животное плывет")
//   }
// }

// const bobik = new Taxa()
// const nemo = new Fish()
// const bacteria = new Bacteria()

// bobik.move()
// nemo.move()
// bacteria.move()

// nemo instanceof Fish => true
// nemo instanceof Dog  => false
// nemo instanceof Fish => true

console.log("===============================")

// контекст состоит из области видимости переменных и ключевого слова this
// this опредлеяется не во время написания функции, а во время выполнения этой функции
// nodejs      => global
// frontend_js => Window

// let person = {
//   firstname: "John",
//   greet: function () {
//     console.log("this", this)
//   },
// }
// person.greet()

// let greetFunc = person.greet
// greetFunc()

function uborka() {
  console.log(`Делаем уборку в комнате ${this.roomName}`)
}

let zal = {
  roomName: "Зал"
}

let kitchen = {
  roomName: "Кухнья"
}

zal.delatUborku = uborka
kitchen.delatUborku = uborka

zal.delatUborku()
kitchen.delatUborku()

// у стрелочных функций нет this, для них this определяется this_ом родительской ближайшей нормальной функцией
let person = {
  firstname: "John",
  hobbies: ['progarmming', 'running'],
  greetNormalFunc: function () {
    console.log(this.firstname)
  },
  greetArrowFunc: () => {
    console.log(this)
  },
  printHobbies: function () {
    this.hobbies.forEach((hobby) => {
      console.log(`${this.firstname} love ${hobby}`);
    })
  }
}
person.greetNormalFunc()
person.greetArrowFunc()

person.printHobbies()
// bind, apply, call