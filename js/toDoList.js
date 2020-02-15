class Todolist {
    constructor(todo, ul, textValue) {
        this.todo = todo
        this.ul = ul
        this.textValue = textValue
    }

    createTask() {
        // Create elements for html structure
        var elt = [
            document.createElement('li'),
            document.createElement('p'),
            document.createElement('button'),
            document.createTextNode(this.textValue.value)
        ]
        this.todo.push(this.textValue.value) // Push into array (see below)

        // Set attributes like class for css
        elt[0].setAttribute('class', 'list-group-item')
        elt[2].setAttribute('class', 'badge badge-danger')
        elt[2].innerHTML = 'Remove'
            // Append button into ul child and add all new node to the top of the list
        elt[1].appendChild(elt[3])
        elt[0].appendChild(elt[1])
        elt[0].appendChild(elt[2])
        this.ul.prepend(elt[0])

        localStorage.setItem('todoList', this.todo.join(''))

    }
}

// Triggered by a click on 'Add' button
document.getElementById('addToDo').addEventListener("click", function() {
    // Call to Todolist class function createTask()
    new Todolist([], document.getElementById('ul'), document.getElementById('textValue')).createTask()
        // When clicking on remove
    document.querySelector('.badge').addEventListener("click", function() {
        ul.removeChild(ul.children.item(this.id))
    })
})