// const data = [
//   {
//     id: "dbg",
//     url: "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/dbg.jpg",
//   },
//   {
//     id: "d77",
//     url: "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/d77.jpg",
//   },
//   {
//     id: "MTY0NzU3Nw",
//     url: "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/MTY0NzU3Nw.jpg",
//   },
//   {
//     id: "29i",
//     url: "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/29i.jpg",
//   },
//   {
//     id: "e0r",
//     url: "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/e0r.jpg",
//   },
//   {
//     id: "bcu",
//     url: "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/bcu.jpg",
//   },
//   {
//     id: "3dr",
//     url: "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/3dr.jpg",
//   },
//   {
//     id: "MTk3OTQ4Ng",
//     url: "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/MTk3OTQ4Ng.jpg",
//   },
//   {
//     id: "4do",
//     url: "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/4do.gif",
//   },
//   {
//     id: "dtv",
//     url: "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/dtv.jpg",
//   },
// ];

// const imagesContainerEle = document.querySelector("#images-wrapper");

// console.log(imagesContainerEle.innerHTML);

// imagesContainerEle.innerHTML = `<img src="https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/dbg.jpg" height="200" width="200" />`;

// console.log(imagesContainerEle.innerHTML);

// // imagesContainerEle.innerHTML =
// //   imagesContainerEle.innerHTML +
// //   `<img src="https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/d77.jpg" height="200" width="200" />`;

// imagesContainerEle.innerHTML += `<img src="https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/d77.jpg" height="200" width="200" />`;

// console.log(imagesContainerEle.innerHTML);

// for (let ele of data) {
//   imagesContainerEle.innerHTML =
//     imagesContainerEle.innerHTML +
//     `<img src="${ele.url}" height="200" width="200" />`;
// }

// data.map((cat) => {
//   console.log(cat);
//   imagesContainerEle.innerHTML =
//     imagesContainerEle.innerHTML +
//     `<img src="${cat.url}" height="200" width="200" />`;
// });

// GET API Call
const getAllCatsData = async () => {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10",
    );
    const data = await response?.json();

    data?.map((cat) => {
      console.log(cat);
      imagesContainerEle.innerHTML =
        imagesContainerEle.innerHTML +
        `<img src="${cat.url}" height="200" width="200" />`;
    });
  } catch (err) {
    console.log(err);
  }
};

// getAllCatsData();

// POST

const createCat = async () => {
  try {
    const response = await fetch("https://example.com", {
      method: "POST",
      body: JSON.stringify({ question: "", answer: "" }),
    });
    const data = await response.json();
  } catch (err) {
    console.log(err);
  }
};

// PUT

const replaceCat = async () => {
  try {
    const response = await fetch("https://example.com", {
      method: "PUT",
      body: JSON.stringify({ id: "", question: "", answer: "" }),
    });
    const data = await response.json();
  } catch (err) {
    console.log(err);
  }
};

// PATCH

const updateCat = async () => {
  try {
    const response = await fetch("https://example.com", {
      method: "PATCH",
      body: JSON.stringify({ id: "", question: "", answer: "" }),
    });
    const data = await response.json();
  } catch (err) {
    console.log(err);
  }
};

// DELETE

const deleteCat = async () => {
  try {
    const response = await fetch("https://example.com", {
      method: "DELETE",
      body: JSON.stringify({ id: "" }),
    });
    const data = await response.json();
  } catch (err) {
    console.log(err);
  }
};

// spread operator (...) -> used to create reference of an object or array

const someData = [1, 2, 3, 4];

const newData = [...someData, 5, 6];
console.log(newData);

const someObj = {
  name: "Neha",
  email: "example.com",
  number: 123456,
};

const arrObj = [{ ...someObj }, {}];

const newObj = { ...someObj, numbers: [...someData], address: "Daiguttu" };
console.log(arrObj);

// | Difference              | npm                                           | npx                                                              |
// | ----------------------- | --------------------------------------------- | ---------------------------------------------------------------- |
// | **Purpose**             | Installs and manages packages                 | Executes packages/commands                                       |
// | **Common usage**        | `npm install react`                           | `npx create-vite@latest`                                         |
// | **Package requirement** | Usually installs the package into the project | Can execute a package without permanently installing it globally |
