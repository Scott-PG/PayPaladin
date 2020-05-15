import React, { Component } from "react";
import "./CoinCounter.css";

export default class CoinCounter extends Component {
  render() {
    const {
      increment,
      decrement,
      incrementTen,
      decrementTen,
      value,
      theme,
    } = this.props;
    return (
      <div className={`counter-holder ${theme}`}>
        <button type="button" className="ctr-btn" onClick={incrementTen}>
          +10
        </button>
        <button type="button" className="ctr-btn" onClick={increment}>
          +1
        </button>
        <div className="ctr-text">
          <p className="ctr-number">{value}</p>
          <p className="ctr-label">{theme}</p>
        </div>
        <button type="button" className="ctr-btn" onClick={decrement}>
          -1
        </button>
        <button type="button" className="ctr-btn" onClick={decrementTen}>
          -10
        </button>
      </div>
    );
  }
}
