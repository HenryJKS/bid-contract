import {web3} from '../components/ButtonWeb3';
import Challenge from './build/Challenge.json';

const bid = (address) => {
    return new web3.eth.Contract(Challenge.abi, "0x85a78AFEC67cC0d19C66B7fe04c7cAA8F7f20011")
}

export default bid;
