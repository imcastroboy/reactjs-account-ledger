import React, { Component } from 'react';

class LedgerDashboard extends Component {
    
    render() {

        let data = this.props.records;

        return (
                <div id="dashboard" class="container">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Title</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table-striped">
                            { 
                                (data.length === 0)
                                ?
                                    <tr>
                                        <td colspan="4" class="text-center">No records available</td>
                                    </tr>        
                                :
                                data.map((data, key) => (
                                    <tr key={key}>
                                        <td scope="row">{ data.date }</td>
                                        <td>{ data.title }</td>
                                        <td>{ data.amount }</td>
                                        <td>
                                            <button class="btn btn-primary">Edit</button>
                                            <button class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default LedgerDashboard;