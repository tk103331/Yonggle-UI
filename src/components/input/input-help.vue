<template>
  <span :class="helpClass">
    <slot></slot>
  </span>
</template>

<script>
import validators from "../../utils/validators.js";
export default {
  name: "YgInputHelp",
  props: {
    align: {
      type: String,
      default: "left",
      validator: validators.oneOf(["left", "center", "right"])
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    helpClass() {
      let cls = ["yg-input-help"];
      if (this.inline) {
        cls.push("help-inline");
      } else {
        cls.push("help-block");
      }
      if (this.align) {
        cls.push("text-" + this.align);
      }
      return cls;
    }
  }
};
</script>

