<template>
  <div>
    <Header></Header>
    <section class="about-sec-ma">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div v-if="!isMobile" class="about-main-area-home">
              <div class="about-image">
                <img src="../assets/img/about-img.jpg" class="img-fluid">
              </div>
              <div class="about-tittle-des">
                <h2>About Us</h2>
                <p>liquam eget ultricies tellus, in blandit risus. Aliquam imperdiet odio vel lobortis fringilla. Nulla
                  porta, nulla bibendum pharetra ullamcorper, est risus eleifend metus, faucibus rhoncus est felis non
                  libero. Phasellus luctus mauris leo, vel hendrerit ligula dapibus quis. Quisque tincidunt, turpis vel
                  posuere sodales, lectus dolor gravida arcu, tempus aliquam mi mi nec elit. Maecenas ornare, nulla
                  vitae pretium feugiat, lacus arcu varius erat, quis vehicula orci lectus ut augue.
                  Ut luctus magna sit amet lectus vulputate vestibulum.

                </p>
                <p> Sed accumsan sollicitudin nunc porttitor gravida. Nunc porttitor arcu sapien, ut accumsan ex
                  dignissim in. Pellentesque mollis convallis tellus, vel suscipit lectus. Quisque vitae erat in magna
                  interdum tincidunt eget at enim. Integer id ante est. Nullam pulvinar sem mi, in dapibus dolor
                  fringilla at. Nullam sem lectus, luctus in erat nec, consequat suscipit nisi. Morbi nisi risus,
                  rhoncus eu enim non, feugiat luctus magna.</p>
              </div>
            </div>
            <div v-if="isMobile" class="about-main-area-home-mobile">
              <div>
                <div class="tittle-sample">
                  About Us
                </div>
              </div>
              <div class="about-image">
                <img src="../assets/img/about-img.jpg" class="img-fluid">
              </div>
              <div>
                <p>liquam eget ultricies tellus, in blandit risus. Aliquam imperdiet odio vel lobortis fringilla. Nulla
                  porta, nulla bibendum pharetra ullamcorper, est risus eleifend metus, faucibus rhoncus est felis non
                  libero. Phasellus luctus mauris leo, vel hendrerit ligula dapibus quis. Quisque tincidunt, turpis vel
                  posuere sodales, lectus dolor gravida arcu, tempus aliquam mi mi nec elit. Maecenas ornare, nulla
                  vitae pretium feugiat, lacus arcu varius erat, quis vehicula orci lectus ut augue.
                  Ut luctus magna sit amet lectus vulputate vestibulum.
                </p>
                <p> Sed accumsan sollicitudin nunc porttitor gravida. Nunc porttitor arcu sapien, ut accumsan ex
                  dignissim in. Pellentesque mollis convallis tellus, vel suscipit lectus. Quisque vitae erat in magna
                  interdum tincidunt eget at enim. Integer id ante est. Nullam pulvinar sem mi, in dapibus dolor
                  fringilla at. Nullam sem lectus, luctus in erat nec, consequat suscipit nisi. Morbi nisi risus,
                  rhoncus eu enim non, feugiat luctus magna.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sample-women-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-0">
            <div class="tittle-sample">
              Sample Women
            </div>
          </div>
        </div>
        <div class="slider-sample">
          <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true">
            <div class="">
              <div class="main-image-wraper-sam">
                <div class="inner-image-wrap d-flex align-items-center">
                  <img src="../assets/img/samp-1.jpg" class="img-fluid">
                </div>
              </div>
            </div>
            <div class="">
              <div class="main-image-wraper-sam">
                <div class="inner-image-wrap d-flex align-items-center">
                  <img src="../assets/img/sam-2.png" class="img-fluid">
                </div>
              </div>
            </div>
            <div class="">
              <div class="main-image-wraper-sam">
                <div class="inner-image-wrap d-flex align-items-center">
                  <img src="../assets/img/samp-3.png" class="img-fluid">
                </div>
              </div>
            </div>
            <div class="">
              <div class="main-image-wraper-sam">
                <div class="inner-image-wrap d-flex align-items-center">
                  <img src="../assets/img/samp-1.jpg" class="img-fluid">
                </div>
              </div>
            </div>
            <div class="">
              <div class="main-image-wraper-sam">
                <div class="inner-image-wrap d-flex align-items-center">
                  <img src="../assets/img/samp-3.png" class="img-fluid">
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>
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
            <div class="main-image-wraper-sam-mobile">
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
    <section class="road-map-se">
      <div class="tittle-roap-mapp">road map</div>
    </section>
    <section v-if="!isMobile" class="road-2nd-mapp-sc">
      <div class="container">
        <div class="row custom-linee-us">
          <div class="col-md-6 ml-auto">
          </div>
          <div class="col-md-6 ">
            <div class="left-box-main-road">
              <div class="year-nub">
                2016
              </div>
              <div class="dec-p-road-pp">
                Ut at tincidunt nunc. Quisque interdum, tortor quis sodales hendrerit, quam arcu condimentum justo, non
                scelerisque elit odio sit amet arcu. Etiam imperdiet ligula quam, ut vulputate lectus vestibulum vitae.
                Aenean sed elit mi. Vestibulum vel nisl consequat, rhoncus justo vel, facilisis nunc. Morbi ut arcu
                tortor.
                Donec tellus augue, tempor quis nisi nec, dictum efficitur ligula. Curabitur pharetra blandit bibendum.
                Sed ultrices felis dictum blandit tincidunt. Cras malesuada arcu suscipit elementum consectetur. Aliquam
                at massa a leo viverra auctor. Donec gravida dapibus ligula, varius ultricies tortor venenatis vel.
              </div>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="left-box-main-road right-box-seet">
              <div class="year-nub">
                2016
              </div>
              <div class="dec-p-road-pp">
                Ut at tincidunt nunc. Quisque interdum, tortor quis sodales hendrerit, quam arcu condimentum justo, non
                scelerisque elit odio sit amet arcu. Etiam imperdiet ligula quam, ut vulputate lectus vestibulum vitae.
                Aenean sed elit mi. Vestibulum vel nisl consequat, rhoncus justo vel, facilisis nunc. Morbi ut arcu
                tortor.
                Donec tellus augue, tempor quis nisi nec, dictum efficitur ligula. Curabitur pharetra blandit bibendum.
                Sed ultrices felis dictum blandit tincidunt. Cras malesuada arcu suscipit elementum consectetur. Aliquam
                at massa a leo viverra auctor. Donec gravida dapibus ligula, varius ultricies tortor venenatis vel.
              </div>
            </div>
          </div>
          <div class="col-md-6 ml-auto">
          </div>
          <div class="col-md-6 ml-auto">
          </div>
          <div class="col-md-6 ">
            <div class="left-box-main-road">
              <div class="year-nub">
                2016
              </div>
              <div class="dec-p-road-pp">
                Ut at tincidunt nunc. Quisque interdum, tortor quis sodales hendrerit, quam arcu condimentum justo, non
                scelerisque elit odio sit amet arcu. Etiam imperdiet ligula quam, ut vulputate lectus vestibulum vitae.
                Aenean sed elit mi. Vestibulum vel nisl consequat, rhoncus justo vel, facilisis nunc. Morbi ut arcu
                tortor.
                Donec tellus augue, tempor quis nisi nec, dictum efficitur ligula. Curabitur pharetra blandit bibendum.
                Sed ultrices felis dictum blandit tincidunt. Cras malesuada arcu suscipit elementum consectetur. Aliquam
                at massa a leo viverra auctor. Donec gravida dapibus ligula, varius ultricies tortor venenatis vel.
              </div>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="left-box-main-road right-box-seet">
              <div class="year-nub">
                2016
              </div>
              <div class="dec-p-road-pp">
                Ut at tincidunt nunc. Quisque interdum, tortor quis sodales hendrerit, quam arcu condimentum justo, non
                scelerisque elit odio sit amet arcu. Etiam imperdiet ligula quam, ut vulputate lectus vestibulum vitae.
                Aenean sed elit mi. Vestibulum vel nisl consequat, rhoncus justo vel, facilisis nunc. Morbi ut arcu
                tortor.
                Donec tellus augue, tempor quis nisi nec, dictum efficitur ligula. Curabitur pharetra blandit bibendum.
                Sed ultrices felis dictum blandit tincidunt. Cras malesuada arcu suscipit elementum consectetur. Aliquam
                at massa a leo viverra auctor. Donec gravida dapibus ligula, varius ultricies tortor venenatis vel.
              </div>
            </div>
          </div>
          <div class="col-md-6 ml-auto">
          </div>
          <div class="col-md-6 ml-auto">
          </div>
          <div class="col-md-6 ">
            <div class="left-box-main-road">
              <div class="year-nub">
                2016
              </div>
              <div class="dec-p-road-pp">
                Ut at tincidunt nunc. Quisque interdum, tortor quis sodales hendrerit, quam arcu condimentum justo, non
                scelerisque elit odio sit amet arcu. Etiam imperdiet ligula quam, ut vulputate lectus vestibulum vitae.
                Aenean sed elit mi. Vestibulum vel nisl consequat, rhoncus justo vel, facilisis nunc. Morbi ut arcu
                tortor.
                Donec tellus augue, tempor quis nisi nec, dictum efficitur ligula. Curabitur pharetra blandit bibendum.
                Sed ultrices felis dictum blandit tincidunt. Cras malesuada arcu suscipit elementum consectetur. Aliquam
                at massa a leo viverra auctor. Donec gravida dapibus ligula, varius ultricies tortor venenatis vel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="isMobile" class="road-2nd-mapp-sc">
      <div class="container">
        <div class="row ">
          <div class="col-md-6 ml-auto">
          </div>
          <div class="col-md-6 ">
            <div class="left-box-main-road">
              <div class="year-nub">
                2016
              </div>
              <div class="dec-p-road-pp">
                Ut at tincidunt nunc. Quisque interdum, tortor quis sodales hendrerit, quam arcu condimentum justo, non
                scelerisque elit odio sit amet arcu. Etiam imperdiet ligula quam, ut vulputate lectus vestibulum vitae.
                Aenean sed elit mi. Vestibulum vel nisl consequat, rhoncus justo vel, facilisis nunc. Morbi ut arcu
                tortor.
                Donec tellus augue, tempor quis nisi nec, dictum efficitur ligula. Curabitur pharetra blandit bibendum.
                Sed ultrices felis dictum blandit tincidunt. Cras malesuada arcu suscipit elementum consectetur. Aliquam
                at massa a leo viverra auctor. Donec gravida dapibus ligula, varius ultricies tortor venenatis vel.
              </div>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="left-box-main-road right-box-seet">
              <div class="year-nub">
                2016
              </div>
              <div class="dec-p-road-pp">
                Ut at tincidunt nunc. Quisque interdum, tortor quis sodales hendrerit, quam arcu condimentum justo, non
                scelerisque elit odio sit amet arcu. Etiam imperdiet ligula quam, ut vulputate lectus vestibulum vitae.
                Aenean sed elit mi. Vestibulum vel nisl consequat, rhoncus justo vel, facilisis nunc. Morbi ut arcu
                tortor.
                Donec tellus augue, tempor quis nisi nec, dictum efficitur ligula. Curabitur pharetra blandit bibendum.
                Sed ultrices felis dictum blandit tincidunt. Cras malesuada arcu suscipit elementum consectetur. Aliquam
                at massa a leo viverra auctor. Donec gravida dapibus ligula, varius ultricies tortor venenatis vel.
              </div>
            </div>
          </div>
          <div class="col-md-6 ml-auto">
          </div>
          <div class="col-md-6 ml-auto">
          </div>
          <div class="col-md-6 ">
            <div class="left-box-main-road">
              <div class="year-nub">
                2016
              </div>
              <div class="dec-p-road-pp">
                Ut at tincidunt nunc. Quisque interdum, tortor quis sodales hendrerit, quam arcu condimentum justo, non
                scelerisque elit odio sit amet arcu. Etiam imperdiet ligula quam, ut vulputate lectus vestibulum vitae.
                Aenean sed elit mi. Vestibulum vel nisl consequat, rhoncus justo vel, facilisis nunc. Morbi ut arcu
                tortor.
                Donec tellus augue, tempor quis nisi nec, dictum efficitur ligula. Curabitur pharetra blandit bibendum.
                Sed ultrices felis dictum blandit tincidunt. Cras malesuada arcu suscipit elementum consectetur. Aliquam
                at massa a leo viverra auctor. Donec gravida dapibus ligula, varius ultricies tortor venenatis vel.
              </div>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="left-box-main-road right-box-seet">
              <div class="year-nub">
                2016
              </div>
              <div class="dec-p-road-pp">
                Ut at tincidunt nunc. Quisque interdum, tortor quis sodales hendrerit, quam arcu condimentum justo, non
                scelerisque elit odio sit amet arcu. Etiam imperdiet ligula quam, ut vulputate lectus vestibulum vitae.
                Aenean sed elit mi. Vestibulum vel nisl consequat, rhoncus justo vel, facilisis nunc. Morbi ut arcu
                tortor.
                Donec tellus augue, tempor quis nisi nec, dictum efficitur ligula. Curabitur pharetra blandit bibendum.
                Sed ultrices felis dictum blandit tincidunt. Cras malesuada arcu suscipit elementum consectetur. Aliquam
                at massa a leo viverra auctor. Donec gravida dapibus ligula, varius ultricies tortor venenatis vel.
              </div>
            </div>
          </div>
          <div class="col-md-6 ml-auto">
          </div>
          <div class="col-md-6 ml-auto">
          </div>
          <div class="col-md-6 ">
            <div class="left-box-main-road">
              <div class="year-nub">
                2016
              </div>
              <div class="dec-p-road-pp">
                Ut at tincidunt nunc. Quisque interdum, tortor quis sodales hendrerit, quam arcu condimentum justo, non
                scelerisque elit odio sit amet arcu. Etiam imperdiet ligula quam, ut vulputate lectus vestibulum vitae.
                Aenean sed elit mi. Vestibulum vel nisl consequat, rhoncus justo vel, facilisis nunc. Morbi ut arcu
                tortor.
                Donec tellus augue, tempor quis nisi nec, dictum efficitur ligula. Curabitur pharetra blandit bibendum.
                Sed ultrices felis dictum blandit tincidunt. Cras malesuada arcu suscipit elementum consectetur. Aliquam
                at massa a leo viverra auctor. Donec gravida dapibus ligula, varius ultricies tortor venenatis vel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="our-team-sec-main">
      <div class="container">
        <div v-if="!isMobile"  class="row">
          <div class="col-md-12">
            <div class="tittle-sample mb-30">
              our team
            </div>
          </div>
          <div class="col-md-3">
            <div class="main-image-wraper-teamm">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
              <div class="team-image-bottom-tittle">
                <h2>Name Here</h2>
                <p>Project Lead</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="main-image-wraper-teamm">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/sam-2.png" class="img-fluid">
              </div>
              <div class="team-image-bottom-tittle">
                <h2>Name Here</h2>
                <p>Project Lead</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="main-image-wraper-teamm">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-3.png" class="img-fluid">
              </div>
              <div class="team-image-bottom-tittle">
                <h2>Name Here</h2>
                <p>Project Lead</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="main-image-wraper-teamm">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
              <div class="team-image-bottom-tittle">
                <h2>Name Here</h2>
                <p>Project Lead</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isMobile"  class="row">
          <div class="col-md-12">
            <div class="tittle-sample mb-30">
              our team
            </div>
          </div>
          <div class="col-md-3 main-image-wraper-teamm-image">
            <div class="main-image-wraper-teamm">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
              <div class="team-image-bottom-tittle">
                <h2>Name Here</h2>
                <p>Project Lead</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 main-image-wraper-teamm-image">
            <div class="main-image-wraper-teamm">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/sam-2.png" class="img-fluid">
              </div>
              <div class="team-image-bottom-tittle">
                <h2>Name Here</h2>
                <p>Project Lead</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 main-image-wraper-teamm-image">
            <div class="main-image-wraper-teamm">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-3.png" class="img-fluid">
              </div>
              <div class="team-image-bottom-tittle">
                <h2>Name Here</h2>
                <p>Project Lead</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 main-image-wraper-teamm-image">
            <div class="main-image-wraper-teamm">
              <div class="inner-image-wrap d-flex align-items-center">
                <img src="../assets/img/samp-1.jpg" class="img-fluid">
              </div>
              <div class="team-image-bottom-tittle">
                <h2>Name Here</h2>
                <p>Project Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

  import Header from "./header";

  export default {

    name: 'main',
    components: {Header, VueSlickCarousel},
    data() {
      return {
        settings: {
          "focusOnSelect": true,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 1,
        },
        windowWidth: window.innerWidth,
      }
    },
    computed: {
      isMobile() {
        return this.windowWidth < 850;
      },
    },
  }
</script>


<style>

  @import "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css";

  @import "../assets/css/main.css";

  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css";

  @import "https://fonts.googleapis.com";

  @import "https://fonts.gstatic.com";

  @import "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css";

  @import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";

  @import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

  @import "../assets/slick/slick.css";

@import "../assets/slick/slick-theme.css";

</style>