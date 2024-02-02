const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require("web3");
const compiledMyToken = require("./build/Challenge.json");

const provider = new HDWalletProvider (
    'addict fancy panda couple humor document ritual waste trade reason okay chair',
    'https://sepolia.infura.io/v3/95ecc47bd5a44b5a8e7985400b4e0b73'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts().catch(err => console.log(err));

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(compiledMyToken.abi)
        .deploy({ data: compiledMyToken.evm.bytecode.object})
        .send({ gas: "2000000", from: accounts[0] })
        .catch(err => console.error(err));

    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
}

deploy();