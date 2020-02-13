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
    button.setAttribute('class', 'badge badge-danger')
    button.setAttribute('id', 'thisButton')
    button.innerHTML = 'Remove'
    li.appendChild(button)
    ul.prepend(li)
})

document.querySelector('li').addEventListener("click", function() {
    if (document.querySelector('li > #thisButton')) {
        this.parentNode.remove()
    }
})