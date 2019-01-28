<template>
  <input
    class="form-control"
    :placeholder="placeholder"
    :type="nativeType"
    :focus="focus"
    :disabled="disabled"
    :readonly="readonly"
  >
</template>

<script>
export default {
  name: "YgInput",
  props: {
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
  }
};
</script>

