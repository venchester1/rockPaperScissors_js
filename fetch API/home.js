// // { PROMISE }
// const myPromise = new Promise((resolve, reject) => {
//     const error = false
//     if(!error) {
//         resolve("Yes resolve successfuly")
//     } else {
//         reject("No, must report to the admin (URGENT)")
//     }
// })

// myPromise.then(value => {
//     return `${value} One`
// }).then(newValue => {
//     console.log(newValue);
// }).catch(err => {
//     console.error(err)
// })

//Next promise

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("My Next Promise Resolve!")
//     }, 3000)
// })

// myNextPromise.then(value => {
//     console.log(value);
// })

// myPromise.then(value => {
//     console.log(value);
// })

// {FETCH}

// const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending

// console.log(users);

// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//   return response.json()
// })
// .then(data => {
//    data.forEach(user => {
//     console.log(user);
//    })
// })

//// {ASYNC AWAIT}
// const MyUser = {
//   userList: [],
// };

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = response.json();
//   return jsonUserData;
// };

// const anotherFunc = async () => {
//   const data = await myCoolFunction();
//   MyUser.userList = data;
//   console.log(MyUser.userList);
// };

// anotherFunc();
// console.log(MyUser.userList);

//WORK FLOW
// const getAllUserEmail = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();

//   const userEmailArray = jsonUserData.map((user) => {
//     return user.email;
//   });

//  console.log(userEmailArray);
//  postToWebPage(userEmailArray)
// };

// const postToWebPage = (data) => {
//     console.log(data);
// }

// getAllUserEmail()

// ASYNC WITH 2ND PARAM OF FETCH IS A OBJECT

// const getDadJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/", {
//         method: "GET" ,     //get is the default method
//         headers: {
//             Accept: "application/json"
//             //"text/plain"
//         }
//     });
//     const jsonJokeData = await response.json();
//     // const textJokeData = await response.text();

//     console.log(jsonJokeData);
//   };

//   getDadJoke()

// const jokeObject = {
//   id: "BQfaxsHBsrc",
//   joke: "What do you call a pile of cats?  A Meowtain.",
// };

// const postData = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jokeObj),
//   });
//   const jsonResponse = await response.json();

//   console.log(jsonResponse.headers);
// };

// postData(jokeObject);

//{id: 'BQfaxsHBsrc', joke: 'What do you call a pile of cats?  A Meowtain.', status: 200}

// const requestJoke = async (firstName, lastName) => {

//   const response = await fetch(
//     `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
//   const jsonResponse = await response.json();

//   console.log(jsonResponse.value.joke);
// };

// requestJoke("Bruce","Lee");


// abtract into functions
//pulling data from a form

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    }
    return requestObj
}

const buildRequestUrl = (requestData) => {
    return  `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke
    postJokeToPage(joke)
  };

  const postJokeToPage = (joke) => {
    console.log(joke);
  }
  
// Procedural 'Workflow' function

const processJokeRequest = async () => {
    const requestData = getDataFromForm()
    const requestUrl = buildRequestUrl(requestData)
    await requestJoke(requestUrl)
    console.log("finish");
}

processJokeRequest()
