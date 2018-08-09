document.addEventListener('DOMContentLoaded', (ev) => {
    //console.log('booyah')
    const appName = document.createElement('h1');
    document.body.appendChild(appName);
    appName.textContent = 'Todo App';
   
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.type = "text";
    input.value = "What should I do?"

    const todoList = document.createElement('ul');
    document.body.appendChild(todoList);


    const button = document.createElement('button');
    document.body.appendChild(button);
    button.textContent = "Add Todo";
    button.setAttribute('id', 'add_todo');

    button.addEventListener('click', (ev) => {
        if (input.value !== "") {
            const item = document.createElement('li');
            item.textContent = input.value;
            
            const edButton  =   document.createElement('button');
            edButton.textContent = "Edit";
            edButton.style.backgroundColor = "pink";
            edButton.style.cssFloat = "right";
            edButton.addEventListener('click', (ev) =>{
                const editInput = document.createElement('input');
                item.appendChild(editInput);
                editInput.type = "text";
                editInput.addEventListener('keyup', (ev) => {
                    if (ev.keyCode === 13)  {
                        if (editInput.value !== "") {
                            item.textContent = editInput.value;
                            item.appendChild(edButton);
                            item.appendChild(itButton);
                        }
                    }
                })
            })
            
            var itButton = document.createElement('button');
            itButton.textContent = "X";
            itButton.style.backgroundColor = "red";
            itButton.style.cssFloat = "right";
            itButton.addEventListener('click', (ev) => {
                item.setAttribute('class', 'completed');
            });
            
            item.appendChild(itButton);
            item.appendChild(edButton);
            todoList.appendChild(item);
        } else {
            alert("You have something to do!");
        }
    })

    input.addEventListener('keyup', (ev) => {
        if (ev.keyCode === 13) {
            if (input.value !== "") {
                const item = document.createElement('li');
                item.textContent = input.value;

                const edButton = document.createElement ('button');
                edButton.textContent = "Edit";
                edButton.style.backgroundColor = "pink";
                edButton.style.cssFloat = "right";
                edButton.addEventListener('click', (ev) =>{
                    const editInput = document.createElement('input');
                    item.appendChild(editInput);
                    editInput.type = "text";
                    editInput.addEventListener('keyup', (ev) => {
                        if (ev.keyCode === 13)  {
                            if (editInput.value !== "") {
                                item.textContent = editInput.value;
                                item.appendChild(edButton);
                                item.appendChild(itButton);
                            }
                        }
                    })
                })

                const itButton = document.createElement('button');
                itButton.textContent = "X";
                itButton.style.backgroundColor = "red";
                itButton.style.cssFloat = "right";
                itButton.addEventListener('click', (ev) => {
                    item.setAttribute('class', 'completed');
                });
            
                item.appendChild(itButton);
                item.appendChild(edButton);
                todoList.appendChild(item);
            }   else    {
                alert("You have something to do!")
            }
        }
    })

    input.addEventListener('click', (ev) => {
        input.value = "";
    })
})