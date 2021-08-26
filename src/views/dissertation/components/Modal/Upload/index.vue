<template>
  <!-- 上传文件材料 -->
  <div class="material-upload-container">
    <el-dialog :visible.sync="isShow" top="5%" center width="600px">
      <template slot="title">
        <div class="title-box">
          <span class="q-title">上传文件材料</span>
        </div>
      </template>
      <div class="upload-form" v-loading="loading">
        <div class="upload-box">
          <div class="label">
            <img :src="require('@/assets/modal/file.png')" />
            <span>文件材料</span>
          </div>
          <div class="content">
            <div class="btn-plain btn-upload" @click="checkFile">选择文件</div>
          </div>
        </div>
        <!-- 上传组件 -->
        <div class="remark" v-show="item.enable" v-for="(item, i) in listForm" :key="i">
          <div class="label"></div>
          <div class="content file-list" :class="{ 'list-border': item.enable }">
            <Upload-Temp :index="item.index" :form.sync="listForm[i]" :ref="i"></Upload-Temp>
          </div>
        </div>
        <div class="btn-box">
          <div class="btn-plain" @click="isShow = false">取消</div>
          <div class="btn" @click="dispatch">确定上传</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getTeacherInfo } from "@/utils/task/Utils";
import { sysfile_uploadList, stage_over } from "@/views/dissertation/api";
import UploadTemp from "./Upload";
import { ClassUploadFileType as FileType } from "@/utils/VEnum";

export default {
  components: {
    UploadTemp
  },
  data() {
    return {
      isShow: false,
      loading: false,
      form: {},
      isDissertation: false /* 是否是 必论文修改 */,
      listForm: []
    };
  },
  methods: {
    checkFile() {
      const last = this.listForm[this.listForm.length - 1];
      const _random = Date.now();
      if (!last) {
        this.listForm.push({ enable: false, index: _random });
      } else if (last.enable) {
        this.listForm.push({ enable: false, index: _random });
      }
      this.$nextTick(() => {
        this.$refs[this.listForm.length - 1][0].checkFile();
      });
    },
    show(stageId, stageClassId, stageClassFileType, isDissertation) {
      this.isDissertation = isDissertation;
      this.listForm = [];
      this.form = {
        stageId /* 阶段id */,
        stageClassId /* 课堂id */,
        stageClassFileType /* 大论文阶段课堂文件类型 */
      };
      this.isShow = true;
    },
    async dispatch() {
      const filterList = this.listForm.filter(item => item.enable);
      if (filterList.length === 0) return this.$message.warning("请上传文件");

      for (let i = 0; i < filterList.length; i++) {
        const { remark } = filterList[i];
        if (!remark) {
          this.$message.warning("文件描述不能为空");
          return;
        }
      }

      const typeEnum = {
        0: FileType.TEACHER_MATERIAL,
        1: FileType.MUST_MATERIAL
      };

      const { id: teacherId } = getTeacherInfo();

      const courseId = this.$store.getters.courseId;

      let __forms = [];
      filterList.forEach(({ url, remark, name }) => {
        __forms.push({
          url,
          remark,
          name,
          type: typeEnum[~~this.isDissertation],
          teacherId,
          courseId,
          ...this.form
        });
      });

      let status;
      if (this.isDissertation) {
        status = await this.dissertationSubmit(__forms);
      } else {
        status = await this.submit(__forms);
      }
      if (status === 200) {
        this.$message.success("上传成功");
        this.isShow = false;
        await this.$store.dispatch("dissertation/reload");
        await this.$store.dispatch("dissertation/initTitle");
      }
    },
    /* 上传必论文修改文件 更新阶段状态 */
    async dissertationSubmit(__forms) {
      this.loading = true;
      const { status } = await stage_over(__forms);
      this.loading = false;
      return status;
    },
    async submit(__forms) {
      this.loading = true;
      const { status } = await sysfile_uploadList(__forms);
      this.loading = false;
      return status;
    }
  }
};
</script>

<style lang="scss">
.material-upload-container {
  .el-dialog__header {
    border-bottom: 1px solid;
    border-bottom-color: #d5d5d5;
  }
  .el-upload {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.material-upload-container {
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
      img {
        width: 23px;
        height: 23px;
      }
      span {
        margin-left: 5px;
        color: rgba(102, 102, 102, 1);
      }
    }
    .content {
      width: 70%;
    }
    .upload-box {
      .btn-upload {
        width: 80px;
        box-shadow: none;
      }
    }
    .remark {
      margin-bottom: 10px;
      .file-list {
        padding: 0 15px 15px 15px;
      }
      .list-border {
        border: 1px solid rgba(231, 231, 231, 1);
        border-radius: 5px;
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