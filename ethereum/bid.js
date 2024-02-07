import {web3} from '../components/ButtonWeb3';
import Challenge from './build/Challenge.json';

const bid = (address) => {
    return new web3.eth.Contract(Challenge.abi, "0xe238a4ca332D361Ff9c74e79b8A66D2614713BE2")
}

export default bid;
