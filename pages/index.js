import React from "react";
import { Component } from "react";
import { Message, MessageHeader } from "semantic-ui-react";
import bid from "../ethereum/bid";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

class bidIndex extends Component {
  static async getInitialProps(props) {
    const bidToken = bid(props.query.address);
    const addressOwner = await bidToken.methods.owner().call();
    const time = await bidToken.methods.maxTime().call();

    return { addressOwner, time }
  }

  render() {
    return (
      <Layout>
        <Message style={{width: '40%'}}>
          <MessageHeader>Owner Address</MessageHeader>
          <p>{this.props.addressOwner}</p>
        </Message>

      </Layout>
    );
  }
}

export default bidIndex;    