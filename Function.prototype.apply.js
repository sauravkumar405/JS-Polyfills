Function.prototype.myapply = function(scope, args){
    let uniqueKey = Symbol('fn')
    scope[uniqueKey] = this
    let result = scope[uniqueKey](...args)
    delete scope[uniqueKey]
    return result
}

let person = {
    name: 'Saurabh'
}

let greet = function(midname, lastname){
    console.log(`Hi ${this.name} ${midname} ${lastname}`)
}

greet.myapply(person, ['Kumar', 'Singh'])
