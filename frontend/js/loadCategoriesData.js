// Load labels data
async function getCategories() {
    const res = await fetch("./api/v1/categories")
    const data = await res.json()
    return data
}

// Load categories of each menu
async function loadCategoriesInSection(categories) {
    const $showCategories = document.getElementById("showCategories")

    // Sort the categories by the latest
    categories = categories.sort((a, b) => a.id - b.id)

    categories.forEach(category => {
        if(category.foods.length <= 0) {
            return false
        }
        
        const $a = document.createElement("a")
        $a.className = "categories--item"
        $a.href = `#category-${category.id}`
        
        const $p = document.createElement("p")
        $p.innerText = category.name

        $a.appendChild($p)
        $showCategories.appendChild($a)
    })
}

