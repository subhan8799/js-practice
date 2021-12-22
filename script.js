const addbutton = document.getElementById('addbutton');
const inputBox = document.getElementById('inputBox');
const taskList = document.getElementById('taskList');
const pendingNumb = document.getElementById('pendingNumb');
const deletAllButton = document.getElementById('deletAllButton');   
let tasks = [];
pendingNumb.innerHTML = tasks.length
function deleteTask(index){
    tasks.splice(index, 1);
    updateTasks();
}
addbutton.onclick = (e) => {
    tasks.push(inputBox.value)
    inputBox.value = null;
    console.log(tasks)
    updateTasks()
    }

function updateTasks(){
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let text = document.createTextNode(tasks[i]);
        div.appendChild(text);

        const button = document.createElement('button');
        let secondtext = document.createTextNode('Delete');
        button.appendChild(secondtext)
        div.classList.add('div-li');
        button.classList.add('btn');
        button.classList.add('btn-danger');
        button.setAttribute('onClick', `deleteTask(${i})`)
        div.appendChild(button)
        li.appendChild(div)
        taskList.append(li);
    }
    pendingNumb.innerHTML = tasks.length;
}
function showTasks() {
    let getlocalstorage = localStorage.getItem("New Todo"); //getting localstorage
    if (getlocalstorage == null) { //if localstorage is null
        listArr = []; //creating a blank array
    } else {
        listArr = JSON.parse(getlocalstorage); //transforming js string into js object
    }
    let newLiTag = '';
    listArr.array.forEach((element, index) => {
        newLiTag += `<li> ${element}<span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span> </li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; //once task added leave the input field blank
}
//delete all tasks function
deletAllButton.onclick = () => {
    tasks = []
    updateTasks()
    // listArr = []; //empty an array
    // //after delete all task again update the local storage
    // localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into a js string
    // showTasks(); //calling showTasks function
}
