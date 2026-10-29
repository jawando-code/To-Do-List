import { captureTask } from "./application.js";




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
    span1.classList.add('radio')
    span1.classList.add("material-symbols-outlined");
    span1.textContent = "radio_button_unchecked";

    const taskSpan = document.createElement("input");
    taskSpan.classList.add('task-text')
    taskSpan.spellcheck = true;

    const span2 = document.createElement("span")
                span2.classList.add("hidden")
                span2.classList.add("material-symbols-outlined");
                span2.textContent = "info";
               
           

    

  

        
    div.append(span1, taskSpan,span2)
     
    uiMain.append(div)
     taskSpan.focus();


    span1.addEventListener('click', () => {
        span1.textContent == "radio_button_checked" ? span1.textContent = "radio_button_unchecked" : span1.textContent = "radio_button_checked";
    })

    
 



}



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
    
    
    let currentClosest = e.target.closest('.task-text')
    let inputs = Array.from(document.querySelectorAll('.task-text'));
    let currentTask = [...document.querySelectorAll('.task-text')].at(-1)


    console.log(inputs)
    let hasEmptyFields = inputs.some(input => input.value.trim()  === "");
    console.log(hasEmptyFields)
    
    if(inputs){
        uiMain.addEventListener('click', function(e)  {
                const info = e.target.closest(".task-text");
                const button = e.target.closest('.newTask');
                const hidden = e.target.closest('.hidden')
             
                if(info){
                    console.log(info)
                    // if(hidden){
                    //     hidden.classList.remove('hidden')
                    // }
                }
            })    
        
    }
   

    if(hasEmptyFields) {
        let taskContainer = document.querySelector(".newTask");

        
        

        currentTask.addEventListener('focusout', function(e) {
            console.log("focusout")
            if(currentTask.value.trim() === ""){
                e.target.closest('.newTask').remove();
            }
    });
        console.log(currentTask)

        currentTask.focus()
        
    

    } else {
        console.log("not working")

        addTaskFunction();
        const current = [...document.querySelectorAll('.newTask')].at(-1);

    

        current.addEventListener('focusout', () => {
         if(current.value !== '')return;
        
        current.remove() 
        return;
    } 
)
    
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
document.addEventListener('click', function(e){
   

    let radio = e.target.closest('.radio');
    let taskInput = e.target.closest('input')

    console.log(radio)
    console.log(taskInput)
    if(radio){
       console.log("help")

    }

})


export{renderUIDialogBox}


