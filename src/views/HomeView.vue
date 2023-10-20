<template>
  <div class="home">
      <HeaderShyna/> 
      <HeroShyna/>
      <WomenShyna/>
      <InstagramShyna/>
      <PartnerShyna/>
      <FooterShyna/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderShyna from '@/components/HeaderShyna.vue';
import HeroShyna from '@/components/HeroShyna.vue';
import WomenShyna from '@/components/WomenShyna.vue';
import InstagramShyna from '@/components/InstagramShyna.vue';
import PartnerShyna from '@/components/PartnerShyna.vue';
import FooterShyna from '@/components/FooterShyna.vue';




export default {
  name: 'HomeView',
  components: {
    HeaderShyna, HeroShyna, WomenShyna,
    InstagramShyna, PartnerShyna, FooterShyna
}
};
</script>
