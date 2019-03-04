<template>
  <div class="input-group">
    <span v-if="$slots['prepend']" class="input-group-addon">
      <slot name="prepend"></slot>
    </span>
    <span v-if="$slots['prepend-btn']" class="input-group-btn">
      <slot name="prepend-btn"></slot>
    </span>
    <input
      :class="{'form-control':true,'input-rounded':rounded}"
      :style="inputStyle"
      :placeholder="placeholder"
      :type="nativeType"
      :disabled="disabled"
      :readonly="readonly"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange"
      :value="innerValue"
    >
    <span v-if="$slots['append']" class="input-group-addon">
      <slot name="append"></slot>
    </span>
    <span v-if="$slots['append-btn']" class="input-group-btn">
      <slot name="append-btn"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "YgInputGroup",
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
    },
    rounded: {
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

<style>
.input-group-addon .checkbox {
  margin-top: 0px;
  margin-bottom: 0px;
}
.input-group-addon .radio {
  margin-top: 0px;
  margin-bottom: 0px;
}
.input-group-addon .radio label {
  padding-left: 18px;
  min-height: 18px;
}
.input-group-addon .checkbox label {
  padding-left: 18px;
  min-height: 18px;
}
</style>
