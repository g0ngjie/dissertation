<template>
  <!-- 添加课堂 -->
  <div class="add-class-container">
    <el-dialog :visible.sync="isShow" center width="600px">
      <template slot="title">
        <div class="title-box">
          <span class="q-title">添加课堂</span>
        </div>
      </template>
      <div v-loading="loading">
        <div class="add-checkbox">
          <div class="label">
            <span>{{ title }}</span>
            <span>阶段课堂</span>
          </div>
          <div class="content-list">
            <div
              :class="{ active: isActive === i }"
              v-for="(item, i) in classTypes"
              :key="i"
              @click="checkClassType(item, i)"
            >
              <span>{{ item.className }}</span>
            </div>
          </div>
        </div>
        <div class="upload-form">
          <div>
            <div class="label">
              <img :src="require('@/assets/modal/name.png')" />
              <span>课堂名称</span>
            </div>
            <div class="content">
              <el-input
                size="mini"
                disabled
                v-model="form.className"
                placeholder="请输入课堂名称"
              ></el-input>
            </div>
          </div>
          <div>
            <div class="label">
              <img :src="require('@/assets/modal/remark.png')" />
              <span>课堂说明</span>
            </div>
            <div class="content">
              <el-input
                size="mini"
                :maxlength="255"
                v-model="form.remark"
                type="textarea"
                placeholder="填写课堂说明"
              ></el-input>
            </div>
          </div>
          <div class="btn-box">
            <div class="btn-plain" @click="isShow = false">取消</div>
            <div class="btn" @click="validate">确定添加</div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { StageType2Val } from "@/views/dissertation/cfg/Table";
import { add_class } from "@/views/dissertation/api";

export default {
  data() {
    return {
      isShow: false,
      loading: false,
      title: "",
      form: {},
      isActive: 0,
      classTypes: [],
    };
  },
  methods: {
    show(stageType, data) {
      this.form = {};
      const __classTypes = data.stageClassInstance || [];
      const { classType, className } = __classTypes[0];
      this.form = {
        stageType,
        classType,
        className,
      };
      this.classTypes = __classTypes;
      this.title = StageType2Val[stageType];
      this.isShow = true;
    },
    checkClassType(data, index) {
      const { classType, className } = data;
      this.isActive = index;
      this.form.classType = classType;
      this.form.className = className;
    },
    validate() {
      const { className } = this.form;
      if (!className || !className.trim())
        return this.$message.warning("请输入课堂名称");
      this.submit();
    },
    async submit() {
      this.loading = true;
      const { status } = await add_class({
        courseId: this.$store.getters.courseId,
        ...this.form,
      });
      this.loading = false;
      if (status === 200) {
        this.$message.success("添加成功");
        this.isShow = false;
        await this.$store.dispatch("dissertation/reload");
        await this.$store.dispatch("dissertation/initTitle");
      }
    },
  },
};
</script>

<style lang="scss">
.add-class-container {
  .el-dialog__header {
    border-bottom: 1px solid;
    border-bottom-color: #d5d5d5;
  }
}
</style>

<style lang="scss" scoped>
.add-class-container {
  .title-box {
    display: flex;
    justify-content: center;
    .q-title {
      font-size: 19px;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
    }
  }
  .add-checkbox {
    display: flex;
    align-items: flex-start;
    & > div {
      margin-bottom: 15px;
      display: flex;
      align-items: flex-start;
    }
    .label {
      display: flex;
      align-items: center;
      padding-top: 2px;
      span {
        white-space: nowrap;
        color: rgba(102, 102, 102, 1);
      }
    }
    .content-list {
      display: flex;
      flex-wrap: wrap;
      margin-left: 5px;
      & > div {
        cursor: pointer;
        margin: 0 5px 3px 5px;
        border-radius: 17px;
        border: 1px solid rgba(231, 231, 231, 1);
        padding: 3px 5px;
        span {
          font-size: 13px;
        }
        opacity: 0.6;
      }
      .active {
        background: rgba(77, 155, 157, 0.1);
        border: 1px solid #4d9b9d;
        span {
          color: #4d9b9d;
        }
        opacity: 1;
      }
    }
  }
  .upload-form {
    display: flex;
    flex-direction: column;

    & > div {
      margin-bottom: 15px;
      display: flex;
      align-items: flex-start;
    }
    .label {
      width: 120px;
      display: flex;
      align-items: center;
      span {
        color: rgba(102, 102, 102, 1);
      }
    }
    .content {
      width: 70%;
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
