import {SinglyLinkedList} from "./Singly-Linked-List"
//Class for the Node element 
class Node{
    constructor(data, next=null,previous=null){
        this.data = data
        this.next = next
        this.previous = previous
    }
}
class DoublyLinkedList extends SinglyLinkedList {
    constructor(){
        this.tail=null
    }
}