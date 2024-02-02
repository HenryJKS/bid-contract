// import Web3 from "web3";

// let web3;

// if (typeof window !== 'undefined' && typeof window.ethereum !== "undefined") {
//     web3 = new Web3(window.ethereum);
// } else {
//     const provider = new Web3.providers.HttpProvider(
//         process.env.API_INFURA
//     );
//     web3 = new Web3(provider);
// }

// export const connectWallet = async () => {
//     if (window.ethereum) {
//         try {
//             await window.ethereum.request({ method: 'eth_requestAccounts' });
//         } catch (error) {
//             console.error("Usuário recusou a conexão com a carteira");
//         }
//     } else {
//         console.error("Por favor, instale o MetaMask!");
//     }
// };

// export default web3;
