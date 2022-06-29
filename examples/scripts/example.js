console.log(2 + 2); //4

for(let x =0; x < 10; x++){
    let name = 'Riya';
    let number = x;
    console.log(number + name)
}

// Simple Values
// passed by value
// number, string, boolean

// Complex values
// passed by reference
// Object, Array, Function


const person ={
    name: 'Sai',
    email: 'test@test.com'
}
// console.log('Hello', {person});

//
// console.log(1 == '1'); // false??
// console.log(1 === '1'); // false!!
//
// // 'FALSEY' values
// console.log(!!0); // true? false?

function printName(name){
        console.log('hello ' + name);
}

const printName2 = name =>{
    console.log('Hello from function2' + name);
}
printName('Sai')
printName2('Winnie')

// Arrays
const fruitArray= ['banana', 'pear', 'grape', { name: 'mandarin'}]
console.log(fruitArray[3].name);
// delete person.name;
person.name = ''
console.log(person);
