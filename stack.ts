class Stack {
    public stack:Array<number>

    constructor(){
        this.stack = [];
    }

    addValue(val:number){
        this.stack.push(val)
        return this.stack;
    } 

    size(){
        return this.stack.length;
    }

    removeValue(){
        this.stack.pop()
        return this.stack
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        if (this.size() === 0) {
            return true
        } else {
            return false;
        }
    }
}

let stack = new Stack()

// stack.isEmpty()
// console.log(stack);

//334456 
//reverse it, find the biggest number and smallest number//
const changeString = (x:string) =>{
    let z: Array<string> = x.split(' ')

    let w:string = '';
    while(z.length !== 0 ){
        let k = z.pop();
        w+= `${k}`
    }
    return w;
}

let word: string = 'Lagos appears to be white and sunny today'
// console.log(changeString(word));

const changNumbers = (x:Array<number>)=>{

   for (const i of x) {
    return x.sort((a, b)=>{
        return b - a
        
    })
}
}
let number:Array<number> = [3, 3, 4, 4, 5, 6] 
console.log(number);

console.log(changNumbers(number));

