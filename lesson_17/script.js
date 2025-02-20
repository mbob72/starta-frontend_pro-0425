// function Person(name, age) {
//   // let this = {}
//   this.name = name
//   this.age = age

//   // return 5  // не влияет на результат
//   // return {
//   //   test: "test object"
//   // }
//   // return this
// }
// const user1 = new Person("John", 25)
// console.log(user1)

// class Person {
//   // let this = {
//   //  name: "John",
//   //  age: "25"
//   //}

//   constructor(username, age = 18) {
//     this.name = username
//     this.age = age
//   }

//   setName(username) {
//     // ...
//     this.name = username
//   }

//   incrementAge() {
//     this.age++
//   }
// }


// let user1 = new Person("John", 25)
// user1.setName("Jack")
// user1.incrementAge()
// console.log(user1)

// let user2 = new Person("Ann", 18)
// user2.incrementAge()
// console.log(user2.age)

// Создать класс для создания продукта, у которого есть имя, описание, цена, количество. Создать методы для изменения цены и метод sale() который уменьшает на 1 колисечство продукта 

class Product {
  constructor(title, description, price, count) {
    this.title = title
    this.description = description
    this.price = price
    this.count = count
  }

  sale() {
    if (this.count !== 0) {
      this.count--
      return
    }
    throw new Error("Продукта больше нет")
  }

  setPrice(price) {
    if (price >= 0) {
      this.price = price
      return
    }
    throw new Error("Отрицательная цена не принимается")
  }
}

let notebook = new Product("Notebook", "asgasg", 1000, 15)
console.log(notebook)
notebook.sale()
console.log(notebook)
notebook.setPrice(100)
console.log(notebook)

class Person {
  static roles = ["student", "lecturer", "employer"]
  static createdPersons = [] //
  // let this = {
  //   card: "0000000 465"
  // }
  #card = ""

  constructor(firstname, lastname, age = 18, balance, cardData) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.balance = balance
    this.#card = cardData

    Person.createdPersons.push(this) //
  }

  get card() {
    // "08080808 464 1234" = ["08080808", "464", "1234"]
    return this.#card.split(" ")[0]
  }

  set card(value) {
    this.#card = value
  }

  static getTotalBalance() { //
    return Person.createdPersons.reduce((acc, user) => acc + user.balance, 0)
  }

  setRole(role) {
    if (Person.roles.includes(role)) {
      this.role = role
      return
    }
    throw new Error("Недопустимая роль")
  }

  incrementAge() {
    this.age++
  }
}

let person1 = new Person("John", "Doe", 25, 100, "08080808 464 1234")
person1.setRole("student")
console.log(Person.roles);
person1.card = "new card"
console.log(person1.card);

let person2 = new Person("Jane", "Doe", 25, 123, "1950512882 464 1234")
console.log(person2.card);
// let person3 = new Person("Jane", "Doe", 25, 124)
// let person4 = new Person("Jane", "Doe", 25, 50)

// let totalBalance = Person.getTotalBalance()
// console.log(totalBalance);

