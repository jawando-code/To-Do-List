import { captureTask } from "./application.js";

import autosize from 'autosize';


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

  


const renderUIDialogBox = () => {

    // create task elements//
    
    const addTaskBtn = document.querySelector('#addtask');
    const closeBtn = document.querySelector("#form-close");
    const submitBtn = document.querySelector("#submit-task");
    const taskInput = document.querySelector("#task-input");
    const userDescription = document.querySelector("#description")
    const userNote = document.querySelector("#user-note")
    const userDueDate = document.querySelector("#user-Duedate")
    const container = document.querySelector("#content");
    const uiMain = document.querySelector(".UImain")




const addTaskFunction = () => {  

    const newTask = document.createElement('div');
    newTask.classList.add("newTask")

    const span1 = document.createElement("span")
                
                span1.classList.add('radio');
                span1.classList.add("material-symbols-outlined");
                span1.textContent = "radio_button_unchecked";
                
    const mainTask = document.createElement("div");
                
                mainTask.classList.add('mainTask')
                mainTask.contentEditable = true;
                mainTask.setAttribute('data-placeholder', `Add task...`)
                mainTask.spellcheck = true;
                mainTask.tabIndex = 0;
                mainTask.role = "Task-reminder"
                mainTask.ariaPlaceholder = "Add task";
                mainTask.textContent = '';
               
    const notes = document.createElement("div");
        notes.classList.add('notes')
        notes.setAttribute('data-placeholder', `Add note...`)
        notes.contentEditable = true;
       
        notes.role = "Additional Notes";
        notes.ariaPlaceholder = "Add note";
        notes.placeholder = "Add note..."
        notes.textContent = ""
    
    

    const extraInfo = document.createElement("span")
            extraInfo.classList.add('info')               
                 
            extraInfo.classList.add("material-symbols-outlined");
             extraInfo.textContent = "info";  

    const container = document.createElement('div')
        container.classList.add('taskContainer')
    
    container.append(mainTask,notes)
    newTask.append(span1, container, extraInfo)
    uiMain.append(newTask)

    // Automatically focus on new task entry
   
    container.focus();
     mainTask.focus();


    // Add EventListeners
     mainTask.addEventListener('focus', ()=> {
        mainTask.scrollTo = 0;
        notes.classList.remove('hidden');
        extraInfo.classList.remove('hidden');
        console.log(notes + 'notes!');
        
    })

    notes.addEventListener('blur', ()=> {
         notes.spellcheck = false;
        if(notes.textContent === ''){
            console.log('here115')
        notes.classList.add('hidden');

        }
    })
    notes.addEventListener('focusout', ()=> {
        notes.scrollTo = 0;
        const orignalNotes = notes.textContent;

        if(orignalNotes){
            // notes.textContent = orignalNotes.trimEnd()
            
            notes.scrollTo = 0;
        }
    })

    mainTask.addEventListener('hover', () => {
        extraInfo.classList.remove('hidden')
    })
    mainTask.addEventListener('focusout', () => {
        extraInfo.classList.add('hidden')
        if(notes.textContent === ''){
            console.log('here127')
            // notes.classList.add('hidden')
        }
    })
    mainTask.addEventListener('click', ()=> {
        notes.classList.remove('hidden');
    })
    

    notes.addEventListener('click', ()=> {
        notes.classList.remove('hidden')
        notes.focus()

         notes.spellcheck = true;
    })

    span1.addEventListener('click', () => {
        const currentSpan = span1.textContent.trim()
            if(currentSpan === "radio_button_unchecked"){
                    span1.textContent = "radio_button_checked" 
                    mainTask.classList.add('strikethrough')
                } else {
                    span1.textContent = 'radio_button_unchecked'
                    mainTask.classList.remove('strikethrough')
            }; 

        
    })

   
 
    mainTask.addEventListener('blur', () => {
        

        
    })


    mainTask.addEventListener('keydown', function(e) {
            if(e.key === "Enter"){
              if(mainTask.textContent !== '' ){
                    addTaskFunction()
                    if(notes.textContent === ''){
                        notes.classList.add('hidden')
                    }
                    
                        } else {
                        return;
                        // mainTask.focus();
                    }
            }
    })


    mainTask.addEventListener('click', () => {
        mainTask.contentEditable = true;
    })
    mainTask.addEventListener('blur', (e) =>  {
        
        mainTask.scrollTop = 0;
        mainTask.textContent = mainTask.textContent.trim();
        mainTask.contentEditable = false;
        const updatedText = mainTask.textContent;
        
        
        
    })

    mainTask.addEventListener('blur', () => {
        
    })
   
    span1.addEventListener('click', () => {
        if(mainTask.value === ""){
            div.remove()
        }
    })

    

  

 







   



}

 const checkEntry = () => {



        // uiMain.addEventListener('keydown', function(e) {
        //     if(e.key === "Enter"){
        //        const currentTask = e.target.closest(".mainTask");
        //        if(currentTask.textContent === ''){
        //         return;
        //        } else{

               

        //         addTaskFunction()
        //         e.stopImmediatePropagation()
        //        }
        //     }
        // })

        // uiMain.addEventListener('click', function(e){
        //     if(e.target && e.target.matches('#open-dialog') ){
        //         // const currentTask = e.target.closest(".task-text");    
        //         //     if(!currentTask) {
                        
        //             addTaskFunction();
        //     // }
        // }})
    
        uiMain.addEventListener('keydown', function(e){
            if(e.key === "Escape"){
               const currentTask = e.target.closest(".mainTask")
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

addTaskBtn.addEventListener("click", (e) => {
    
    
    let currentClosest = e.target.closest('.mainTask')
    let inputs = Array.from(document.querySelectorAll('.mainTask'));
    let currentTask = [...document.querySelectorAll('.mainTask')].at(-1)


    console.log(inputs)
    let hasEmptyFields = inputs.some(input => input.textContent.trim()  == "");
    console.log(hasEmptyFields)
    
    if(inputs){
        uiMain.addEventListener('click', function(e)  {
                const info = e.target.closest("mainTask");
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
        // let taskContainer = document.querySelector(".newTask");

        
        

        currentTask.addEventListener('focusout', function(e) {
            console.log("focusout")
            if(currentTask.textContent.trim() === ""){
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
            })
    
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




}


export{renderUIDialogBox}


