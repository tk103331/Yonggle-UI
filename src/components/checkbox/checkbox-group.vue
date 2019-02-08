<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import arrays from "@/utils/arrays";
export default {
  name: "YgCheckboxGroup",
  props: {
    value: {
      type: Array
    }
  },
  data() {
    return {
      innerValue: []
    };
  },
  created() {
    this.innerValue = this.value;
  },
  mounted() {
    let arr = this.value;
    if (this.$slots.default) {
      this.$slots.default
        .filter(
          node =>
            node.componentOptions && node.componentOptions.tag == "yg-checkbox"
        )
        .forEach(node => {
          let ins = node.componentInstance;
          let val = ins.value;
          ins.innerValue = arrays.contains(this.innerValue, val);

          ins.$on("change", val => {
            if (val) {
              if (!arrays.contains(this.innerValue, ins.value)) {
                this.innerValue.push(ins.value);
              }
            } else {
              arrays.remove(this.innerValue, ins.value);
            }
          });
        });
    }
  }
};
</script>

