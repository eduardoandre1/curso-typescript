function multiply(num1:number, num2:number):number {
    return num1 * num2;
}

function sum(num1:number|string|null, num2:number|string|null):number {
    if(typeof num1 !== "number"){
        num1 = typeof num1 === "string"?Number(num1):0
    }
    if(typeof num2 !== "number"){
        num2 = typeof num2 === "string"?Number(num2):0
    }
    return num1 + num2;
    }

function isEven(num:number):boolean {
    if(typeof num === null){
        console.log("input must be a number")
    }
    return num % 2 === 0;
}

function showResult(result:number):void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");
    
    let result:number|void = sum(num1,num2);
    result += multiply(1,2);
    showResult(result);
})();
