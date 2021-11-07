import Vuex from "vuex";
import Vue from "vue";

import { BigNumber } from 'bignumber.js'
import axios from 'axios'

import abiAfroFuturism from '@/abi/afroFuturism.json'

BigNumber.config({ EXPONENTIAL_AT: 100 })

const ADDR_OWNER = ''
const ADDR_TOKEN_AF = '0x14a050441761331c4a188242e2eC95364570B619'
const MAXIMUM_MINT_TOKEN = 10000;

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
        totalSupply: 0,
        price: BigNumber,
        unlockTime: 0,
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
        state.afroFuturism.price = 0;
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
            console.error("totalSupply",error)
        });

        state.contracts.tokenAfroFuturism.methods.getPrice().call().then((ret)=>{
            state.afroFuturism.price = BigNumber(ret);
            }).catch((error)=>{
            console.error("getPrice",error)
        });

        state.contracts.tokenAfroFuturism.methods.getUnlockTime().call().then((ret)=>{
            state.afroFuturism.unlockTime = ret * 1000;
            }).catch((error)=>{
            console.error("getUnlockTime",error)
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
  actions: {/*
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
              commit('show_success','Connected successfully')
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
    },*/
    connect({commit}) {
      window.ethereum.request({ 
          method: 'eth_requestAccounts' 
      }).then((accounts) => {
          if(accounts.length==0) {
              console.log("No connected");
          } else {
            window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x4' }],
            }).then(() => {
              console.log("wallet_switchEthereumChain")
              const account = {
                address: accounts[0],
                //balance: BigNumber(balance,"ether")
              }
              commit('show_success','Connected successfully')
              commit('set_account',account)
              commit('read_afroFuturism')
            }).catch(error => {
              console.log("error:wallet_switchEthereumChain",error)
              if (error.code==4902 || error.code==-32603) {
                window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{ 
                    chainId: '0x4', 
                    chainName: 'Rinkeby Test Network',
                    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
                    blockExplorerUrls: ['https://rinkeby.etherscan.io'],
                    nativeCurrency: {
                      name: 'Rinkeby',
                      symbol: 'ETH',
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
                params: [{ chainId: '0x1' }],
              }).then(() => {
                console.log("wallet_switchEthereumChain")
                const account = {
                  address: accounts[0],
                  //balance: BigNumber(balance,"ether")
                }
                commit('show_success','Connected successfully')
                commit('set_account',account)
                commit('read_afroFuturism')
              }).catch(error => {
                console.log("error:wallet_switchEthereumChain",error)
                if (error.code==4902 || error.code==-32603) {
                  window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{ 
                      chainId: '0x1', 
                      chainName: 'Ethereum Mainnet',
                      rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
                      blockExplorerUrls: ['https://etherscan.io'],
                      nativeCurrency: {
                        name: 'Rinkeby',
                        symbol: 'ETH',
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
    mint({state,commit}, params) {
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

        if (params.countOfToken == 0)
        {
          commit('show_warning', 'You can not mint 0 tokens!');
          return;
        }

        state.contracts.tokenAfroFuturism.methods.isLocked().call().then((ret)=>{
            if (ret == false)
            {
            commit('show_warning', 'You can not mint now!');
            return;
            }

            state.contracts.afroFuturism.methods.mintBulkAF(params.countOfToken).send({
                from: state.account.address,
                value:BigNumber(state.afroFuturism.price * params.countOfToken).integerValue().toString()
            }).then(()=>{
                commit('show_success', 'Minted successfully!');
                commit('read_afroFuturism');
            })

        }).catch((error)=>{
            console.error("isLocked",error)
        });
    },
  }
})
