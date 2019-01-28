import YgStatic from "./static.vue";

YgStatic.install = function(Vue) {
  Vue.component(YgStatic.name, YgStatic);
};

export default YgStatic;
