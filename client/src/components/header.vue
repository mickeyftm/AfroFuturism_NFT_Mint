<template>
  <div>
    <section v-if="!isMobile" class="sec-main-top">
      <div class="connect-image-content">
        <img class="img-fluid" style="padding:10px 20px;" src="../assets/img/dogii.png">Connect MetaMask
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="top-inner-counter-boxes">
              <h2 class="he-top-innn">Countdown to mint :</h2>
              <div class="main-three-mint-box">
                <div class="box-m-1">
                  <h2>25</h2>
                  <p>Days</p>
                </div>
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
                    <input type="text" style="font-size: 30px; width:65px; margin-bottom:3px" v-model="count" value="1"/>
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
                  <h2>25</h2>
                  <p>Days</p>
                </div>
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
                <div style="font-size:24px">AfroFuturism</div>
                <p>Nullam vehicula, dolor et ornare pellentesque, turpis massa auc</p>
              </div>
              <div class="box-counter-1-mobile">
                <div style="font-size:20px">100/10000</div>
                <div style="font-size:15px">Mint Price: 0.10 ETH</div>
                <div class="number-mobile">
                  <span class="minus" @click="operator('-')"> - </span>
                  <div>
                    <input type="text" style="font-size: 30px; width:50px; margin-bottom:3px; text-align:center" v-model="count" value="1"/>
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

<style>

</style>