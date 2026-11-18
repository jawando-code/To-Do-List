
import {format, formatDistance, formatRelative, subDays} from 'date-fns';


const renderUIDialogBox = () => {


   
    const uiMain = document.querySelector(".uiMain")
 

    const newTaskBox = document.createElement('div');
                newTaskBox.classList.add("newTaskBox")

    const completedTaskRadioIcon = document.createElement("span") 
                completedTaskRadioIcon.classList.add('radio');
                completedTaskRadioIcon.classList.add("material-symbols-outlined");
                completedTaskRadioIcon.textContent = "radio_button_unchecked";
                
    const createMainTask = document.createElement("div");
                
                createMainTask.classList.add('createMainTask')
                createMainTask.contentEditable = true;
                createMainTask.setAttribute('data-placeholder', `Add task...`)
                createMainTask.spellcheck = true;
                createMainTask.tabIndex = 0;
                createMainTask.role = "Task-reminder"
                createMainTask.ariaPlaceholder = "Add task";
                createMainTask.textContent = '';
               
    const userNote = document.createElement("div");
                userNote.classList.add('userNotes')
                userNote.contentEditable = true;
                userNote.setAttribute('data-placeholder', `Add note...`)
            
            
                userNote.role = "Additional Notes";
                userNote.ariaPlaceholder = "Add note";
                userNote.placeholder = "Add note..."
                userNote.textContent = ""
    
    

    const moreInfoButton = document.createElement("span")
                moreInfoButton.classList.add('moreInfoButton')               
                moreInfoButton.classList.add("material-symbols-outlined");
                moreInfoButton.textContent = "info";  


    // moreInfoButton.addEventListener('click', () => {
    //     const dialog = document.createElement('dialog');
    //     dialog.classList.add("extraDialog")

    //     const title = document.createElement('h2');
    //     title.innerText = "Details"
    //     title.classList.add('extraDetails')

     
    // })

    const taskAndNoteContainer = document.createElement('div')
        taskAndNoteContainer.classList.add('taskAndNoteContainer')


    const renderNewTask = () => {    
    
            taskAndNoteContainer.append(createMainTask,userNote)
            newTaskBox.append(completedTaskRadioIcon, taskAndNoteContainer, moreInfoButton)
            uiMain.append(newTaskBox)
        

            createMainTask.focus();
            createMainTask.tescrollTo = 0;

    }





     createMainTask.addEventListener('focus', ()=> {
        createMainTask.scrollTo = 0;
        userNote.classList.remove('hidden');
        moreInfoButton.classList.remove('hidden');
       
        
    })

    createMainTask.addEventListener('blur', ()=> {


        if(createMainTask.textContent !== ''){
        createMainTask.scrollTo = 0;
        userNote.classList.add('hidden');
        moreInfoButton.classList.add('hidden')
        } else if(createMainTask.textContent === ''){
            newTaskBox.remove()
        }
    })

    createMainTask.addEventListener('blur', ()=> {
        moreInfoButton.classList.add('hidden')

        let noteContent = userNote.textContent.trimEnd()

        if(noteContent === ''){
            console.log('note hidden here')
            // userNote.classList.add('hidden')
        }
    })

    createMainTask.addEventListener('click', ()=>{
        userNote.classList.remove('hidden')
    })

    userNote.addEventListener('click', ()=> {
        userNote.classList.remove('hidden')
        // moreInfoButton.classList.remove('hidden')
        userNote.focus()

         userNote.spellcheck = true;
    })

    userNote.addEventListener('blur', ()=> {
         userNote.spellcheck = false;
        if(userNote.textContent.trimEnd() === ''){
        
        userNote.classList.add('hidden');

        }
    })
    userNote.addEventListener('focusout', ()=> {
        userNote.scrollTo = 0;
        
        // moreInfoButton.classList.add('hidden')
        const orignalNotes = userNote.textContent.trimEnd();

        if(orignalNotes === ''){
            userNote.classList.add('hidden')
            
            userNote.scrollTo = 0;
        }
    })

    // newTaskBox.addEventListener('focus', ()=> {
    //     moreInfoButton.classList.remove('hidden')

    // })
    newTaskBox.addEventListener('blur', ()=> {
        moreInfoButton.classList.add('hidden')
    })


     createMainTask.addEventListener('hover', () => {
        moreInfoButton.classList.remove('hidden')
    })


   

    
    createMainTask.addEventListener('focusout', () => {
        // moreInfoButton.classList.add('hidden')
        if(userNote.textContent === ''){
            console.log('here136')
            
        }
    })
    createMainTask.addEventListener('click', ()=> {
        userNote.classList.remove('hidden');
    })
    

    




    completedTaskRadioIcon.addEventListener('click', () => {
        const currentSpan = completedTaskRadioIcon.textContent.trim()
            if(currentSpan === "radio_button_unchecked"){
                    completedTaskRadioIcon.textContent = "radio_button_checked" 
                    createMainTask.classList.add('strikethrough')
                } else {
                    completedTaskRadioIcon.textContent = 'radio_button_unchecked'
                    createMainTask.classList.remove('strikethrough')
            }; 

        
    })

   
 
    createMainTask.addEventListener('blur', () => {
        

        
    })


    createMainTask.addEventListener('keydown', function(e) {
            if(e.key === "Enter"){
              if(createMainTask.textContent !== '' ){
                // e.preventDefault();
               
                    // renderUIDialogBox().renderNewTask()
                    if(userNote.textContent === ''){
                        userNote.classList.add('hidden')
                    }
                    
                        } else {
                           
                        return;
                        // createMainTask.focus();
                    }
            }
    })


    createMainTask.addEventListener('click', () => {
        createMainTask.contentEditable = true;
    })
    createMainTask.addEventListener('blur', (e) =>  {
        
        createMainTask.scrollTop = 0;
        // createMainTask.textContent = createMainTask.textContent.trim();
        createMainTask.contentEditable = false;
        const updatedText = createMainTask.textContent;
        
        
        
    })

    createMainTask.addEventListener('blur', () => {
        
    })
   
    completedTaskRadioIcon.addEventListener('click', () => {
        if(createMainTask.value === ""){
            div.remove()
        }
    })
    console.log('continous event listening')


    
        const userCurrentEntry = createMainTask.textContent.trim();
        const getUserCurrentEntry = () => userCurrentEntry;
    
  



return{
    renderNewTask, 
    
   getUserCurrentEntry
}







   



}

 const checkEntry = () => {
    const uiMain = document.querySelector('.uiMain');

        uiMain.addEventListener('keydown', function(e){
            if(e.key === "Escape"){
               const currentTask = e.target.closest(".createMainTask")
               const wholeTask = e.target.closest(".newTaskBox")

               if(currentTask.value === ''){ 
                wholeTask.remove()
               } else if(currentTask.value !== ''){
                wholeTask.focusout()

                }


        
            }
        })

      
        

        
}

const addTaskButton = document.querySelector('#addtask')
const uiMain = document.querySelector('.uiMain')

addTaskButton.addEventListener('click', (e)=> {
  
    renderUIDialogBox().renderNewTask()
    
  
    
})

uiMain.addEventListener('click', ()=> {
   
    checkEntry()
    
})

// addTaskBtn.addEventListener("click", (e) => {
    
    
//     let currentTask = e.target.closest('.createMainTask')
//     // let currentText = currentTask.textContent.trim();
//     let inputs = Array.from(document.querySelectorAll('.createMainTask'));
//     let currentTaskNode = [...document.querySelectorAll('.createMainTask')].at(-1);
//     // if(currentText){
//     //     if(currentText.textContent === ''){
//     //     currentTask.focus()
//     //     return;
//     // }
//     // else if(currentText.textContent !== ''){
//     //     addNewTaskFunction()
//     // }
// // }
//     console.log( currentTask + "currents")

//     // let hasEmptyFields = inputs.some(input => input.textContent.trim()  == "");
//     // console.log(hasEmptyFields)
    
//     // if(inputs){
//     //     uiMain.addEventListener('click', function(e)  {
//     //             const info = e.target.closest("createMainTask");
//     //             const button = e.target.closest('.newTask');
//     //             const hidden = e.target.closest('.hidden')
             
//     //             if(info){
//     //                 console.log(info)
//     //                 // if(hidden){
//     //                 //     hidden.classList.remove('hidden')
//     //                 // }
//     //             }
//     //         })    
        
//     // }
   

//     // if(hasEmptyFields) {
//     //     // let taskAndNoteContainer = document.querySelector(".newTask");

        
        

//     //     currentTask.addEventListener('focusout', function(e) {
//     //         console.log("focusout")
//     //         if(currentTask.textContent.trim() === ""){
//     //             e.target.closest('.newTask').remove();
//     //         }
//     // });
//     //     console.log(currentTask)

//     //     currentTask.focus()
        
    

//     // } else {
//     //     console.log("not working")

//         // addNewTaskFunction();
//         // const current = [...document.querySelectorAll('.newTask')].at(-1);

    

//         // current.addEventListener('focusout', () => {
//         //  if(current.value !== '')return;
        
//         // current.remove() 
//         // return;
//         //     })
    
    

//     checkEntry()
// // 

   
// //  e.stopImmediatePropagation()
  
    
//  })



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







export{renderUIDialogBox}


