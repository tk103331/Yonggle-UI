<template>
  <div :class="{'checkbox':true,'yg-checkbox':true,'disabled':disabled}">
    <label>
      <div v-if="!native" :class="{'checker':true,'disabled':disabled}">
        <span :class="{checked:innerValue}">
          <input
            :name="name"
            type="checkbox"
            class="styled"
            v-model="innerValue"
            :disabled="disabled"
            @change="handleChange"
          >
        </span>
      </div>
      <input
        v-if="native"
        :name="name"
        type="checkbox"
        v-model="innerValue"
        :disabled="disabled"
        @change="handleChange"
        style="height:18px;width:18px;vertical-align:middle;margin:0px;"
      >
      <slot></slot>
    </label>
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
    trueLabel: {
      type: [String, Number, Boolean],
      default: true
    },
    falseLabel: {
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
      if (val == this.trueLabel) {
        this.innerValue = true;
      } else if (val == this.falseLabel) {
        this.innerValue = false;
      }
    },
    handleChange(e) {
      if (!this.disabled) {
        let value = this.innerValue ? this.trueLabel : this.falseLabel;

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

