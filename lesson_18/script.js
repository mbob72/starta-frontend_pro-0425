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
    super(description, Income.type, amount)
  }
}
// let incomeInstance = new Income(100, "Зарплата")
// console.log(i.test);

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
    this.#balance += trx.amount
    this.transactions.push(trx)
  }

  get transactions() {
    return this.transactions
  }

  // newIncome(amount, description) {
  //   const trx = new Income(amount, description)
  //   this.#balance += trx.amount
  //   this.transactions.push(trx)
  // }
}

const john = new Account("John")
john.addTransaction(new Income(1000, "Зарплата"))
// john.newIncome(1000, "Зарплата")
john.addTransaction(new Income(350, "Премия"))
console.log(john.balance);
console.log(john.transactions);
