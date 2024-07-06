const toDoInput = document.getElementById("todo");
const descriptionInput = document.getElementById("description");
const button = document.getElementById("btn");
const element = document.getElementById("main")

button.addEventListener("click", function() {
    // console.log(toDoInput.value, descriptionInput.value)
    const div = document.createElement("div")
    const todoInputText = document.createTextNode("todo : " + toDoInput.value)
    const descriptionInputText = document.createTextNode("  desp: " + descriptionInput.value)
    div.appendChild(todoInputText)
    div.appendChild(descriptionInputText)
    element.appendChild(div)
})

