export const requestURL = "https://jsonplaceholder.typicode.com/users";

export function sendRequest(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

// sendRequest(requestURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// function sendRequest(method, url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open(method, url);

//     xhr.responseType = "json";

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };

//     xhr.onerror = () => {
//       reject(xhr.response);
//     };

//     xhr.send();
//   });
// }

// sendRequest("GET", requestURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

