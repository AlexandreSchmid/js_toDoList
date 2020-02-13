// Variables select the html elements
var todo = [] // For later, will contain the other todos
var addToDo = document.getElementById('addToDo')
var ul = document.getElementById('ul')
var textValue = document.getElementById('textValue').value

// Triggered by a click on 'Add' button
addToDo.addEventListener("click", function() {
        todo.push(textValue) // Push into array (see below)
            // Create elements for html structure
        var li = document.createElement('li')
        var button = document.createElement('button')
        var textNode = document.createTextNode(textValue)
            // Set attributes like class for css
        li.setAttribute('class', 'list-group-item')
        li.appendChild(textNode)
        button.setAttribute('class', 'badge badge-danger')
        button.innerHTML = 'Remove'
            // Append button into ul child and add all new node to the top of the list
        li.appendChild(button)
        ul.prepend(li)
    })
    // When clicking on remove
document.querySelector('ul').addEventListener("click", function() {
    ul.removeChild(ul.children.item(this.id))
})