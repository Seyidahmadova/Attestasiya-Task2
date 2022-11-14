class Message{
    constructor(sendingTime, teacherName, description){
        this.sendingTime = sendingTime;
        this.teacherName = teacherName;
        this.description = description;
    
    }
    toString(){
        return `${this.sendingTime} ${this.teacherName}: ${this.description}`
    }
}


function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Messenger extends Message{
    constructor(){
        super()
        this.messages = []
    }
    send(author, text){
        var message = new Message(gettime(), author,text);
        this.messages.push(message)

    }
    show_history(){

        this.messages.forEach((el) =>{
            console.log( el.toString())
        })

    }
}




let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()
