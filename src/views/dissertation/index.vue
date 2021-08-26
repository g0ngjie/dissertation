<template>
  <!-- 毕业论文大礼包 -->
  <div class="dissertation-container">
    <!-- title -->
    <G-Title></G-Title>
    <!-- 阶段 -->
    <G-Stage></G-Stage>
    <!-- 表格 -->
    <G-Table></G-Table>
    <!-- modal -->
    <Adjust-Class-Modal ref="adjustModal"></Adjust-Class-Modal>
  </div>
</template>

<script>
import { GTitle, GStage, GTable } from "./components";
import { StageType, ClassStatus } from "@/utils/VEnum";
import { AdjustClassModal } from "@/views/dissertation/components/Modal";
import { mapGetters } from "vuex";

export default {
  components: {
    GTitle,
    GStage,
    GTable,
    AdjustClassModal
  },
  computed: {
    ...mapGetters(["stageTables"])
  },
  methods: {
    /* 判断是否需要 调整弹窗 */
    isAdjust() {
      const { stageClassInstance, stageType } = this.stageTables[1];
      if (+stageType === StageType.FIXED_TOPIC) {
        const { statused } = stageClassInstance[0];
        if (+statused === ClassStatus.WAIT) this.$refs.adjustModal.show();
      }
    },
    async initList() {
      let {courseId} = this.$route.query;
      localStorage.setItem('7',JSON.stringify(courseId));
      await this.$store.dispatch("dissertation/setCourseId",courseId);
      await this.$store.dispatch("dissertation/reload");
      await this.$store.dispatch("dissertation/initTitle");
      this.isAdjust();
    }
  },
  mounted() {
    this.initList();
  }
};
</script>
<style lang="scss">
.dissertation-container {
  .readonly {
    cursor: no-drop !important;
    opacity: 0.5 !important;
  }
  span {
    font-family: PingFangSC-Regular, PingFang SC;
  }
  .btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 35px;
    box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.24);
    border: 1px #73d1d3 solid;
    background: linear-gradient(
      143deg,
      #4d9b9d 0%,
      #73d1d3 100%
    );
    border-radius: 33px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
  }
  /* 朴素 按钮 */
  .btn-plain {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 24px;
    box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.24);
    border: 1px solid;
    font-size: 14px;
    color: #4d9b9d;
    font-weight: 400;
    border-radius: 33px;
  }
  /* span 限制长度 ... */
  .span-limit {
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: block;
  }
}
</style>
<style lang="scss" scoped>
.dissertation-container {
  min-width: 1366px;
  overflow: scroll;
  height: 100%;
  padding: 20px 45px;
}
</style>