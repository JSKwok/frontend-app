import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LeftSidebar,
         ExchangeInvestments } from './../../components';

import FetchDataMin from '../../HOC/FetchDataMin'
import {    getOverviewTableData,
            getBalanceHistory,
            getTransactionHistory } from '../../service/axios-service'
import { user, balance, account} from '../../service/body-data'



export default class Exchange extends Component {
  render() {
    // const ExchangeInvestmentsMin = FetchDataMin(ExchangeInvestments, getOverviewTableData, user);

    return (
      <div className="exchange-container">
      Exchange Page
        <div className="navigation">
          <LeftSidebar ref_code={this.props.location.state? this.props.location.state.ref_code : '21232'} />
        </div>

        <div className="exchange-investments">
          <ExchangeInvestments />
        </div>
      </div>
    )
  }
}