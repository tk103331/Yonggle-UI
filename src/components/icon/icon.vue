<template>
  <i
    :class="iconClass"
    :style="{fontSize: fontSize, verticalAlign: 'middle', transform: rotateValue}"
  ></i>
</template>

<script>
export default {
  name: "YgIcon",
  props: {
    type: String,
    size: Number,
    rotate: Number
  },
  data() {
    return {};
  },
  computed: {
    iconClass() {
      if (this.type) {
        return this.type.split("-")[0] + " " + this.type;
      }
    },
    fontSize() {
      return this.size > 0 ? this.size + "px" : "inherit";
    },
    rotateValue() {
      return "rotate(" + this.rotate + "deg)";
    }
  }
};
</script>

