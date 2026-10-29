

export class captureTask {
    constructor(
        task = "unknown",
        description = "null",
        notes = "null",
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


