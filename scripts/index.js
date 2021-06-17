// Elements
const clockDiv = document.querySelector('.clock-div')
const title = document.querySelector('.title')
const clock = document.querySelector('.clock')

const nameDiv = document.querySelector('.name-div')
const nameForm = document.querySelector('.name-form')
const nameInput = document.querySelector('.name-input')

const todoDiv = document.querySelector('.todo-div')
const todoForm = document.querySelector('.todo-form')
const todoTask = document.querySelector('.todo-task')
const todoDate = document.querySelector('.todo-date')

const mainContent = document.querySelector('.main-content')
const today = document.querySelector('.today')
const todayTodoDiv = document.querySelector('.today-todo-div')
const todayTodoUl = document.querySelector('.today-todo-ul');

const weatherDiv = document.querySelector('.weather-div')

const plan = document.querySelector('.plan')
const upcomingDiv = document.querySelector('.upcoming-div')
const timeMachineDiv = document.querySelector('.time-machine-div')
const timeMachineTodoDiv = document.querySelector('.time-machine-todo-div')
const timeMachineTodoUl = document.querySelector('.time-machine-todo-ul')

// Properties
const USER_NAME = 'user_name'
const HIDE = 'hiding'
const SHOW = 'showing'
const FLEX = 'flex'
const CURRENT_TODO = 'current_todo'
const FINISH_TODO = 'finish_todo'

let ID = 0
let CURRENT_TODO_LIST = []
let FINISH_TODO_LIST = []