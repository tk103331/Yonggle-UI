<template>
  <input
    class="form-control"
    :style="inputStyle"
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
    value: [String, Number],
    type: String,
    placeholder: String,
    nativeType: String,
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
        this.value == undefined || this.value == null ? "" : this.value,
      focused: false
    };
  },
  computed: {
    inputStyle() {
      if (this.focused) {
        return { borderColor: "black" };
      } else {
        return {};
      }
    }
  },
  methods: {
    handleFocus(e) {
      this.focused = true;
      this.$emit("focus");
    },
    handleBlur(e) {
      this.focused = false;
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

