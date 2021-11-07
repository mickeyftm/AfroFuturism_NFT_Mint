<template>
    <section class="symbol-women-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="tittle-sample">
              Adrinka Symbol
            </div>
            <p class="adrik-p-dec">Quisque mattis faucibus rhoncus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Morbi nisi diam, commodo sed finibus vitae, iaculis
              pellentesque diam. Praesent sodales dolor tellus, non egestas elit laoreet sed. Aliquam faucibus nisi
              rhoncus bibendum condimentum. Integer hendrerit dapibus fringilla. Aliquam fermentum ex vel aliquam
              posuere. Proin varius sed risus vel luctus. Sed vulputate imperdiet ante, eget malesuada dolor. Mauris
              faucibus nunc sit amet nibh auctor tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              euismod condimentum iaculis.
              Nullam elementum eros nibh, eget varius massa iaculis id.</p>
            <p class="adrik-p-dec">Ut vel porttitor eros. Proin justo nulla, ultricies nec facilisis sit amet, suscipit
              eu diam. Suspendisse nibh odio, sollicitudin pulvinar elementum quis, ornare mattis erat. Vivamus
              venenatis risus molestie magna tristique, placerat maximus mauris congue. Proin fermentum posuere tortor
              ut venenatis. Proin fringilla bibendum libero vitae eleifend. Phasellus ultrices dictum augue ut molestie.
              Etiam a enim a tellus imperdiet mattis eu ac lacus. Nulla convallis turpis eget leo eleifend accumsan. Ut
              eu justo vel diam convallis scelerisque quis et nulla. Donec quis ex est. Fusce ac consectetur lectus. Ut
              et nunc velit. Donec faucibus varius ipsum at bibendum. Maecenas faucibus ultricies magna, at
              viverra dolor vulputate eu. Donec gravida interdum orci, id lacinia mi ultricies eu.</p>
          </div>
        </div>
        <div v-if="!isMobile" class="row">
          <div class="col-md-3 mb-3" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/sam-2.png" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-3.png" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/sam-2.png" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-3.png" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
            </div>
          </div>
        </div>
        <div v-if="isMobile" class="row">
          <div class="col-md-3 mb-3 main-image-wraper" style="opacity:0.9;">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3 main-image-wraper" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/sam-2.png" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3 main-image-wraper" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-3.png" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3 main-image-wraper" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3 main-image-wraper" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3 main-image-wraper" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/sam-2.png" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3 main-image-wraper" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-3.png" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3 main-image-wraper" style="opacity:0.9">
            <div class="main-image-wraper-sam">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "symbol",
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
            }
        }
    }
</script>

<style>

</style>