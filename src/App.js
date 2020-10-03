import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Homapage from './components/Homapage';
import PostPage from './components/PostPage';
import Error from './components/Error'

function App() {
  return (
    <main className="main-container">
      <Switch>
        <Route path="/" component={Homapage} exact></Route>
        <Route path="/posts/:postId" component={PostPage} exact></Route>
        {/* <Route path="/posts" component={PostPage} exact></Route> */}
        <Route component={Error}></Route>
      </Switch>
    </main>

  );
}

export default App;
