// Load foods data
async function getFoods() {
    const res = await fetch("./api/v1/foods")
    const data = await res.json()
    return data
}

// Load just one food
async function getFood(id) {
    const res = await fetch(`./api/v1/foods/${id}`)
    const data = await res.json()
    return data
}

// Load food data in newFood
async function loadInNewFood(foodId) {
    const food = await getFood(foodId)
    
    const $foodName = document.getElementById("foodName")
    const $foodPrice = document.getElementById("foodPrice")
    const $foodDescription = document.querySelector(".description")
    const $foodImage = document.getElementById("foodImage")

    $foodName.value = food.name
    $foodPrice.value = food.price
    $foodDescription.value = food.description
    $foodImage.src = food.image

    await loadLabelsInPatchForm(food.labelId)


}