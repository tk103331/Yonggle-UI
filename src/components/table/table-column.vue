<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YgTableColumn",
  props: {
    prop: String,
    label: String
  }
};
</script>

