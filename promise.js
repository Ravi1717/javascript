/*let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
p.then(message => {
  console.log("This is in then " + message);
}).catch(message => {
  console.log("This is in catch " + message);
});
*/

// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":("
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User watching Cat Meme",
//       message: "webdev simplified < cat"
//     });
//   } else {
//     callback({
//       message: "Thumbs up and subscribe"
//     });
//   }
// }
// watchTutorialCallback(
//   success => {
//     console.log(success.message);
//   },
//   error => {
//     console.log(error.name + "    " + error.message);
//   }
// );

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":("
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User watching Cat Meme",
        message: "webdev simplified < cat"
      });
    } else {
      resolve({
        message: "Thumbs up and subscribe"
      });
    }
  });
}

watchTutorialPromise()
  .then(success => {
    console.log(success.message);
  })
  .catch(error => {
    console.log(error.name + "    " + error.message);
  });
