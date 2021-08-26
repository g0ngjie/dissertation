<template>
  <!-- 调整课堂弹窗 -->
  <div class="adjust-class-container">
    <el-dialog :visible.sync="isShow" center width="500px">
      <template slot="title">
        <div class="title-box">
          <span class="q-title">调整课堂阶段</span>
        </div>
      </template>
      <div class="content">
        <span>请根据需求调整阶段顺序</span>
      </div>
      <div class="btn-box">
        <div class="btn i-know" @click="isShow = false">我知道了</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.adjust-class-container {
  /* 问题 模态 */
  .title-box {
    display: flex;
    justify-content: center;
    .q-title {
      font-size: 19px;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    span {
      color: rgba(34, 34, 34, 0.9);
    }
  }
  .btn-box {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    .i-know {
      width: 60%;
      box-shadow: none;
    }
  }
}
</style>