//regular function

// function hello(){
//     console.log('hello world');
// }
// hello();

//function expresion

// const hello=function(){
//     console.log('hello world');
// }

//arrow function
let hello=(a,b)=>a+b

console.log(hello(2,4));

//anonymous function
function hello(){
    return ()=>{
        console.log("hello world");
    }
}