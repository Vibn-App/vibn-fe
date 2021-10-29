import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserProfile from '../displays/UserProfile';
import Signin from '../displays/Signin';
import UserList from '../displays/UserList';
import UserDetail from '../displays/UserDetail';
import Conversations from '../displays/Conversations';
import LoggedIn from '../displays/LoggedIn';
import About from '../displays/About';
import CreateConvo from '../displays/CreateConvo';
import ConvoDetail from '../displays/ConvoDetail';
import DemoProfile from '../demo/DemoProfile';
import DemoConversations from '../demo/DemoConversations';
import DemoConvo1 from '../demo/DemoConvo1';
import DemoConvo2 from '../demo/DemoConvo2';
import DemoAbout from '../demo/DemoAbout';
import DemoUserList from '../demo/DemoUserList';
import DemoUserDetail from '../demo/DemoUserDetail';
import DemoCreateConvo from '../demo/DemoCreateConvo';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route
            exact
            path="/user/:id/:access_token/:refresh_token"
            component={LoggedIn}
          />
          <Route exact path="/user/:id/dash">
            <UserProfile />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/users/:id">
            <UserDetail />
          </Route>
          <Route path="/convo/:id/conversations">
            <Conversations />
          </Route>
          <Route exact path="/convo/:id/detail/:convoId">
            <ConvoDetail />
          </Route>
          <Route exact path="/create/:id/">
            <CreateConvo />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/demo-profile">
            <DemoProfile />
          </Route>
          <Route exact path="/demo-users">
            <DemoUserList />
          </Route>
          <Route exact path="/demo-users/:id">
            <DemoUserDetail />
          </Route>
          <Route exact path="/demo-create/:id/">
            <DemoCreateConvo />
          </Route>
          <Route path="/demo-convo/conversations">
            <DemoConversations />
          </Route>
          <Route exact path="/demo-convo/detail/demo1">
            <DemoConvo1 />
          </Route>
          <Route exact path="/demo-convo/detail/demo2">
            <DemoConvo2 />
          </Route>
          <Route exact path="/demo-about">
            <DemoAbout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
