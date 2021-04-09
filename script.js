
let arraySum =[]

let string1 = "";
let operator = "";
let string2 = "";
let sum;

if(sum = null){
    console.log(true)
} else {
    console.log(false)
}



// Button Clicks

function addString(value) {    
    if (sum > 0 && operator === ""){
        remove();
        string1 += value;
        document.getElementById("screen").innerHTML = string1;
    }
    else if(operator === "") {
        string1 += value;
        document.getElementById("screen").innerHTML = string1;
        console.log(string1);
        console.log(arraySum)
    } 
    else {
        string2 += value;
        document.getElementById("screen").innerHTML = string1 + operator + string2;
    }
}

function remove() {
    arraySum = [];
    string1 = "";
    operator = "";
    string2 = "";
    sum = null;
    console.log("test")
    document.getElementById("screen").innerHTML = 0;
}

// Equations
function addOperator(value) {
    if(string2 === ""){
        operator = value
        arraySum.push(string1);
        document.getElementById("screen").innerHTML = string1 + operator;
        console.log(operator)
        console.log(arraySum)
    }
    else {
        equals();
    }
}

function equals() {
    arraySum.push(string2);
    if (operator == `+`) {
            let array = arraySum.map(Number);
            sum = array.reduce(function(a, b) {
                return a + b;
            });
            string1 = sum;
            operator = "";
            string2 = "";
            array = [];
            arraySum.push(sum);
            document.getElementById("screen").innerHTML = sum;
            arraySum = [];
    }
    else if (operator == `-`) {
        let array = arraySum.map(Number);
        sum = array.reduce(function(a, b) {
            return a - b;
        });
        string1 = sum;
        operator = "";
        string2 = "";
        array = 0;
        arraySum.push(sum);
        document.getElementById("screen").innerHTML = sum;
        arraySum = [];
    }
    else if (operator == `*`) {
        let array = arraySum.map(Number);
        sum = array.reduce(function(a, b) {
            return a * b;
        });
        string1 = sum;
        operator = "";
        string2 = "";
        array = 0;
        arraySum.push(sum);
        document.getElementById("screen").innerHTML = sum;
        arraySum = [];
    }
    else if (operator == `/`) {
        let array = arraySum.map(Number);
        sum = array.reduce(function(a, b) {
            return a / b;
        });
        string1 = sum;
        operator = "";
        string2 = "";
        array = 0;
        arraySum.push(sum);
        document.getElementById("screen").innerHTML = sum;
        arraySum = [];
    }
}



// function subtract (arraySum) {
// 	let array = arraySum;
// 	array.reduce(function(a, b) {
// 		return a - b;
// 	}, 1);
//     arraySum.push(array);
//     document.getElementById("screen").innerHTML = arraySum;
// }

// function multiply (arraySum) {
// 	let array = arraySum;
// 	array.reduce(function(a, b) {
// 		return a * b;
// 	}, 1);
//     arraySum.push(array);
//     document.getElementById("screen").innerHTML = arraySum;
// }

// function divide (arraySum) {
// 	let array = arraySum;
// 	array.reduce(function(a, b) {
// 		return a / b;
// 	}, 1);
//     arraySum.push(array);
//     document.getElementById("screen").innerHTML = arraySum;
// }

// function sum (arraySum) {
// 	let array = arraySum;
// 	array.reduce(function(a, b) {
// 		return a + b;
// 	}, 0);
//     arraySum.push(array);
//     document.getElementById("screen").innerHTML = arraySum;
// }



// function power(a, b) {
// 	return a ** b;
// }

// function factorial(input) {
// 	let factorial = 1;
// 	for(let i = 1; i <= input; i++){
// 		factorial *= i;
// 	}	
// 	return factorial;
// }