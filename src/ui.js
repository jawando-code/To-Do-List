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
  



    

    const span2 = document.createElement("span")
    span2.classList.add("material-symbols-outlined");
    span2.textContent = "info";
        
    div.append(span1, taskSpan,span2)
     
    uiMain.append(div)
     taskSpan.focus();


    


    
    
    // if(taskSpan.textContent == ""){
    //     uiMain.remove(div)
    


    span1.addEventListener('click', () => {

        span1.textContent == "radio_button_checked" ? span1.textContent = "radio_button_unchecked" : span1.textContent = "radio_button_checked";
    })

    
    console.log("Added Task SLot")



}
    // uiMain.addEventListener('click', () => {
        
    // })

    // const taskContainer = document.querySelector('newTask');

    // taskContainer.addEventListener("moouseenter", () => {
    //     console.log("mouse-enter")
    // })

    // uiMain.addEventListener('')
let emptyTask = false;


const checkEntry = () => {



        uiMain.addEventListener('keydown', function(e) {
            if(e.key === "Enter"){
               const currentTask = e.target.closest(".task-text");
               if(currentTask.value === '') return;

                addTaskFunction()
                e.stopImmediatePropagation()

            }
        })

        uiMain.addEventListener('click', function(e){
            if(e.target && e.target.matches('#open-dialog') ){
                // const currentTask = e.target.closest(".task-text");    
                //     if(!currentTask) {
                        
                    addTaskFunction();
            // }
        }})
    
        uiMain.addEventListener('keydown', function(e){
            if(e.key === "Escape"){
               const currentTask = e.target.closest(".task-text")
               const wholeTask = e.target.closest(".newTask")

               if(currentTask.value === ''){ 
                wholeTask.remove()
               } else{
                 const userChoice = confirm("Are you sure you want to delete task?")
                e.stopImmediatePropagation()
                if(userChoice){
                    // currentTask.remove();
                    wholeTask.remove()
                 } else{
                        console.log("keep task")
                 }
                }
               
                
        
                }
        })

        
}



   

addTask.addEventListener("click", (e) => {
    
    
   
    let inputs = Array.from(document.querySelectorAll('.task-text'));

    console.log(inputs)
    let hasEmptyFields = inputs.some(input => input.value.trim()  === "");
    console.log(hasEmptyFields)
    

   
    if(hasEmptyFields) {
        console.log("working")
        let task = document.querySelector(".task-text")
        console.log(task)
        task.focus()
    

    } else {
        console.log("not working")

        
      
        
        addTaskFunction();
    }

    checkEntry()


   
 e.stopImmediatePropagation()
  
    
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


