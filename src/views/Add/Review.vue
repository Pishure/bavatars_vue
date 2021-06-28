<template>
  <div class="review-bavatar">
    <div class="bavatarimg" id="bavatarimg"></div>
    <div class="review">
      <h3 class="heading-11">Hey {{ userData ? userData.name.split(' ')[0] : 'User' }}</h3>
      <p class="paragraph-6">Thanks for contributing your Avatar (avi) to Bavatars! To help designers and creators easily search for the Bavatar they want, please help us fill in the info below!</p>
      <div class="w-form">
        <form @submit="create" id="wf-form-Filter-Form" name="wf-form-Filter-Form" data-name="Filter Form" class="reviewform">
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
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .bavatarimg {
    background: url('https://media-exp1.licdn.com/dms/image/C4D03AQGRSlDdydsmNA/profile-displayphoto-shrink_100_100/0/1572429088154?e=1630540800&v=beta&t=OWhvp6A4GlaXCR338y8O6TmG_N8_yyC7aoYhFCbxzvA');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
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

    },
    getHdImage(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios.get('https://api.linkedin.com/v2/me?projection=(profilePicture(displayImage~:playableStreams))')
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>
