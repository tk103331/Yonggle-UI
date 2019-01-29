<template>
  <input
    class="form-control"
    :placeholder="placeholder"
    :type="nativeType"
    :focus="focus"
    :disabled="disabled"
    :readonly="readonly"
    @input="handleInput"
    @change="handleChange"
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
  methods: {
    handleInput(val) {
      this.$emit("input", val);
    },
    handleChange(val) {
      this.$emit("change", cal);
    }
  }
};
</script>

