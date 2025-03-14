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
    productsContainer.insertAdjacentHTML("beforeend", `
    <div class="product-card">
      <div class="product-image-container">
        <img src="${product.thumbnail}" alt="product"
          class="product-image">
        <div class="product-category">${product.category}</div>
        <div class="product-select" data-productid="${product.id}">+</div>
      </div>
      <div class="product-info">
        <p class="product-title">${product.title}</p>
        <p class="product-price">$${product.price}</p>
      </div>
    </div> `)
  })

  let productSelects = document.querySelectorAll(".product-select")
  productSelects.forEach(function (elem) {
    elem.addEventListener("click", function () {
      console.log(+this.dataset.productid)
      addToCart(+this.dataset.productid)
    })
  })
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
      count: product.count
    })
  }

  cartProductsCount.innerText = cart.length
}

getCategories()
getProducts()
