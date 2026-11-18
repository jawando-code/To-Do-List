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

class captureTask {
    constructor(
        task = "unknown",
        notes = "null",
        dateCreated = "unknown",
        dueDate = "unknown",
        id = "unknown"
        
    ){
        this.task = task;
        this.notes = notes ;
        this.dateCreated = new Date().getTime() ;
        this.dueDate = dueDate
        this.id = crypto.randomUUID()

    }
        
}


