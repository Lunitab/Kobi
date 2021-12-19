
// Load labels data
async function getLabels() {
    const res = await fetch("./api/v1/labels")
    const data = await res.json()
    return data
}

// Load labels data in select registration form
async function loadLabelsInForm() {

    const labels = await getLabels()
    
    const $select = document.getElementById("showLabels")
    labels.forEach(label => {
        const option = document.createElement("option")
        option.value = label.id
        option.innerText = label.name
        $select.appendChild(option)
    })
}

// Load labels data in select registration form
async function loadLabelsInPatchForm(id) {

    const labels = await getLabels()
    
    const $select = document.getElementById("showLabels")
    labels.forEach(label => {
        const option = document.createElement("option")
        option.value = label.id
        option.innerText = label.name

        if(label.id == id) {
            option.selected = true
        }

        $select.appendChild(option)
    })
}

// Load label with image in #showLabels section

async function loadLabelsInSection() {
    const labels = await getLabels()
    const $showLabels = document.getElementById("showLabels")

    labels.forEach(label => {
        if(label.menus.length <= 0) {
            return false
        }
        
        const $a = document.createElement("a")
        $a.className = "categories--item"
        $a.href = `#label-${label.id}`

        const $img = document.createElement("img")
        $img.src = label.image
        $img.alt = label.name
        
        const $p = document.createElement("p")
        $p.innerText = label.name

        $a.appendChild($img)
        $a.appendChild($p)
        $showLabels.appendChild($a)
    })
}



