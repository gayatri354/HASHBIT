//variable//
var name1 = 'abc'
let name2 = 'lmn'
const name3 = 'xyz'

//datatype//

var num = 5;
var status = true;

//object//

let obj = {
    name: 'gaytri',
    city: 'akola'
}

//array//

var arr = [1, 2, 3, 4, 5]

// function defination //

function sum(num1, num2) {
    return num1 + num2;
}
//function call//
console.log(sum(3, 5));

// or 2nd method to call function//

let sumanswer = sum(3, 5);
console.log(sumanswer)

//loop
/*list and tabel
while,do while,for print from 1 to 100*/

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//if else

let age = 21;
if (age < 18) {
    console.log('you are not allowed to visit')
} else {
    console.log('you are welcome')
}
// multiple if else

let ageperson = 21;
if (ageperson < 18) {
    console.log('school')
} else if (ageperson < 36) {
    console.log('collge')
} else if (ageperson < 100) {
    console.log('office')
}

//switch case
let food = 'nonveg';
switch (food) {
    case 'nonveg':
        {
            console.log('i will have nonveg');
            break;
        }
    case 'veg':
        {
            console.log('i will have veg');
            break;
        }
    case 'dessert':
        {
            console.log('i will have dessert');
            break;
        }
    case 'drinks':
        {
            console.log('i will have drinks');
            break;
        }
}

console.log(obj);
console.log(arr);
console.log(name1);
console.log(name2);
console.log(name3);
console.log(typeof(status));


console.log(name1);
console.log(name2);
console.log(name3);


console.log('JavaScript Testing.....')

//var variables and function statement

function sum(num1, num2) { //num1,num2 - parameters
    return num1 + num2
}
sum(5, 6) //5,6-arguments

let sum2 = function(num1, num2) {
    return num1 + num2
}
sum2(5, 6)

//scope
//global scope
//local/block scope
//function scope

var num = 'test';
//global scope

function sum() {
    //function scope
    var num1 = 5;
    var num2 = 6;
    return num1 + num2;
}
sum();

if (true) {
    let number = 1111;
    //local scope
    console.log(number);
}

//variable shadowing
let temp = 'global temp';

function tempfn() {
    var temp = 'function temp'
    console.log(temp);
}
tempfn();
console.log(temp);


//type of function
/*input output
no i/p - o/p
i/p - no o/p
no i/p - no o/p*/

function sum(num1, num2) {
    return num1, num2;
}
console.log(2, 3)

function sum(num1, num2) {
    let num1 = 4;
    let num2 = 5;
    return num1, num2;
}
console.log(sum())

function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(2, 3)

function sum(num1, num2) {
    let num1 = 4;
    let num2 = 5;
    console.log(num1 + num2);
}
sum();
//array
let array = ['A', 'B', 'C', 'D', 'E'];
console.log(array[0]);

let length = array.length;

for (let i = 0; i < lenght; i++) {
    console.log(array[i]);
}

//for of operator
for (let i of array) {
    console.log(i);
}

//adding new element
array[5] = 'G'
console.log(array);

array[5] = 'null'
console.log(array);

array.pop()
console.log(array);

array.shift()
console.log(array);

array.unshift()
console.log(array);

let cars = ['honda', 'suv', 'tata', 'hyndai', 'maruti'];

cars.splice(2, 0, 'toyota');
console.log(cars);

cars.splice(3, 2, 'bmw');
console.log(cars);

let cars2 = ['honda', 'suv', 'tata', 'hyndai', 'maruti'];

cars.slice(2, 0, 'toyota');
console.log(cars2);


//concat

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let newarr = arr1.concat(arr2);
console.log(newarr);

//fill
let blankarr = [1, 2, 3, 4, 5];

blankarr.fill(6);
console.log(blankarr);

blankarr.fill(1, 6);
console.log(blankarr);

blankarr.fill(6, 1);
console.log(blankarr);

//without using blank array
let tempArr = new Array(5).fill(5);
console.log(tempArr);


//sorted

let unsortedarr = [2, , 8, 3, 4, , 7, 6, 0];
let sortedarr = unsortedarr.sort();
console.log(sortedarr)


//reverse
let reversesortedarr = unsortedarr.reverse();
console.log(reversesortedarr)

//index of 

let searcharr = [2, 55, 44, 66, 678, 556, 908, 567];
let position = searcharr.indexOf(44);
console.log(position)


//split and join

let letters = ['i', 'am', 'gayatri'];
let string = letters.join(' ');
console.log(string)
let arrletters = string.split(' ');
console.log(arrletters);


//arrow functions start
//arrow function

function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 3));

//same way off above function representing as arrow

let sum3 = (num1, num2) => num1 + num2;
console.log(sum3(2, 3))

//print
let arr = [3, 4, 5, 6, 7]
arr.forEach((temp) => console.log(temp))


//map

let newarr = arr.map((temp) => (temp); console.log(newarr);

        let filterdarr = arr.filterd((temp) => temp % 2 == 0); console.log(newarr);

        // using if else witn arrow function   
        let filterdarr = arr.filterd((temp) => temp % 2 == 0); console.log(newarr);

        let cars = ['honda', 'suv', 'tata', 'hyndai', 'maruti'];

        arr.indexOf('toyota') = -1 arr.indexOf('tata') = 1
        if (arr.indexOf('toyota') == -1) {
            arr.push('toyota')
        } else {
            console.log('toyota is already present')
        }
        ///////////////////////////////////////////////////////////////
        //object
        let person1 = {
            name: 'gayatri',
            age: 13,
            aadhar: 132456,
            status: true,
            gender: 'female',
            address: {
                city: 'sgtgg',
                area: 'sfget',
                pin: 12534578,
            },
            displayname: function() {
                console.log('name');
            }
        }

        //let obj2 = {}
        //let obj3 = new objects;

        console.log(person1.aadhar)

        //json javascript object notation

        /*js object vs json
        1.all keys will be in quotes in json
  
        2.keys cannot hold any function in json*/

        ////////////////////////////////////////////////////////
        //to pack the data
        let strjson = JSON.stringify(person1); console.log(strjson);

        //to unpack the data
        let parsejson = JSON.parse(strjson); console.log(parsejson);


        //object
        let person2 = {
            name: 'namegayatri',
            age: 13,
            aadhar: 132456,
            status: true,
            gender: 'female',
        }

        //keys only
        let keys = Object.keys(person2)
        console.log(keys)

        let values = Object.values(person2)
        console.log(values)

        let values = Object.values(person2)
        console.log(values)

        let array2d = [
            ["name", "namegayatri"],
            ["age", 13],
            ["aadhar", 132456],
            ["status", true],
            ["gender", "female"]
        ]

        console.log(array2d[0][1])


        let agestatus = person2.hasownProperty('age'); console.log(agestatus)