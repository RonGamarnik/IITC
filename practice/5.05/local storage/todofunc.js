let tasks = JSON.parse(localStorage.getItem('tasks')) || []
let timerOn = false;

function addTask() {
    const taskInput = document.querySelector('.task-input')
    const taskText = taskInput.value.trim()
    
    if (taskText !== '') {
        tasks.push(taskText)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        taskInput.value = ''
        showTasks()
    }
}

function showTasks() {
    tasks.sort();
    const taskListContainer = document.querySelector('.task-list')
    taskListContainer.innerHTML = ''

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div')
        taskElement.classList.add('task-item')
        taskElement.innerHTML = `
        <label class="containerCheckBox">
            <input type="checkbox"  onclick="timerTask()" class="checkBox" id="task${index}">
            <div class="checkmark"></div>
        </label>
            <label for="task${index}">${task}</label>`;
        taskListContainer.appendChild(taskElement);
    })
}
function timerTask(index) {
    if (timerOn == false) {
        timerOn = true
        timerShow()
        setTimeout(() => {
            tasks.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            showTasks()
            timerOn = false
        }, 5000)
    }
    else {
        setTimeout(() => {
            tasks.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            showTasks()
            timerOn = false
        }, 5000)
}
}
function timerShow() {
    let countDisplay = document.querySelector('.timer')
    let count = 5
    countDisplay.innerHTML = count
    let timerInterval = setInterval(() => {
        count--
        countDisplay.innerHTML = count
        if (count === 0) {
            clearInterval(timerInterval)
            countDisplay.innerHTML = ''
        }
    }, 1000)
}

function checkDuplicate(taskInput) {
    if (tasks.includes(taskInput)) {
        alert('This task already exists');
        task.splice(taskInput);
    }
}