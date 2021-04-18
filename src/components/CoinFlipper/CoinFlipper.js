import React, { Component } from "react";
import Coin from "../Coin/Coin";
import { choice } from "../../helpers/helpers";

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-euro-heads" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-euro-tails" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      curCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.flipCoin();
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: (st.nFlips += 1),
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };

      // Alternative solution
      //   let newState = {
      //     ...st,
      //     currCoin: newCoin,
      //     nFlips: st.nFlips + 1,
      //   };

      //   if (newCoin.side === "heads") {
      //     newState.nHeads += 1;
      //   } else {
      //     newState.nTails += 1;
      //   }
      //   return newState;
      // });
    });
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h2> Flip a coin! </h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}> Flip it! </button>
        <p>
          {" "}
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
