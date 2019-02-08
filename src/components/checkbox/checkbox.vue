<template>
  <div @click="handleClick" :class="{'yg-checkbox':true,'disabled':disabled}">
    <div v-if="!native" :class="{'checker':true,'disabled':disabled}">
      <span :class="{checked:innerValue}">
        <input
          :name="name"
          type="checkbox"
          class="styled"
          v-model="innerValue"
          :disabled="disabled"
        >
      </span>
    </div>
    <input
      v-if="native"
      :name="name"
      type="checkbox"
      v-model="innerValue"
      :disabled="disabled"
      style="height:18px;width:18px;vertical-align:middle;margin:0px;"
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YgCheckbox",
  props: {
    name: String,
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    native: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (!this.disabled) {
      this.$watch("value", val => this.setInnerValue(val));
    }
  },
  mounted() {
    this.setInnerValue(this.value);
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
    setInnerValue(val) {
      if (val == this.trueValue) {
        this.innerValue = true;
      } else if (val == this.falseValue) {
        this.innerValue = false;
      }
    },
    handleClick() {
      if (!this.disabled) {
        this.innerValue = !this.innerValue;

        let value = this.innerValue ? this.trueValue : this.falseValue;

        this.$emit("input", value);
        this.$emit("change", value);
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

