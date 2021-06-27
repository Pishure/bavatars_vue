<template>
  <div class="review-bavatar">
    <div class="bavatarimg"></div>
    <div class="review">
      <h3 class="heading-11">Hey [Name]!</h3>
      <p class="paragraph-6">Thanks for contributing your Avatar (avi) to Bavatars! To help designers and creators easily search for the Bavatar they want, please help us fill in the info below!</p>
      <div class="w-form">
        <form id="wf-form-Filter-Form" name="wf-form-Filter-Form" data-name="Filter Form" class="reviewform"><label for="Gender" class="reviewlabel">Gender</label><select id="Gender" name="Gender" data-name="Gender" required="" class="reviewfield w-select">
            <option value="">Select one...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select><label for="Age-Range-2" class="reviewlabel">Age Range</label><select id="Age-Range-2" name="Age-Range" data-name="Age Range" required="" class="reviewfield w-select">
            <option value="">Select one...</option>
            <option value="18-25">18-25</option>
            <option value="26-39">26-39</option>
            <option value="40+">40+</option>
          </select><label for="email" class="reviewlabel">Nature of Avatar (avi)</label><select id="Nature-of-Avatar" name="Nature-of-Avatar" data-name="Nature of Avatar" required="" class="reviewfield w-select">
            <option value="">Select one...</option>
            <option value="Professional">Professional</option>
            <option value="Casual">Casual</option>
          </select><input type="submit" value="Submit" data-wait="Please wait..." class="button review w-button"></form>
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

<script>
import axios from 'axios';

export default {
  name: 'review',
  data() {
    return {
      code: null,
    };
  },
  mounted() {
    const { code } = this.$route.query;
    const provider = 'linkedin';
    if (code) {
      axios.get(`https://bavatar.herokuapp.com/api/auth/callback?code=${code}&provider=${provider}`)
        .then((res) => {
          console.log(res.data);
        });
    } else {
      this.$router.push('/');
    }
  },
};
</script>
