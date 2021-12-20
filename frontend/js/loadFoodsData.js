// Load foods data
async function getFoods() {
    const res = await fetch(`${APIconnection}/foods`)
    const data = await res.json()
    return data
}

// Load just one food
async function getFood(id) {
    const res = await fetch(`${APIconnection}/foods/${id}`)
    const data = await res.json()
    return data
}

// Function to create food card html
function createFoodCard(food) {
    const $card = document.createElement("article")
    $card.className = "food-detail--card"

    let estado = "Agotado"

    if (food.status) {
        estado = "Disponible"
    }

    // Add a class depending on status
    if (food.status) {
        $card.classList.add("open")
    } else {
        $card.classList.add("closed")
    }

    $card.innerHTML = `
        <a>
        <figure>
            <img src="${food.image}" alt="${food.name}">
            <p>Agotado</p>
        </figure>
        </a>
        <div class="food--card-text">
            <h3>${food.name}</h3>
            <p>
            ${food.description}
            </p>
            <div class="food--card-info">
            <p class="food--info-status">${estado}</p>
            <p class="food--info-price">$${food.price}</p>
            </div>
        </div>
        `
    return $card
}

// Load food data in newFood
async function loadInNewFood(foodId) {
    const food = await getFood(foodId)
    
    const $foodName = document.getElementById("foodName")
    const $foodPrice = document.getElementById("foodPrice")
    const $foodDescription = document.querySelector(".description")
    const $foodImage = document.getElementById("foodImage")

    const $menuStatusAvailable = document.getElementById("status-available")
    const $menuStatusUnavailable = document.getElementById("status-unavailable")

    $foodName.value = food.name
    $foodPrice.value = food.price
    $foodDescription.value = food.description
    $foodImage.src = food.image

    if (food.status) {
        $menuStatusAvailable.selected = true
    } else {
        $menuStatusUnavailable.selected = true
    }

    await loadLabelsInPatchForm(food.labelId)


}