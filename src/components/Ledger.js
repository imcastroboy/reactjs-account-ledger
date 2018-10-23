import React, { Component } from 'react';
import AddForm from './AddForm';
import Status from './Status';
import LedgerDashboard from './LedgerDashboard';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Ledger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            debit: 0,
            credit: 0,
            balance: 0
        };
    }
    
    addLedgerData = (evt, newRecord) => {
        let data = this.state.data;
        data.push(newRecord);
        
        this.setState({ data: data });

        this.generateStatus();
    }

    generateStatus = () => {
        this.getDebit();
        this.getCredit();
        this.getBalance();
    }

    generateTotal = (acc, currData) => {
        return Number(acc) + Number(currData);
    }

    getAmount = (data) => {
        return data.amount;
    }

    getNegativeNumbers = (data) => {
        return Number(data.amount) < 0;
    }

    getPositiveNumbers = (data) => {
        return Number(data.amount) > 0;
    }

    getBalance = () => {
        let balance = this.state.data.map(this.getAmount).reduce(this.generateTotal, 0);
        this.setState({balance: balance});
    }


    getDebit = () => {
        let debit = this.state.data.filter(this.getNegativeNumbers)
            .map(this.getAmount)
            .reduce(this.generateTotal, 0);

        if(debit) {
            this.setState({debit: debit});
        }
    }

    getCredit = () => {
        let credit = this.state.data.filter(this.getPositiveNumbers)
            .map(this.getAmount)
            .reduce(this.generateTotal, 0);
        
        if(credit) {
            this.setState({credit: credit});
        }
    }

    render() {
        return (
            <div class="container">
                <div class="row pb-5 pt-5">
                    <Status title="Debit" value={this.state.debit} class="col text-danger" />
                    <Status title="Credit" value={this.state.credit} class="col text-primary" />
                    <Status title="Balance" value={this.state.balance} class="col text-success" />
                </div>
                <AddForm getUserData={this.addLedgerData} />
                <LedgerDashboard records={this.state.data} />
            </div>
        )
    }
}

export default Ledger;