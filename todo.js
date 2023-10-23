function addTask() {
    //adding task
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');


    if (taskInput.value.trim() !== '') {
        //input empty or not
        var taskHTML = '<li class="list-group-item d-flex justify-content-between"> <input class="form-check-input me-1" type="checkbox" onclick="completeTask(this)"> <label class="form-check-label" for="firstCheckbox">' + taskInput.value + '</label> <button type="button" class="btn btn-primary ml-9" onclick="deleteTask(this)">Delete</button> </li>' ;
        //add and delete
        taskList.innerHTML += taskHTML;

        taskInput.value = '';
    }
}

function completeTask(checkbox) {
    //checkbox
    var taskItem = checkbox.parentNode;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    //delete task
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
