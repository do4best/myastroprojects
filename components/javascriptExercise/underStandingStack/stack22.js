class Stack{
    constructor() {
        this.stack=[]
        this.maxSize=100;
        this.top = -1
    }
    push(value){
        if(this.isFull()){
            return false;
        }
        this.top++;
        this.stack[this.top] = value;
        return true;
    }
    isFull(){
        return this.top === this.maxSize
    }
}
let stack1 = new Stack();
stack1.push(1)
stack1.push(11)
stack1.push(1111)

export default stack1