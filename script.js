document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(e){
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskList.addEventListener('click', function(e){
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('completed');
        }
    });
    
    function addTask(taskText){
        const li = document.createElement('li');
        li.textContent = taskText;
    taskList.appendChild(li);
    }

});
