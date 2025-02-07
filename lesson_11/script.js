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

const deleteButton = document.querySelector("#delete_data")
deleteButton.addEventListener("click", function () {
  localStorage.removeItem("theme")
  localStorage.removeItem("location")
  localStorage.removeItem("currency")
})

const getButton = document.querySelector("#get_data")
getButton.addEventListener("click", function () {
  console.log(localStorage.getItem("username")) // null
  console.log(localStorage.getItem("theme")) // light
})





// сделать так чтобы при клике число внутри span увеличился на 1 при клике на кнопку с текстом плюс и наоборот при клике на кнопку с текстом минус
// для счетчика использовать переменную в коде 

const btnPlus = document.querySelector(".plus")
const btnMinus = document.querySelector(".minus")
const counterElem = document.querySelector("span")
// let counterValue = 0

// if (localStorage.getItem("counter") !== null) {
//   counterValue = +localStorage.getItem("counter")
// }

// условие ? код если условие верно : если наоборот
// localStorage.getItem("counter") !== null ? counterValue = +localStorage.getItem("counter") : {}

// !!null = false
// !!0 = false
// !!"" = false
// !!undefined = false
// !!NaN = false
// !!false = false
// !!7 = true
let counterValue = !!localStorage.getItem("counter") ? +localStorage.getItem("counter") : 0

counterElem.innerText = counterValue

btnPlus.addEventListener("click", function () {
  counterValue++
  counterElem.innerText = counterValue
  localStorage.setItem("counter", counterValue);
})
btnMinus.addEventListener("click", function () {
  counterValue--
  counterElem.innerText = counterValue
  localStorage.setItem("counter", counterValue);
})
// сделать так чтобы результат переменной counterElem сохранился в localStorage ("counter") и после перезагрузки продолжалость с этого же результата
// 1. сохранить результат переменной counterValue в localStorage после того как увеличили значение на 1
// 2. сохранить результат переменной counterValue в localStorage после того как уменьшили значение на 1
// 3. после создания переменной counterValue проверить есть ли в localStorage уже сохраненное значение("counter"), если есть то к переменной counterValue присвоить это значение в числовом типе данных а если нет то ничего не делать

// ===============================
let settingsObj = {
  website: {
    theme: "dark",
    currency: "eur"
  },
  profile: {
    rememberMe: true,
    location: {
      country: "Germany",
      city: "Berlin"
    },
    favoriteTags: ["Laptops", "Kitchen", "RCToys"],
    age: 45,
    car: undefined,
    sallary: null
  },
}

// structuredClone

// number, string, boolean, undefined, null, object, array
// String(settings) // [object Object]
// JSON
// JavaScript Object Notation
// undefined => теряется при stringify и parse

// '"website": {...}, "profile": {"rememberMe": true}'
// let jsonSettings = JSON.stringify(settings)
// console.log(jsonSettings)
// localStorage.setItem("settings", jsonSettings)
// let parsedSettings = JSON.parse(localStorage.getItem("settings"))
// console.log(parsedSettings)

// создать кнопку remeberMe и при клике поменять значение свойтсва settingsememberMe внутри объекта settings и обратно сохранить в localStorage
// чтобы при каждом клике значение реверснулся

// rememberMe: true
// click
// rememberMe: false
// click
// rememberMe: true

localStorage.setItem("settings", JSON.stringify(settingsObj))
let btn = document.querySelector("#remember_me")
btn.addEventListener("click", function () {
  let jsonSettings = JSON.parse(localStorage.getItem("settings"))
  jsonSettings.profile.rememberMe = !jsonSettings.profile.rememberMe
  localStorage.setItem("settings", JSON.stringify(jsonSettings))
  // !true = false
  // !false = true
})
// let isActive = true
// isActive = !isActive
