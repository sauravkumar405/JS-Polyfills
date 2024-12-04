String.prototype.includes = function(arg, startIndex = 0) {
    let str = this.toLowerCase();
    arg = arg.toLowerCase();
    for (let i = startIndex; i <= str.length - arg.length; i++) {
        if (str.slice(i, i + arg.length) === arg)
            return true;
    }
    return false;
}
const str = "Hello, world!";
console.log(str.includes("world")); // Output: true
console.log(str.includes("hello")); // Output: true
