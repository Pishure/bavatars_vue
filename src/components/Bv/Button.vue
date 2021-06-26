<template>
  <a :href="href" @click="goToOrEmit" class="button w-button">{{ label }}</a>
</template>

<script>
export default {
  name: 'bv-button',
  props: {
    label: {
      type: String,
      default: () => 'Add your Avatar',
    },
    href: {
      type: String,
      default: '#',
    },
    goTo: {
      type: String,
      required: false,
    },
  },
  methods: {
    goToOrEmit() {
      this.$emit('clicked');
      if (this.goTo) {
        this.$router.push({ name: this.goTo });
      }
    },
  },
};
</script>
