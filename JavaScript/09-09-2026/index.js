// API -> Application Programming Interface
// A medium/bridge to interact and exchange data between two different applications.

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

console.log("A");

setTimeout(() => {
  console.log("B");
}, 5000);

console.log("C");

// Promises In JS -> Promises are asynchronous programming
// Initially promises are in pending state, then either it resolves/fullfil or rejects

const promise = new Promise((resolve, reject) => {
  if (resolve) {
    console.log("resolved");
  }

  if (reject) {
    console.log("rejected");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    // some programming -> runs irrespective of the promises state.
  });
