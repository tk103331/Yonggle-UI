import YgCol from "./col.vue";

YgCol.install = function(LCol) {
  Vue.component(YgCol.name, YgCol);
};

export default YgCol;
