<template>
  <!-- 排课 -->
  <div class="arrange-class-container">
    <el-dialog :visible.sync="isShow" center width="600px">
      <template slot="title">
        <div class="title-box">
          <span class="q-title">{{title}}</span>
        </div>
      </template>
      <div class="upload-form" v-loading="loading">
        <div>
          <span
            style="margin-left: 5px; margin-bottom: 10px; font-size: 14px;color: #666;"
          >{{stageTitle}} 阶段课堂</span>
        </div>
        <div>
          <div class="label">
            <img :src="require('@/assets/modal/name.png')" />
            <span>课堂名称</span>
          </div>
          <div class="content">
            <el-input disabled size="mini" v-model="form.name" placeholder="请输入课堂名称"></el-input>
          </div>
        </div>
        <div class="upload-box">
          <div class="label">
            <img :src="require('@/assets/modal/time.png')" />
            <span>上课时间</span>
          </div>
          <div class="content">
            <el-date-picker
              style="width: 100%"
              v-model="form.time"
              type="datetimerange"
              format="yyyy-MM-dd HH:mm"
              value-format="yyyy-MM-dd HH:mm:ss"
              :picker-options="pickerOptions"
              size="mini"
              placeholder="选择日期"
            ></el-date-picker>
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
              v-model="form.description"
              type="textarea"
              placeholder="填写课堂说明"
            ></el-input>
          </div>
        </div>
        <div class="btn-box">
          <div class="btn-plain" @click="isShow = false">取消</div>
          <div class="btn" @click="validate">确定{{title}}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  order_putClassroom,
  findClassroomInfo,
  order_updateClassroom
} from "@/views/dissertation/api";
import { StageType2Val } from "@/views/dissertation/cfg/Table";
import moment from "moment";

export default {
  data() {
    return {
      title: "",
      to: "",
      isShow: false,
      loading: false,
      form: {},
      stageTitle: "" /* 阶段类型名称 */
    };
  },
  props: {
    stageType: {
      type: Number,
      default: 0
    },
    /* 课堂信息 */
    data: {
      type: Object,
      default() {}
    }
  },
  computed: {
    pickerOptions() {
      return {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      };
    }
  },
  methods: {
    show(stageId, classId, to, classroomId) {
      this.stageTitle = StageType2Val[this.stageType];
      const _title = { add: "排课", edit: "修改" };
      this.to = to;
      this.title = _title[to];
      this.form = {
        bigPaperStageId: stageId,
        bigPaperClassId: classId
      };
      if (to === "edit") {
        this.findById(classroomId);
      } else {
        /* 设置默认时间 */
        const _currentTime = moment()
          .add(0.5, "hours")
          .format("YYYY-MM-DD HH:mm:ss");
        const _endTime = moment()
          .add(1.5, "hours")
          .format("YYYY-MM-DD HH:mm:ss");
        this.form = {
          name: this.data.className,
          time: [_currentTime, _endTime],
          ...this.form
        };
      }
      this.isShow = true;
    },
    async findById(classroomId) {
      const { status, body } = await findClassroomInfo(classroomId);
      if (status === 200) {
        const { cdId, name, startTime, endTime, description, id } = body;
        this.form = {
          cdId,
          name,
          time: [startTime, endTime],
          description,
          id
        };
      }
    },
    validate() {
      const { time, name } = this.form;
      if (!name || !name.trim()) return this.$message.warning("请输入课堂名称");
      if (!time) return this.$message.warning("请选择上课时间");
      const [_start, _end] = time;
      const _fmtStart = new Date(_start).getTime();
      const _now = Date.now();
      if (_fmtStart < _now)
        return this.$message.warning("请选择正确的上课时间");
      if (_start == _end) return this.$message.warning("请选择正确的上课时间");
      this.form.startTime = _start;
      this.form.endTime = _end;
      if (this.to === "edit") this.updateClass();
      else this.submit();
    },
    async updateClass() {
      this.loading = true;
      const { status } = await order_updateClassroom(this.form);
      this.loading = false;
      if (status === 200) {
        this.$message.success("修改成功");
        this.isShow = false;
        await this.$store.dispatch("dissertation/reload");
      }
    },
    async submit() {
      this.loading = true;
      const { status } = await order_putClassroom({
        cdId: this.$store.getters.courseId,
        ...this.form
      });
      this.loading = false;
      if (status === 200) {
        this.$message.success("排课成功");
        this.isShow = false;
        await this.$store.dispatch("dissertation/reload");
        await this.$store.dispatch("dissertation/initTitle");
      }
    }
  }
};
</script>

<style lang="scss">
.arrange-class-container {
  .el-dialog__header {
    border-bottom: 1px solid;
    border-bottom-color: #d5d5d5;
  }
}
</style>

<style lang="scss" scoped>
.arrange-class-container {
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