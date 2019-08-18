import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class ExchangeInvestments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: null,
      output: undefined,
      currencies: [],
      fromCurrency: 'CAD',
      toCurrency: 'CLAM',
      all_investments: []
    };
  }

  componentDidMount() {
    axios.get(`http://178.128.233.31/frontend/all_investments`)
      .then(res => {
        const data = res.data;
        const currencies = [];
        for (const investment in data.investments) {
          currencies.push(data.investments[investment].currency);
        }
        this.setState({ currencies })
        this.setState({ all_investments: data.investments})
      });
  }

  selectHandler(e) {
    if (e.target.className === "from-currency") {
      this.setState({ fromCurrency: e.target.value })
    }
    if (e.target.className === "to-currency") {
      this.setState({ toCurrency: e.target.value })
    }
  }

  amountHandler(e) {
    this.setState({ amount: e.target.value })
    axios.post(
      `http://178.128.233.31/backend/fx/get_rate`,
      {
        "to_currency": this.state.toCurrency,
        "from_currency": this.state.fromCurrency
      })
    .then(data => {
      const output = data.data.rate.mid * this.state.amount
      this.setState({ output });
      })
  }

  exchangeHandler(e) {
    axios.post(`http://178.128.233.31/backend/fx/exchange`,
    {
      "username":"ayesha",
      "source_investment":12,
      "target_investment":11,
      "amount":1
    })
  }

  render() {
    return (
      <div className="exchange-form">

        <select
          className="from-currency"
          onChange={e => this.selectHandler(e)}
        >
          {this.state.currencies.map(currency => (
            <option> {currency} </option>
          ))}
        </select>

        <input
          name='amount'
          type='number'
          onChange={e => this.amountHandler(e)}
        />

        <button className="exchange-button">
          Exchange
        </button>

        <select
          className="to-currency"
          onChange={e => this.selectHandler(e)}
        >
          {this.state.currencies.map(currency => (
            <option> {currency} </option>
          ))}
        </select>

        <textarea
          name='output'
          type='text'
          value={this.state.output}
        />

      </div>
    );
  }
}