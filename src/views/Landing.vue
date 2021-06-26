<template>
  <div>
    <bv-hero />
    <div class="fordesigners">
      <div class="dtitle"><img src="images/designers.svg" loading="lazy" alt="Bavatar Memoji Designer" class="image-8">
        <h3 class="heading-3">FOR DESIGNERS</h3>
        <h4 class="heading-4">Crisp up your designs with diverse faces that look like you!</h4>
      </div>
      <div class="dcontent">
        <div id="check" class="crios"><img src="images/phone.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, 411px" srcset="images/phone-p-500.png 500w, images/phone-p-800.png 800w, images/phone-p-1080.png 1080w, images/phone.png 1140w" alt="iPhone with Bavatars" class="image-2"><img src="images/pictures.svg" loading="lazy" alt="Bavatars" class="image"></div>
        <div class="blurgradient"></div>
      </div>
    </div>
    <div class="fordevelopers">
      <div class="dtitle">
        <img src="images/forDevelopers.svg" loading="lazy" alt="Bavatars Memoji wink">
        <h3 class="heading-3">FOR DEVELOPERS</h3>
        <h4 class="heading-4">Embed unlimited Bavatars directly in your apps!</h4>
      </div>
      <div class="w-layout-grid grid">
        <div class="snipquery"><img src="images/codeSnip.svg" loading="lazy" alt="Bavatars Code Snippet " class="image-9">
          <p class="paragraph">Query String Parameters<br><span class="bodytxt">With the Bavatars API, you can create a GET Request in your app based on several parameters </span></p>
          <div class="stringparameters">
            <div class="string">
              <div class="text-block-4">🔍 Search</div>
            </div>
            <div class="string">
              <div class="text-block-4">🗂 Filter</div>
            </div>
            <div class="string">
              <div class="text-block-4">💁🏽 Gender</div>
            </div>
            <div class="string">
              <div class="text-block-4">😒 Emotion</div>
            </div>
          </div>
          <div class="stringparameters">
            <div class="string">
              <div class="text-block-4">🙎🏽‍♂️ Age</div>
            </div>
            <div class="string">
              <div class="text-block-4">🥳 Popularity</div>
            </div>
            <div class="string">
              <div class="text-block-4">👨🏽‍🦳 Hair Color</div>
            </div>
          </div>
        </div>
        <div class="phoneimg"><img src="images/Phone2.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 34vw, (max-width: 1439px) 28vw, 400px" srcset="images/Phone2-p-800.png 800w, images/Phone2-p-1080.png 1080w, images/Phone2.png 1098w" alt="Bavatars API GET Request" class="image-3"></div>
      </div>
      <div class="balls _1"></div>
    </div>
    <div class="footercta">
      <div class="balls _4"></div>
      <h5 class="heading-5">Contribute to Bavatars!</h5>
      <p class="paragraph-3">Help creators have even more diverse options for their projects, this would improve representation for black people in digital products.</p>
      <BvButton class="pd" goTo="Add Bavatar" />
    </div>
  </div>
</template>

<script>
import BvHero from '../components/Bv/Hero.vue';

export default {
  name: 'landing',
  components: {
    BvHero,
  },
};
</script>
