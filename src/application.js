

export class captureTask {
    constructor(
        task = "unknown",
        description = "unknown",
        notes = "unknown",
        dateCreated = "unknown",
        dueDate = "unknown",
        id = "unknown"
        
    ){
        this.task = task
        this.description = description
        this.notes = notes
        this.dateCreated = new Date().getTime()
        this.dueDate = dueDate
        this.id = crypto.randomUUID()

    }
        
}

// export class toDos {
//     #taskList = new Map()
//     // constructor() {
        
//     // }
//     get(){
//         return this.#taskList
//     }
// }




