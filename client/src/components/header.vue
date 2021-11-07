<template>
<div>
  <section class="sec-main-top" style="font-size:40px; color:white">
    <div v-if="!isMobile" class="connect-image-content" style="font-size:18px;">
      <img class="img-fluid" style="padding:10px 20px;" src="../assets/img/dogii.png">Connect MetaMask
    </div>
    <div v-if="isMobile" class="connect-image-content-mobile" style="font-size:18px;">
      <img class="img-fluid" width="50px" height="50px" style="padding:10px" src="../assets/img/dogii.png">Connect MetaMask
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="top-inner-counter-boxes">
            <h2 class="he-top-innn">countdown to min:</h2>
            <div class="main-three-mint-box">
              <div class="box-m-1">
                <h2>{{ formatedCountdown.hours || "00" }}</h2>
                <p>Hour</p>
              </div>
              <div class="box-m-1">
                <h2>{{ formatedCountdown.mins || "00" }}</h2>
                <p>mint</p>
              </div>
              <div class="box-m-1">
                <h2>{{ formatedCountdown.sec || "00" }}</h2>
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
              <h2>100/10000</h2>
              <p>Mint Price: 0.10 ETH</p>
              <div class="number">
                <span class="minus" @click="operator('-')"> - </span>
                <div>
                  <input type="text" style="font-size: 30px; width:65px" v-model="count" value="1"/>
                  <h3 class="titlle-input ">{{count}} mint</h3>
                </div>
                <span class="plus" @click="operator('+')"> + </span>
              </div>
              <button type="button" class="btn btn-custom-mint">mint</button>
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

export default {
  name: "header",
  data() {
    return {
      countdown: 7000,
      count:0,
      windowWidth: window.innerWidth,
    }
  },

  mounted() {
    const stopCountdown = setInterval(() => {
      console.log("current countdown", this.countdown);
      this.countdown -= 1;
      if (!this.countdown) clearInterval(stopCountdown);
    }, 1000);

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
  },
  methods:{
    operator(sym){
      if (sym=="+"){
        this.count++
      }else {
        if (this.count==0){
          return
        }
        this.count--;
      }
    }
  }
}
</script>

<style scoped>

</style>