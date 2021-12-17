import { Routes, Route } from "react-router";
//Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
//Pages
import Home from "./pages/Home";

import Web3 from "web3"
import { ToastContainer, toast } from "react-toastify"
import swal from "sweetalert";
import "react-toastify/dist/ReactToastify.css";
import { contractAbi, contractAddress } from "./config";
import {useState, useEffect} from "react";

export default function App() {

  
  const [chainId, setChainId] = useState(null);
  const [method, setMethod] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [price, setPrice] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);

  useEffect(() => {
    account && method && fireToast();
  }, [method]);

  useEffect(async () => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        loadBlockchainData();
        getCurrentAddressConnected();
        addAccountsAndChainListener();
      } catch (error) {
        console.error(error);
      }
    } else {
      swal(
        "",
        "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!",
        "error"
      );
    }
  }
  const loadBlockchainData = async () => {
    const contract = new window.web3.eth.Contract(contractAbi, contractAddress);
    setContract(contract);
    const chainId = await window.web3.eth.getChainId();
    setChainId(chainId);
    {
      chainId === 3 ? setMethod("success") : setMethod("error");
    }
    // method && fireToast()

    if (chainId === 3) {
      const totalSupply = await contract.methods.totalSupply().call();
      setTotalSupply(totalSupply);

      const price = await contract.methods.price().call();
      setPrice(price);
      const displayPrice = window.web3.utils.fromWei(price, "ether");
      setDisplayPrice(displayPrice);

      contract.events
        .TheIkigai5Minted()
        .on("data", async function (result) {
          setTotalSupply(result.returnValues[0]);
        })
        .on("error", console.error);
    }
  };

  const getCurrentAddressConnected = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addAccountsAndChainListener = async () => {
    //this event will be emitted when the currently connected chain changes.
    window.ethereum.on("chainChanged", (_chainId) => {
      window.location.reload();
    });

    // this event will be emitted whenever the user's exposed account address changes.
    window.ethereum.on("accountsChanged", (accounts) => {
      window.location.reload();
    });
  };

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        document.getElementById("connectButton").disabled = true;
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        document.getElementById("connectButton").disabled = false;
        setAccount(accounts[0]);
        method && fireToast();
      } catch (error) {
        if (error.code === 4001) {
          swal("Request to access account denied!", "", "error");
        }
        document.getElementById("connectButton").disabled = false;
      }
    }
  };

  async function mint(mintCount) {
    if (contract) {
      if (chainId === 3) {
        if (mintCount === 0) {
          swal("Minimum mint amount is 1 The Ikigai 5", "", "info");
        } else {
          try {
            if (account) {
              const finalPrice = Number(price) * mintCount;
              await contract.methods
                .mintTheIkigai5(mintCount)
                .send({ from: account, value: finalPrice });
            }
          } catch (error) {
            if (error.code === 4001) {
              swal("Transaction Rejected!", "", "error");
            } else {
              console.log(error);
              swal("Transaction Failed!", "", "error");
            }
          }
        }
      } else {
        swal("Please switch to mainnet to mint The Ikigai 5", "", "error");
      }
    } else {
      swal(
        "",
        "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!",
        "error"
      );
    }
  }
  const fireToast = () => {
    toast[method](
      `You are ${method === "error" ? "not" : ""} connected to mainnet`,
      {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: true,
      }
    );
  };
  return (
    <div className="App">
      <header>
        <Nav connectMetaMask={connectMetaMask} account={account}/>
      </header>
      <Routes>
        <Route path="/" element={<Home price={displayPrice} mint={mint} totalSupply={totalSupply}/>} />
      </Routes>
      <Footer />
    </div>
  );
}
