function throttle(func, interval){
    let lastTime = 0
    return function(...args){
        const now = Date.now()
        if(now - lastTime >= interval){
            func(...args)
            lastTime = now
        }
    }
}
