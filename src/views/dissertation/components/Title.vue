<template>
  <div class="title-container">
    <div class="title">
      <span>论文规划表</span>
    </div>
    <div class="row">
      <!-- left -->
      <section class="left">
        <div>
          <span>Deal Deadline:&ensp;</span>
          <span>{{ dissertationTitleData.dealDeadline | fmtDate }}</span>
        </div>
        <!-- <div>
          <span>Offical Deadline:&ensp;</span>
          <span>{{dissertationTitleData.officialDeadline | fmtDate}}</span>
        </div> -->
        <div class="progressbar-container">
          <span>辅导进度:&ensp;</span>
          <div class="progressbar">
            <div class="process">
              <div
                class="percent"
                :style="`width: ${dissertationTitleData.schedule}%`"
              ></div>
            </div>
            <span>{{ dissertationTitleData.schedule }}%</span>
          </div>
        </div>
      </section>
      <!-- right -->
      <section class="right">
        <div
          class="btn"
          v-if="+dissertationTitleData.statused >= 3"
          @click="openModal"
        >
          论文评级
        </div>
        <div class="btn disabled" v-else>论文评级</div>
      </section>
    </div>

    <!-- modal -->
    <section>
      <Grade-Modal ref="gradeModal"></Grade-Modal>
    </section>
  </div>
</template>

<script>
import { GradeModal } from "@/views/dissertation/components/Modal";
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  components: { GradeModal },
  filters: {
    fmtDate(val) {
      if (val) return moment(val).format("YYYY-MM-DD");
    },
  },
  computed: {
    ...mapGetters(["dissertationTitleData", "progressOver"]),
  },
  methods: {
    openModal() {
      this.$refs.gradeModal.show();
    },
  },
};
</script>

<style lang="scss" scoped>
.title-container {
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 25px;
      font-weight: 500;
      color: rgba(34, 34, 34, 1);
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;
    span {
      font-size: 19px;
      font-weight: 400;
      color: rgba(34, 34, 34, 0.9);
    }
    .left {
      width: 80%;
      display: flex;
      align-items: center;
      & > div {
        display: flex;
        min-width: 310px;
        span {
          white-space: nowrap; /*强制span不换行*/
        }
      }
    }
    .progressbar-container {
      min-width: 300px !important;
      display: flex;
      align-items: center;
      /* 进度条 */
      .progressbar {
        display: flex;
        align-items: center;
        .process {
          width: 300px;
          height: 12px;
          border-radius: 11px;
          border: 1px solid #73d1d3;
          .percent {
            width: 0;
            height: 100%;
            background: linear-gradient(265deg, #4d9b9d 0%, #73d1d3 100%);
            border-radius: 100px;
          }
        }
        span {
          margin-left: 10px;
        }
      }
    }
    .right {
      width: 20%;
      display: flex;
      justify-content: flex-end;
      .btn {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 28px;
        font-size: 17px;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 400;
        background: linear-gradient(143deg, #4d9b9d 0%, #73d1d3 100%);
        border-radius: 33px;
      }
      .disabled {
        opacity: 0.5;
        cursor: no-drop;
      }
    }
  }
}
</style>
