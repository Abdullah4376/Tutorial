const recordVideo1 = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded!')
})
const recordVideo2 = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded!')
})
const recordVideo3 = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded!')
})

Promise.race([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((message) => {
    console.log(message);
})

let x = 0;

console.log(x);