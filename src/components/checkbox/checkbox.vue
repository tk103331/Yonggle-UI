<template>
  <div @click="handleClick" :class="{'yg-checkbox':true,'disabled':disabled}">
    <div v-if="styled" :class="{'checker':true,'disabled':disabled}">
      <span :class="{checked:innerValue}">
        <input type="checkbox" class="styled" v-model="innerValue" :disabled="disabled">
      </span>
    </div>
    <input v-if="!styled" type="checkbox" v-model="innerValue" :disabled="disabled">
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (!this.disabled) {
      this.$watch("value", val => (this.innerValue = val));
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
  computed: {
    checkboxClass() {
      let cls = ["yg-checkbox"];
      if (this.disabled) {
        cls.push("disabled");
      }
      return cls;
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.innerValue = !this.innerValue;
        this.$emit("input", this.innerValue);
        this.$emit("change", this.innerValue);
      }
    }
  }
};
</script>

<style>
.yg-checkbox {
  cursor: pointer;
  display: inline-block;
}
.disabled {
  cursor: not-allowed;
}
</style>

