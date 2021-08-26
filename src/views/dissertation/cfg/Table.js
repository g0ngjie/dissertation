import {
    ClassStatus,
    StageType,
    StageClassFileType as ClassFileType
} from "@/utils/VEnum";

const { TODO, WAIT, BEGIN, DONE } = ClassStatus;
/**
 * 课程说明
 */
export const ClassStatus2Val = {
    [TODO]: "未开启",
    [WAIT]: "待排课",
    [BEGIN]: "待上课",
    [DONE]: "已完成"
};

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
/**
 * 阶段类型
 */
export const StageType2Val = {
    // [BREAKING_ICE]: "破冰阶段",
    // [FIXED_TOPIC]: "定题阶段",
    [BREAKING_ICE]: "调研/定题阶段",
    [FIXED_TOPIC]: "建议阶段",
    [INTRODUCTION]: "Recommend",
    [REVIEW]: "Review",
    [METHODOLOGY]: "Workmanship",
    [ANALYSIS]: "Modify",
    [CONCLUSION]: "Discuss the results",
    [EXAMINE]: "梳理全文"
};

/**
 * 阶段课堂文件类型 对照文案
 */
export const ClassFileType2Val = {
    [ClassFileType.TOPIC_LIST]: "Topic List",
    [ClassFileType.OUTLINE]: "Outline",
    [ClassFileType.CORRECTION]: "批改文件",
    [ClassFileType.COMPLETE]: "批改文件(完整)",
    [ClassFileType.RESEARCH_LIST]: "Research List",
    [ClassFileType.DATA_RESULTS]: "Data Results",
    [ClassFileType.FINAL_DOC]: "Final Document"
};
