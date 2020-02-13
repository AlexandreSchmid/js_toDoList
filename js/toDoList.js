var todo = []
var addToDo = document.getElementById('addToDo')
var ul = document.getElementById('ul')
var textValue = document.getElementById('textValue').value

addToDo.addEventListener("click", function() {
    var li = document.createElement('li')
    var button = document.createElement('button')
    var textNode = document.createTextNode(textValue)
    todo.push(textValue)
    li.setAttribute('class', 'list-group-item')
    li.appendChild(textNode)
    button.setAttribute('class', 'badge badge-danger')
    button.innerHTML = 'Remove'
    li.appendChild(button)
    ul.prepend(li)
})

document.querySelector('ul').addEventListener("click", function() {
    ul.removeChild(ul.children.item(this.id))
})