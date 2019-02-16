<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import arrays from "@/utils/arrays";
export default {
  name: "YgRadioGroup",
  props: {
    value: {
      type: [String, Number, Boolean],
      default: null
    }
  },
  data() {
    return {
      innerValue: null
    };
  },
  created() {
    this.innerValue = this.value;
  },
  mounted() {
    let arr = this.value;
    if (this.$slots.default) {
      let radios = this.$slots.default.filter(
        node => node.componentOptions && node.componentOptions.tag == "yg-radio"
      );
      radios.forEach(node => {
        let ins = node.componentInstance;
        let val = ins.value;
        ins.innerValue = this.innerValue == ins.label;

        ins.$on("change", val => {
          if (ins.innerValue) {
            this.setInnerValue(val);
            radios.forEach(n => {
              if (n !== node) {
                n.componentInstance.innerValue = false;
              }
            });
          }
        });
      });
    }
  },
  methods: {
    setInnerValue(val) {
      this.innerValue = val;
      this.$emit("input", val);
      if (this.innerValue !== val) {
        this.$emit("change", val);
      }
    }
  }
};
</script>

