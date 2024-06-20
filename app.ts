// function add(num1:number, num2:number){
//     return num1 + num2;
// }
// // console.log(add(1,5));
// console.log(add('1', '6'));

//Lec=4----------------------------

// function add(num1:number, num2:number){
//     return num1 + num2;
// }
// console.log(add(1,5));

// function add(num1:string, num2:string){
//     return num1 + num2;
// }
// console.log(add('2','9'));


// TypeScript code
// let greeting: string = "Hello, TypeScript!";
// console.log(greeting);


// TypeScript with modern JavaScript features
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(n => n * 2);




// //Lec-05-------------
// const num1Element = document.getElementById('num1') as HTMLInputElement;
// const num2Element = document.getElementById('num2') as HTMLInputElement;
// const buttonElement = document.querySelector('button')!;

// function add(num1:number, num2:number){
//     return num1 + num2;
// }

// buttonElement.addEventListener('click', () => {
//     const num1 = num1Element.value;
//     const num2 = num2Element.value;
//     const result = add(+num1, +num2)
//     console.log(result);
    
// });


//Lec-06-------------
// const num1Element = document.getElementById('num1') as HTMLInputElement;
// const num2Element = document.getElementById('num2') as HTMLInputElement;
// const buttonElement = document.querySelector('button')!;

// function add(num1:number, num2:number){
//     return num1 + num2;
// }

// buttonElement.addEventListener('click', () => {
//     const num1 = num1Element.value;
//     const num2 = num2Element.value;
//     const result = add(+num1, +num2)
//     console.log(result);
    
// });


//Lec-07(working with union types)-------------
// const num1Element = document.getElementById('num1') as HTMLInputElement;
// const num2Element = document.getElementById('num2') as HTMLInputElement;
// const buttonElement = document.querySelector('button')!;

// function add(num1:number| string, num2:number | string){
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2;
//     }else if(typeof num1 === 'string' && typeof num2 === 'string'){
//         return num1+ ' ' + num2;
//     }
//     return +num1 + +num2;
// }

// buttonElement.addEventListener('click', () => {
//     const num1 = num1Element.value;
//     const num2 = num2Element.value;
//     const result = add(+num1, +num2);
//     const stringResult = add(num1, num2)
//     console.log(result);
//     console.log(stringResult);
    
    
// });



//Lec-08

// const num1Element = document.getElementById('num1') as HTMLInputElement;
// const num2Element = document.getElementById('num2') as HTMLInputElement;
// const buttonElement = document.querySelector('button')!;


// //add some arrays--
// const numResults:number[] = [];
// const textResults:string[] = [];


// function add(num1:number| string, num2:number | string){
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2;
//     }else if(typeof num1 === 'string' && typeof num2 === 'string'){
//         return num1+ ' ' + num2;
//     }
//     return +num1 + +num2;
// }

// //--add some object
// function printResult(resultObj: {val: number; timestamp:Date}){
//     console.log(resultObj.val);
    
// }

// buttonElement.addEventListener('click', () => {
//     const num1 = num1Element.value;
//     const num2 = num2Element.value;
//     const result = add(+num1, +num2);
//     numResults.push(result as number);
//     const stringResult = add(num1, num2)
//     textResults.push(stringResult as string);
//     console.log(stringResult);
//     printResult({val: result as number, timestamp:new Date()});
//     console.log(numResults, textResults);
    
    
// });



//--Lec-09-working with type aliases and ineterfaces 


// const num1Element = document.getElementById('num1') as HTMLInputElement;
// const num2Element = document.getElementById('num2') as HTMLInputElement;
// const buttonElement = document.querySelector('button')!;


// //add some arrays--
// const numResults:number[] = [];
// const textResults:string[] = [];

// type NumOrString = number | string;
// type Result = {val:number; timestamp:Date};

// interface ResultObj {
//     val:number;
//     timestamp:Date;
// }

// function add(num1:NumOrString, num2:NumOrString){
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2;
//     }else if(typeof num1 === 'string' && typeof num2 === 'string'){
//         return num1+ ' ' + num2;
//     }
//     return +num1 + +num2;
// }

// //--add some object
// function printResult(resultObj: ResultObj){
//     console.log(resultObj.val);
    
// }

// buttonElement.addEventListener('click', () => {
//     const num1 = num1Element.value;
//     const num2 = num2Element.value;
//     const result = add(+num1, +num2);
//     numResults.push(result as number);
//     const stringResult = add(num1, num2)
//     textResults.push(stringResult as string);
//     console.log(stringResult);
//     printResult({val: result as number, timestamp:new Date()});
//     console.log(numResults, textResults);
    
    
// });




/////////---Lec-09(understanding generics)

const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;


//add some arrays--
const numResults:Array<number> = [];
const textResults:string[] = [];

type NumOrString = number | string;
type Result = {val:number; timestamp:Date};

interface ResultObj {
    val:number;
    timestamp:Date;
}

function add(num1:NumOrString, num2:NumOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1+ ' ' + num2;
    }
    return +num1 + +num2;
}

//--add some object
function printResult(resultObj: ResultObj){
    console.log(resultObj.val);
    
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result as number);
    const stringResult = add(num1, num2)
    textResults.push(stringResult as string);
    console.log(stringResult);
    printResult({val: result as number, timestamp:new Date()});
    console.log(numResults, textResults);  
});

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    },1000)
})

myPromise.then((result) => {
    console.log(result.split('w'));
    
})