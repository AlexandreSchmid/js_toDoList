class Todolist {
    // Setting variables for creating elements
    elts = ['li', 'p', 'button']
    ul = document.getElementById('ul')
        // Setting only the text of each task
    constructor(textValue) {
            this.textValue = textValue
        }
        // Each task is created by putting text into elements created below
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
        // Each task is removable individually, I use localstorage for persistence
    removeItem() {
            document.getElementById('ul').removeChild(document.getElementById('ul').children.item(this.id))
            localStorage.setItem("todoList", "")
            this.saveTasks()
        }
        // Each task is save with localStorage into an array
    saveTasks() {
        var tasks = []
        var items = document.querySelectorAll('li')
        for (var i = 0; i < items.length; i++) {
            tasks.push(items[i].firstChild.textContent)
        }
        localStorage.setItem('todoList', tasks)
    }
}

window.addEventListener('load', function() {
    if (localStorage.getItem('todoList') != "") {
        var items = localStorage.getItem('todoList').split(',')
        for (var i = 0; i < items.length; i++) {
            new Todolist(items[i]).createTask()
        }
    }
    // Remove tasks one by one
    this.document.addEventListener('click', function(e) {
            if (e.target.className == 'removeButton') {
                new Todolist(null).removeItem()
            }
        })
        // Triggered by a click on 'Add' button
    document.getElementById('addToDo').addEventListener("click", function() {
            // Call to Todolist class function createTask()
            new Todolist(document.getElementById('textValue').value).createTask()
        })
        // Clear every tasks
    this.document.getElementById('clearToDo').addEventListener("click", function() {
        localStorage.setItem('todoList', '')
    })
})