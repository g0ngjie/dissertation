<template>
  <div class="g-table-header-row header">
    <div class="phase">
      <span>课程阶段</span>
    </div>
    <div class="name">
      <span>课堂名称</span>
    </div>
    <div class="type">
      <span>课堂类别</span>
    </div>
    <div class="plan">
      <span>安排说明</span>
    </div>
    <div class="time">
      <span>课程时间</span>
    </div>
    <div class="classExplain">
      <span>课堂状态</span>
    </div>
    <div class="classroomRemark">
      <span>课堂说明</span>
    </div>
    <div class="timeRange">
      <span>上课时长</span>
    </div>
    <div class="material">
      <span>讲师材料</span>
    </div>
    <div class="planClass">
      <span>排课</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$borderColor: #e7e7e7;
$borderCss: 1px $borderColor solid;
.g-table-header-row {
  display: flex;
  span {
    font-size: 16px;
  }
  & > div {
    padding: 10px 15px;
    border-left: $borderCss;
    display: flex;
    align-items: center;
    /* row 最后一个 div */
    &:last-child {
      border-right: $borderCss;
    }
  }
  /* 课程阶段 */
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
  }
  /* 安排说明 */
  .plan {
    width: 20%;
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
.header {
  background-color: #73D1D3;
  span {
    color: rgba(255, 255, 255, 0.9);
  }
  border: {
    top: $borderCss;
  }
  & > div {
    &:first-child {
      border-top-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
    }
  }
  border-radius: 6px 6px 0 0;
}
</style>