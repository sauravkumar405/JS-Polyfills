Object.prototype.myEntries = function(obj){
    let result = []
    for(let key of Object.keys(obj)){
        result.push([key, obj[key]])
    }
    return result
}

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.myEntries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
