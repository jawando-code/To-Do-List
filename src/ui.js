import { captureTask } from "./application.js";


// const optionBtn = document.querySelector("#options");
// const closeBtn = document.querySelector(".modal-close");
// const modal = document.getElementById("modal-box");
// const options = document.getElementById('options')


// options.addEventListener("click", openModal);
// closeBtn.addEventListener("click", closeModal);

// options.addEventListener('click', function(event){
//     if(event.target === modal){
//         closeModal()
//     }
// })

// document.addEventListener('keydown', function(event){
//     if(event.key === "Escape"){
//         closeModal()
//     }
// })
// function openModal(){
//    modal.showModal()
// }

// function closeModal() {
//     modal.close()
// }

function save(value) {

    const id = crypto.randomUUID()
    localStorage.setItem(id,value)

    const idList = JSON.parse(localStorage.getItem('allIDS') || "[]")

    idList.push(id)

    localStorage.setItem('allIDS', JSON.stringify(idList))


   
}

function getAll() {
   
    const list = JSON.parse(localStorage.getItem("allIDs") || "[]");

    return list.map( id => {
        const raw = localStorage.getItem(id);
        return raw ? {id:id, ...JSON.parse(raw)} : null;
    }).filter(Boolean)

}

  
console.log(getAll() )

const renderUIDialogBox = () => {


const addTask = document.querySelector('#open-dialog');
const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector("#form-close");
const submitBtn = document.querySelector("#submit-task");
const taskInput = document.querySelector("#task-input");
const userDescription = document.querySelector("#description")
const userNote = document.querySelector("#user-note")
const userDueDate = document.querySelector("#user-Duedate")
const container = document.querySelector("#content");
const uiMain = document.querySelector(".UImain")

const addTaskFunction =  ()=> {

    const div = document.createElement('div');
    div.classList.add("newTask")

    const span1 = document.createElement("span")
    span1.classList.add("material-symbols-outlined");
    span1.textContent = "radio_button_unchecked";

    const taskSpan = document.createElement("input");
 
   
    taskSpan.classList.add('task-text')



    const br = document.createElement("br");
    br.classList.add('task-br');

    const span2 = document.createElement("span")
    span2.classList.add("material-symbols-outlined");
    span2.textContent = "info";
        
    div.append(span1, taskSpan, br,span2)
    
    uiMain.appendChild(div)

    const taskText = document.querySelector(".task-text");
    taskText.focus();

    
    
    // if(taskSpan.textContent == ""){
    //     uiMain.remove(div)
    


    span1.addEventListener('click', () => {

        span1.textContent == "radio_button_checked" ? span1.textContent = "radio_button_unchecked" : span1.textContent = "radio_button_checked";
    })


    // const checkEntry = (() => {
    //     const textTask = document.querySelector('.task-text');

    //     textTask.addEventListener("keydown", function(e){
    //         if(e.key === "Enter"){
    //           addTaskFunction()
            
    //         }
    //     })
    // })()

    
// const checkEntry = () => {
//     const taskEntry = document.querySelector(".task-text");
//     const newTask = document.querySelector(".newTask")
//     if(taskEntry.textContent == ''){
//         uiMain.remove(newTask)
//     }
// }



}




addTask.addEventListener("click", () => {
    addTaskFunction(); 
  
    
})

function getTaskFromInput(task,description,notes,dueDate,id){

    let a = new captureTask
    (
       task =  taskInput.value,
       description = userDescription.value,
       notes = userNote.value,
       dueDate =  userDueDate,
       id = id
    )

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



return{
    openDialog, 
    closeDialog, 
    submit
    }



}
const renderMainUI = (()=> {

    
    const UI = document.querySelector("uiMain")
    const taskDiv = document.createElement('div');

    


})()



export{renderUIDialogBox}


