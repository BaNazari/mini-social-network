import { ADD_POST } from '../constants/constants'


export function addPost(payLoad) {
  return function (dispatch, payload) {
    return fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payLoad)
    })
      .then(console.log("ADDER", payLoad))
      .then(dispatch({ type: ADD_POST, payload }))
  }
}

export function getData() {
  return function (dispatch) {
    return fetch("http://localhost:3000/posts", { method: "GET" })
      .then(response => response.json(), console.log("INSIDE GET ACTION"))
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}