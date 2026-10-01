import { captureTask } from "./application.js";


const list = (() => {
    // let taskList = [];
    const taskList = new Map() 
    const getTaskList = () => taskList;

    // const pushToTaskList = (obj) => {
    //     taskList.push(obj)
    //     console.log(taskList)
    // } 

    const pushToTaskList = (x,y) => {
       taskList.set(x,y);
     
    
    }
    return{
        getTaskList, pushToTaskList
    }

}) ()




const renderUIDialogBox = () => {


const addTask = document.querySelector('#open-dialog');
const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector("#form-close");
const submitBtn = document.querySelector("#submit-task");
const taskInput = document.querySelector("#task-input");
const userDescription = document.querySelector("#description")
const userNote = document.querySelector("#user-note")
const userDueDate = document.querySelector("#user-Duedate")
const container = document.querySelector("#content")

function getTaskFromInput(task,description,notes,dueDate,id){

    let a = new captureTask(

       task =  taskInput.value,
       description = userDescription.value,
       notes = userNote.value,
       dueDate =  userDueDate,
       id = id
    )
    
    console.trace(a)
    return list.pushToTaskList(a.id, a)
}

function clearEntries(){

    taskInput.value = "";
    userDescription.value = '';
   userNote.value = "";



}


const openDialog = () => {
addTask.addEventListener('click', () => {
   clearEntries();
    dialog.showModal();
    
   
})
}

const closeDialog = () => {
closeBtn.addEventListener("click", ()=> {
   
    dialog.close()
   
    
})

}




const submit = () => {
    
    submitBtn.addEventListener("click", () => {
    dialog.close();
    getTaskFromInput()
    

    return;
})
}

dialog.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        event.stopPropagation()
        
        dialog.close();
        getTaskFromInput()
     
    }
})

// }


return{
    openDialog, closeDialog, submit
}

}

export{renderUIDialogBox}


