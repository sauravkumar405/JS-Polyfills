Array.prototype.myMap = function(callback){
    let results = []
    if (!Array.isArray(this)) {
        throw new TypeError(`${this} is not an array`);
    }
    let arr = this
    arr.forEach((ele)=>{
        results.push(callback(ele))
    })
    return results;
}
