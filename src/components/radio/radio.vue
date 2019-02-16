<template>
  <div :class="{'radio':true,'yg-radio':true,'disabled':disabled}">
    <label>
      <div v-if="!native" :class="{'choice':true,'disabled':disabled}">
        <span :class="{checked:innerValue}">
          <input
            :name="name"
            type="radio"
            class="styled"
            value="true"
            v-model="innerValue"
            :disabled="disabled"
            @change="handleChange"
          >
        </span>
      </div>
      <input
        v-if="native"
        :name="name"
        type="radio"
        value="true"
        v-model="innerValue"
        @change="handleChange"
        :disabled="disabled"
        style="height:18px;width:18px;vertical-align:middle;margin:0px;"
      >
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "YgRadio",
  props: {
    name: String,
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean],
      default: true
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
      let cls = ["yg-radio"];
      if (this.disabled) {
        cls.push("disabled");
      }
      return cls;
    }
  },
  methods: {
    setInnerValue(val) {
      if (val == this.label) {
        this.innerValue = true;
      } else {
        this.innerValue = false;
      }
    },
    handleChange(e) {
      this.innerValue = e.target.checked;
      if (!this.disabled) {
        let value = this.innerValue ? this.label : null;

        this.$emit("input", value);
        this.$emit("change", value);
      }
    }
  }
};
</script>

<style>
.yg-radio {
  cursor: pointer;
  display: inline-block;
}
.disabled {
  cursor: not-allowed;
}
</style>
