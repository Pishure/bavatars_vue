<template>
  <div class="footer">
    <div class="footercontent"><img src="images/pbyp.svg" loading="lazy" alt="Product by Pishure" class="image-7"></div>
    <div class="footerlabels">
      <router-link :to="{ name: 'Privacy' }" class="link">Privacy Policy</router-link>
      <a href="mailto:hello@getpishure.com?subject=Bavatars%20Enquiry" class="link">Contact Us</a>
      <a href="#" class="link">Donate 💖</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bv-footer',
};
</script>
