<template>
  <input
    class="form-control"
    :placeholder="placeholder"
    :type="nativeType"
    :focus="focus"
    :disabled="disabled"
    :readonly="readonly"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput"
    @change="handleChange"
    :value="innerValue"
  >
</template>

<script>
export default {
  name: "YgInput",
  props: {
    value: String,
    type: String,
    placeholder: String,
    nativeType: String,
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      innerValue:
        this.value == undefined || this.value == null ? "" : this.value
    };
  },
  methods: {
    handleFocus(e) {
      this.$emit("focus");
    },
    handleBlur(e) {
      this.$emit("blur");
    },
    handleInput(e) {
      this.innerValue = e.target.value;
      this.$emit("input", e.target.value);
    },
    handleChange(e) {
      this.$emit("change", e.target.value);
    }
  }
};
</script>

