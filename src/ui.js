import { captureTask } from "./application.js";


// const list = (() => {
//     // let taskList = [];
//     const taskList = new Map()
//     const getTaskList = () => taskList;

//     // const pushToTaskList = (obj) => {
//     //     taskList.push(obj)
//     //     console.log(taskList)
//     // } 

//     const pushToTaskList = (x,y) => {
//        taskList.set(x,y);

  
     
    
//     }
//     return{
//         getTaskList, pushToTaskList
//     }

// }) ()





function save(value) {
    const id = crypto.randomUUID();
    localStorage.setItem(id, value);


    const idList = JSON.parse(localStorage.getItem('allIDs') || '[]')

    idList.push(id)

    localStorage.setItem('allIDs', JSON.stringify(idList))

    



}

function getAll() {
    const list = JSON.parse(localStorage.getItem('allIDs') || "[]")
    
    return list.map( id => {
        const raw = localStorage.getItem(id);
        return raw ? {id,  ...JSON.parse(raw)} : null;
    }).filter(Boolean);
    }
  




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


    
  
    
    // list.pushToTaskList(a.id, a)
    // console.log(list.getTaskList())
    // const mappingJSON = mapToJSON(list.getTaskList() )
    // console.log(mapToJSON);
    // const stringed = a.id
    // localStorage.setItem(stringed, mappingJSON);

    // return
    const convert = JSON.stringify(a)
    save(convert)

    console.log(getAll())
    return;

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
    
    submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
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

// const mapToJSON = (map) => {
//     return JSON.stringify(Object.fromEntries(map))
// }

// const JSONtoMap = () => {
//      const map = new Map(Object.entries(localStorage));
//      return;

// }




export{renderUIDialogBox}


