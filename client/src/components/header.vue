<template>
  <div>
    <notification v-if="hasMessage"/>
    <section v-if="!isMobile" class="sec-main-top">
      <btn type="button" @click="connectWallet" v-if="isMetaMaskInstalled && !isMetaMaskConnected" class="connect-image-content">
        <img class="img-fluid" style="padding:10px 20px;" src="../assets/img/dogii.png">Connect MetaMask
      </btn>
      <btn type="button" @click="lockMetamask" v-if="isMetaMaskInstalled && isMetaMaskConnected" class="connect-image-content">
        <img class="img-fluid" style="padding:10px 20px;" src="../assets/img/dogii.png">Connected
      </btn>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="top-inner-counter-boxes">
              <h2 class="he-top-innn">Countdown to mint :</h2>
              <div class="main-three-mint-box">
                <div class="box-m-1">
                  <h2>{{ this.dateTime.days || "00" }}</h2>
                  <p>Days</p>
                </div>
                <div class="box-m-1">
                  <h2>{{ this.dateTime.hours || "00" }}</h2>
                  <p>Hour</p>
                </div>
                <div class="box-m-1">
                  <h2>{{ this.dateTime.minutes || "00" }}</h2>
                  <p>mint</p>
                </div>
                <div class="box-m-1">
                  <h2>{{ this.dateTime.seconds || "00" }}</h2>
                  <p>sec</p>
                </div>
              </div>
            </div>
            <div>
              <div class="main-wrapper-to-counter">
                <h2>AfroFuturism</h2>
                <p>Nullam vehicula, dolor et ornare pellentesque, turpis massa auc</p>
              </div>
              <div class="box-counter-1">
                <h2>{{totalSupply}}/10000</h2>
                <p>Mint Price: {{getPrice}} ETH</p>
                <div class="number">
                  <span class="minus" @click="operator('-')"> - </span>
                  <div>
                    <input @input="inputNumber" type="number" style="font-size: 30px; width:100px; margin-bottom:3px; text-align:center" v-model="count" value="1"/>
                    <h3 class="titlle-input ">{{count}} mint</h3>
                  </div>
                  <span class="plus" @click="operator('+')"> + </span>
                </div>
                <button @click="mint" type="button" class="btn btn-custom-mint">mint</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="isMobile" class="sec-main-top">
      <div class="connect-image-content-mobile">
        <img class="img-fluid" style="padding:0 10px;" src="../assets/img/dogii.png">Connect MetaMask
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="top-inner-counter-boxes">
              <div class="he-top-innn" style="font-size:18px">Countdown to mint :</div>
              <div class="main-three-mint-box-mobile">
                <div class="box-m-1">
                  <h2>{{ this.dateTime.days || "00" }}</h2>
                  <p>Days</p>
                </div>
                <div class="box-m-1">
                  <h2>{{ this.dateTime.hours || "00" }}</h2>
                  <p>Hour</p>
                </div>
                <div class="box-m-1">
                  <h2>{{ this.dateTime.minutes || "00" }}</h2>
                  <p>mint</p>
                </div>
                <div class="box-m-1">
                  <h2>{{ this.dateTime.seconds || "00" }}</h2>
                  <p>sec</p>
                </div>
              </div>
            </div>
            <div>
              <div class="main-wrapper-to-counter">
                <div style="font-size:24px">AfroFuturism</div>
                <p>Nullam vehicula, dolor et ornare pellentesque, turpis massa auc</p>
              </div>
              <div class="box-counter-1-mobile">
                <div style="font-size:20px">{{totalSupply}}/10000</div>
                <div style="font-size:15px">Mint Price: {{getPrice}} ETH</div>
                <div class="number-mobile">
                  <span class="minus" @click="operator('-')"> - </span>
                  <div>
                    <input @input="inputNumber" type="number" style="font-size: 30px; width:50px; margin-bottom:3px; text-align:center" v-model="count" value="1"/>
                    <h3 class="titlle-input ">{{count}} mint</h3>
                  </div>
                  <span class="plus" @click="operator('+')"> + </span>
                </div>
                <button @click="mint" type="button" class="btn btn-custom-mint">mint</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as moment from "moment";
import BigNumber from 'bignumber.js'
import Notification from '@/components/notification.vue';

export default {
  name: "header",
  components: {Notification},
  data() {
    return {
      count:0,
      windowWidth: window.innerWidth,

      dateTime: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },

      timer: undefined,
    }
  },
  beforeMount() {
    this.timer = setInterval(this.getUnlockTime, 1000);
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed: {
    isMobile() {
      return this.windowWidth < 850;
    },
    formatedCountdown() {
      moment.duration(this.countdown);

      return {
        hours: moment().format('hh'),
        mins: moment().format('mm'),
        sec: moment().format('ss')
      };
    },
    isMetaMaskInstalled() {
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask)
    },
    isMetaMaskConnected() {
        return this.$store.state.account!=null;
    },
    totalSupply() {
      if(this.$store.state.account) {
        return Number(this.$store.state.afroFuturism.totalSupply);
      }
      
      return Number(0);
    },
    getPrice() {
        if(this.$store.state.afroFuturism.price > 0)
            return BigNumber(this.$store.state.afroFuturism.price).shiftedBy(-18)
        return BigNumber(0)
    },
    hasMessage() {
        return this.$store.state.messageContent!=null
    }
  },
  methods:{
    operator(sym){
      if (sym=="+"){
        if (this.count>=30){
          return
        }
        this.count++
      }else {
        if (this.count<=0){
          return
        }
        this.count--;
      }
    },
    inputNumber() {
      if (this.count > 30){
        this.count = 30;
      }

      if (this.count < 0){
        this.count = 0;
      }
    },
    connectWallet() {                
        this.$store.dispatch("connect")              
    },
    lockMetamask() {
        this.$store.dispatch("disconnect")
    },
    mint() {                
        this.$store.dispatch('mint', {
          countOfToken:this.count
        })              
    },
    getUnlockTime() {
        let endTime = this.$store.state.afroFuturism.unlockTime;

        let currentTime = Date.now();

        var difference = endTime - currentTime;
        this.countdown = difference;

        if (difference < 0)
            return "0"; 

        var daysDifference = Math.floor(difference/1000/60/60/24);
        var dayString;
        if (dayString < 10)
          dayString = "0" + daysDifference.toString();
        else
          dayString = daysDifference.toString();

        difference -= daysDifference*1000*60*60*24;

        var hoursDifference = Math.floor(difference/1000/60/60);
        var hourString;
        if (hoursDifference < 10)
          hourString = "0" + hoursDifference.toString();
        else
          hourString = hoursDifference.toString();

        difference -= hoursDifference*1000*60*60;

        var minutesDifference = Math.floor(difference/1000/60);
        var minutesString;
        if (minutesDifference < 10)
          minutesString = "0" + minutesDifference.toString();
        else
          minutesString = minutesDifference.toString();

        difference -= minutesDifference*1000*60;
        var secondDifference = Math.floor(difference/1000);
        var secondString;
        if (secondDifference < 10)
          secondString = "0" + secondDifference.toString();
        else
          secondString = secondDifference.toString();

        this.dateTime = {
          days:dayString,
          hours: hourString,
          minutes: minutesString,
          seconds: secondString,
        };
    },
  }
}
</script>

<style>

</style>