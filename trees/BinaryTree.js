class Node{
    constructor(val,left=null,right=null){
        this.data=val
        this.left=left
        this.right=right
    }
}
class BT {
    constructor(){
        this.root=null
    }
    add(val){
        const node =this.root
        if(node==null){
            this.root = new Node(val)
            return
        }else{
            const searchTree = function(node){
                if(val <node.data){
                     
                }
            }
        }
    }
    print(){
        while(this.element){
            console.log(this.data)
        }
    }
}

let tree = new BT()
tree.add(2)
tree.print()