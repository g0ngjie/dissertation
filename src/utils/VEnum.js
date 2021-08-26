
/**
 * localStorage 枚举
 * @readonly
 * @enum {Number | String}
 */
export const Storage = {
    TEACHER_INFO: "teacinfo" /* 讲师登录信息 */,
    COURSE_ID: 7 /* dissertation courseId */,
    READ_ONLY: 8 /* dissertation readonly */,
};

/* ********************************************* 毕业论文大礼包 *********************************************** */

/**
 * 阶段状态  0未开始  1正在进行 2已完成
 */
export const StageStatus = {
    TODO: 0 /* 0未开始 */,
    DOING: 1 /* 1正在进行 */,
    DONE: 2 /* 2已完成 */
};

/**
 * 阶段类型枚举
 */
export const StageType = {
    BREAKING_ICE: 0 /* 0 调研/定题阶段 */,
    FIXED_TOPIC: 1 /* 1 建议阶段 */,
    INTRODUCTION: 2 /* 2 Recommend */,
    REVIEW: 3 /* 3 Review  */,
    METHODOLOGY: 4 /* 4 Workmanship */,
    ANALYSIS: 5 /* 5 Modify */,
    CONCLUSION: 6 /* 6 Discuss the results */,
    EXAMINE: 7 /* 7 梳理全文 */
};

/**
 * 课堂状态
 * @enum
 */
export const ClassStatus = {
    TODO: 0 /* 0未开启 */,
    WAIT: 1 /* 1待排课 */,
    BEGIN: 2 /* 2待上课 */,
    DONE: 3 /* 3已完成 */
};

/**
 * 课程类别
 * @enum
 */
export const AddClasses = {
    NO: 0 /* 0否 */,
    YES: 1 /* 1是 */
};

/**
 * 课程类别
 * @enum
 */
export const StageClassesType = {
    MUST: 1 /* 1必须上课 */,
    SELECTABLE: 2 /* 2可选上课 */,
    DISSERTATION: 3 /* 3 必论文修改 */
};


/**
 * 讲师材料
 * @enum
 */
export const StageClassFileType = {
    TOPIC_LIST: 1 /* 1topicList */,
    OUTLINE: 2 /* 2 outLine */,
    CORRECTION: 3 /* 3 批改文件 */,
    DATA_RESULTS: 4 /* 4 data Results */,
    FINAL_DOC: 5 /* 5 Final Document */,
    RESEARCH_LIST: 6 /* 6 Research List */,
    COMPLETE: 7 /* 7 批改文件完整 */
};

/**
 * 课堂上传文件类型
 * @enum
 */
export const ClassUploadFileType = {
    TEACHER_MATERIAL: 1 /* 毕业大论文订单课堂讲师材料 */,
    MUST_MATERIAL: 5 /* 毕业大论文阶段必论文修改 */
};

/**
 * 当前大论文订单进展状态
 * @enum
 */
export const HeaderStatused = {
    DONE: 3 /* 已完成 */,
    OVER: 4 /* 已结课 */,
    ERR_OVER: 5 /* 异常结课 */
};
