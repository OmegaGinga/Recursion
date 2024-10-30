function fibs(number){
    let a = 0;
    let b = 1;
    let fibArray = [];
    for(let i = 0; i < number; i++){
        fibArray.push(a);        
        let temp = a + b;
        a = b;
        b = temp;
    }
    console.log(fibArray);
}

function fibsRec(n) {
    
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }

    let fibArray = fibsRec(n - 1);
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);

    return fibArray;
}
console.log(fibsRec(10));
fibs(10);


