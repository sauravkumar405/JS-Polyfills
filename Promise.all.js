Promise.all = function(promises){
    return new Promise((resolve, reject)=>{
        let results = []
        let completedCount = 0
        promises.forEach((promise, index)=>{
            Promise.resolve(promise)
            .then(res=>{
                completedCount++;
                results[index] = res
                if(promises.length === completedCount)
                resolve(results)
            })
            .catch(err=>{
                reject(err)
            })
        })
    })
}
