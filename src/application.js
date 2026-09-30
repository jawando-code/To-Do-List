


// import {formatDistance} from "date.fns"
// import { formatDuration } from "date-fns";
// import {format} from "date.fns"


// function formatDuration(
//   duration: Duration,
//   options?: FormatDurationOptions
// ): string

// function differenceInDays(
//     laterDate: string | number | Date,
//     earlierDate: string | number | Date,
//     options?: DifferenceInDaysOptions
// ) : string

// class titleClass{
//     constructor(title){
//         this.title = title;
//     }

// }

// class descriptionClass{
//     constructor(description){
//         this.description = description;
//     }

//     change(description){
//         this.description = description
//     }
// }

// class dueDate{
//     constructor{dueDate}{
//         const dueDate = UserActivation
//         const now = new Date()
//         const calculate = formatDistance( new Date(), new Date(), {
//             addSuffix: true
//         }
//         this.dueDate = `Due in `
//     }

// }

// class createDate{
//     constructor(date){
//         const now = new Date();
//         const formatted = format(now, "mm do, yyyy")
//         this.date = formatted;
//     }
// }

// class priority{
//     static IMPORTANCE = ['low', 'medium', 'high']
//     constructor(priority){
//         if(!priority){
//             priority = medium;
    
//         } 

//         this.priority = priority


//     }

// }

// class notes{
//     constructor(notes){
//         this.notes = notes;
//     }

// }

// class Id{
//     constructor(id)
// }

// class checkList{

// }



// class taskList{
//     #list = new Map()
    
//     set(key,id){
//         this.#list.set(task, id)
//         return this;
        
//     }

//     get(key){
//         return this.#list.get(key)
//     }

//     delete(key){
//         return this.#list.delete(key)
//     }

//     get size() {
//         return this.#list.size
//     }
// }
// let add1 =  new taskList(makeCapture("Run up everest") )



// makeCapture("Drive to Pasedena")


// function makeCapture(string){
//     new capture(string);

// }

export class capture {
    constructor(
        title = "unknown",
        task = "unknown",
        description = "unknown",
        notes = "unknown",
        dateCreated = "unknown",
        dueDate = "unknown"

    ){
        this.title = title
        this.task = task
        this.description = description
        this.notes = notes
        this.dateCreated = new Date().getTime()
        this.dueDate = dueDate

    }
        
}

export class toDos {
    #taskList = new Map()
    // constructor() {
        
    // }
    get(){
        return this.#taskList
    }
}

function addTask(title, task, description, notes, dateCreated, dueDate){

}



