const categories = []
const products = []
let cart = []
let activeCategory = "all"

const navLinksElem = document.querySelector(".nav-links>nav>ul")
const productsContainer = document.querySelector(".products-container")
const cartProductsCount = document.querySelector(".cart-count")

async function getCategories() {
  try {
    const response = await fetch("https://dummyjson.com/products/categories")
    const data = await response.json()

    data.slice(0, 10).forEach(category => {
      categories.push({
        name: category.name,
        slug: category.slug
      })
    });

    renderCategories()
  } catch (error) {
    console.log(`Get categories error: ${error}`)
  }
}

function renderCategories() {
  let content = `<li class="nav-link active" data-slug="all">All</li>`
  categories.forEach(category => {
    content += `<li class="nav-link" data-slug="${category.slug}">${category.name}</li>`
  })

  navLinksElem.innerHTML = content

  let navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(function (categoryElement) {
        categoryElement.classList.remove("active")
      })
      // navLinks.forEach(l => l.classList.remove("active"))
      this.classList.add("active")

      activeCategory = this.dataset.slug
      renderProducts()
    })
  })
}
// создать функицю для получения продуктов по запросу 'https://dummyjson.com/products', сохранить их в массив products в виде объекта со свойствами {id, title, price, thumbnail,images, description, category} и дальше реализовать функцию renderProducts для отрисовки всех продуктов

async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=100')
    const data = await response.json()

    data.products.forEach(product => {
      products.push({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        images: product.images,
        description: product.description,
        category: product.category
      })
    });

    renderProducts()
  } catch (error) {
    console.log(`Get products error: ${error}`);
  }
};


const searchInputElem = document.querySelector(".search-box")
searchInputElem.addEventListener("input", renderProducts)

const modalWindow = document.querySelector(".modal-window")
function renderProducts() {
  let searchValue = searchInputElem.value.toLowerCase()
  productsContainer.innerHTML = ""
  products.filter(function (product) {
    if (activeCategory === "all") {
      if (searchValue === "") return true
      return product.title.toLowerCase().includes(searchValue)
    }

    if (product.category === activeCategory) {
      if (searchValue === "") return true
      return product.title.toLowerCase().includes(searchValue)
    }
  }).forEach(product => {
    const existInCart = cart.find(p => p.id === product.id)
    productsContainer.insertAdjacentHTML("beforeend", `
    <div class="product-card" data-productid=${product.id}>
      <div class="product-image-container">
        <img src="${product.thumbnail}" alt="product" class="product-image">
        <div class="product-category">${product.category}</div>
      ${existInCart ?
        `<div class="product-select exist" data-productid="${product.id}">✓</div>` :
        `<div class="product-select" data-productid="${product.id}">+</div>`
      }
      </div>
      <div class="product-info">
        <p class="product-title">${product.title}</p>
        <p class="product-price">$${product.price}</p>
      </div>
    </div> `)
  })

  let productSelects = document.querySelectorAll(".product-select")
  productSelects.forEach(function (elem) {
    elem.addEventListener("click", function (event) {
      event.stopPropagation() // остановить всплытие события клик
      console.log(+this.dataset.productid)
      addToCart(+this.dataset.productid)
    })
  })

  let productCards = document.querySelectorAll(".product-card")
  productCards.forEach(function (elem) {
    elem.addEventListener("click", function () {
      renderModalWindowContent(+this.dataset.productid)
      modalWindow.classList.add("open")
    })
  })
}

const mainModalImage = document.querySelector(".gallery-main")
const modalThumbnails = document.querySelector(".gallery-thumbs")
const modalProductTitle = document.querySelector(".modal-product-title")
const modalProductPrice = document.querySelector(".modal-product-price")
const modalProductDescription = document.querySelector(".modal-product-description")

function renderModalWindowContent(productId) {
  // найти объект продукта в массиве products по productId
  // если продукта нет то удалить класс open у modalWindow
  // если продукт есть
  // в mainModalImage добавить элемент img с src = images[0]
  // в modalThumbnails добавить элементы img где src каждого img это значения из массива images у продукта
  // в modalProductTitle, modalProductPrice, modalProductDescription соотвественно заголовок, цена, описание продукта
  const product = products.find(p => p.id === productId)
  if (!product) {
    return
  }

  mainModalImage.innerHTML = `<img src="${product.images[0]}" alt="${product.title}">`
  modalThumbnails.innerHTML = product.images.map(src => `<img class="gallery-thumb" src="${src}" alt="${product.title}">`).join("")
  // ["<img ...>", "<img ...>", "<img ...>", "<img ...>"].join("")
  // `<img...>
  //  <img...>
  //  <img...>
  //  <img...>`

  modalProductTitle.innerText = product.title
  modalProductPrice.innerText = `$${product.price}`
  modalProductDescription.innerText = product.description
}

// функция для добавления продукта в корзину по его id
// проверить во первых есть ли вообще такой продукт, если нет просто делать пустой return
// если продукт есть проверить если он уже есть в корзине то удалить оттуда
// если продукта нет в корзине, то создать объект с такими свойствами {id, title, image, price, count} и добавить в массив cart
// products = [{id: 1, ...}, {id: 2, ...}] 
function addToCart(productId) {
  let product = products.find(p => p.id === productId)
  if (!product) {
    return
  }

  // let productIndex = cart.findIndex(p => p.id === productId)
  // if (productIndex >= 0) {
  //   cart.splice(productInCart, 1)
  // }

  let productInCart = cart.find(p => p.id === productId)
  if (productInCart) {
    cart = cart.filter(p => p.id !== productId)
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      image: product.thumbnail,
      price: product.price,
      count: 1
    })
  }

  renderProducts()
  renderCartProducts()
}

const cartIcon = document.querySelector(".cart-icon")
const closeCart = document.querySelector(".close-cart")
const cartSidebar = document.querySelector("#cartSidebar")
cartIcon.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart)
function toggleCart() {
  cartSidebar.classList.toggle('open');
}

const cartProducts = document.querySelector(".cart-items")
function renderCartProducts() {
  cartProducts.innerHTML = ""
  cartProductsCount.innerText = cart.length

  cart.forEach(product => {
    cartProducts.insertAdjacentHTML("beforeend",
      `<div class="cart-item">
        <img src="${product.image}"
          alt="${product.title}" class="cart-item-image">
        <div class="cart-item-details">
          <div class="cart-item-title">${product.title}</div>
          <div class="cart-item-price">$${product.price}</div>
          <div class="cart-item-actions">
            <button class="quantity-btn decrease-quantity" data-id="${product.id}">-</button>
            <span class="item-quantity">${product.count}</span>
            <button class="quantity-btn increase-quantity" data-id="${product.id}">+</button>
            <button class="remove-item" data-id="${product.id}">×</button>
          </div>
        </div>
      </div>`
    )
  })

  const plusBtns = document.querySelectorAll(".increase-quantity")
  plusBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      updateCount(+this.dataset.id, 1)
    })
  })

  const decBtns = document.querySelectorAll(".decrease-quantity")
  decBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      updateCount(+this.dataset.id, -1)
    })
  })

  if (cart.length === 0) {
    cartProducts.innerHTML = `<div class="empty-cart">Your cart is empty</div>`
  }

  const removeProducts = document.querySelectorAll(".remove-item")
  removeProducts.forEach(rmElem => {
    rmElem.addEventListener("click", function () {
      cart = cart.filter(p => p.id !== +this.dataset.id)
      renderCartProducts()
      renderProducts()
    })
  })

  const cartTotal = document.querySelector("#cartTotal")
  cartTotal.innerText = `$${cart.reduce((acc, p) => acc + (p.price * p.count), 0).toFixed(2)}`
}

// Создать функцию updateCount(productId, count) которая ищет продукт в корзине(cart). Если продукта нет то вернуть пустой return.
// Если продукт есть то просто изменить свойство count
// Если в итоге count будет <= 0 то удалить продукт из корзины а после вызвать renderCartProducts
// Если count больше 0 то просто вызвать функцию renderCartProducts
function updateCount(productId, count) {
  const product = cart.find(p => p.id === productId)
  if (!product) {
    return
  }

  product.count += count
  if (product.count <= 0) {
    cart = cart.filter(p => p.id !== productId)
  }

  renderCartProducts()
  renderProducts()
}

getCategories()
getProducts()

