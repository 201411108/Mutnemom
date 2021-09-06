function clickHandler() {
    localStorage.removeItem(USER_NAME)
    location.reload()
}

function styling() {
    nameDiv.classList.add(HIDE)
    mainContent.classList.add(SHOW)
    mainContent.classList.add(FLEX)
    todoDiv.classList.add(SHOW)
}

function submitHandler(e) {
    e.preventDefault();
    if(nameInput.value !== '') {
        styling()
        localStorage.setItem(USER_NAME, nameInput.value)
        title.innerText = `Hello! ${nameInput.value}`
    } else {
        nameInput.value = ''
        return
    }
    nameInput.value = ''
}

function init() {
    const userName = localStorage.getItem(USER_NAME)

    if(userName !== null) {
        styling()
        title.innerText = `Welcome! ${userName}`
    } else {
        mainContent.classList.add(HIDE)
        todoDiv.classList.add(HIDE)
    }

    title.addEventListener('click', clickHandler)
    nameForm.addEventListener('submit', submitHandler)
}

init()