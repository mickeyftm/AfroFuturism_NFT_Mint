<template>
  <div id="app">
    <WomanWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import WomanWorld from './components/WomanWorld.vue'

export default {
  name: 'App',
  components: {
    WomanWorld
  }
}
</script>

<style>
  .sec-main-top{
    background: #01100f;
    background-image: url('./assets/img/topback.png');
    background-repeat: no-repeat;
    background-position: center;
    font-size:40px; 
    color:white;
    padding-bottom: 100px;
  }

  .symbol-women-sec {
    padding-top:50px;
    padding-bottom:250px;
    background: #01100f;
    background-image: url('./assets/img/secondback_1.png');
    background-repeat: no-repeat;
    background-position-x:center;
    background-position-y:bottom;
  }

  .road-map-se {
    background: #01100f;
    background-image: url('./assets/img/secondback_2.png');
    background-repeat: no-repeat;
    background-position-x:center;
    background-position-y:top;
  }

  .road-map-se-content {
    position: relative;
    bottom: 0;
    left: 41%;
  }

  .road-2nd-mapp-sc {
    background: #01100f;
    position: relative;
    background-image: url('./assets/img/roadmap-bg.png');
    background-repeat: no-repeat;
    background-position-x:center;
    background-position-y:bottom;
    padding-bottom:100px;
  }

  .our-team-sec-main {
    position: relative;
    padding-bottom: 10rem;
    background-image: url('./assets/img/about-bg.png');
    background-repeat: no-repeat;
    background-color: #01100f;
    background-position-x:center;
    background-position-y:top;
    margin-top: 0px;
  }

</style>
