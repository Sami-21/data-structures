// import SinglyLinkedList from "./Singly-Linked-List"
//Class for the Node element 
class Node{
    constructor(data, next=null,previous=null){
        this.data = data
        this.next = next
        this.previous = previous
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null
        this.size=0
        this.tail=null
    }
    ///////////////////////////////////////
    insertFirst(data){
        this.head = new Node(data, this.head,null)
        this.size++ 
    }
    ////////////////////////////////////////
        insertLast(data){
            let current = this.head
            if(!this.head){
                this.head = new Node(data,null,this.tail)
            }else{
                 while(current.next){
                current=current.next
            }
            current.next = new Node(data)
            }      
            this.size++ 
        }
    ////////////////////////////////////////
        insertAt(index,data){
            //out range insertion case
            if(index<0 || index >this.size){
                return console.log("out of range");
            }else{
            //insertion at the first index
                if(index === 0){
                   return this.insertFirst(data)
                }
            //insertion at the last index
                if(index === this.size){
                   return this.insertLast(data)
                }
            //in the middle of the linked list
                let current = this.head
                let i=0;
                while(i!=index-1){
                    current=current.next
                    i++
                }
                let node = new Node(data)
                node.next = current.next
                current.next = node
                this.size++
            }
        }
    ////////////////////////////////////////
    getValueAt(index){
        //out range case
        if(index<0 || index >this.size){
            return console.log("out of range");
        }
        let current = this.head
        let i=0
        while(current){
            if(i==index){
                return console.log(current.data)
            }
            current=current.next
            i++
        }
        return ;
    }
    ////////////////////////////////////////
    deleteValueAt(index){
        //out range case
        if(index<0 || index >=this.size){
            return console.log("out of range");
        }
        if(index===0){
            this.head =this.head.next
            this.size--
            return
        }
        let current =this.head ;
        let previous;
        let i=0
        while(i<index){
            i++
        previous = current
        current = current.next
        }
        previous.next = current.next
        this.size--
    }
    ////////////////////////////////////////
        printValues(){
            if(!this.head) return console.log("the linked list is empty")
            let current = this.head
            while(current){
                console.log(current.data)
                current=current.next
            }
        }
    ////////////////////////////////////////
    deleteAll(){
        //the values are deleted from the memory
        while(this.head){
            this.deleteValueAt(0)
        }
    }
    ////////////////////////////////////////
    ClearList(){
        //the values are still stored in the memory
        this.head = null
        this.size=0
    }
    ////////////////////////////////////////
        getValues(){
            let values=[]
            let current = this.head
            let i=0
            while(current){
                values[i]=current.data
                current=current.next
                i++
            }
            return values
        }
}

let DLL = new DoublyLinkedList()

DLL.insertFirst(1)
DLL.insertFirst(1)
DLL.insertFirst(10)
DLL.insertFirst(16584)
DLL.insertFirst(1847)
DLL.insertFirst(17)
DLL.printValues()