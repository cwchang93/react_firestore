import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashBoard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

// import { Button } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <>
        <NavBar />
        <Container className='main'>

          <EventDashboard />
        </Container>
        <Button icon="smile" content="React Button" />
      </>

    );

  }

}


export default App;
