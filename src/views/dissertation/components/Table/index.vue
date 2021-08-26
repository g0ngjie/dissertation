<template>
  <div class="g-table-index-container">
    <!-- header -->
    <G-Header></G-Header>
    <!-- table -->
    <div v-loading="stageLoading">
      <G-Table v-for="(tableData, i) in stageTables" :key="i" :table="tableData"></G-Table>
    </div>
  </div>
</template>

<script>
import GHeader from "./Header";
import GTable from "./Table";
import { mapGetters } from "vuex";

export default {
  components: {
    GHeader,
    GTable
  },
  computed: {
    ...mapGetters(["stageLoading", "stageTables"])
  }
};
</script>

<style lang="scss">
span {
  color: rgba(34, 34, 34, 0.9);
}
</style>
<style lang="scss" scoped>
.g-table-index-container {
  margin-top: 25px;
}
</style>