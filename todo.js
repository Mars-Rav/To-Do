let todos = [{
	task,
	date,
	id
}];

todos.push({
	task: "task",
	date: "date",
	id: "id"
});

function addtasks(){
	const text = document.getElementById('task');
	const task = text.value;

	const data = document.getElementById('date');
	const date = data.value;

	todos.push({
		task: task,
		date: date,
	});

	initiateElement(task, date);
}

function initiateElement(task, date){
	const taskEl = document.createElement('div');
	taskEl.innerText = task;
	list.appendChild(taskEl);

	const dateEl = document.createElement('div');
	dateEl.innerText = date;
	dates.appendChild(dateEl);
}
