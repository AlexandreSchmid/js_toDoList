var todo = []
var addToDo = document.getElementById('addToDo')
var ul = document.getElementById('ul')
var textValue = document.getElementById('textValue').value


addToDo.addEventListener("click", function() {
    var li = document.createElement('li')
    var button = document.createElement('button')


    todo.push(textValue)

    li.setAttribute('class', 'list-group-item')
    li.innerHTML = textValue
    button.setAttribute('class', 'btn btn-outline-danger')
    button.setAttribute('id', 'thisButton')
    button.innerHTML = 'X'
    ul.prepend(li, button)
})

function removeElement() {
    try {
        document.getElementById('thisButton').addEventListener("click", function() {
            this.parentElement.remove()
        })
    } catch (TypeError) {

    }

}
removeElement()