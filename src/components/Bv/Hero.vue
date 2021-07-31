<template>
  <div class="hero">
    <div class="title">
      <img
        src="images/celebrate.svg"
        loading="lazy"
        alt="Happy Bavatar Memoji"
      />
      <h1 class="heading">Black Avatars <br />for everyone, for free!</h1>
    </div>
    <div class="bodycontent">
      <div class="bodytext">
        Bavatars is a free crowd-sourced avatar gallery of Black people to use
        in your personal or commercial design projects or live apps.
      </div>
    <div class=heroBtn style="position:flex">
    <BvButton class="pd" goTo="Add Bavatar" />
      <button style="background-color:transparent; position:flex; color:white;" class="button pd" target="_blank" href="#"><img src="images/logo-figma-1.svg">Download Plugin </button>
  </div>
      <!-- <div class="text-block-7">Coming Live Soon!</div> -->
    </div>
    <div class="comingsoon">
      <h2 class="heading-2">PLUGINS COMING SOON TO</h2>
      <div class="herologos">
        <img
          src="images/logo-sketch-1.svg"
          loading="lazy"
          alt="Sketch logo"
          class="plogos"
        /><img
          src="images/xd_appicon_64-1.svg"
          loading="lazy"
          alt="Adobe XD logo"
          class="plogos"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
};
</script>
