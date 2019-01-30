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
    size: {
      type: String,
      default: 'md',
      validator: validators.oneOf(['xs','sm','md','lg','xlg'])
    },
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
    groupClass() {
      return 'form-group form-group' + thisl.size;
    },
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


