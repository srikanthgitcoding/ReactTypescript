
let head1 = {
    value:1,
    node: { 
        value:2,
        node:{
            value:3,
            node:{
                value:4,
                node:null
            }
        }
    }}

class Node{
    constructor(value){
        this.value= value
        this.node = null
    }
}    

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    is_Empty(){
        return this.size == 0
    }
    get_size(){
        return this.size
    }
    append(value){
        let nodeRef = new Node(value)
        if(this.is_Empty()){
            this.head = nodeRef
        }else{
            let next = this.head
            while(next.node){
                next = next.node
            }
            next.node = nodeRef
        }
        this.size++
    }

    prepend(value){
        let nodeRef = new Node(value)
        if(this.is_Empty()){
            this.head = nodeRef
        }else{
        nodeRef.node = this.head 
        this.head = nodeRef
        }
        this.size++
    }

    insertAt(pos,val){
        let nodeRef = new Node(val)
        if(this.is_Empty()){
            this.head = nodeRef
        }else{
            let currentPos = 1
            let next = this.head
            if(pos === 0){
                nodeRef.node = this.head 
                this.head = nodeRef
                return;
            }
            while(next.node){
                if(pos === currentPos){
                    nodeRef.node = next.node 
                    next.node = nodeRef
                    break;
                }
                currentPos++
                next = next.node
            }
         
        }
        this.size++
    }

    remove(){

    }

    print(){
        if(this.is_Empty()){
        console.log("empty list")
        }else{
            let next = this.head
            let str = ""
            while(next.node){
                str +=next.value +","
                next = next.node
            }
            str +=next.value
            console.log(str)

        }
    }

    removeFirst(){
        let next = this.head
        let removeFirst = next.node
        this.head = removeFirst
        this.size--
    }

    removeLast(){
        let next = this.head
        let size = this.get_size()
       for(let i =1;i <= size;i++){
        if(i === size-1){
            next.node = null;
            break;
        }else{
            next  = next.node

        }
       }
        
    }

    // removeAtIndex(position){
    //     let next = this.head
    //     for(let i =0;i <=position ;i++ ){
    //         if(i === position){
    //             let nextNodes = next.node 

    //         }
    //         next = next.node

    //     }
    // }
}


const linkedListRef = new LinkedList()

linkedListRef.append(50)

linkedListRef.append(10)


linkedListRef.prepend(20)

linkedListRef.insertAt(1,4)



linkedListRef.print()
linkedListRef.removeLast()

linkedListRef.print()

