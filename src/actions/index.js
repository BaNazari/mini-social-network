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

