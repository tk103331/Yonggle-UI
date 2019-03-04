<script>
import DropdownMenu from "./dropdown-menu";
import DropdownItem from "./dropdown-item";

export default {
  name: "YgDropdown",
  data() {
    return {
      opened: false
    };
  },
  components: {
    DropdownMenu,
    DropdownItem
  },
  computed: {
    dropdownMenu() {
      if (this.$slots.dropdown) {
        let matched = this.$slots.dropdown.filter(node => {
          return node.componentOptions.tag == "yg-dropdown-menu";
        });
        return matched[0];
      }
      return null;
    },
    dropdownClass() {
      let cls = ["dropdown"];
      if (this.opened) {
        cls.push("open");
      }
      return cls;
    }
  },
  provide() {
    return {
      dropdown: this
    };
  },
  methods: {
    open() {
      this.opened = true;
    },
    close() {
      this.opened = false;
    },
    handleTogglerClick() {
      this.open();
    },
    executeCommand(cmd) {
      this.$emit("command", cmd);
    }
  },
  render(h) {
    let toggler = h(
      "div",
      {
        class: ["dropdown-toggle"],
        style: {
          display: "inline-block"
        },
        attrs: {
          "data-toggle": "dropdown"
        },
        on: {
          click: this.handleTogglerClick
        }
      },
      this.$slots.default
    );

    return h(
      "div",
      {
        class: this.dropdownClass,
        style: {
          display: "inline-block"
        }
      },
      [toggler, this.dropdownMenu]
    );
  }
};
</script>

