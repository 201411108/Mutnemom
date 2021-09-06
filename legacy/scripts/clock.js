function getCalendar() {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const dayOfWeek = date.getDay()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const sec = date.getSeconds()

    clock.innerText = `${year}/${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day} ${days[dayOfWeek]} \
    ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${sec < 10 ? '0' + sec : sec}
    `
}

function init() {
    getCalendar()
    setInterval(getCalendar, 1000)
}

init()