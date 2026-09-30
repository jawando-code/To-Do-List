import { capture, toDos } from "./application.js";


const render = () => {


const addTask = document.querySelector('#open-dialog');
const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector("#form-close");
const submitBtn = document.querySelector("#submit-task");
const taskInput = document.querySelector("#task-input");
const userTitle = document.querySelector("#title");
const userDescription = document.querySelector("#description")
const userNote = document.querySelector("#user-note")
const userDueDate = document.querySelector("#user-Duedate")
const container = document.querySelector("#content")

function getTaskFromInput(title,task,description,notes,dueDate){
   let a = new capture(
        title = userTitle.value,
       task =  taskInput.value,
       description = userDescription.value,
       notes = "dateCreated.value",
       dueDate =  userDueDate
    )
    console.log(a)
}
const openDialog = () => {
addTask.addEventListener('click', () => {
   
    dialog.showModal();
   
})
}

const closeDialog = () => {
closeBtn.addEventListener("click", ()=> {
   
    dialog.close()
    getTaskFromInput()
    
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
        event.preventDefault();
        submitBtn.click();
    }
})

// }


return{
    openDialog, closeDialog, submit
}

}

export{render}


