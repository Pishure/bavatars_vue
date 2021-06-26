<template>
  <div class="body-content w-container">
    <BvNavbar />
    <router-view/>
    <BvFooter />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    BvNavbar: () => import('./components/Bv/Nav/Navbar.vue'),
    BvFooter: () => import('./components/Bv/Footer.vue'),
  },
};
</script>
