import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid'




class EventDashboard extends Component {
    state = {
        events: eventsFromDashBoard,
        isOpen: false,
        selectedEvent: null,
    }

    // handleIsOpenToggle = () => {
    //     // const { isOpen } = this.state;
    //     // this.setState({
    //     //     isOpen: !isOpen,
    //     // })
    //     // this.setState((prevState) => ({
    //     this.setState(({ isOpen }) => ({
    //         isOpen: !isOpen
    //     }))
    // }

    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEvent: null
        })
    }

    handleFormCancel = () => {
        this.setState({
            isOpen: false,
        })
    }

    hanldeCreateEvent = (newEvent) => {
        newEvent.id = cuid();
        newEvent.hostPhotoURL = '/assets/user.png';
        this.setState(({ events, isOpen }) => ({
            events: [...events, newEvent],
            isOpen: !isOpen,
        }))
    }

    handleSelectEvent = (event) => {
        this.setState({
            selectedEvent: event,
            isOpen: true
        })
    }

    hanldeUpdateEvent = (updatedEvent) => {
        this.setState(({ events }) => ({
            events: events.map(event => {
                if (event.id === updatedEvent.id) {
                    return { ...updatedEvent }
                } else {
                    return event
                }
            }),
            isOpen: false,
            selectedEvent: null
        }))
    }

    handleDeleteEvent = id => {
        this.setState(({ events }) => ({
            // 把id相同的篩選掉 => 換言之只留下id不同者
            events: events.filter(e => e.id !== id)
        }))
    }

    handleTesting = id => {
        console.log(id);
    }

    render() {
        const { events, isOpen, selectedEvent } = this.state;

        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events}
                        deleteEvent={this.handleDeleteEvent}
                        selectEvent={this.handleSelectEvent}
                        testEvent={this.handleTesting}
                    />
                </Grid.Column>

                <Grid.Column width={6}>
                    <Button positive content='Create Event' onClick={this.handleCreateFormOpen} />
                    {isOpen && <EventForm
                        key={selectedEvent ? selectedEvent.id : 0}
                        updateEvent={(updatedEvent) => { this.hanldeUpdateEvent(updatedEvent) }}
                        selectedEvent={selectedEvent}
                        createEvents={(newEvent) => this.hanldeCreateEvent(newEvent)} cancelFormOpen={this.handleFormCancel} />}
                </Grid.Column>


            </Grid>


        )
    }
}

export default EventDashboard;