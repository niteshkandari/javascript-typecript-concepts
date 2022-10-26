const fetchData = callback => {
    setTimeout(() => {
        callback('done')
    },2000)
};

setTimeout(() => {
    console.log('timer is done');
    fetchData(text => {
        console.log(text);
    })
},2000)

//can be done useing promises

// const fetchData = () => {
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('done')
//         },2000)       
//     });
//     return promise;
// };

// setTimeout(() => {
//     console.log('timer is done');
//     fetchData().then(text => {
//         console.log(text);
//         return fetchData(); //wil return a promise and our 2nd then will refer to this promise
//         })
//         .then(text2 => {
//             console.log(text2)
//         })
// },2000)