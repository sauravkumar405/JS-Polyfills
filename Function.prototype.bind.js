Function.prototype.mybind = function(scope, ...args1){
    let fn = this
    return function(...args2){
        scope = scope
        let uniqueKey = Symbol('fn')
        scope[uniqueKey] = fn
        let result = scope[uniqueKey](...args1, ...args2)
        delete scope[uniqueKey]
        return result
    }
}

let person = {
    name: 'Saurabh'
}

let greet = function(midname, surname){
    console.log(`${this.name} ${midname} ${surname}`)
}

let greet1 = greet.mybind(person, 'Kumar')
greet1('Singh')
