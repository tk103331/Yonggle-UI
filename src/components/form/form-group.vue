<template>
  <div class="form-group">
    <label :class="labelClass">{{label}}</label>
    <div v-if="controlClass != ''" :class="controlClass">
      <slot></slot>
      <yg-input-help v-if="$slots.help && !helpInline">
        <slot name="help"></slot>
      </yg-input-help>
    </div>
    <slot v-else></slot>
    <yg-input-help v-if="$slots.help && (controlClass == '' || helpInline)" :inline="helpInline">
      <slot name="help"></slot>
    </yg-input-help>
  </div>
</template>
<script>
import validators from "../../utils/validators";
import YgInputHelp from "../input-help";
export default {
  name: "YgFormGroup",
  components: {
    YgInputHelp
  },
  props: {
    size: {
      type: String,
      default: "md",
      validator: validators.oneOf(["xs", "sm", "md", "lg", "xlg"])
    },
    label: String,
    labelWidth: {
      type: String
    },
    controlWidth: {
      type: String
    },
    helpInline: {
      type: Boolean,
      default: false
    },
    helpAlign: {
      type: String,
      default: "left",
      validator: validators.oneOf(["left", "center", "right"])
    }
  },
  computed: {
    groupClass() {
      return "form-group form-group" + thisl.size;
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


