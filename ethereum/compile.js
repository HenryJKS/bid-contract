const path = require("path");
const solc = require("solc");

const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath); // remove the build folder

const bidPath = path.resolve(__dirname, "contracts", "Bid.sol");

let source = fs.readFileSync(bidPath, "utf8");

let input = {
    language: "Solidity",
    sources: {
        "Bid.sol": {
            content: source
        }
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["*"]
            },
        },
    },
};

let output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    "Bid.sol"
];

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(":", "") + ".json"),
        output[contract]
    );
}
