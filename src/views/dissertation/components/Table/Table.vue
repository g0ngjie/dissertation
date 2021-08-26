<template>
  <div class="g-table-container">
    <!-- table row -->
    <section class="g-table-row">
      <!-- left -->
      <div class="phase">
        <i v-if="expand" class="icon el-icon-arrow-up" @click="expand = false"></i>
        <i v-else class="icon el-icon-arrow-down" @click="expand = true"></i>
        <div class="btn-box">
          <el-tooltip :content="StageType2Val[table.stageType]" placement="top">
            <!-- <span>{{StageType2Val[table.stageType] | fmtSpan }}</span> -->
            <span>{{table.stageName}}</span>
          </el-tooltip>
          <div class="btn readonly" v-if="readonly">加课</div>
          <div v-else>
            <div
              class="btn"
              v-if="!progressOver && +table.statused !== StageStatus.TODO"
              @click="openAdd"
            >加课</div>
            <div class="btn readonly" v-else>加课</div>
          </div>
        </div>
      </div>
      <!-- right -->
      <section class="g-right-rows">
        <G-Right-Row
          v-show="expand"
          :stageType="table.stageType"
          :stageId="table.id"
          v-for="(item, i) in table.stageClassInstance"
          :key="i"
          :data="item"
        ></G-Right-Row>
        <G-Right-Row
          v-show="!expand"
          :stageType="table.stageType"
          :stageId="table.id"
          :data="table.stageClassInstance[0]"
        ></G-Right-Row>
        <div v-show="!expand" class="retract">... ...</div>
      </section>
    </section>
    <!-- modal -->
    <section>
      <Add-Class-Modal ref="addClassModal"></Add-Class-Modal>
    </section>
  </div>
</template>

<script>
import GRightRow from "./RightRow";
import { StageType2Val } from "@/views/dissertation/cfg/Table";
import { AddClassModal } from "@/views/dissertation/components/Modal";
import { mapGetters } from "vuex";
import { StageStatus } from "@/utils/VEnum";

export default {
  components: {
    GRightRow,
    AddClassModal
  },
  filters: {
    fmtSpan(val) {
      const _index = val.indexOf("&");
      if (_index > 0) {
        return `${val.substr(0, _index + 1)}\n${val.substr(_index + 1)}`;
      }
      return val;
    }
  },
  computed: {
    ...mapGetters(["readonly", "progressOver"])
  },
  props: {
    table: {
      type: Object,
      default() {}
    }
  },
  data() {
    return {
      StageStatus,
      StageType2Val,
      expand: true /* 课程阶段展开 */
    };
  },
  methods: {
    openAdd() {
      this.$refs.addClassModal.show(this.table.stageType,this.table)
    }
  }
};
</script>

<style lang="scss" scoped>
$borderColor: #e7e7e7;
$borderCss: 1px $borderColor solid;
.g-table-container {
  .g-table-row {
    position: relative;
    display: flex;
    /* 课程阶段 */
    .phase {
      position: absolute;
      z-index: 100;
      background-color: rgba(255, 249, 247, 0.9);
      width: 10%;
      height: 100%;
      padding: 10px;
      border-left: $borderCss;
      display: flex;
      align-items: center;
      border-bottom: $borderCss;
      span {
        font-size: 16px;
      }
    }
    .g-right-rows {
      width: 100%;
      min-height: 70px;
      display: flex;
      flex-direction: column;
      .retract {
        display: flex;
        justify-content: center;
        align-items: center;
        border: {
          bottom: $borderCss;
          right: $borderCss;
        }
        padding-bottom: 10px;
        font-size: 20px;
        line-height: 3px;
      }
    }
  }
  /* 上下 icon */
  .icon {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  .btn-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-left: 15px;
    overflow-x: hidden;
    span {
      /* 换行 */
      word-break: normal;
      width: auto;
      display: block;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow: hidden;
      /* 换行 */
    }
    .btn {
      margin-top: 10px;
    }
  }
}
</style>