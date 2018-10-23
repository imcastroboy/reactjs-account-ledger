import React, { Component } from 'react';

class AddForm extends Component {
    
    render() {
        return (
            <div className={this.props.class}>
                <h3>{ this.props.title }</h3>
                <h2>{ this.props.value }</h2>
            </div>
        )
    }
}

export default AddForm;