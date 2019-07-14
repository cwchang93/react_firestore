import React, { Component } from 'react'
import { connect } from 'react-redux';
import { switchOpen, switchClose } from './newTestAction';

const mapState = (state) => ({
    data: state.data,
    newData: state.newData,
    toggle: state.toggle
})

const actions = {
    switchOpen,
    switchClose

}

class newTestComponent extends Component {

    render() {
        const { data, newData, toggle, switchOpen, switchClose } = this.props
        return (
            <div>
                {data}
                <hr />
                {newData}
                <p>{toggle}</p>

                <hr />
                <button onClick={switchOpen}> 點我打開</button>
                <button onClick={switchClose}> 點我收起</button>


            </div>
        )
    }
}

export default connect(mapState, actions)(newTestComponent);