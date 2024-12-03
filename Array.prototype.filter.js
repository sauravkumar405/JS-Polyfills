Array.prototype.myFilter = function(callback){
    let results = []
    if (!Array.isArray(this)) {
        throw new TypeError(`${this} is not an array`);
    }
    let arr = this
    arr.forEach((ele, index)=>{
        if(callback(ele, index, arr)) results.push(ele)
    })
    return results;
}

const users = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: true },
];
const activeUsers = users.myFilter((user) => user.active);
console.log(activeUsers); 
