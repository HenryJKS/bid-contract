import React from "react";
import { Component } from "react";
import {
  Message,
  MessageHeader,
  Form,
  FormField,
  Divider,
  Button,
} from "semantic-ui-react";
import bid from "../ethereum/bid";
import Layout from "../components/Layout";
import WalletButton from "../components/ButtonWeb3";
import { web3 } from "../components/ButtonWeb3";
import { Router } from "../routes";

class bidIndex extends Component {
  state = {
    quantityETH: "",
    loadingButton: false,
    errorMessage: "",
    errorMessageTransfer: "",
    loadingButtonTransfer: false,
  };

  static async getInitialProps(props) {
    const bidToken = bid(props.query.address);
    const addressOwner = await bidToken.methods.owner().call();
    const time = await bidToken.methods.maxTime().call();

    //get balance of contract
    const balanceContract = await web3.eth.getBalance(bidToken.options.address);
    const balanceContractETH = web3.utils.fromWei(balanceContract, "ether");

    // convert unix to local time
    const humanTime = new Date(time * 1000).toLocaleString();

    return { addressOwner, humanTime, balanceContractETH };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const bidToken = bid(this.props.address);
    const accounts = await web3.eth.getAccounts();

    this.setState({ loadingButton: true, errorMessage: "" });
    try {
      await bidToken.methods.Bid().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.quantityETH, "ether"),
      });
      Router.pushRoute("/");
    } catch (error) {
      if (error.message.includes("revert")) {
        this.setState({
          loadingButton: false,
          errorMessage: error.message.split("revert")[1].trim(),
        });
      } else {
        this.setState({ loadingButton: false, errorMessage: error.message });
      }
    }
  };

  onSubmitTransfer = async (event) => {
    event.preventDefault();

    const bidToken = bid(this.props.address);
    const accounts = await web3.eth.getAccounts();

    this.setState({ loadingButtonTransfer: true, errorMessage: "" });
    try {
      await bidToken.methods.Tranferfunds().send({
        from: accounts[0],
      });
      Router.pushRoute("/");
    } catch (error) {
      if (error.message.includes("revert")) {
        this.setState({
          loadingButtonTransfer: false,
          errorMessageTransfer: error.message.split("revert")[1].trim(),
        });
      } else {
        this.setState({
          loadingButtonTransfer: false,
          errorMessageTransfer: error.message,
        });
      }
    }
  };

  render() {
    return (
      <Layout>
        <WalletButton />

        <Message compact style={{ marginRight: "2%" }}>
          <MessageHeader>Owner Address</MessageHeader>
          <p>{this.props.addressOwner}</p>
        </Message>

        <Message compact info>
          <MessageHeader>Tempo Limite</MessageHeader>
          <p>{this.props.humanTime}</p>
        </Message>

        <Divider horizontal>Bid</Divider>

        <Message compact info>
          <MessageHeader>Saldo do Contrato</MessageHeader>
          <p>{this.props.balanceContractETH} ETH</p>
        </Message>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <FormField>
            <label>Valor do Lance</label>
            <input
              placeholder="Quantity"
              value={this.state.quantityETH}
              onChange={(event) =>
                this.setState({ quantityETH: event.target.value })
              }
              type="number"
            />
          </FormField>
          <FormField>
            <Message
              header="Error"
              compact
              error
              content={this.state.errorMessage}
            />
          </FormField>
          <FormField>
            <Button
              type="submit"
              className="ui button primary"
              loading={this.state.loadingButton}
            >
              Enviar
            </Button>
          </FormField>
        </Form>
        <Divider horizontal>Winner</Divider>
        <Form>
          <FormField>
            <Button
              type="submit"
              className="ui button primary"
              loading={this.state.loadingButtonTransfer}
              onClick={this.onSubmitTransfer}
              content="Transferir"
            />
          </FormField>
          <FormField>
            <Message
              header="Error"
              compact
              error
              content={this.state.errorMessageTransfer}
            />
          </FormField>
        </Form>
      </Layout>
    );
  }
}

export default bidIndex;
