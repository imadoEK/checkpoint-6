function Reverse_String (String) {
    var reverse="";
    var n=String.length-1;
    while (n>=0) {
        reverse+=String[n];
        i--
    }
    return(reverse)
}

function Count_Chara (String) {
    var chara=0;
    for (var i = 0; i < String.length; i++) {
        chara+=1;
    }
    return chara;
}

function Cap_word (String) {
    return String
        .split(' ')
        .map(function(word) {
            if (word.length === 0) return '';
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
//.map lets you transform each element of the array and return a new array with the transformed elements.
        .join(' ');
}

function find_max_min (array) {
    var m=Math.max(...array);
    var n=Math.min(...array);
    return "the maximum value is "+ m +" the minimum value is "+ n;
}

function sum_array (array) {
    var sum=0
    for (var i=0;i<array.length;i++){
        sum+=array[i];
    }
    return "sum of elements is "+ sum;
}

function filter (num,array,condition) {
    var result=[]
    switch(condition){
        case "<":
            for (var i=0;i<array.length;i++){
                if (array[i]<num) result.push(array[i]);
            }
            break;
        case ">":
            for (var i=0;i<array.length;i++){
                if (array[i]>num) result.push(array[i]);
            }
            break;
        case "==":
            for (var i=0;i<array.length;i++){
                if (array[i]==num) result.push(array[i]);
            }
            break;
        case "<=":
            for (var i=0;i<array.length;i++){
                if (array[i]<=num) result.push(array[i]);
            }
            break;
        case ">=":
            for (var i=0;i<array.length;i++){
                if (array[i]>=num) result.push(array[i]);
            }
            break;
        case "===":
            for (var i=0;i<array.length;i++){
                if (array[i]===num) result.push(array[i]);
            }
            break;
        case "!=":
            for (var i=0;i<array.length;i++){
                if (array[i]!=num) result.push(array[i]);
            }
            break;
        case "!==":
            for (var i=0;i<array.length;i++){
                if (array[i]!==num) result.push(array[i]);
            }
            break;
        case "%":
            for (var i=0;i<array.length;i++){
                if (array[i]%num === 0) result.push(array[i]);
            }
            break;
        case "!%":
            for (var i=0;i<array.length;i++){
                if (array[i]%num !== 0) result.push(array[i]);
            }
            break;
        default:
            console.log("please enter the parameters in this order (point of comparison,array,condition)");
            return [];
    }
    return result;
}

function factorial(num){
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return "The factorial of " + num + " is " + result;
}

function Prime_Num (num) {
    if (num <= 1) return false;
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}

function fibonacci(n) {
    if (n <= 0) return [];        
    if (n === 1) return [0];      

    const fibSeq = [0, 1];      

    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }

    return fibSeq;
}
