import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
// here Field is a component (will be shown on the screen) and reduxForm is a function

class StreamCreate extends React.Component {

    onSubmit = formValues => {
        this.props.createStream(formValues)
    }

    render() {
        // console.log("Props in StreamCreate", this.props);
        return(
            <div>
                <h3> Create a Stream </h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createStream })(StreamCreate)
