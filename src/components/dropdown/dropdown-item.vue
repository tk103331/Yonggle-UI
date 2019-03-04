<template>
  <li :class="itemClass" :role="role">
    <a v-if="type == 'item'" @click="hanleItemClick">
      <slot></slot>
    </a>
    <slot v-else></slot>
  </li>
</template>

<script>
import validators from "@/utils/validators";
export default {
  name: "YgDropdownItem",
  inject: ["dropdown"],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "item",
      validator: validators.oneOf(["separator", "header", "item"])
    },
    command: {}
  },
  computed: {
    itemClass() {
      let cls = [];
      if (this.disabled) {
        cls.push("disabled");
      }
      if (this.type == "separator") {
        cls.push("divider");
      } else if (this.type == "header") {
        cls.push("dropdown-header");
      }
      return cls;
    },
    role() {
      return this.type == "separator" ? "separator" : "";
    }
  },
  methods: {
    hanleItemClick() {
      this.$emit("click", this.command);
      if (this.dropdown && this.type == "item") {
        this.dropdown.executeCommand(this.command);
      }
    }
  }
};
</script>

