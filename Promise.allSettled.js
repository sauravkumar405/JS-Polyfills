Promise.myAllSettled = function(promises){
    return new Promise((resolve, reject)=>{
        let results = []
        let completedCount = 0
        promises.forEach((promise, index)=>{
            promise.then((val)=>{
                results[index] = {status:'fulfilled', value: val }
                completedCount++;
                if(completedCount === promises.length){
                    resolve(results)
                }
            })
            .catch((err)=>{
                results[index] = {status:'rejected', reason: err}
                completedCount++;
                if(completedCount === promises.length){
                    resolve(results)
                }
            })
        })
    })
}

const promise1 = Promise.resolve(10);
const promise2 = Promise.reject('Error occurred');
const promise3 = new Promise((resolve) => setTimeout(() => resolve(20), 1000));

Promise.myAllSettled([promise1, promise2, promise3])
  .then((results) => {
      console.log(results)
  });

//  [
//   { status: 'fulfilled', value: 10 },
//   { status: 'rejected', reason: 'Error occurred' },
//   { status: 'fulfilled', value: 20 }
// ]

