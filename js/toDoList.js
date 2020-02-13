var addToDo = document.querySelector('form')
var textValue = document.getElementById('textValue').nodeValue

addToDo.addEventListener("submit", function(textValue) {
    console.dir(textValue)
    var todo = []
    var ul = document.createElement('ul')
    var li = document.createElement('li')
    var button = document.createElement('button')
    var todoPlace = document.getElementById('toDoPlace')
    ul.setAttribute('class', 'list-group')
    li.setAttribute('class', 'list-group-item')
    li.textContent = textValue
    button.setAttribute('value', 'X')
    button.setAttribute('class', 'btn btn-outline-danger')
    todo.push(textValue)
    ul.appendChild(li)
    ul.appendChild(button)
    todoPlace.append(ul)
})