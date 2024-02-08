import {web3} from '../components/ButtonWeb3';
import Challenge from './build/Challenge.json';

const bid = (address) => {
    return new web3.eth.Contract(Challenge.abi, "0x67986f88D23De9aB1dFC2d5619FaEf29680F4Ea3")
}

export default bid;
