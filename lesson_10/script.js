// document.getElementById
// document.getElementsByClassName
// document.getElementsByName
// document.getElementsByTagName

const pElem = document.querySelector(".p_1")
console.log(pElem)
const btnElem = document.querySelector("#btn")
console.log(btnElem)
const spanElem = document.querySelector("span")
console.log(spanElem)

console.log(pElem.innerText)
pElem.innerText = "test"

// если аттрибут есть то меняет значение
// есл нет то создает
pElem.setAttribute("data-type", "hello")

// const imgElem = document.querySelector("img")
// console.log(imgElem.src);
// console.log(imgElem.getAttribute("data-type"))
// // data-type
// console.log(imgElem.dataset.type);

// const imgElem = document.querySelectorAll("img[data-type='DOM_scheme']")
// console.log(imgElem)

pElem.classList.add("class1", "class2")
pElem.classList.remove("p_1", "class2")
// если нет класса то добавляет
// если есть класс то удаляет
// pElem.classList.toggle("class3")
// проверят наличик класса
// pElem.classList.contains("class3")
// заменяет класс указанным классом
// pElem.classList.replace("class1", "replacedClass1")
// console.log(pElem.classList.toString());

pElem.addEventListener("click", function () {
  // if (pElem.classList.contains("selected")) {
  //   pElem.classList.remove("selected")
  // } else {
  //   pElem.classList.add("selected")
  // }
  pElem.classList.toggle("selected")
})

// =======

const clickElem = document.querySelector("#btn")
let counter = 1
clickElem.addEventListener("click", function () {
  console.log(`clicked ${counter++}`)
  // counter++
  // counter = counter + 1
  // counter += 1
})

// сделать так чтобы при клике число внутри span увеличился на 1 при клике на кнопку с текстом плюс и наоборот при клике на кнопку с текстом минус
// для счетчика использовать переменную в коде 

const btnPlus = document.querySelector(".plus")
const btnMinus = document.querySelector(".minus")
const counterElem = document.querySelector("span")
let counterValue = 1

btnPlus.addEventListener("click", function () {
  counterValue++
  counterElem.innerText = counterValue
})

btnMinus.addEventListener("click", function () {
  counterValue--
  counterElem.innerText = counterValue
})

// ===============================


// localStorage.clear() // очищает полностью хранилище
// localStorage.getItem() // получить значение из хранилища по ключу
// localStorage.setItem() // вставить значение в хранилище
// localStorage.removeItem() // удалить значение из хранилища

const saveButton = document.querySelector("#save_data")
saveButton.addEventListener("click", function () {
  localStorage.setItem("theme", "light")
  localStorage.setItem("location", "Amsterdam")
  localStorage.setItem("currency", "Euro")
})
