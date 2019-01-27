<template>
  <input class="form-control" :placeholder="placeholder" :type="nativeType">
</template>

<script>
export default {
  name: "YgInput",
  props: {
    type: String,
    placeholder: String,
    nativeType: String
  }
};
</script>

