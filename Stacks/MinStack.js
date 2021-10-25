class Stack{
    constructor(){
        this.items=[]
        this.count=0
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    push(element){
        this.items[this.count]=element
        console.log(`the element ${element} has been added to the stack at position ${this.count}`)
        this.count++
        return this.count-1
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    pop(){
        if(this.count===0) return null
        console.log(`the deleted element is ${this.items[this.count-1]}  the new size is ${this.count-1}`)
        this.count--
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    peek(){
        console.log(`the element at the top is ${this.items[this.count-1]}`)
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    isEmpty(){
        console.log(this.count==0 ?"the stack is empty":"the stack is not empty")
        return this.count == 0
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    size(){
        console.log(`the size of the stack is ${this.count}`)
        return this.count
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    print(){
        for(let i=0;i<this.count;i++){
            console.log(this.items[i])
        }
    }
    minElement(){
        return Math.min(...this.items)
    }
}

let stack = new Stack()
stack.push(254)
stack.push(-2)
stack.push(2543)
stack.push(24)
stack.push(3542)
stack.push(222)
stack.push(28)


stack.isEmpty()
stack.size()
stack.push(1)
stack.push(2)
stack.size()
stack.isEmpty()
stack.peek()
stack.push(3)
console.log(stack.minElement())
stack.peek()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.size()
stack.isEmpty()
stack.print()
