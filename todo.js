let tasks;
let saved = JSON.parse(localStorage.getItem('Todo'));

if(Array.isArray(saved)){
    tasks = saved;
}else{
    tasks = [{
        title: "Hey",
        id: "" + new Date().getTime()
    }];
}

function createTodo(text){
    tasks.push({
        title: text,
        id: "" + new Date().getTime()
    });

    saveData();
}

function deleteTodo(d){
    tasks = tasks.filter(function(value){
        if(value.id === d){
            return false;
        }else{
            return true;
        }
    });

    saveData();
}

function saveData(){
    localStorage.setItem('Todo', JSON.stringify(tasks));
}

let list = document.getElementById("list");

function initiate(){

    list.innerText = "";

    tasks.forEach(function(value){

        let dlt_btn = document.createElement('button');
        dlt_btn.onclick = dlt;
        dlt_btn.id = value.id;
        dlt_btn.innerText = "Delete";

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "Checkbox";
        checkbox.style.display = "inline-block";

        let task = document.createElement('div');
        task.style.display = "inline-block";
        task.innerText = value.title;

        list.appendChild(checkbox);
        list.appendChild(task);
        list.appendChild(dlt_btn);

    });

}

initiate();

function add(){

    let input = document.getElementById("input");
    let text = input.value;

    createTodo(text);
    initiate();
}

function dlt(event){

    console.log(event);
    const dltBtn = event.target;
    const d = dltBtn.id

    deleteTodo(d);
    initiate();
}
