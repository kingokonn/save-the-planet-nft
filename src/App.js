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
                            name="Save the Planet with 5 cUSD"
                            updateBalance={getBalance}
                            minterContract={minterContract}
                        />
                    </main>
                </Container>
            ) : (
                //  if user wallet is not connected display cover page
                <Cover name="Save the planet" coverImg="https://www.bing.com/images/search?view=detailV2&ccid=PRQptRkh&id=B61E6544C7598EDA967068BBEBDBD6BC3FCF7886&thid=OIP.PRQptRkhLRxuISOFcWYEAgHaHa&mediaurl=https%3a%2f%2fd3t3ozftmdmh3i.cloudfront.net%2fproduction%2fpodcast_uploaded%2f1362488%2f1362488-1548040775541-354271dcd4512.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3d1429b519212d1c6e21238571660402%3frik%3dhnjPP7zW2%252bu7aA%26pid%3dImgRaw%26r%3d0&exph=3000&expw=3000&q=save+the+planet&simid=608036909825153927&FORM=IRPRST&ck=97E5D24974FE94563F0CC61B9E318C79&selectedIndex=0&ajaxhist=0&ajaxserp=0" connect={connect}/>
            )}
        </>
    );
};

export default App;
