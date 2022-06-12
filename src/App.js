import React from "react";
import Cover from "./components/Cover";
import {Notification} from "./components/ui/Notifications";
import Wallet from "./components/wallet";
import {useBalance, useMinterContract} from "./hooks";
import Nfts from "./components/minter/nfts";
import {useContractKit} from "@celo-tools/use-contractkit";


import "./App.css";


import {Container, Nav} from "react-bootstrap";


const App = function AppWrapper() {
    /*
    address : fetch the connected wallet address
    destroy: terminate connection to user wallet
    connect : connect to the celo blockchain
     */
    const {address, destroy, connect} = useContractKit();

    //  fetch user's celo balance using hook
    const {balance, getBalance} = useBalance();

    // initialize the NFT mint contract
    const minterContract = useMinterContract();
   

    return (
        <>
            <Notification/>

            {address ? (
                <Container fluid="md">
                    <Nav className="justify-content-end pt-3 pb-5">
                        <Nav.Item>

                            {/*display user wallet*/}
                            <Wallet
                                address={address}
                                amount={balance.CELO}
                                symbol="CELO"
                                destroy={destroy}
                            />
                        </Nav.Item>
                    </Nav>
                    <main>

                        {/*list NFTs*/}
                        <Nfts
                            name="Save the Planet with 1 Celo"
                            updateBalance={getBalance}
                            minterContract={minterContract}
                        />
                    </main>
                </Container>
            ) : (
                //  if user wallet is not connected display cover page
                <Cover name="Save the planet" coverImg="https://media.istockphoto.com/vectors/hand-holding-earth-planet-with-trees-growing-in-flat-design-save-the-vector-id1318389435?k=20&m=1318389435&s=612x612&w=0&h=LIRAEU4NYp80SR0QtuOa2zRuuFEiKbI_GIQGNu7jzdI=" connect={connect}/>
            )}
        </>
    );
};

export default App;
