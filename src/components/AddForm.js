import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            title: '',
            amount: 0
        }
    }

    handleInputChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    passUserData = (evt) => {
        this.props.getUserData(evt, this.state);
        this.clearForm();
    }

    clearForm = () => {
        document.getElementById('date').value = '';
        document.getElementById('title').value = '';
        document.getElementById('amount').value = '';
    }

    render() {
        return (
            <div class="container pb-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="input-group">
                            <input type="date" id="date" class="form-control" name="date"  onChange={this.handleInputChanges} />
                            <input placeholder="Title" type="text" id="title" class="form-control" name="title" onChange={this.handleInputChanges} />
                            <input placeholder="Amount" type="number" id="amount" class="form-control" name="amount" onChange={this.handleInputChanges} />
                            <div class="input-group-append">
                                <input type="button" value="Create" class="btn btn-primary" onClick={this.passUserData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddForm;