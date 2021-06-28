<template>
  <div class="review-bavatar">
    <div class="bavatarimg" id="bavatarimg"></div>
    <div class="review">
      <h3 class="heading-11">Hey {{ userData ? userData.name.split(' ')[0] : 'User' }}</h3>
      <p class="paragraph-6">Thanks for contributing your Avatar (avi) to Bavatars! To help designers and creators easily search for the Bavatar they want, please help us fill in the info below!</p>
      <div class="w-form">
        <form @submit.prevent="create" id="wf-form-Filter-Form" name="wf-form-Filter-Form" data-name="Filter Form" class="reviewform">
          <label for="Gender" class="reviewlabel">Gender</label>
          <select v-model="form.gender" id="Gender" name="Gender" data-name="Gender" required="true" class="reviewfield w-select">
            <option value="">Select one...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
          </select>
          <label for="Age-Range-2" class="reviewlabel">Age Range</label>
          <select v-model="form.age_range" id="Age-Range-2" name="Age-Range" data-name="Age Range" required="" class="reviewfield w-select">
            <option value="">Select one...</option>
            <option value="18-25">18-25</option>
            <option value="26-39">26-39</option>
            <option value="40+">40+</option>
          </select>
          <label for="Nature-of-Avatar" class="reviewlabel">Nature of Avatar (avi)</label>
          <select v-model="form.nature" id="Nature-of-Avatar" name="Nature-of-Avatar" data-name="Nature of Avatar" required="" class="reviewfield w-select">
            <option value="">Select one...</option>
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
          </select>
          <input type="submit" value="Submit" data-wait="Please wait..." class="button review w-button">
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div style="display: block" v-show="hasError" id="w-form-fail" class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'review',
  data() {
    return {
      code: null,
      userData: null,
      form: {
        url: '',
        gender: '',
        age_range: '',
        nature: '',
      },
      hasError: false,
      imageEl: null,
    };
  },
  mounted() {
    const { code } = this.$route.query;
    const provider = 'linkedin';
    if (code) {
      axios.get(`https://bavatar.herokuapp.com/api/auth/callback?code=${code}&provider=${provider}`)
        .then((res) => {
          this.userData = res.data;
          this.getHdImage(this.userData.token);
        });
    } else {
      this.$router.push('/');
    }
  },
  methods: {
    create() {
      if (!this.form.gender || !this.form.age_range || !this.form.nature) {
        this.hasError = true;
        return false;
      }
      axios.post('https://bavatar.herokuapp.com/api/avatar', this.form)
        .then((res) => {
          if (res) {
            this.$router.replace('/explore-bavatars');
          }
        })
        .catch((e) => {
          this.hasError = true;
          throw new Error(e.message);
        });
      return true;
    },
    getHdImage(token) {
      const el = document.getElementById('bavatarimg');

      axios.post('https://bavatar.herokuapp.com/api/avatar/get-hd-image', { token })
        .then((res) => {
          this.form.url = res.data.identifier;
          el.style.setProperty('background', `grey url(${res.data.identifier}) no-repeat center`);
          el.style.setProperty('background-size', 'cover');
        });
    },
  },
};
</script>
