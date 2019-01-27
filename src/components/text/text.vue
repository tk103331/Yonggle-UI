<script>
const oneOf = items => {
  return val => items.indexOf(val) > -1;
};
const oneOfColorType = val => {
  return oneOf(["primary", "success", "info", "warning", "danger"])(val);
};
export default {
  name: "YgText",
  props: {
    type: {
      type: String,
      default: "span",
      validator: oneOf(["p", "span"])
    },
    color: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: ""
    }
  },
  render(h) {
    let styleObj = {};
    let classObj = {};
    if (this.color) {
      let isTypedColor = oneOfColorType(this.color);
      if (isTypedColor) {
        classObj["text-" + this.color] = true;
      } else {
        styleObj["color"] = this.color;
      }
    }
    if (this.bgColor) {
      let isTypedBgColor = oneOfColorType(this.bgColor);
      if (isTypedBgColor) {
        classObj["bg-" + this.bgColor] = true;
      } else {
        styleObj["background-color"] = this.bgColor;
      }
    }

    return h(
      this.type,
      {
        class: classObj,
        style: styleObj
      },
      this.$slots.default
    );
  }
};
</script>
