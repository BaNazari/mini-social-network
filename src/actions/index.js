import { ADD_POST } from '../constants/constants';
import {DATA_LOADED} from '../constants/constants'
import {SINGLE_POST_LOADED} from '../constants/constants'

export function addPost(payLoad) {
  return function (dispatch, payload) {
    return fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payLoad)
    })
      .then(dispatch({ type: ADD_POST, payload }))
  }
}

export function getData() {
  return function (dispatch) {
    return fetch("http://localhost:3000/posts", { method: "GET" })
      .then(response => response.json(), console.log("INSIDE GET ACTION"))
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}

export function getSinglePost(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3000/posts/${id}`, { method: "GET" })
      .then(response => response.json(), console.log("INSIDE GET ACTION"))
      .then(json => {
        console.log("SINGLE", json)
        dispatch({ type: SINGLE_POST_LOADED, payload: json });
      });
  };
}