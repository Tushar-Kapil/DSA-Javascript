class Stack {
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length - 1];
    }

    push(value){
        this.array.push(value);
        return this.array;
    }

    pop(){
        this.array.pop();
        return this.array;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
console.log(myStack.peek());