<template>
  <div class="form-group">
    <label :class="labelClass">{{label}}</label>
    <div v-if="controlClass != ''" :class="controlClass">
      <slot></slot>
    </div>
    <slot v-else></slot>
    <span v-if="helpText != ''" class="help-block">{{helpText}}</span>
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
    controlWidth: {
      type: String
    },
    helpText: String
  },
  computed: {
    labelClass() {
      if (this.labelWidth) {
        if (this.labelWidth.indexOf("-") > -1) {
          return "control-label col-" + this.labelWidth;
        }
      }
    },
    controlClass() {
      if (this.controlWidth) {
        if (this.controlWidth.indexOf("-") > -1) {
          return "col-" + this.controlWidth;
        }
      }
      return "";
    }
  }
};
</script>


