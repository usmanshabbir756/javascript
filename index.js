// // variable
// let name="usman"; //string
// let age=22; //number
// let numer=14.6; //number
// let a=true; //boolean
// let lastname=null; //clear storage null
// console.log(name ,age ,numer,a);
// //constant 
// const amount=12;
// console.log(amount);

// //object
// let car={
//     color: 'black',
//     model: 2022
// };
// // dot notation
// car.color='red';
// // bracket notion
// let select='model';
// car[select]=2020;
// console.log(car);

// // array
// let carCompany = ['hona','bentlay','audi'];
// carCompany[3]='kia';
// console.log(carCompany);

// //function
// //perform task
// function greet(name , lastName){
//     console.log('hello ' + name + ' ' + lastName);
// }
// greet('usman','shabbir');
// // calculate something
// function area(number){
//     return number*number;
// }
// let square=area(9);
// console.log(square);


// //operator

// //arithmatic
// // + , - , * , / 
// let num=2;
// let num2 =8;
// let sum=num+num2;
// console.log(sum);

// // assignment operator
// // = , +=
// let num1=2;
// num1 +=8;
// console.log(num1);

// //copmarison < > <= >=
// let y=10;
// console.log(y<10);


// //Equality operator
// let x=10;
// //strong equality(type + value)
// console.log(x===10);
// console.log(x==='10'); //false
// //lose equality(value)
// console.log(x=='10'); //true

// //ternary operator
// let points=90;
// let value= points>100 ? 'gold' : 'silver';
// console.log(value);

// //Logical operator && || !
// let a=false;
// let b=true;
// let num4=a&&b;
// let num5=!num4;
// console.log(num4);
// console.log(num5);
// console.log(a || b);

// //logical operator non boolean
// //falsy (false)
// // NaN
// // undefined
// // null
// // 0
// // false
// // ''
// console.log(false || 'usman');
// console.log(false || 1);


// //Swapping
// let n1=5;
// let n2=9;

// let n3=n1;
// n1=n2;
// n2=n3;
// console.log(n1);
// console.log(n2);


// control flow

//if-else
// 6am to 12pm "good morning"
// 1pm to 6pm "good afternoon"
// else "good evening"
let hour=20;
if(hour>=6 && hour<12){
console.log("good morning");
}
else if(hour>=12 && hour<=18){
console.log("good afternoon")
}
else{
console.log("good evening")
}