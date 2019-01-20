<template>
  <l-container :fluid="true">
    <l-row>
      <l-col :md="1" :offset="2" :pull="3" :push="4">
        col-md-1 col-md-offset-2 col-md-pull-3 col-md-push-4
      </l-col>
    </l-row>
    <l-row>

    </l-row>
  </l-container>
</template>

<script>
import YgContainer from "@/components/container";
import YgRow from "@/components/row";
import YgCol from "@/components/col";
import YgTable from "@/components/table";


export default {
  components: {
    LContainer,
    LRow,
    LCol,
    LTable,
  }
}
</script>

<style>

</style>

