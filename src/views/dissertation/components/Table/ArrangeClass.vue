<template>
  <!-- 排课 -->
  <div class="arrange-class-container" v-if="classOver">
    <section v-if="readonly || progressOver">
      <div
        v-if="isBegin"
        style="width: 68px"
        class="btn-plain btn-div readonly"
      >
        修改时间
      </div>
      <div v-if="isArrange" class="btn-plain btn-div readonly">排课</div>
      <div v-if="isTodo" class="btn-plain btn-div todo readonly">排课</div>
      <div v-show="showDelete" class="btn-plain btn-div readonly">删除</div>
    </section>
    <section
      v-if="
        !readonly &&
          !progressOver &&
          +data.type !== StageClassesType.DISSERTATION
      "
    >
      <div
        v-if="isBegin"
        style="width: 68px"
        class="btn-plain btn-div"
        @click="openArrangeModal('edit')"
      >
        修改时间
      </div>
      <div
        v-if="isArrange"
        class="btn-plain btn-div"
        @click="openArrangeModal('add')"
      >
        排课
      </div>
      <div v-if="isTodo" class="btn-plain btn-div todo">排课</div>
      <div v-show="showDelete" class="btn-plain btn-div" @click="delClass">
        删除
      </div>
    </section>
    <!-- modal -->
    <section>
      <Arrange-Class-Modal
        :data="data"
        :stageType="stageType"
        ref="arrangeClass"
      ></Arrange-Class-Modal>
    </section>
  </div>
</template>

<script>
import { ClassStatus, AddClasses, StageClassesType } from "@/utils/VEnum";
import { ArrangeClassModal } from "@/views/dissertation/components/Modal";
import { delete_class } from "@/views/dissertation/api";
import { mapGetters } from "vuex";

export default {
  components: {
    ArrangeClassModal,
  },
  data() {
    return {
      ClassStatus,
      StageClassesType,
    };
  },
  props: {
    data: {
      type: Object,
      default() {},
    },
    /* 阶段id */
    stageId: {
      type: Number,
      default: 0,
    },
    /* 阶段类型 */
    stageType: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters(["readonly", "progressOver"]),
    /* 已经上完课 */
    classOver() {
      return +this.data.statused !== ClassStatus.DONE;
    },
    /* 可排课 */
    isArrange() {
      return +this.data.statused === ClassStatus.WAIT;
    },
    /* 2待上课 */
    isBegin() {
      return +this.data.statused === ClassStatus.BEGIN;
    },
    /* 0未开启 */
    isTodo() {
      return +this.data.statused === ClassStatus.TODO;
    },
    /* 是否可删除 */
    showDelete() {
      /* 如果当前状态 不为未开启 则删除禁用 */
      const { DONE } = ClassStatus;
      if ([DONE].includes(+this.data.statused)) return false;
      /* 可选课 */
      const _select = +this.data.type == StageClassesType.SELECTABLE;
      /* 加课 */
      const _add = +this.data.paperStageAdd == AddClasses.YES;
      return _select || _add;
    },
  },
  methods: {
    openArrangeModal(to) {
      const { id: classId, classroomId } = this.data;
      this.$refs.arrangeClass.show(this.stageId, classId, to, classroomId);
    },
    async delClass() {
      try {
        await this.$confirm("确认删除");
        const { status } = await delete_class({
          courseId: this.$store.getters.courseId,
          stageClassId: this.data.id,
        });
        if (status === 200) {
          this.$message.success("删除成功");
          await this.$store.dispatch("dissertation/reload");
          await this.$store.dispatch("dissertation/initTitle");
        }
      } catch (error) {
        console.log("[debug]error:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.arrange-class-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .btn-div {
    box-shadow: none !important;
    margin: 8px auto 0 auto;
  }
  .todo {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
