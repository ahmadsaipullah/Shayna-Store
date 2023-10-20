<template>
      <!-- Partner Logo Section Begin -->
      <div class="partner-logo">
        <div class="container">
            <carousel :autoplay="2000"  :items-to-show="1">
          <slide v-for="slide in 3" :key="slide">
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-1.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-2.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-3.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-4.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-5.png" alt="" />
                    </div>
                </div>
            </slide>
<template #addons>
  <navigation/>
  <pagination/>
</template>
</carousel>
        </div>
    </div>
    <!-- Partner Logo Section End -->
</template>

<script>

import 'vue3-carousel/dist/carousel.css';
import {Carousel , Slide, Pagination, Navigation} from 'vue3-carousel';

    export default {
      name: "PartnerShyna",
      components: {
    Carousel , Slide, Pagination, Navigation
  }
    }
</script>

<style>
.logo-item{
    margin-right: 35px;
}
</style>