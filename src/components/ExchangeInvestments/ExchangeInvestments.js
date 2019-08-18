import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class ExchangeInvestments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
      fromCurrency: 'USD',
      toCurrency: 'CAD'
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
      });
  }

  render() {
    return (
      <div>
        <select>
          {this.state.currencies.map(currency => (
            <option> {currency} </option>
          ))}
        </select>
      </div>
    );
  }
}