import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
    render() {
        const { event, selectEvent, deleteEvent, testEvent } = this.props;
        console.log('event', event)
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header>{event.title}</Item.Header>
                                <Item.Description>
                                    Hosted by {event.hostedBy}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> date |
                        <Icon name="marker" /> time
                      </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {event.attendees && event.attendees.map((attendee) => {
                            return (
                                <EventListAttendee key={attendee.id} data={attendee} />
                            )
                        })}


                    </List>
                </Segment>
                <Segment clearing>
                    <span>{event.description}</span>

                    <Button
                        onClick={() => deleteEvent(event.id)}
                        as="a" color="red" floated="right"
                        content="Delete" />
                    <Button
                        onClick={() => selectEvent(event)}
                        as="a" color="teal" floated="right"
                        content="View" />
                    <Button
                        onClick={() => testEvent('cow')}
                        as="a" color="purple" floated="right"
                        content="Test" />
                </Segment>
            </Segment.Group>

        )
    }
}

export default EventListItem
