Function.prototype.mycall = function(...args){
    let scope = args[0] || globalThis
    let uniqueKey = Symbol('fn')
    scope[uniqueKey] = this
    let params = args.slice(1)
    let result = scope[uniqueKey](...params)
    delete scope[uniqueKey]
    return result
}

let person = {
    name: 'Saurabh'
}

let greet = function(surname){
    console.log(`Hi ${this.name} ${surname}`)
}

greet.mycall(person, 'kumar')
