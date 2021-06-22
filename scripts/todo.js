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
    /*
        여기 todo를 저장하는 부분이 들어가고
    */
    paintTodo(todoObj) // 다시 그리는 것만 하면 되지 않을까 ? 굳이 paintTodo에서 todo를 저장할 필요는 없지 않나? 
}

// li 태그 만들기 -> README에 들어갈 예정
// task : todo 이름, moveType : current -> fin, time-machine -> back, deleteHandler, moveHandler : 각 이벤트 핸들러
function createLiComponent(id, task, moveType, deleteHandler, moveHandler) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const delBtn = document.createElement('button')
    const moveBtn = document.createElement('button') // 변수 이름 refactoring

    span.innerText = task

    delBtn.innerText = 'del'
    delBtn.addEventListener('click', deleteHandler)

    moveBtn.innerText = moveType
    moveBtn.addEventListener('click', moveHandler)
    
    li.id = id
    li.appendChild(span)
    li.appendChild(delBtn)
    li.appendChild(moveBtn)

    return li
}

// 최종적으로 todo를 받아 화면에 보여주고, 각 리스트에 저장하는 함수 형태가 되어야 한다.
// 예상 변수 : todo, localStorage key 타입, 저장할 배열
function paintTodo(todo) {
    const li = createLiComponent(todo.id, todo.task, 'fin', deleteClickHandler, () => {console.log('hello')})

    todayTodoUl.appendChild(li)

    CURRENT_TODO_LIST.push(todo)
    saveTodoList(CURRENT_TODO, CURRENT_TODO_LIST)
}
/*
const ulType = [todayTodoUl, timeMachineTodoUl, upcomingTodoUl] // upcomingTodoUl 아직 미구현

function paintTodo(todo, ulIndex // 인덱스 번호, key, todoList) {
    const li = createLiComponent(todo.id, todo.task, 'fin', deleteClickHandler, () => {console.log('hello')})
    const ul = ulType[ulIndex]
    ul.appendChild(li)

    const todoList = todoList
    // 아래 두 줄도 하나로 묶을 수 있지 않을까 -> line 39 참고
    todoList.push(todo)
    saveTodoList(key, todoList)
}
*/

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