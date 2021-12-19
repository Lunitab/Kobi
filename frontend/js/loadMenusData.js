// Load menus data
async function getMenus() {
    const res = await fetch("./api/v1/menus")
    const data = await res.json()
    return data
}

// Load just one menu
async function getMenu(id) {
    const res = await fetch(`./api/v1/menus/${id}`)
    const data = await res.json()
    return data
}

// Function to create menu card html
function createMenuCard(menu) {
    const $card = document.createElement("article")
    $card.className = "food-detail--card"

    let estado = "Cerrado"

    if (menu.status) {
        estado = "Abierto"
    }

    // Add a class depending on status
    if (menu.status) {
        $card.classList.add("open")
    } else {
        $card.classList.add("closed")
    }

    $card.innerHTML = `
        <a href="#">
        <figure>
            <img src="${menu.image}" alt="${menu.name}">
            <p>Cerrado</p>
        </figure>
        </a>
        <div class="food--card-text">
            <h3>${menu.name}</h3>
            <p>${estado}</p>
        </div>
        `
    return $card
}

// Load menus card in newest section
async function loadNewestMenusCard() {
    const menus = await getMenus()
    const $newest = document.getElementById("newest")

    // Sort the menus by the latest
    const sortedMenus = menus.sort((a, b) => b.id - a.id)

    sortedMenus.forEach((menu) => {
        const $card = createMenuCard(menu)
        $newest.appendChild($card)
    })
}

// Load labels sections and menu cards only for labels with at least one menu
async function loadLabelsSections() {
    const labels = await getLabels()
    const $labels = document.getElementById("labels")

    labels.forEach((label) => {
        if (label.menus.length <= 0) {
            return false
        }

        const $section = document.createElement("section")
        $section.className = "food--container"
        $section.id = `label-${label.id}`

        $section.innerHTML = `
                    <!-- Title -->
                    <div class="food-detail--title">
                        <h2>${label.name}</h2>
                        <p>${label.description}</p>
                    </div>
                    <!-- /Title -->

                    <!-- Menu cards -->
                    <section class="food-cards--container">
                        ${label.menus.map((menu) => createMenuCard(menu).outerHTML).join("")}
                    </section>
                    <!-- /Item cards -->
        `
        $labels.appendChild($section)
    })
}

async function loadMenuDataInMyMenu(menuId) {
    const menu = await getMenu(menuId)
    const $menuName = document.getElementById("menu-name")
    const $menuImage = document.getElementById("menu-image")
    const $menuLabel = document.getElementById("menu-label")
    const $menuStatus = document.getElementById("menu-status")
    const $menuCategories = document.getElementById("menu-categories")

    $menuName.innerHTML = menu.name
    $menuImage.src = menu.image
    $menuLabel.innerHTML = menu.label.name
    $menuStatus.innerHTML = menu.status ? "Abierto" : "Cerrado"
    $menuStatus.className = menu.status ? "abierto" : "cerrado"

    await loadLabelsInPatchForm(menu.labelId)


    menu.categories.forEach((category) => {

        const $category = document.createElement("div")
        $category.className = "category-container"
        $category.setAttribute("data-id", category.id)

        let foodHtml = ""
        let deleteCategoryBtn = `
            <a class="delete delete-btn delete-category"  data-id="${category.id}">
                    <i class="fas fa-trash"></i>
            </a>
        `

        // Obtener lista de alimentos de cada categoria
        category.foods.forEach((food) => {
            const $food = document.createElement("li")
            $food.innerHTML = `
                    <p>${food.name}</p>
                    <div class="food-actions">
                        <a class="edit" data-id="${food.id}">
                            <i class="fas fa-pen"></i>
                        </a>
                        <a class="delete delete-btn delete-food" data-id="${food.id}">
                            <i class="fas fa-trash"></i>
                        </a>
                    </div>
                `
            foodHtml += $food.outerHTML
        })

        $category.innerHTML = `
            <div class="category-edit">
                <input name="category-${category.id}" data-id="${category.id}" class="category" type="text" value="${category.name}" required />
                <!-- Solo añadir el icono si no es el primero -->
                ${category.id === menu.categories[0].id ? "" : deleteCategoryBtn}
            </div>
            <ul class="food-list">
                ${foodHtml}
            </ul>
            
            <!-- Button to add a new food -->
            <button class="add-food-btn" type="button">+</button>
            `

        $menuCategories.appendChild($category)
    })
}
