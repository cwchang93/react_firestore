import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testAction'

const mapState = (state) => ({
    data: state.data
})

const actions = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        const { data, incrementCounter, decrementCounter } = this.props;

        return (
            <div>
                Test Component
                <div>The answer is: {data}</div>
                <button onClick={incrementCounter}>Increment</button>
                <button onClick={decrementCounter}>Decrement</button>

            </div>
        )
    }
}

export default connect(mapState, actions)(TestComponent)