<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YgContainer",
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    containerClass() {
      if (this.fluid) {
        return "container-fluid";
      } else {
        return "container";
      }
    }
  }
};
</script>

