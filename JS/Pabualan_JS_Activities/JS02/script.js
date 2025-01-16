let todos = []

document.getElementById("addTask").addEventListener('click',()=>{
    if(document.getElementById("task").value=='') return;
    let task = document.getElementById("list");
    task.innerHTML="";
    todos.push(document.getElementById("task").value);
    for(let i=0;i<todos.length;i++){
        let newTask = document.createElement("li");
        newTask.innerHTML = todos[i];
        task.appendChild(newTask)
        document.getElementById("task").value = "";
    }
});