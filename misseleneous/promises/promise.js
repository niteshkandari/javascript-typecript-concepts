var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("resolve");
    }, 1000);
    setTimeout(function () {
        reject("reject");
    }, 1000);
});
promise
    .then(function (data) {
    console.log(data);
})["catch"](function (err) {
    console.log(err);
});
