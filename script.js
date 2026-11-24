var x=10;
var x=20;//redeclaration

let a=30
a="hello"//reassign

const b=40;
console.log(typeof a);

let c=22
{
    let c=30
}
console.log(c);

let obj={
    name:"test",
    age:40
}
let obj2=obj
obj2.age=33
console.log(obj.age);


let num=30;
let num2=num;
num2=40;
console.log(num);


console.log(5=='5');
console.log(5==='5');
//normal function
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
console.log(add(99,88))

//arrow function
const add1=(a,b,c)=>{
    return a+b+c
}
console.log(add1(9,8,7));

const cal=(a,b,callback)=>{
    return callback(a,b)
}
console.log(cal(9,9,add));
console.log(cal(9,9,sub));
console.log(cal(9,9,mul));

let arr=[1,2,3,4,5]

const reduceArr=arr.reduce((total,n)=>{return total+n},10)
console.log(reduceArr);

const doubledArr=arr.map((n)=>{return n*2})
console.log(doubledArr);

const evenNum=arr.filter((n)=>n%2==0)
console.log(evenNum);


let details=[
    {name:'A',age:30,marks:90},
    {name:'B',age:33,marks:95},
    {name:'C',age:45,marks:60},
    {name:'D',age:24,marks:50},
]
const nameList=details.map((detail)=>detail.name)
const filtered=details.filter((detail)=>detail.marks<70)
const findMark=details.find((detail)=>detail.marks<70)

const reduceMark=details.reduce((sum,detail)=>{return sum+detail.marks},0)

console.log(nameList);
console.log(filtered);
console.log(findMark);
console.log(reduceMark);

let name='Prabhu'
let mark=60
console.log(`I am ${name} have scored ${mark}`)




