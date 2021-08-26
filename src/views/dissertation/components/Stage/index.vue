<template>
  <div class="stage-row">
    <G-Row :isHeader="true"></G-Row>
    <draggable
      v-model="stageList"
      v-bind="dragOptions"
      @start="drag = true"
      @end="moveEnd"
      :move="onMoveCallback"
      :disabled="readonly || draggableDisabled"
    >
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <G-Row
          class="list-group-item"
          v-for="(item, i) in stageList"
          :key="'_key' + i"
          :data="item"
          :index="i"
          :isLast="i === stageList.length - 1"
        ></G-Row>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import GRow from "./Row";
// import { stage_sort } from "@/views/dissertation/api";
import { StageStatus, StageType } from "@/utils/VEnum";
import { mapGetters } from "vuex";

export default {
  components: {
    draggable,
    GRow,
  },
  data() {
    return {
      drag: false,
      form: {},
      allow: false /* 是否允许 调用接口 */,
    };
  },
  computed: {
    ...mapGetters(["draggableDisabled", "readonly"]),
    stageList: {
      get() {
        return this.$store.getters.stages;
      },
      set(value) {
        this.$store.commit("dissertation/UPDATE_STAGES", value);
      },
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  methods: {
    moveEnd() {
      this.drag = false;
      if (this.allow) this.submit();
    },
    onMoveCallback(e) {
      this.allow = false;
      const { draggedContext } = e;
      const { futureIndex, element } = draggedContext;
      const { id, sort, statused, stageType } = element;
      this.form = {
        oldSort: sort,
        newSort: futureIndex + 1,
        stageId: id,
      };
      /* 如果不为 未开启 */
      if (+statused !== StageStatus.TODO) return false;
      /* 如果是梳理全文 类型 则不允许拖拽 */
      if (+stageType === StageType.EXAMINE) return false;
      const {
        statused: futureStatused,
        stageType: futureStageType,
      } = this.stageList[futureIndex];
      /* 如果 最终目标 不为 未开启 */
      if (+futureStatused !== StageStatus.TODO) return false;
      /* 如果 最终目标 是梳理全文 则不允许拖拽 */
      if (+futureStageType === StageType.EXAMINE) return false;
      this.allow = true;
      return true;
    },
    async submit() {
      this.$store.dispatch("dissertation/sortTable", this.form);
      // const { status } = await stage_sort(this.form);
      // if (status === 200) await this.$store.dispatch("dissertation/reload");
    },
  },
};
</script>

<style lang="scss" scoped>
.stage-row {
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group-item {
    cursor: move;
  }
}
</style>
