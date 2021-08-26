<template>
  <!-- Stage Row -->
  <div class="stage-container">
    <!-- 阶段 header -->
    <div
      class="stage-row header"
      :class="{ stripe: index % 2 === 0 }"
      v-if="isHeader"
    >
      <div class="order">阶段顺序</div>
      <!-- 阶段名称 -->
      <div class="phase">课程阶段</div>
      <div class="contain">包含课程</div>
      <div class="already">已上课时长</div>
      <div class="summary">
        阶段总结
        <span>请针对该阶段的表现予以评价</span>
      </div>
    </div>
    <!-- 阶段 row -->
    <div
      class="stage-row"
      :class="{ hover: true, stripe: index % 2 !== 0, 'last-row': isLast }"
      v-else
    >
      <div class="order">
        <img :src="OrderImg[+data.statused]" />
        <span>{{ StageType2Val[data.sort - 1] }}</span>
      </div>
      <div class="phase">{{ data.stageName }}</div>
      <div class="contain">
        <el-tooltip
          v-if="overflow(data.contain)"
          :content="data.contain"
          placement="top"
        >
          <span class="span-limit">{{ data.contain }}</span>
        </el-tooltip>
        <span v-else>{{ data.contain }}</span>
      </div>
      <div class="already">{{ data.classTime }}mins</div>
      <div class="summary">
        <G-Summary :data="data"></G-Summary>
      </div>
    </div>
  </div>
</template>

<script>
import GSummary from "./Summary";
import { OrderImg, StageType2Val } from "@/views/dissertation/cfg/Stage";
import { getChars } from "@/utils/Dissertation";

export default {
  components: { GSummary },
  data() {
    return {
      OrderImg,
      StageType2Val,
    };
  },
  props: {
    isHeader: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default() {},
    },
    index: {
      type: Number,
      default: 0,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    overflow(strings) {
      const MAX = 67;
      const len = getChars(strings);
      return len >= MAX;
    },
  },
};
</script>

<style lang="scss" scoped>
.stage-container {
  $borderColor: #e7e7e7;
  $borderCss: 1px $borderColor solid;
  .stage-row {
    display: flex;
    & > div {
      padding: 10px 15px;
      border-left: $borderCss;
      display: flex;
      align-items: center;
      /* row 最后一个 div */
      &:last-child {
        border-right: $borderCss;
      }
    }
    /* 顺序 */
    .order {
      width: 10%;
      padding-left: 25px;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    /* 阶段 */
    .phase {
      width: 15%;
    }
    /* 包含 */
    .contain {
      width: 40%;
    }
    /* 已经 */
    .already {
      width: 10%;
    }
    /* 总结 */
    .summary {
      width: 25%;
      span {
        font-size: 11px;
        color: #f56c6c;
        margin-left: 10px;
      }
    }
  }
  /* 最下 row */
  .last-row {
    border-bottom: $borderCss;
    border-bottom: {
      right-radius: 6px;
      left-radius: 6px;
    }
    & > div {
      &:first-child {
        border-bottom-left-radius: 6px;
      }
      &:last-child {
        border-bottom-right-radius: 6px;
      }
    }
  }
  /* 斑马线 */
  .stripe {
    background-color: rgba(244, 244, 244, 1);
  }
  .hover:hover {
    box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.24);
  }
  /* header */
  .header {
    border: {
      top: $borderCss;
    }
    & > div {
      &:first-child {
        border-top-left-radius: 6px;
      }
      &:last-child {
        border-top-right-radius: 6px;
      }
    }
    border-radius: 6px 6px 0 0;
  }
}
</style>
