<template>
  <div>
    <Header></Header>
    <About></About>
    <Sample></Sample>
    <Symbol_Info></Symbol_Info>
    <Roadmap></Roadmap>
    <Ourteam></Ourteam>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./header";
  import About from "./about";
  import Sample from "./sample";
  import Symbol_Info from "./symbol_info";
  import Roadmap from "./roadmap";
  import Ourteam from "./ourteam";

  export default {

    name: 'main',
    components: {Header, About, Sample, Symbol_Info, Roadmap, Ourteam},
    data() {
      return {
        windowWidth: window.innerWidth,
      }
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
    },
  }
</script>

<style>
</style>