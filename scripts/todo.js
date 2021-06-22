function saveTodoList(keyName, todoList) {
    localStorage.setItem(keyName, JSON.stringify(todoList))
}

function deleteTodoList(todoList, li) {
    const filteredTodos = todoList.filter((todo) => {
        return todo.id !== parseInt(li.id)
    })
    return filteredTodos
}

function deleteClickHandler(e) {
    const button = e.target
    const li = button.parentNode
    todayTodoUl.removeChild(li)
   
    CURRENT_TODO_LIST = deleteTodoList(CURRENT_TODO_LIST, li)
    saveTodoList(CURRENT_TODO, CURRENT_TODO_LIST)
}

function submitHandler(e) {
    e.preventDefault()
    const date = todoDate.value
    const task = todoTask.value
    let id = new Date()
    id = id.getTime()

    todoDate.value = ''
    todoTask.value = ''

    const todoObj = {
        id: id,
        task: task,
        date: date
    }
    paintTodo(todoObj)
}

// li 태그 만들기
// task : todo 이름, moveType : current -> fin, time-machine -> back, deleteHandler, moveHandler : 각 이벤트 핸들러
function createLiComponent(task, moveType, deleteHandler, moveHandler) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const delBtn = document.createElement('button')
    const moveBtn = document.createElement('button')

    span.innerText = task

    delBtn.innerText = 'del'
    delBtn.addEventListener('click', deleteHandler)

    moveBtn.innerText = moveType
    moveBtn.addEventListener('click', moveHandler)
    
    li.appendChild(span)
    li.appendChild(delBtn)
    li.appendChild(moveBtn)

    return li
}

function paintTodo(todo) {
    const li = createLiComponent(todo.task, 'fin', deleteClickHandler, () => {console.log('hello')})

    li.id = todo.id
    todayTodoUl.appendChild(li)

    CURRENT_TODO_LIST.push(todo)
    saveTodoList(CURRENT_TODO, CURRENT_TODO_LIST)
}

// TODO :: 어떻게 둘 다 하나의 함수로 처리할 수 있을까
function init() {
    const todos = localStorage.getItem(CURRENT_TODO)

    if(todos !== null) {
        const parsedTodos = JSON.parse(todos)
        todayTodoUl.classList.add(SHOW)
        
        parsedTodos.forEach((todo) => {
            paintTodo(todo)
        })
    }
    todoForm.addEventListener('submit', submitHandler)
}

init()