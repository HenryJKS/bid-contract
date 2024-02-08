import React from "react";
import { Component } from "react";
import {
  Container, Message, MessageHeader, Form, FormField, Divider, Button, Modal, List, ListContent, ListHeader, ListDescription, ListItem, ListIcon
} from "semantic-ui-react";
import bid from "../ethereum/bid";
import Layout from "../components/Layout";
import WalletButton from "../components/ButtonWeb3";
import { web3 } from "../components/ButtonWeb3";
import { Router } from "../routes";
import ButtonRestartBid from "../components/ButtonRestartBid";


class bidIndex extends Component {
  state = {
    quantityETH: "",
    loadingButton: false,
    errorMessage: "",
    errorMessageTransfer: "",
    loadingButtonTransfer: false,
    successTransfer: "",
    successBid: "",
    addressEvent: "",
    valueEvent: ""
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

    return { address: props.query.address, addressOwner, humanTime, balanceContractETH };
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
      this.setState({ loadingButton: false })
      Router.pushRoute("/");
      this.setState({ successBid: "Lance realizado com sucesso!" });
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

  async fetchEvent() {
    const bidToken = bid(this.props.address);

    const events = await bidToken.getPastEvents("auctionEnding", {
      "fromBlock": 0,
      "toBlock": "latest"
    })

    // buscar o ultimo valor da lista de eventos
    const addressEvent = events[events.length - 1].returnValues[0];
    const valueEvent = events[events.length - 1].returnValues[1];

    this.setState({ addressEvent, valueEvent });
  }

  async componentDidMount() {
    this.fetchEvent();
  }

  onSubmitTransfer = async (event) => {
    event.preventDefault();

    const bidToken = bid(this.props.address);
    const accounts = await web3.eth.getAccounts();

    this.setState({ loadingButtonTransfer: true, errorMessageTransfer: "" });
    try {
      await bidToken.methods.Tranferfunds().send({
        from: accounts[0],
      });
      this.setState({ loadingButtonTransfer: false, errorMessageTransfer: "" })
      this.fetchEvent();
      Router.pushRoute("/");
      this.setState({ successTransfer: "Transferência realizada com sucesso!" });
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

  renderList() {
    if (this.state.addressEvent.length == 0 || this.state.valueEvent.length == 0) {
      return (
        <List style={{ display: 'flex', justifyContent: 'center' }}>
          <ListItem>
            <ListContent>
              <ListHeader>
                Aguardando Vencedor
              </ListHeader>
            </ListContent>
          </ListItem>
        </List>
      );
    } else {
      return (
        <List style={{ display: 'flex', justifyContent: 'center'}}>
          <ListItem>
            <ListIcon name='winner' size='big' verticalAlign='middle' color="blue" />
            <ListContent>
              <ListHeader>
                Address: <a href={`https://sepolia.etherscan.io/address/${this.state.addressEvent}`}>{this.state.addressEvent}</a>
              </ListHeader>
              <ListHeader>
                Value: {web3.utils.fromWei(String(this.state.valueEvent), 'ether')} ETH
              </ListHeader>
            </ListContent>
          </ListItem>
        </List>
      );
    }
  }

  render() {
    return (
      <Layout>
        <Container fluid={false}>
          <WalletButton />

          <Message compact style={{ marginRight: "2%" }}>
            <MessageHeader>Owner Address</MessageHeader>
            <p>{this.props.addressOwner}</p>
          </Message>

          <ButtonRestartBid/>

          <Message compact info>
            <MessageHeader>Tempo Limite</MessageHeader>
            <p>{this.props.humanTime}</p>
          </Message>


          <Divider horizontal>Bid</Divider>

          <Message compact info>
            <MessageHeader>Lance Atual</MessageHeader>
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
              <Modal
                open={!!this.state.successBid}
                header="Lance realizado com sucesso!"
                content="Obrigado por participar!"
                actions={["OK"]}
                onActionClick={() => this.setState({ successBid: "" })}
                size="tiny"
                style={{ color: "green" }}
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
          <Divider horizontal>Last Winner</Divider>
          <Form error={!!this.state.errorMessageTransfer}>
            <FormField>
              <Button
                type="submit"
                onClick={this.onSubmitTransfer}
                className="ui button primary"
                loading={this.state.loadingButtonTransfer}
                disabled={this.props.balanceContractETH == 0}
                style={{ width: 'auto' }}>
                Transferir
              </Button>
            </FormField>
            <FormField>
              <Message
                header="Error"
                compact
                error
                content={this.state.errorMessageTransfer}
              />
            </FormField>
            <FormField>
              {this.renderList()}
            </FormField>
            <FormField>
              <Modal
                open={!!this.state.successTransfer}
                header="Transferência realizada com sucesso!"
                content="O vencedor recebeu o valor do lance."
                actions={["OK"]}
                onActionClick={() => this.setState({ successTransfer: "" })}
                size="tiny"
                style={{ color: "green" }}
              />
            </FormField>
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default bidIndex;
