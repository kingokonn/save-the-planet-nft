import {useContract} from './useContract';
import MyNFT from '../contracts/MyNFT.json';
import MyNFTContractAddress from '../contracts/MyNFT-address.json';


// export interface for NFT contract
export const useMinterContract = () => useContract(MyNFT.abi, MyNFTContractAddress.MyNFT);