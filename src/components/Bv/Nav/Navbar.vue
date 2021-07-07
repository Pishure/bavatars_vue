<template>
  <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navbar w-nav">
    <div class="container w-container">
      <div class="navlogo">
        <router-link to="/" class="brand w-nav-brand"><img src="images/bavatars-logo.svg" loading="lazy" alt="Bavatars Logo"></router-link>
        <router-link to="/" rel="noreferrer" href="http://getpishure.com" target="_blank" class="w-inline-block"><img src="images/by-Pishure.svg" loading="lazy" alt="by Pishure logo"></router-link>
      </div>
      <nav role="navigation" class="nav-menu w-nav-menu">
        <router-link :to="{ name: 'Explore Bavatars' }" class="nav-link w-nav-link">Bavatars</router-link>
        <router-link to="#" class="nav-link w-nav-link">Plugins</router-link>
        <a href="#" class="nav-link w-nav-link">API</a>
        <div data-hover="1" data-delay="0" class="nav-link w-dropdown">
          <div class="w-dropdown-toggle" @click="showSubnav">
            <div class="icon w-icon-dropdown-toggle"></div>
            <div class="text-block">About</div>
          </div>
          <nav :style="`display: ${subnav? 'block' : 'none'}; background: transparent`" id="subnav" class="dropdown-list w-dropdown-list">
            <router-link :to="{ name: 'Privacy' }" class="dropdown-link w-dropdown-link">Privacy Policy</router-link>
            <router-link :to="{ name: 'Contributors' }" class="dropdown-link w-dropdown-link">Contributors</router-link>
          </nav>
        </div>
        <BvButton goTo="Add Bavatar" />
      </nav>
      <div @click="showMobileNav" class="menu-button w-nav-button">
        <div class="icon-3 w-icon-nav-menu"></div>
      </div>
    </div>
    <nav v-if="mobileNav" style="background: black; transform: translateY(0px) translateX(0px); transition: transform 400ms ease 0s;"  role="navigation" class="nav-menu w-nav-menu mobile-nav" data-nav-menu-open="">
      <router-link :to="{ name: 'Explore Bavatars' }" class="nav-link w-nav-link w--nav-link-open">Bavatars</router-link>
      <router-link to="#" class="nav-link w-nav-link w--nav-link-open" style="">API</router-link>
      <router-link to="#" class="nav-link w-nav-link w--nav-link-open" style="">Plugins</router-link>
      <router-link :to="{ name: 'Contributors' }" class="nav-link w-nav-link w--nav-link-open" style="">Contributors</router-link>
      <router-link :to="{ name: 'Privacy' }" class="nav-link w-nav-link w--nav-link-open" style="">Privacy Policy</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'bv-navbar',
  data() {
    return {
      subnav: false,
      mobileNav: false,
    };
  },
  watch: {
    $route(v) {
      if (v) {
        this.subnav = false;
        this.mobileNav = false;
      }
    },
  },
  methods: {
    showSubnav() {
      // eslint-disable-next-line no-unused-expressions
      this.subnav ? this.subnav = false : this.subnav = true;
    },
    showMobileNav() {
      // eslint-disable-next-line no-unused-expressions
      this.mobileNav ? this.mobileNav = false : this.mobileNav = true;
    },
  },
};
</script>

<style lang="scss">
  .nav-link::hover {
    color: rgb(233, 227, 227) !important;
  }
</style>
