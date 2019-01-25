<template>
  <div :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YgCol",
  props: {
    offset: Number,
    pull: Number,
    push: Number,
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number
  },
  computed: {
    colClass() {
      let t = "md";
      let s = 12;
      if (this.xs && this.xs > 0) {
        t = "xs";
        s = this.xs;
      } else if (this.sm && this.sm > 0) {
        t = "sm";
        s = this.sm;
      } else if (this.md && this.md > 0) {
        t = "md";
        s = this.md;
      } else if (this.lg && this.lg > 0) {
        t = "lg";
        s = this.sm;
      } else if (this.xl && this.xl > 0) {
        t = "xl";
        s = this.xl;
      }
      let offset =
        this.offset && this.offset > 0
          ? " col-" + t + "-offset-" + this.offset
          : "";
      let pull =
        this.pull && this.pull > 0 ? " col-" + t + "-pull-" + this.pull : "";
      let push =
        this.push && this.push > 0 ? " col-" + t + "-push-" + this.push : "";
      return "col-" + t + "-" + s + offset + pull + push;
    }
  }
};
</script>
