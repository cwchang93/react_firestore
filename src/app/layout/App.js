import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashBoard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route } from 'react-router-dom';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import testComponent from '../../features/testArea/testComponent';
import newTestComponent from '../../features/newTestArea/newTestComponent';

// import { Button } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (

      <>
        <Route path='/' exact component={HomePage} />
        <Route path='/(.+)' render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path='/people' component={PeopleDashboard} />
              <Route path='/profile/:id' component={UserDetailedPage} />
              <Route path='/settings' component={SettingsDashboard} />
              <Route path='/createEvent' component={EventForm} />

              <Route path='/test' component={testComponent} />
              <Route path='/newTest' component={newTestComponent} />
            </Container>
          </>

        )} />

      </>

    );

  }

}


export default App;
