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

// //if-else
// // 6am to 12pm "good morning"
// // 1pm to 6pm "good afternoon"
// // else "good evening"
// let hour=20;
// if(hour>=6 && hour<12){
// console.log("good morning");
// }
// else if(hour>=12 && hour<=18){
// console.log("good afternoon")
// }
// else{
// console.log("good evening")
// }


// //Switch case
// let role = 'guest';
// switch(role){
//     case ('guest'):
//     console.log('Guest user');
//     break;
//     case ('moderator'):
//     console.log('moderator user');
//     break;
//     default:
//     console.log('Unknoown user');

// }


// //loop
// //for 
// for(let i=0;i<5;i++){
//     console.log('hello  '+ i);
// }

// //while
// let i=0;
// while(i<5){
//     console.log('hello ' + i);
//     i++;
// }

// //do while
// let j=0;
// do{
//     console.log('hello ' + j);
//     j++;
// }while(j<5);


// //for in loop
// //object
// const car ={
//     model:2020,
//     brand:'audi'
// };
// for (const key in car) {
//     console.log(key , car[key])
// }
// //array
// let arr=["red" , "brown","blue"];
// for(let index in arr){
//     console.log(index , arr[index]);
// }


// //for of loop only for array
// //array
// let arr=["red" , "brown","blue"];
// for(let index of arr){
//     console.log(index);
// }

// //break and coninue
// //for 
// for(let i=0;i<5;i++){
//     if(i==2) break;
//     console.log('hello  '+ i);
// }
// //for 
// for(let i=0;i<5;i++){
//     if(i==2) continue;
//     console.log('hello  '+ i);
// }

// //Maximum number
// let f=max(3,15);
// console.log(f);
// function max(a,b){
//     return (a>b) ? a : b ;
//     // if(a>b)
//     // return a;
//     // else
//     // return b;
// }


// // fizz buzz
// function fizz(input){
//     if(typeof input!=='number'){
//        return "Not a number";
//     }
//     if(input%3===0  && input%5===0){
//         return "FizzBuzz";
//     }
//     if(input%3===0){
//         return "Fizz";
//     }
//     if(input%5===0){
//         return "Buzz";
//     }  
    
//     return input;
// }
// let a=fizz(7);
// console.log(a);


// //Speed limit
// function checkSpeed(speed){
//     const speedLimit=70;
//     const kmHr=5;
//     if(speed<speedLimit+kmHr){
//         console.log("ok")
//     }
//     else
//     {
//         let n=speed-speedLimit;
//         let p= Math.floor(n/kmHr);
//         if(p>12){
//             console.log("Licence suspended");
//         }
//         else{
//             console.log("Points: "+ p);
//         }
//        }
// }

// checkSpeed(70);

// //even odd
// function evenOdd(limit){
//     for(let i=0;i<=limit;i++){
//         const message=(i%2==0)? 'Even':'Odd';
//         console.log(i,message);
//     }
// }
// evenOdd(10);


// // truthy value in array

// const arr=[0,null,undefined,1,2,3,6];
// console.log(countTruthy(arr));

// function countTruthy(array){
//     let count=0;
//     for (const value of array) {
//         if(value)count++;
//     }
//     return count;
// }


// //string in object
// let movie={
//     name:'my world',
//     year:2022,
//     genera:'action'
// };
// StrigFinder(movie);
// function StrigFinder(m){
//     for (const key in m) {
//         if (typeof m[key]=='string') {
//             console.log(key +' : '+ m[key]);
            
//         }
//     }
// }


//sum of multiple of 3 and 5
console.log(sum(10));
function sum(n){
    let sum1=0;
    for(let i=0;i<=n;i++){
        if(i%3==0 || i%5==0){
            sum1=sum1+i;
        }
    }
    return sum1;
}

