import YgTableColumn from "../table/table-column.vue";

YgTableColumn.install = function(Vue) {
  Vue.component(YgTableColumn.name, YgTableColumn);
};

export default YgTableColumn;
