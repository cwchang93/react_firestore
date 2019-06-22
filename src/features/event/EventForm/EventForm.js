import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {

    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    }

    componentDidMount() {
        console.log('this.props.selectedEvent');
        console.log(this.props.selectedEvent);
        if (this.props.selectedEvent !== null) {
            // 這裡要用解構不然需要一個一個寫key跟value
            this.setState({
                ...this.props.selectedEvent
            })
        }

    }

    handleInputChange = ({ target: { name, value } }) => {

        this.setState({
            [name]: value,
        })

    }

    handleFormSubmit = () => {
        // console.log('hi submit');
        // console.log(this.state);
        this.props.createEvents(this.state)

    }

    render() {
        const { cancelFormOpen } = this.props;
        const { title, date, city, venue, hostedBy } = this.state;
        return (
            <Segment>
                <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
                    <Form.Field>
                        <label>Event Title</label>
                        <input
                            name='title'
                            placeholder="First Name" onChange={(e) => {
                                this.handleInputChange(e)
                            }}
                            value={title}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input name='date' type="date" placeholder="Event Date"
                            onChange={(e) => {
                                this.handleInputChange(e)
                            }}
                            value={date}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input name='city' placeholder="City event is taking place"
                            onChange={(e) => {
                                this.handleInputChange(e)
                            }}
                            value={city}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input name='venue' placeholder="Enter the Venue of the event"
                            onChange={(e) => {
                                this.handleInputChange(e)
                            }}
                            value={venue}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input name='hostedBy' placeholder="Enter the name of person hosting"
                            onChange={(e) => {
                                this.handleInputChange(e)
                            }}
                            value={hostedBy}
                        />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button type="button" onClick={cancelFormOpen}>Cancel</Button>
                </Form>
            </Segment>
        )
    }
}

export default EventForm