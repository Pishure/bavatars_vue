<template>
  <div class="bavatars">
    <div class="searchheading">
      <h1 class="heading-10">Bavatars - Black Avatars for free!</h1>
      <div class="bavatarssearch w-form">
        <form id="email-form" name="email-form" data-name="Email Form" class="form">
          <div class="headerwrapper">
            <input type="text" class="bavatars_search w-input" maxlength="256" name="Bavatars-Search" data-name="Bavatars Search" placeholder="Search with keywords..." id="Bavatars-Search">
            <a @click="downloadImages" v-if="selectedItems.length" href="#" class="downloadbtn w-button">Download</a>
          </div>
          <div class="text-block-8"><span class="text-span-6">Available keywords:</span> Male, Female, Non-binary, Professional, Casual</div>
          <div class="" style="margin-top:10px; color:#fff;">Hi 👋🏼, Only One image can downloaded at a time, for now</div>
          <div id="bavatarsContainer" class="bavatarscontainer">
            <ul id="Bavatars" role="list" class="bavatarsitems w-list-unstyled">
              <li v-for="(item, i) in bavatars" :key="i" class="bavataritem">
                <label class="w-checkbox">
                  <div :style="`background: url(${item.url})`" class="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div><input v-model="item.selected" type="checkbox" id="Bavatar" name="Bavatar" data-name="Bavatar" style="opacity:0;position:absolute;z-index:-1"><span for="Bavatar" class="checkbox-label w-form-label">Checkbox</span>
                </label>
              </li>
            </ul>
          </div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .w-checkbox-input {
    &--inputType-custom {
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: cover !important;
    }
  }
</style>
<script>
import axios from 'axios';

export default {
  name: 'explore',
  data() {
    return {
      bavatars: [],
      selectedItems: [],
    };
  },
  watch: {
    bavatars: {
      deep: true,
      handler() {
        this.selectedItems = this.bavatars.filter((x) => x.selected);
      },
    },
  },
  methods: {
    getBavatars() {
      axios.get('https://bavatar.herokuapp.com/api/avatar')
        .then((res) => {
          this.bavatars = res.data.data;
          console.log(res.data.data);
        });
    },
    downloadImages() {
      const item = this.selectedItems[0];
      this.download(item.url, item.created_at);
    },
    toDataURL(url) {
      return fetch(url).then((response) => response.blob()).then((blob) => URL.createObjectURL(blob));
    },
    async download(url, name) {
      const a = document.createElement('a');
      a.href = await this.toDataURL(url);
      a.download = `${name}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
  mounted() {
    this.getBavatars();
  },
};
</script>
