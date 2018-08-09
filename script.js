document.addEventListener('DOMContentLoaded', (ev) => {
    h1 = createH1();
        
    input = createInput();
        
    todoList = createToDoList();

    button = createButton();

    button.addEventListener('click', (ev) => {
        addTask(input);
    })

    input.addEventListener('keyup', (ev) => {
        if (ev.keyCode === 13) {
        addTask(input);
        }    
    })

    input.addEventListener('click', (ev) => {
        input.value = "";
    })

    //Variable Creation!
    function createH1 () {
        const appName = document.createElement('h1');
        document.body.appendChild(appName);
        appName.textContent = 'Todo App';
        return appName;
    }

    function createInput () {
        let input = document.createElement('input');
        document.body.appendChild(input);
        input.type = "text";
        input.value = "What should I do?"
        return input;
    }

    function createToDoList ()  {
        const todoList = document.createElement('ul');
        document.body.appendChild(todoList);
        return todoList;
    }

    function createButton () {
        const button = document.createElement('button');
        document.body.appendChild(button);
        button.textContent = "Add Todo";
        button.setAttribute('id', 'add_todo');
        return button;
    }

    function createEditButton (item, itButton) {
        //Create button
        let edButton  =  document.createElement('button');
        edButton.textContent = "Edit";
        edButton.style.backgroundColor = "pink";
        edButton.style.cssFloat = "right";
        item.appendChild(edButton);

        //Events
        edButton.addEventListener('click', (ev) =>{
            //Create Edit Field
            let editInput = document.createElement('input');
            item.appendChild(editInput);
            editInput.type = "text";

            //Edit List Value
            editListValue(item, itButton, editInput);
        })
        return edButton;
    }

    //editListValue()
    function editListValue (item, itButton, editInput) {
        editInput.addEventListener('keyup', (ev) => {
            if (ev.keyCode === 13)  {
                if (editInput.value !== "") {
                    item.textContent = editInput.value;
                    item.appendChild(itButton);
                    item.appendChild(edButton);
                }
            }
        })
    }

    function createItButton (item)  {
        //create itbutton
        const itButton = document.createElement('button');
            itButton.textContent = "X";
            itButton.style.backgroundColor = "red";
            itButton.style.cssFloat = "right";
            item.appendChild(itButton);
        //events
            itButton.addEventListener('click', (ev) => {
                item.setAttribute('class', 'completed');
            });
        return itButton;
    }

    function addTask (input) {
        if (input.value !== "") {
            let item = document.createElement('li');
            item.textContent = input.value;
            
            //Create X Button, short for item button
            itButton = createItButton(item);
    
            //Create Edit Button
            edButton = createEditButton(item, itButton);
            
            //Appending things
            todoList.appendChild(item);
    
            input.value = "";
        } else {
            alert("You have something to do!");
        }
    }
})