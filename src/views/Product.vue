<template>
  <div class="product">
    <HeaderShyna />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more text-left">
              <router-link :to="{ name: 'home' }"
                ><i class="fa fa-home"></i>Home</router-link
              >
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="gambar_default" alt="" />
                </div>
                <div class="product-thumbs">
                  <carousel
                    :items-to-show="3"
                    class="product-thumbs-track ps-slider"
                  >
                    <slide v-for="(thumb, index) in thumbs" :key="index">
                      <div
                        class="pt"
                        @click="changeImage(thumb)"
                        :class="thumbs == gambar_default ? 'active' : ''"
                      >
                        <img :src="thumb" alt="" />
                      </div>
                    </slide>
                    <template #addons>
                      <navigation />
                      <pagination />
                    </template>
                  </carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details text-left">
                  <div class="pd-title">
                    <span>oranges</span>
                    <h3>Pure Pineapple</h3>
                  </div>
                  <div class="pd-desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis, error officia. Rem aperiam laborum voluptatum
                      vel, pariatur modi hic provident eum iure natus quos non a
                      sequi, id accusantium! Autem.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quam possimus quisquam animi, commodi, nihil voluptate
                      nostrum neque architecto illo officiis doloremque et
                      corrupti cupiditate voluptatibus error illum. Commodi
                      expedita animi nulla aspernatur. Id asperiores blanditiis,
                      omnis repudiandae iste inventore cum, quam sint molestiae
                      accusamus voluptates ex tempora illum sit perspiciatis.
                      Nostrum dolor tenetur amet, illo natus magni veniam quia
                      sit nihil dolores. Commodi ratione distinctio harum
                      voluptatum velit facilis voluptas animi non laudantium, id
                      dolorem atque perferendis enim ducimus? A exercitationem
                      recusandae aliquam quod. Itaque inventore obcaecati, unde
                      quam impedit praesentium veritatis quis beatae ea atque
                      perferendis voluptates velit architecto?
                    </p>
                    <h4>$495.00</h4>
                  </div>
                  <div class="quantity">
                    <router-link
                      class="primary-btn pd-cart"
                      :to="{ name: 'card' }"
                      >Add To Cart</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->

    <RelateShyna />
    <FooterShyna />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderShyna from "@/components/HeaderShyna.vue";
import RelateShyna from "@/components/RelateShyna.vue";
import FooterShyna from "@/components/FooterShyna.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Product",
  components: {
    HeaderShyna,
    RelateShyna,
    FooterShyna,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      gambar_default: "img/mickey1.jpg",
      thumbs: [
        "img/mickey1.jpg",
        "img/mickey2.jpg",
        "img/mickey3.jpg",
        "img/mickey4.jpg",
      ],
    };
  },

  methods: {
    changeImage(urlImage) {
      this.gambar_default = urlImage;
    },
  },
};
</script>
