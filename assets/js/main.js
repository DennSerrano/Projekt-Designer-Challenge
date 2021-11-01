

function showEmail() {
    let email = document.getElementById("email")
    console.log(email.value)
}
function onClick() {
    let switchBox = document.getElementById("switchBox")
    let showBox = document.getElementById("showBox")
    showBox.classList.toggle("show")
    switchBox.classList.toggle("dontShow")
}

function backClick() {
    let switchBox = document.getElementById("switchBox")
    let showBox = document.getElementById("showBox")
    switchBox.classList.toggle("dontShow")
    showBox.classList.toggle("show")
}