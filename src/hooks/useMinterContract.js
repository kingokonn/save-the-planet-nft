import {useContract} from './useContract';
import MyNFTAbi from '../contracts/MyNFT.json';
import MyNFTContractAddress from '../contracts/MyNFT-address.json';

console.log({MyNFTAbi, MyNFTContractAddress});

// export interface for NFT contract
export const useMinterContract = () => useContract(MyNFTAbi, MyNFTContractAddress.MyNFT);
