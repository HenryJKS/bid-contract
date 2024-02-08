import React, {Component} from "react";
import Layout from "../components/Layout";
import bid from "../ethereum/bid";
import {   TableRow,
    TableHeaderCell,
    TableHeader,
    TableFooter,
    TableCell,
    TableBody,
    MenuItem,
    Icon,
    Label,
    Menu,
    Table,
Container } from "semantic-ui-react";
import { web3 } from "../components/ButtonWeb3";
import { Eth, EthAlt } from "react-cryptocoins";

class WinnersBid extends Component {
    state = {
    }

    static async getInitialProps(props) {
        const bidToken = bid(props.query.address);
        const eventsWinner = await bidToken.getPastEvents("auctionEnding", {
            fromBlock: 0,
            toBlock: "latest"
        });

        const addressWinner = eventsWinner.map((event) => event.returnValues[0]);
        const valueWinner = eventsWinner.map((event) => event.returnValues[1]);

        return { addressWinner, valueWinner };
    }

    renderRows() {
        return this.props.addressWinner.map((address, index) => {
            return (
                <TableRow>
                    <TableCell textAlign="center">{<a href={`https://sepolia.etherscan.io/address/${address}`}>{address}</a>}</TableCell>
                    <TableCell textAlign="center">{web3.utils.fromWei(this.props.valueWinner[index], 'ether')} <EthAlt width="20px" height="14px"/></TableCell>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <Layout>
                <Container fluid={false}>
                <h1 style={{textAlign: 'center'}}>Winners Bid</h1>
                <Table selectable celled color="blue">
                    <Table.Header>
                        <Table.Row textAlign="center">
                            <TableHeaderCell>Winner</TableHeaderCell>
                            <TableHeaderCell>Value</TableHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderRows()}
                    </Table.Body>
                </Table>
                </Container>
            </Layout>
        );
    }
}

export default WinnersBid