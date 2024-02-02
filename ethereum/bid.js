import {web3} from '../components/ButtonWeb3';
import Challenge from './build/Challenge.json';

const bid = (address) => {
    return new web3.eth.Contract(Challenge.abi, '0x7E15b64AD5bCcC47dC7fe8ebf15522032f0934B7')
}

export default bid;
