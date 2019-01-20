<template>
  <table :class="tableClass">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: 'YgTable',
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
    data: [],

  },
  computed: {
    tableClass() {
      return 'table ' + (this.striped ? 'table-striped' : '') + (this.bordered ? 'table-bordered' : '') + (this.condensed ? 'table-condensed' : '');
    }
  },
  render(h) {
    return h('table')
  }
}
</script>

