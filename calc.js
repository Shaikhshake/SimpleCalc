let result = 0;
let num1, num2, op;//op stores index
let count = 0;

let display = document.querySelector('.displ');
let firstRowNumber = document.querySelector('.FirstNumRow').children;
let secondRowNumber = document.querySelector('.SecondNumRow').children;
let thirdRowNumber= document.querySelector('.ThirdNumRow').children;


let percentbutton = document.querySelector('.percentage').addEventListener('click', getOp);
let divisionbutton = document.querySelector('.division').addEventListener('click', getOp);
let multiplybutton = document.querySelector('.multiply').addEventListener('click', getOp);
let subtractbutton = document.querySelector('.subtract').addEventListener('click', getOp);
let addbutton = document.querySelector('.addition').addEventListener('click', getOp);
let resultbutton = document.querySelector(".equal").addEventListener('click', resultfunc);
console.log(resultbutton)
// let;
//console.log(firstRow[0])
let operatorTest = ['+', '-','*', '/', '%'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 
'0'];

for(let i = 0; i<3; i++)
{
    firstRowNumber[i].addEventListener('click', getNum);
    secondRowNumber[i].addEventListener('click', getNum);
    thirdRowNumber[i].addEventListener('click', getNum);

}

let zero= document.querySelector("#zero").addEventListener('click', getNum);//for zero

function getNum(e){
    if(op !== undefined && count == 0){ 
        display.innerText = '0';
        count++;//reset tthis to zero in your result function
    }

   if(display.innerText === "type" ){
        display.innerText = e.target.textContent;
        num1 = Number(display.innerText);
        console.log(num1);
    }
    else if( (e.target.value) in numbers && num1 !== undefined && op === undefined){
        console.log( (e.target.value))
        console.log("entered the inner if 1 :"+e.target.value)
        display.innerText = (display.innerText).concat(e.target.textContent);
        num1 = Number(display.innerText);
        console.log(num1);
    }
    else if(op !== undefined && display.innerText === '0'){
        display.innerText = e.target.textContent;
        num2 = Number(display.innerText);
        console.log(num2);
    }
    else if(op !== undefined){
        console.log( (e.target.value))
        console.log("entered the inner if 2 :"+e.target.value)
        display.innerText = (display.innerText).concat(e.target.textContent);
        num2 = Number(display.innerText);
        console.log(num2);
    }
    //console.log(num1, typeof(num1))
     
}
function getOp(e){
    if(num1 !== undefined && display.innerText !== 'type'){
        op = operatorTest.indexOf(e.target.value);
        console.log("the operand index is: " + op+" "+e.target.value);
    }  
}

function disable(prop){
    prop.setAttribut('disabled', 'true')
}
function enable(prop){
    prop.setAttribut('disabled', 'false')
}

function divide(dividend, divisor){
    if(divisor === 0)
    {
        return "No division by zero";
    }
    else
        return dividend/divisor;
}
function multiply(num1, num2){
    return num1*num2;
}
function subtract(num1, num2){
    return num1-num2;
}
function add(num1, num2){
    return num1+num2;
}
function percentage(num1){
    return num1/100;
}

function resultfunc(){
    
    console.log(op);
    if(op === 0){
        console.log("entered op: "+ op);
        display.innerText = num1 + num2;
    }
    else if(op === 1){
        console.log("entered op: "+ op);
        display.innerText = num1 - num2;
    }
    else if(op === 2){
        console.log("entered op: "+ op);
        display.innerText = num1 * num2;
    }
    else if(op === 3){
        console.log("entered op: "+ op);
        display.innerText = num1 / num2;
    }
    else if(op === 4){
        console.log("entered op: "+ op);
        display.innerText = num1/100;
    }

}