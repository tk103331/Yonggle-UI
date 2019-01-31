<template>
  <div @click="handleClick" class="yg-checkbox">
    <div v-if="styled" class="checker">
      <span :class="{checked:innerValue}">
        <input type="checkbox" class="styled" v-model="innerValue">
      </span>
    </div>
    <input v-if="!styled" type="checkbox" v-model="innerValue">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YgCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    styled: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.innerValue = this.value;
  },
  data() {
    return {
      innerValue: false
    };
  },
  methods: {
    handleClick() {
      this.innerValue = !this.innerValue;
      this.$emit("input", this.innerValue);
      this.$emit("change", this.innerValue);
    }
  },
  watch: {
    value(val) {
      this.innerValue = val;
    }
  }
};
</script>

<style>
.yg-checkbox {
  cursor: pointer;
  display: inline-block;
}
</style>

