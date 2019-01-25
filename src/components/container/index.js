import YgContainer from "./container.vue";

YgContainer.install = function(Vue) {
  Vue.component(YgContainer.name, YgContainer);
};

export default YgContainer;
