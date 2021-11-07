import Vue from 'vue'
import App from './App.vue'

import store from "./store"
import Web3 from "web3/lib"

import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

Vue.config.productionTip = false

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

new Vue({
  store,
  beforeCreate() {
    const { ethereum } = window;
    if(ethereum && ethereum.isMetaMask) {
      window.web3 = new Web3(ethereum);
      store.commit('init')
    }
  },
  render: (h) => h(App)
}).$mount("#app");