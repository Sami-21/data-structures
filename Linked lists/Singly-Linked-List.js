//Class for the Node element 
class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}
////////////////////////////////////////
//Class for the whole Singly Linked List
export class SinglyLinkedList {
    constructor(){
        this.head =null
        this.size= 0
    }
////////////////////////////////////////
    insertFirst(data){
    this.head = new Node(data, this.head)
    this.size++ 
}
////////////////////////////////////////
    insertLast(data){
        let current = this.head
        if(!this.head){
            this.head = new Node(data)
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
////////////////////////////////////////

LL1 = new SinglyLinkedList()
// LL1.insertFirst(1)
// LL1.insertFirst(2)
// LL1.insertFirst(3)
// LL1.insertAt(0,99)
// LL1.insertAt(4,21)
// LL1.printValues()

LL2 = new SinglyLinkedList()
LL2.insertFirst(9)
LL2.insertFirst(4)
LL2.insertFirst(6)
LL2.insertAt(3,9921)
//LL2.deleteValueAt(3)
LL2.deleteAll()
LL2.printValues()
//LL2.getValueAt(1)








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LeetCode Add Two Numbers problem


// let reversed_number1 = parseInt(LL1.getValues().reverse().toString().replace(",","").replace(",",""))
// let reversed_number2 = parseInt(LL2.getValues().reverse().toString().replace(",","").replace(",",""))
// let sum = reversed_number1 + reversed_number2
// let arr = sum.toString().split('').map(num => Number(num))
// console.log(arr.reverse())



