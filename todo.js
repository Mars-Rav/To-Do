let todos = [{
    task,
    date, 
    id
}];

let dlt;

function addTasks(){
    const text = document.getElementById('task');
    const task = text.value;
    const dateData = document.getElementById('date');
    const date = dateData.value;
    const id = new Date().getTime();

    todos.push({
        task: task,
        date: date,
        id: id
    });

    initiateElements(task, date, id);
}

function dltTask(){

}

function initiateElements(task, date, id){
    let taskElement = document.createElement('div');
    taskElement.innerText = task;
    list.appendChild(taskElement);

    let dateElement = document.createElement('div');
    dateElement.innerText = date;
    dates.appendChild(dateElement);

    dlt = document.createElement('button');
    dlt.innerText = "Delete";
    dlt.id = id;
    dlt.onclick = dltTask;
    let dlt_btn = document.getElementById('dlt-btn');
    dlt_btn.appendChild(dlt);
}

