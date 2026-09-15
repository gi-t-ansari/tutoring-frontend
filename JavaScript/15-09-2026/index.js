// API -> Application Programming Interface
// A medium/bridge/way to interact and exchange data between two different applications.

// JSON -> JavaScript Object Notation (Data format/type that applications used to transfer their data)

// 1. Key name always be string {"name":"neha", "rollNumber": 62}
// 2. Value contains, number, string, boolean, null, array or another JSON
// 3. Value does not contain functions or undefined.
// 4. Lighter size as compare normal javascript object

const userData = {
  title: "Neha",
  isAvailable: () => true,
  missingData: undefined,
  address: {
    pincode: 831012,
    district: "east singhbhoom",
  },
};

// console.log(userData);
// JSON.stringify() -> converts js object into JSON format.
const userDataInJSON = JSON.stringify(userData);
// console.log(userDataInJSON);

// JSON.parse() -> converts JSON format into js object.
// console.log(JSON.parse(userDataInJSON));

// asynchronous javascript -> two or more parallel task running behind the scene without blocking the synchronous behavior of javascript
// application mostly in api calls, cookies popup features

// console.log("A");

// setTimeout(() => {},ms) -> inbuild js function that performs a blcok of operation based on the dealyed time.
setTimeout(() => {
  //   console.log("B");
}, 1);
setTimeout(() => {
  //   console.log("F");
}, 5);

// console.log("C");

// Promises In JS -> Promises are representations of the future result of an asynchronous operation.
// Initially promises are in pending state, then either it resolves/fullfil or rejects

// const promise = new Promise((resolve, reject) => {
//   const isAvailable = true;
//   if (isAvailable) {
//     resolve("Promise resolved");
//   } else {
//     reject("Promise rejected");
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const secondPromise = new Promise((resolve, reject) => {
  const isAvailable = true;
  if (isAvailable) {
    resolve("D");
  } else {
    reject("");
  }
});
secondPromise
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // runs irrespective or a promise resolves or rejects.
    console.log("always run");
  });

// console.log("E");

// JS Execution:
// 1. All synchronous code executes.
// 2. All promises executes
// 3. All time out function executes.

// console.log(typeof null);
// typeof null -> object

// console.log(typeof [1, 2]);
// typeof array -> object

// console.log(typeof secondPromise);
// typeof promise -> object

// API Calling Pattern

// 1. Endpoint -> URL or part of URL that defines which API needs to be called.
// 2. Payload -> Extra information FE sends to BE to filter out data/response.

// 3. Status Code:
// a. 200 → Success
// b. 201 → Created
// c. 400 → Bad Request
// d. 401 → Unauthorized
// e. 403 → Forbidden
// f. 404 → Not Found
// g. 500 → Server Error

// 4. API Methods:
// a. GET: to get the data.
// b. POST: to create new data.
// c. PUT: to replace a particular data.
// d. PATCH: to update a particular data.
// e. DELETE: to delete a particular data.

// async: -> keyword to create an asynchronous function.
// always returns a promise.
const someFn = async () => {
  return "some operations";
};

// someFn().then((data) => {
//   console.log(data);
// });

// await: -> used with async to wait for a particular operation to complete

const anotherFn = async () => {
  const response = await someFn();
  console.log(response);
  console.log("run after response");
};
anotherFn();
