import React, { Component } from 'react';

class NameForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    textOnChange (e) {
        alert('The value is: ' + e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert('The value is: ' + this.name.value);
        console.log(this.name.value, this.email.value);
    }

    render() {
        return (
            <div className="post-container">
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" ref={(name) => this.name = name} />
                    <input type="text" ref={(email) => this.email = email} />
                    <input type="submit" value="Submit" />
                </form>

                <br/>

                <input placeholder="Ex. bind" type="text" onChange={this.textOnChange}/>
            </div>
        );
    }
}

export default NameForm;