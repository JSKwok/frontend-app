import React, { Component } from 'react';
import './TransferModal.scss';


export default class TransferModal extends Component {
  render(){
    return (
        <div className="transfer-container">
            <div className="transfer-form-wrapper">
                <div className="form">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control Trans-form-control" id="userName" placeholder="To:Username"></input>
                        </div>
                        <div className="form-group">
                            <select className="form-control Trans-form-control">
                                <option value="investment" defaultValue>Investment</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control Trans-form-control" id="amount" placeholder="Amount"></input>
                        </div>
                        <div>
                            <button type="submit" name="transfer" className="btn btn-info transfer-btn">Transfer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}