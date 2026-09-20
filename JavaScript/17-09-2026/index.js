// async function
// async keyword helps make a function asynchronous
// return value of async function will always be a promise

// async function anotherFn() {
//   return "return value";
// }

const someFn = async () => {
  return "return value";
};

// async function someFn() {
//   return "return value";
// }

// console.log(someFn());

// someFn().then((data) => console.log(data));

// console.log("A");

const promise = new Promise((resolve, reject) => {
  const isTrue = true;
  if (isTrue) {
    resolve("promise reolved");
  } else {
    reject("promise rejected with this error");
  }
});

// promise.then((data) => {
//   console.log(data);
// });

// console.log("C");

// await -> waits until the operation finishes or breaks teh synchronous behavior of js.

const anotherFn = async () => {
  console.log("A");
  await promise.then((data) => {
    console.log(data);
  });
  console.log("B");
};

const tryCatchExample = async () => {
  try {
    const data = await promise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

tryCatchExample();

// anotherFn();

// API Call/Integration:
// fetch(): JS inbuilt method which is used to preform API call.

// GET: to read the data

const getCatsData = () => {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};

// getCatsData();

// const fetchCatsData = async () => {
//   const response = await fetch(
//     "https://api.thecatapi.com/v1/images/search?limit=10",
//   );

//   const data = await response.json();

//   console.log(data);
// };

// fetchCatsData();

// try catch block -> a block of code that tries something and catch the issue.

const fetchCatsData = async () => {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchCatsData();
