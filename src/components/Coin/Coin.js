import React, { Component } from "react";

class Coin extends Component {
  render() {
    return <img src={this.props.info.imgSrc} alt={this.props.info.side} />;
  }
}

export default Coin;
