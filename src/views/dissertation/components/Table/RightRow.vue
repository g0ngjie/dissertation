<template>
  <div class="g-table-right-row">
    <!-- 占位用 -->
    <div class="phase"></div>
    <!-- 课程名称 -->
    <div class="name">
      <span>{{ data.className }}</span>
    </div>
    <!-- 课程类别 -->
    <div class="type">
      <span v-if="+data.paperStageAdd == AddClasses.YES">加课</span>
      <div v-else>
        <span v-if="+data.type == StageClassesType.MUST">必选课</span>
        <span v-else-if="+data.type == StageClassesType.SELECTABLE"
          >可选课</span
        >
        <div
          class="class-type"
          v-else-if="+data.type == StageClassesType.DISSERTATION"
        >
          <div class="tips-icon">
            <span>必</span>
          </div>
          <span class="class-type-content">论文修改</span>
        </div>
      </div>
    </div>
    <!-- 安排说明 -->
    <div class="plan">
      <span v-for="(str, i) in fmtJson(data.remark)" :key="i">{{ str }}</span>
    </div>
    <!-- 课程时间 -->
    <div class="time">
      <span>{{ data.classStartTime | fmtDate }}</span>
    </div>
    <!-- 课堂状态 -->
    <div class="classExplain">
      <span v-if="+data.type !== StageClassesType.DISSERTATION">{{
        ClassStatus2Val[+data.statused]
      }}</span>
    </div>
    <!-- 课程说明 -->
    <div class="classroomRemark">
      <span>{{ data.classroomRemark }}</span>
    </div>
    <!-- 上课时长 -->
    <div class="timeRange">
      <span>{{ data.classTime | fmtMins }}</span>
    </div>
    <!-- 讲师材料 -->
    <div class="material">
      <G-Material
        :stageId="stageId"
        :data="data"
        :isDissertation="+data.type == StageClassesType.DISSERTATION"
      ></G-Material>
    </div>
    <!-- 排课 -->
    <div class="planClass">
      <G-Arrange-Class
        :stageId="stageId"
        :stageType="stageType"
        :data="data"
      ></G-Arrange-Class>
    </div>
  </div>
</template>

<script>
import GMaterial from "./Material";
import GArrangeClass from "./ArrangeClass";
import { ClassStatus2Val } from "@/views/dissertation/cfg/Table";
import { AddClasses, StageClassesType } from "@/utils/VEnum";
import moment from "moment";

export default {
  data() {
    return {
      ClassStatus2Val,
      AddClasses,
      StageClassesType,
    };
  },
  props: {
    /* 阶段类型 */
    stageType: {
      type: Number,
      default: 0,
    },
    /* 阶段id */
    stageId: {
      type: Number,
      default: 0,
    },
    data: {
      type: Object,
      default() {},
    },
  },
  filters: {
    fmtDate(val) {
      if (val) return moment(val).format("YYYY-MM-DD HH:mm");
    },
    fmtMins(val) {
      if (val) return val + "mins";
      else return "- -";
    },
  },
  components: {
    GMaterial /* 讲师材料 组件 */,
    GArrangeClass /* 排课 组件 */,
  },
  methods: {
    fmtJson(json) {
      if (json) return JSON.parse(json);
    },
  },
};
</script>

<style lang="scss" scoped>
$borderColor: #e7e7e7;
$borderCss: 1px $borderColor solid;
.g-table-right-row {
  height: 100%;
  display: flex;
  span {
    font-size: 16px;
  }
  & > div {
    padding: 15px;
    border-left: $borderCss;
    display: flex;
    align-items: center;
    /* row 最后一个 div */
    &:last-child {
      border-right: $borderCss;
    }
    border: {
      bottom: $borderCss;
    }
  }
  /* 占位 */
  .phase {
    width: 10%;
  }
  /* 课程名称 */
  .name {
    width: 11%;
  }
  /* 课程类别 */
  .type {
    width: 8%;
    .class-type {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .tips-icon {
        padding: 1px;
        background: #4d9b9d;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
        }
      }
      .class-type-content {
        margin-top: 5px;
      }
    }
  }
  /* 安排说明 */
  .plan {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    span {
      line-height: 20px;
    }
  }
  /* 课程时间 */
  .time {
    width: 12%;
  }
  /* 课堂状态 */
  .classExplain {
    width: 7%;
  }
  /* 课堂说明 */
  .classroomRemark {
    width: 10%;
  }
  /* 上课时长 */
  .timeRange {
    width: 8%;
  }
  /* 讲师材料 */
  .material {
    width: 10%;
  }
  /* 排课 */
  .planClass {
    width: 8%;
  }
}
</style>
