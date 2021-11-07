import Vuex from "vuex";
import Vue from "vue";

import { BigNumber } from 'bignumber.js'
import axios from 'axios'

import abiAfroFuturism from '@/abi/afroFuturism.json'

BigNumber.config({ EXPONENTIAL_AT: 100 })

const ADDR_OWNER = ''
const ADDR_TOKEN_AF = '0x9edD1ba28Ee2B1f9C5d8E0F06Ed8985890Bd052A'
const MAXIMUM_MINT_TOKEN = 10000;
//const MAXIMUM_MINT_TOKEN_COUNT_AT_TX = 30;
const AF_NFT_PRICE = 1.5;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: null,
    messageContent: null,
    messageType: null,
    contracts: {
        tokenAf: null,
    },
    afroFuturism: {
        totalSupply: Number,
        price: BigNumber,
    },
    isOwner() {
        if(this.account==null)
            return false
        return this.account.address==ADDR_OWNER
    }
  },
  mutations: {
    init(state) {
        state.contracts.tokenAfroFuturism = new window.web3.eth.Contract(abiAfroFuturism, ADDR_TOKEN_AF);
        state.afroFuturism.price = AF_NFT_PRICE;
    },
    set_account(state,account) {
        state.account = account
    },
    show_info(state,message) {
        state.messageContent = message
        state.messageType = 'info'
    },
    show_success(state,message) {
        state.messageContent = message
        state.messageType = 'success'
    },
    show_error(state,message) {
        state.messageContent = message
        state.messageType = 'error'
    },
    show_warning(state,message) {
        state.messageContent = message
        state.messageType = 'warning'
    },
    read_afroFuturism(state) {
        state.contracts.tokenAfroFuturism.methods.totalSupply().call().then((ret)=>{
            state.afroFuturism.totalSupply = BigNumber(ret);
            }).catch((error)=>{
            console.error("tokenBQB.totalSupply",error)
        });
    },
  },
  method: {
    fetchData(url){
        axios.get(url).then(response => {
           console.log(response);
        })
    },
  },
  actions: {
    connect({commit}) {
      window.ethereum.request({ 
          method: 'eth_requestAccounts' 
      }).then((accounts) => {
          if(accounts.length==0) {
              console.log("No connected");
          } else {
            window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0xfa2' }],
            }).then(() => {
              console.log("wallet_switchEthereumChain")
              const account = {
                address: accounts[0],
                //balance: BigNumber(balance,"ether")
              }
              commit('show_success','Connected')
              commit('set_account',account)
              commit('read_afroFuturism')
            }).catch(error => {
              console.log("error:wallet_switchEthereumChain",error)
              if (error.code==4902 || error.code==-32603) {
                window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{ 
                    chainId: '0xfa2', 
                    chainName: 'FantomNetwork',
                    rpcUrls: ['https://rpc.testnet.fantom.network'],
                    blockExplorerUrls: ['https://testnet.ftmscan.com'],
                    nativeCurrency: {
                      name: 'Fantom',
                      symbol: 'FTM',
                      decimals: 18
                    }
                  }],
                }).then(() => {
                  const account = {
                    address: accounts[0],
                  }
                  commit('set_account',account)
                  commit('read_afroFuturism')
                }).catch(() => {
                  console.log("error:wallet_switchEthereumChain")
                });
              }
            });
          }
      }).catch((err) => {
        if (err.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });  
    },/*
    connect({commit}) {
      window.ethereum.request({ 
          method: 'eth_requestAccounts' 
      }).then((accounts) => {
          if(accounts.length==0) {
              console.log("No connected");
          } else {
            window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0xfa' }],
            }).then(() => {
              console.log("wallet_switchEthereumChain")
              const account = {
                address: accounts[0],
                //balance: BigNumber(balance,"ether")
              }
              commit('show_success','Connected')
              commit('set_account',account)
              commit('read_afroFuturism')
            }).catch(error => {
              console.log("error:wallet_switchEthereumChain",error)
              if (error.code==4902 || error.code==-32603) {
                window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{ 
                    chainId: '0xfa', 
                    chainName: 'FantomNetwork',
                    rpcUrls: ['https://rpc.ftm.tools/'],
                    blockExplorerUrls: ['https://ftmscan.com'],
                    nativeCurrency: {
                      name: 'Fantom',
                      symbol: 'FTM',
                      decimals: 18
                    }
                  }],
                }).then(() => {
                  const account = {
                    address: accounts[0],
                  }
                  commit('set_account',account)
                  commit('read_afroFuturism')
                }).catch(() => {
                  console.log("error:wallet_switchEthereumChain")
                });
              }
            });
          }
      }).catch((err) => {
        if (err.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });  
    },*/
    disconnect({state}) {
        state.account = null
    },
    mint({state,commit}) {
        if (state.account==null)
        {
          commit('show_warning', 'Please connect Wallet!');
          return;         
        }

        if (state.afroFuturism.totalSupply == MAXIMUM_MINT_TOKEN)
        {
          commit('show_warning', 'No More Tokens!');
          return;
        }

        if (state.afroFuturism.price == 0)
        {
          commit('show_warning', 'You can not mint now!');
          return;
        }
    },
  }
})
