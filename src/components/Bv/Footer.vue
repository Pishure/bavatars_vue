<template>
  <div class="footer">
    <div class="footercontent"><img src="images/pbyp.svg" loading="lazy" alt="Product by Pishure" class="image-7"></div>
    <div class="footerlabels">
      <router-link :to="{ name: 'Privacy' }" class="link">Privacy Policy</router-link>
      <a href="mailto:hello@getpishure.com?subject=Bavatars%20Enquiry" class="link">Contact Us</a>
      <a href="https://useshukran.com/cr/pishure" class="link">Donate 💖</a>
    </div>
  </div>
  <div style="align:left; position:fixed; left:3%; top:auto; right:auto; bottom:3%;">
      <a href="https://www.producthunt.com/posts/bavatars-by-pishure?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bavatars-by-pishure" target="_blank">
  <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=300702&theme=light" alt="Bavatars by Pishure - Black Avatars for everyone, for free! | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
  </div>
</template>

<script>
export default {
  name: 'bv-footer',
};
</script>
