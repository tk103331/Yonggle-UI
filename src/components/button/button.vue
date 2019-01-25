<template>
  <button :type="nativeType" :class="buttonClass" :role="role" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "YgButton",
  props: {
    nativeType: String,
    type: {
      type: String,
      default: "default"
    },
    size: String,
    role: String,
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      return (
        "btn" +
        (this.type ? " btn-" + this.type : "") +
        (this.active ? " active" : "") +
        (this.block ? " btn-block" : "") +
        (this.size ? " btn-" + this.size : "")
      );
    }
  }
};
</script>


