const assert = require('chai').assert;

const ganache = require('ganache');

const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const compiledBid = require('../ethereum/build/Challenge.json');

let accounts;
let bid;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    bid =  await new web3.eth.Contract(compiledBid.abi)
        .deploy({ data: compiledBid.evm.bytecode.object })
        .send({ from: accounts[0], gas: '1000000' });
});

describe('Bid contract', () => {
    it('Deploy a contract', () => {
        assert.ok(bid.options.address)
    });

    it("Owner is the first account", async () => {
        const owner = await bid.methods.owner().call();
        assert.equal(owner, accounts[0]);
    });

    it("Maxtime more than block.timestamp", async () => {
        const maxtime = await bid.methods.maxTime().call();
        //convert UNIX timestamp to UTC
        const date = new Date(maxtime * 1000);
        const now = new Date();
        assert.isAbove(date, now);
    });
})