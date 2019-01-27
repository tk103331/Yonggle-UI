<template>
  <div class="form-group">
    <label :class="labelClass">{{label}}</label>
    <div :class="inputClass">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import validators from "../../utils/validators.js";

export default {
  name: "YgFormGroup",
  props: {
    label: String,
    labelWidth: {
      type: String
    },
    inputWidth: {
      type: String
    }
  },
  computed: {
    labelClass() {
      if (this.labelWidth) {
        if (this.labelWidth.indexOf("-") > -1) {
          return "control-label col-" + this.labelWidth;
        }
      }
    },
    inputClass() {
      if (this.inputWidth) {
        if (this.inputWidth.indexOf("-") > -1) {
          return "col-" + this.inputWidth;
        }
      }
    }
  }
};
</script>


