<script>
import YgTableColumn from "./table-column";
export default {
  name: "YgTable",
  props: {
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    condensed: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  render(h) {
    let cols = this.getCols();
    return h(
      "table",
      {
        class: {
          table: true,
          "table-striped": this.striped,
          "table-bordered": this.bordered,
          "table-condensed": this.condensed,
          "table-hover": this.hover
        }
      },
      [
        h("thead", {}, [
          h(
            "tr",
            {},
            cols.map(col => {
              return h("th", {}, [col.label]);
            })
          )
        ]),
        h(
          "tbody",
          {},
          this.data.map(row => {
            return h(
              "tr",
              {
                class: {}
              },
              cols.map(col => {
                return h("td", {}, [row[col.prop]]);
              })
            );
          })
        )
      ]
    );
  },
  methods: {
    getCols() {
      let cols = [];
      if (this.$slots.default) {
        this.$slots.default.forEach(node => {
          let opts = node.componentOptions;
          if (opts && opts.tag == "yg-table-column") {
            cols.push({
              prop: opts.propsData.prop,
              label: opts.propsData.label
            });
          }
        });
      }
      return cols;
    }
  },
  components: {
    YgTableColumn
  }
};
</script>

