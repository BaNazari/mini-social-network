## A minimal social network

This small web application is made on top of React, Redux, and React-bootstrap. Json-server has been the lonesome hero of the backend and has done a perfect job. To run the app:

1- npm install -g json-server (Global install is essential)

2- Putting a JSON file with permanent changes (a fake db) in the git folder is useless, so you have to make a backend folder somewhere and create a db.json inside it. Then, for the scope of this project, copy this inside db.json:

`
{"posts":[]}
`

3- Inside backend folder run: json-server --watch db.json

4- Inside frontend folder run: npm i 

5- Inside frontend folder run: npm start


In this concern, some points are worth to say:

- Afterall Json-server is a fake server, so it casts some limitations on solutions design. It can only store strings and numbers, so anything else has to be converted onto those forms. This is what I did to pictures. They are encoded into Base64 strings and sent to db. It is obvious that in a real-world project, this is not the case. 

- Form validation and security can grow into very complex situations, but this is far beyond the scope of this project. There are 2 kinds of input (texts and Base64 strings) and React-bootstrap Form component HTML native validations would suffice. In more complex forms or setting rules on inputs, there are 2 major solutions: using validation libraries (such as Yup) or delegate the validation to a custome Redux middleware.

- The main concept of architecture is as there is one global state -made of post objects- which is stored inside the Redux store.

- One major enhancement in the scope of this app, is the implementation of Redux-first routing. At the moment, there are 2 separate sources of truth for app states: React-router-dom for navigation state and Redux for application changes in data. Redux can take over both, by keeping a synced copy of routing data and history.


