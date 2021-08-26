import { StageStatus, StageType } from "@/utils/VEnum";

const {
    BREAKING_ICE,
    FIXED_TOPIC,
    INTRODUCTION,
    REVIEW,
    METHODOLOGY,
    ANALYSIS,
    CONCLUSION,
    EXAMINE
} = StageType;

export const StageType2Val = {
    [BREAKING_ICE]: "阶段一",
    [FIXED_TOPIC]: "阶段二",
    [INTRODUCTION]: "阶段三",
    [REVIEW]: "阶段四",
    [METHODOLOGY]: "阶段五",
    [ANALYSIS]: "阶段六",
    [CONCLUSION]: "阶段七",
    [EXAMINE]: "阶段八"
};


const { DONE, DOING } = StageStatus;

/* 阶段顺序 状态 图片 */
export const OrderImg = {
    [DONE]: require("@/assets/stage/done.png"),
    [DOING]: require("@/assets/stage/doing.png")
    // [NEW]: require("@/assets/stage/new.png")
};
