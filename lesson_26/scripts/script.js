const categories = []
const navLinksElem = document.querySelector(".nav-links>nav>ul")
let activeCategory = "all"
let productsContainer = document.querySelector(".products-container")
let products = []

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
getCategories()

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
  }).forEach(pro => {
    productsContainer.insertAdjacentHTML("beforeend", `
    <div class="product-card">
      <div class="product-image-container">
        <img src="${pro.thumbnail}" alt="product"
          class="product-image">
        <div class="product-category">${pro.category}</div>
        <div class="product-select">+</div>
      </div>
      <div class="product-info">
        <p class="product-title">${pro.title}</p>
        <p class="product-price">$${pro.price}</p>
      </div>
    </div> `)
  })
}


getProducts()