function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args)
        }
        else{
            return function(...newArgs){
                return curried.apply(this, args.concat(newArgs))
            }
        }
    }
    
}


function sum(a, b, c) {
    return a + b + c;
}
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1)(2, 3)); // Output: 6
