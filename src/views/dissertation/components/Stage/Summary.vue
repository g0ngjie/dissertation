<template>
  <!-- 阶段 总结 功能盒子 -->
  <div class="summary-container" v-loading="loading">
    <div class="inp-box">
      <el-input
        ref="input"
        clearable
        v-show="isEdit"
        :maxlength="255"
        v-model="form.feedbackValue"
        size="mini"
      ></el-input>
      <div v-show="!isEdit">
        <el-tooltip v-if="overflow" :content="data.summary" placement="top">
          <span class="span-limit">{{data.summary}}</span>
        </el-tooltip>
        <span v-else>{{data.summary}}</span>
      </div>
    </div>
    <div class="func-box">
      <div v-if="isEdit" class="btn-plain" @click="submit">提交</div>
      <div v-else>
        <div v-if="readonly">
          <div v-if="data.summary" class="btn-plain readonly">修改</div>
          <div v-else class="btn-plain readonly">反馈</div>
        </div>
        <div v-else>
          <div v-if="data.summary" class="btn-plain" @click="edit">修改</div>
          <div v-else>
            <!-- 如果未开启 则禁用状态 -->
            <div v-if="data.statused === StageStatus.TODO" class="btn-plain disabled">反馈</div>
            <div v-else class="btn-plain" @click="edit">反馈</div>
          </div>
        </div>
      </div>
      <el-tooltip content="拖拽调整顺序" placement="top">
        <svg-icon
          class-name="drag-icon"
          icon-class="drag"
          :class="{disabled: data.statused !== StageStatus.TODO, readonly: readonly }"
        />
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import { getChars } from "@/utils/Dissertation";
import { paper_feedback } from "@/views/dissertation/api";
import { StageStatus } from "@/utils/VEnum";
import { mapGetters } from "vuex";
export default {
  props: {
    data: {
      type: Object,
      default() {}
    }
  },
  data() {
    return {
      StageStatus,
      loading: false,
      isEdit: false,
      form: { feedbackValue: "" }
    };
  },
  computed: {
    ...mapGetters(["readonly"]),
    overflow() {
      const MAX = 28;
      const len = getChars(this.data.summary);
      return len >= MAX;
    }
  },
  methods: {
    edit() {
      this.form.feedbackValue = this.data.summary || "";
      this.$store.dispatch("dissertation/setDisabled", true);
      this.isEdit = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    async submit() {
      const { id: stageId } = this.data;
      const { feedbackValue } = this.form;
      this.loading = true;
      const { status } = await paper_feedback({ stageId, feedbackValue });
      if (status === 200) {
        await this.$store.dispatch("dissertation/reload");
        this.$store.dispatch("dissertation/setDisabled", false);
        this.isEdit = false;
        this.loading = false;
      } else this.loading = false;
    }
  }
};
</script>

<style lang="scss">
.el-tooltip__popper {
  max-width: 500px;
}
</style>
<style lang="scss" scoped>
.summary-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .inp-box {
    width: 65%;
  }
  .func-box {
    position: relative;
    padding-right: 15px;
    display: flex;
    /* 拖拽icon */
    .drag-icon {
      position: absolute;
      right: -15px;
      font-size: 26px;
      cursor: move;
    }
    .disabled {
      cursor: no-drop;
      opacity: 0.5;
    }
  }
}
</style>