const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve");
  }, 1000);
  setTimeout(() => {
    reject("reject");
  }, 1000);
});

promise
  .then((data: string) => {
    console.log(data);
  })
  .catch((err: string) => {
    console.log(err);
  });
