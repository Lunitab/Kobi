
// Load labels data
async function getLabels() {
    const res = await fetch("./api/v1/labels")
    const data = await res.json()
    return data
}




// Load labels data in select form
async function loadLabelsForm() {

    const labels = await getLabels()
    
    const $select = document.getElementById("showLabels")
    labels.forEach(label => {
        const option = document.createElement("option")
        option.value = label.id
        option.innerText = label.name
        $select.appendChild(option)
    })
}

loadLabelsForm()

