import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { web3 } from "./ButtonWeb3";
import bid from "../ethereum/bid";
import { Router } from "../routes";

class ButtonRestartBid extends Component {
  state = {
    loadingButton: false,
    openModal: false,
  }

  onRestart = async () => {
    const bidToken = bid(this.props.address)
    const accounts = await web3.eth.getAccounts()

    this.setState({ loadingButton: true })
    try {
      await bidToken.methods.restartBid().send({
        from: accounts[0],
      })
      Router.pushRoute("/")
      this.setState({ loadingButton: false })
      this.setState({ openModal: true })
    } catch (error) {}
    this.setState({ loadingButton: false })
  }

  render() {
    return (
      <div>
        <Button onClick={this.onRestart} content="Reiniciar" floated="right" secondary loading={this.state.loadingButton}/>
      </div>
    );
  }
}

export default ButtonRestartBid