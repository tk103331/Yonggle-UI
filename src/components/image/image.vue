<template>
  <img :src="src" :alt="alt" :title="title" :class="imgClass">
</template>

<script>
export default {
  name: "YgImage",
  props: {
    src: String,
    alt: String,
    title: String,
    type: String,
    responsive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imgClass() {
      return (
        "img" +
        (this.responsive ? " img-responsive" : "") +
        (this.type ? " img-" + this.type : "")
      );
    }
  }
};
</script>

