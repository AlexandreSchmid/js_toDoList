class Todolist {
    constructor(elts, ul, textValue) {
        this.elts = elts
        this.ul = ul
        this.textValue = textValue
    }

    createTask() {
        // Create elements for html structure
        var elt = []
        for (var i = 0; i < this.elts.length; i++) {
            elt.push(document.createElement(this.elts[i]))
        }
        elt.push(document.createTextNode(this.textValue))

        // Set attributes like class for css
        elt[0].setAttribute('class', 'task')
        elt[2].setAttribute('class', 'removeButton')
        elt[2].innerHTML = 'Remove'
            // Append button into ul child and add all new node to the top of the list
        elt[1].appendChild(elt[3])
        elt[0].appendChild(elt[1])
        elt[0].appendChild(elt[2])
        this.ul.prepend(elt[0])

        this.saveTasks()
    }

    saveTasks() {
        var tasks = []
        var items = document.querySelectorAll('li')
        for (var i = 0; i < items.length; i++) {
            tasks.push(items[i].firstChild.textContent)
        }
        localStorage.setItem('todoList', tasks)
    }
}

function removeItem() {
    document.querySelector('.removeButton').addEventListener("click", function() {
        document.getElementById('ul').removeChild(document.getElementById('ul').children.item(this.id))
        var items = localStorage.getItem("todoList").split(',')
        items.pop(items[this.id])
    })
}

window.addEventListener('load', function(e) {
    if (localStorage.getItem('todoList') != "") {
        var items = localStorage.getItem('todoList').split(',')
        for (var i = 0; i < items.length; i++) {
            new Todolist(['li', 'p', 'button'], document.getElementById('ul'), items[i]).createTask()
        }
    }
    removeItem()
})

// Triggered by a click on 'Add' button
document.getElementById('addToDo').addEventListener("click", function() {
    // Call to Todolist class function createTask()
    new Todolist(['li', 'p', 'button'], document.getElementById('ul'), document.getElementById('textValue').value).createTask()
        // When clicking on remove
    removeItem()
})