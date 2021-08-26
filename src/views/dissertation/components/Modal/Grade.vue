<template>
  <!-- 论文评级 -->
  <div class="dissertation-grade-container">
    <el-dialog :visible.sync="isShow" center width="600px">
      <template slot="title">
        <div class="title-box">
          <span class="q-title">论文评级</span>
        </div>
      </template>
      <div class="grade-form">
        <div class="tips">
          <span>请给出你客观的评价等级</span>
        </div>
        <div class="check-box">
          <div>
            <img
              :class="{ isActive: form.rate === 1 }"
              @click="checkGrade(1)"
              :src="require('@/assets/modal/A.png')"
            />
            <span>优秀</span>
            <span class="remark">100-75分</span>
          </div>
          <div>
            <img
              :class="{ isActive: form.rate === 2 }"
              @click="checkGrade(2)"
              :src="require('@/assets/modal/B.png')"
            />
            <span>良好</span>
            <span class="remark">55-74分</span>
          </div>
          <div>
            <img
              :class="{ isActive: form.rate === 3 }"
              @click="checkGrade(3)"
              :src="require('@/assets/modal/C.png')"
            />
            <span>一般</span>
            <span class="remark">45-54分</span>
            <span class="error warning">存在挂科风险</span>
          </div>
          <div>
            <img
              :class="{ isActive: form.rate === 4 }"
              @click="checkGrade(4)"
              :src="require('@/assets/modal/D.png')"
            />
            <span class="error">必挂</span>
            <span class="error">小于45分</span>
          </div>
        </div>
        <div class="btn-box" v-if="!dissertationRate">
          <div class="btn-plain" @click="isShow = false">取消</div>
          <div class="btn" @click="submit">确定</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { paper_rate } from "@/views/dissertation/api";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isShow: false,
      form: {}
    };
  },
  computed: {
    ...mapGetters(["dissertationRate"])
  },
  methods: {
    show() {
      this.form = { rate: this.dissertationRate || 1 };
      this.isShow = true;
    },
    checkGrade(check) {
      if (this.dissertationRate) return;
      this.form.rate = check;
    },
    async submit() {
      const { status } = await paper_rate({
        courseId: this.$store.getters.courseId,
        rate: this.form.rate
      });
      if (status === 200) {
        await this.$store.dispatch("dissertation/initTitle");
        this.isShow = false;
        this.$message.success("操作成功");
      }
    }
  }
};
</script>

<style lang="scss">
.dissertation-grade-container {
  .el-dialog__header {
    border-bottom: 1px solid;
    border-bottom-color: #d5d5d5;
  }
}
</style>

<style lang="scss" scoped>
.dissertation-grade-container {
  .title-box {
    display: flex;
    justify-content: center;
    .q-title {
      font-size: 19px;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
    }
  }

  .grade-form {
    display: flex;
    flex-direction: column;
    .tips {
      display: flex;
      justify-content: center;
      span {
        color: rgba(102, 102, 102, 0.9);
      }
    }
    .check-box {
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          cursor: pointer;
          filter: grayscale(100%);
        }
        span {
          margin: 3px 0;
        }
        .remark {
          color: rgba(102, 102, 102, 0.9);
        }
        .error {
          color: rgba(255, 50, 50, 0.9);
        }
        .warning {
          font-size: 12px;
        }
      }
      .isActive {
        filter: grayscale(0%);
      }
    }
    .btn-box {
      margin-top: 15px;
      margin-bottom: 0;
      display: flex;
      justify-content: center;
      & > div {
        width: 150px;
        height: 25px;
        box-shadow: none;
      }
      & > :last-child {
        margin-left: 20px;
      }
    }
  }
}
</style>