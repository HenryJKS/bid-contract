import {web3} from '../components/ButtonWeb3';
import Challenge from './build/Challenge.json';

const bid = (address) => {
    return new web3.eth.Contract(Challenge.abi, '0x776D90910ca357F48B858762cBFfF2632eb71053')
}

export default bid;
