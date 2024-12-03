Promise.myRace = function(promises){
    return new Promise((resolve, reject)=>{
        promises.forEach((promise)=>{
                Promise.resolve(promise).then(val=>{
                    resolve(val)
                })
                .catch((err)=>{
                    reject(err)
                })
        })
    })
}

// const fetchData = new Promise((resolve) => setTimeout(() => resolve("Data fetched!"), 3000));
// const timeout = new Promise((_, reject) => setTimeout(() => reject("Request timed out!"), 2000));

// Promise.myRace([fetchData, timeout])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));


const promise1 = new Promise((_, reject) => setTimeout(() => reject("Promise 1 rejected!"), 500));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved!"), 1000));

Promise.race([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
