<template>
  <div class="termsofuse">
    <div class="div-block-2"><img src="images/wait.svg" loading="lazy" alt="Bavatars Agree Memoji" class="image-4">
      <h3 class="heading-8">Just before you add your bavatar;</h3>
    </div>
    <div class="contributor">
      <div id="check">
        <h3 class="heading-9">Terms of Use</h3>
        <div class="text-block-5">Your image (Bavatar) can be used freely by anyone in live websites, screenshots, mockups, posters, etc. You are recognisable in the image and it will never be used in adult, racist or discriminating content. <br><br>You have the copyright rights of your image (Bavatar), and <span class="text-span">Bavatars</span> will not store or claim to own the rights to it. </div>
        <p class="paragraph-5">If you have any other concerns please email us <span class="text-span-2">hello@getpishure.com</span></p>
        <div class="add-buttons">
          <form action="https://bavatar.herokuapp.com/api/auth/redirect?provider=linkedin" method="post">
            <button type="submit" class="button linkedin w-button">Add via <span class="text-span-7">  LinkedIn </span></button>
          </form>
          <a href="#" class="button linkedin twiiter w-button"><span class="text-span-7"> Coming Soon </span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'terms-of-use',
  methods: {
    oauth(provider) {
      axios.get(`https://bavatar.herokuapp.com/api/auth/redirect?provider=${provider}`)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
