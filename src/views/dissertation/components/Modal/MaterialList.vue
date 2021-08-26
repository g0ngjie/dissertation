<template>
  <!-- 文件材料列表 -->
  <div class="material-list-container">
    <el-dialog :visible.sync="isShow" center width="600px" :before-close="beforeClose">
      <template slot="title">
        <div class="title-box">
          <span class="q-title">文件材料列表</span>
        </div>
      </template>

      <div v-for="(data, j) in files" :key="j">
        <div class="stage-title">{{ClassFileType2Val[j]}}文件</div>
        <section class="material-list">
          <ul>
            <li v-for="(item, i) in data" :key="i">
              <div>
                <a :href="item.url">{{item.name}}</a>
                <svg-icon @click="delFile(item.id)" class-name="dustbin-icon" icon-class="dustbin" />
              </div>
              <div>
                <span class="remark">{{item.remark}}</span>
                <span class="time">{{item.createAt | fmtDate}}</span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";
import { ClassFileType2Val } from "@/views/dissertation/cfg/Table";
import { queryfile_stageclass, delete_id } from "@/views/dissertation/api";
export default {
  data() {
    return {
      ClassFileType2Val,
      isShow: false,
      files: {},
      deleted: 0 /* 删除的条数 */
    };
  },
  filters: {
    fmtDate(val) {
      if (val) return moment(val).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  props: {
    stageClassId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    async beforeClose() {
      this.isShow = false;
      if (this.deleted) await this.$store.dispatch("dissertation/reload");
    },
    /**
     * 根据 stageClassFileType 阶段课堂文件类型 拆分为 二维数组
     */
    async fmtList(datas) {
      const arrs = datas.reduce((res, item) => {
        res[item.stageClassFileType]
          ? res[item.stageClassFileType].push(item)
          : (res[item.stageClassFileType] = [item]);
        return res;
      }, {});
      return arrs;
    },
    async show() {
      this.deleted = 0;
      const bool = await this.initList();
      if (bool) this.isShow = true;
    },
    async initList() {
      const { status, body } = await queryfile_stageclass({
        courseId: this.$store.getters.courseId,
        stageClassId: this.stageClassId
      });
      if (status === 200) {
        this.files = await this.fmtList(body);
        return true;
      }
      return false;
    },
    async delFile(id) {
      this.deleted += 1;
      const { status } = await delete_id(id);
      if (status === 200) {
        await this.initList();
      }
    }
  }
};
</script>

<style lang="scss">
.material-list-container {
  .el-dialog__header {
    border-bottom: 1px solid;
    border-bottom-color: #d5d5d5;
  }
}
</style>

<style lang="scss" scoped>
.material-list-container {
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
  .stage-title {
    font-size: 16px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }
  .material-list {
    margin-bottom: 10px;
    ul {
      padding: 0;
      li {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        & > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          a {
            text-decoration: underline;
          }
          .remark,
          .time {
            color: rgba(102, 102, 102, 1);
          }
        }
        border-bottom: 1px #d5d5d5 solid;
      }
    }
  }
  .dustbin-icon {
    cursor: pointer;
  }
}
</style>