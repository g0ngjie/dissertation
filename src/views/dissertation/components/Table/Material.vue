<template>
  <div class="material-container">
    <section class="copywriting">
      <div v-show="isMany" v-for="(index, i) in copywriting" :key="i">
        <span>{{ ClassFileType2Val[index] }}</span>
        <div class="btn-plain btn-div readonly" v-if="readonly">上传文件</div>
        <div class="btn-plain btn-div" v-else @click="openUpload(index)">
          上传文件
        </div>
      </div>
      <div v-show="isOne">
        <span>{{ ClassFileType2Val[copywriting[0]] }}</span>
      </div>
    </section>
    <section>
      <div v-if="readonly">
        <div v-show="isOne" class="btn-plain btn-div readonly">上传文件</div>
        <div class="btn-plain btn-div readonly" v-show="isRead">查看文件</div>
      </div>
      <div v-else>
        <div
          v-show="isOne"
          class="btn-plain btn-div"
          @click="openUpload(copywriting[0])"
        >
          上传文件
        </div>
        <div class="btn-plain btn-div" v-show="isRead" @click="lookUp">
          查看文件
        </div>
      </div>
    </section>

    <!-- modal -->
    <section>
      <Material-List-Modal
        :stageClassId="data.id"
        ref="materialListModal"
      ></Material-List-Modal>
      <Material-Upload-Modal ref="uploadModal"></Material-Upload-Modal>
    </section>
  </div>
</template>

<script>
import { ClassFileType2Val } from "@/views/dissertation/cfg/Table";
import {
  MaterialListModal,
  MaterialUploadModal,
} from "@/views/dissertation/components/Modal";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      ClassFileType2Val,
    };
  },
  components: {
    MaterialListModal,
    MaterialUploadModal,
  },
  props: {
    data: {
      type: Object,
      default() {},
    },
    /* 是否是 必论文修改 */
    isDissertation: {
      type: Boolean,
      default: false,
    },
    /* 阶段id */
    stageId: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters(["readonly"]),
    isRead() {
      return this.data.teacherFiles && this.data.teacherFiles.length > 0;
    },
    copywriting() {
      const { teacherFilsValue } = this.data;
      if (teacherFilsValue) {
        let result = [];
        const _list = teacherFilsValue.split(",");
        _list.forEach((item) => {
          if (+item > 0) {
            result.push(+item);
          }
        });
        return result;
      }
      return null;
    },
    isMany() {
      return !!this.copywriting && this.copywriting.length > 1;
    },
    isOne() {
      return !!this.copywriting && this.copywriting.length === 1;
    },
  },
  methods: {
    lookUp() {
      this.$refs.materialListModal.show();
    },
    openUpload(stageClassFileType) {
      this.$refs.uploadModal.show(
        this.stageId,
        this.data.id,
        stageClassFileType,
        this.isDissertation
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.material-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn-div {
    width: 75px !important;
    box-shadow: none !important;
    margin: 8px auto 0 auto;
  }
  /* 文案 */
  .copywriting {
    & > div {
      display: flex;
      flex-direction: column;
      span {
        margin-top: 5px;
      }
    }
  }
}
</style>
