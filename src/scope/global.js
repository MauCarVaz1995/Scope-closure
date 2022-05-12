//Scope Global
var hello = "Hello";
let world = "Hello World";
const helloWorld = "Hello World";
console.log(hello);

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();


const helloWorld2 = () =>{
    globalVar ="i´m global";   
}
helloWorld2();
console.log(globalVar);

const anotherFunction2 = () => {
    var localVar = globalVar2 = "Im Global";   
}

anotherFunction2();
console.log(globalVar2);
