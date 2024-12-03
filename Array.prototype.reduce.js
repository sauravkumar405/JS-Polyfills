Array.prototype.myReduce = function(callback, initialValue){
    
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }
    
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    
    return accumulator;
}
