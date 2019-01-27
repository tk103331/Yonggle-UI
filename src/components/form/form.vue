<template>
  <form :class="formClass">
    <slot></slot>
  </form>
</template>

<script>
import validators from "../../utils/validators.js";
export default {
  name: "YgForm",
  props: {
    type: {
      type: String,
      default: "vertical",
      validator: validators.oneOf(["vertical", "horizontal", "inline"])
    }
  },
  computed: {
    formClass() {
      return "form form-" + this.type;
    }
  }
};
</script>
