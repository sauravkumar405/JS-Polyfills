Promise.myany = function (promises) {
    return new Promise((resolve, reject) => {
        let rejectionCount = 0;
        const totalPromiseCount = promises.length;

        promises.forEach((promise) => {
            promise
                .then((val) => {
                    resolve(val); // Resolve immediately on the first fulfilled promise
                })
                .catch(() => {
                    rejectionCount++;
                    if (rejectionCount === totalPromiseCount) {
                        reject(new Error("All promises were rejected"));
                    }
                });
        });
    });
};

// Test Cases
const p1 = new Promise((res, rej) => rej("Error 1"));
const p2 = new Promise((res, rej) => rej("Error 2"));
const p3 = new Promise((res, rej) => res("Success 3"));

Promise.myany([p1, p2, p3])
    .then((val) => console.log("Resolved:", val)) // Output: Resolved: Success 3
    .catch((err) => console.log("Rejected:", err.message));

Promise.myany([p1, p2])
    .then((val) => console.log("Resolved:", val))
    .catch((err) => console.log("Rejected:", err.message)); // Output: Rejected: All promises were rejected
