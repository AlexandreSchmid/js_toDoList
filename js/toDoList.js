var addToDo = document.getElementById('addToDo')
var ul = document.getElementById('ul')

addToDo.addEventListener("click", function() {
    var textValue = document.getElementById('textValue').value
    var li = document.createElement('li')
    var button = document.createElement('button')

    var todo = []
    todo.push(textValue)

    li.setAttribute('class', 'list-group-item')
    li.innerHTML = textValue
    button.innerHTML = 'X'
    button.setAttribute('class', 'btn btn-outline-danger')
    ul.prepend(li, button)
})