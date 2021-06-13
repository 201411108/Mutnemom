const enterDiv = document.querySelector('.name-div');
const form = document.querySelector('.name-form')
const input = document.querySelector('.name-input')

let USER_NAME = 'user_name'
let HIDE = 'hiding'
let SHOW = 'showing'

function submitHandler(e) {
    e.preventDefault();
    if(input.value !== '') {
        enterDiv.classList.add(HIDE)
        localStorage.setItem(USER_NAME, input.value)
    } else {
        input.value = ''
        return
    }
    input.value = ''
}

function init() {
    const userName = localStorage.getItem(USER_NAME)

    if(userName !== null) {
        enterDiv.classList.add(HIDE)
    }

    form.addEventListener('submit', submitHandler)
}

init()