const categories = []
const navLinksElem = document.querySelector(".nav-links>nav>ul")

async function getCategories() {
  try {
    const response = await fetch("https://dummyjson.com/products/categories")
    const data = await response.json()

    data.slice(0, 4).forEach(category => {
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
  let content = `<li class="nav-link active">All</li>`
  categories.forEach(category => {
    content += `<li class="nav-link">${category.name}</li>`
  })

  navLinksElem.innerHTML = content
}

getCategories()
