const user={
    id:339,
    name:'sumit',
    age:42,
    education:{
        degree:"Graduate",
    }
}
// const age=user.age;
// const name=user.name;

// const {name,age}=user;
// console.log(age);

const {education:{degree}}=user;
console.log(degree);