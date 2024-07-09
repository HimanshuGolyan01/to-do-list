const toDoInput = document.getElementById("todo");
const descriptionInput = document.getElementById("description");
const button = document.getElementById("btn");
const element = document.getElementById("todolist")

button.addEventListener("click", function() {
    // console.log(toDoInput.value, descriptionInput.value)

    const div = document.createElement("div")
    const todoInputText = document.createTextNode("TODO : " + toDoInput.value)
    const descriptionInputText = document.createTextNode("  DESP: " + descriptionInput.value)

    if(!toDoInput.value || !descriptionInput.value) {
        alert("Please fill Todo and Desp");
    }
    else {
        div.appendChild(todoInputText)
        div.appendChild(descriptionInputText)
        element.appendChild(div)
        toDoInput.value = ""
        descriptionInput.value = ""
    }

    
})


