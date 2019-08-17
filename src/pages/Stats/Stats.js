import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LeftSidebar } from './../../components';

export default class Stats extends Component {
  render() {
    return (
      <div className="stats-container">
        Stats Page
        <div className="navigation">
          <LeftSidebar ref_code={this.props.location.state? this.props.location.state.ref_code : '21232'} />
        </div>
      </div>
    )
  }
}