import {web3} from '../components/ButtonWeb3';
import Challenge from './build/Challenge.json';

const bid = (address) => {
    return new web3.eth.Contract(Challenge.abi, "0x461044A4178a73cd6eD33af501578ab7690D6f26")
}

export default bid;
