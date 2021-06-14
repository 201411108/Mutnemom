function submitHandler(e) {
    e.preventDefault()
    const date = todoDate.value
    const task = todoTask.value

    todoDate.value = ''
    todoTask.value = ''
    paintTodo(task, date)
}

function paintTodo(task, date) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = ++ID;

    delBtn.innerText = "del";
    // delBtn.addEventListener("click", deleteClickHandler);

    span.innerText = task;
    
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todayTodoUl.appendChild(li);
    
    const todoObj = {
        id: newId,
        task: task,
        date: date
    };

    CURRENT_TODO_LIST.push(todoObj);
    localStorage.setItem(CURRENT_TODO, JSON.stringify(CURRENT_TODO_LIST));
}

function init() {
    const todos = localStorage.getItem(CURRENT_TODO)

    if(todos !== null) {
        const parsedTodos = JSON.parse(todos)
        todayTodoUl.classList.add(SHOW)
        
        parsedTodos.forEach((todo) => {
            paintTodo(todo.task, todo.date)
        })
    }
    todoForm.addEventListener('submit', submitHandler)
}

init()