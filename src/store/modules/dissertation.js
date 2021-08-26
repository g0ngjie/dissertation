import { paper_stage, paper_teacherRate } from "@/views/dissertation/api/mock";
import {
    Storage,
    HeaderStatused,
} from "@/utils/VEnum";
import { deepOClone, sleepSync } from "@alrale/common-lib";

function getReadonly() {
    const readonly = JSON.parse(localStorage.getItem(Storage.READ_ONLY));
    return readonly;
}

function getCourseId() {
    // const courseId = JSON.parse(localStorage.getItem(Storage.COURSE_ID));
    // return courseId;
    return 239906
}

const state = {
    disabled: false /* 拖拽组件 禁用 */,
    tables: [] /* 表格组件数据 */,
    stages: [] /* 阶段组件数据 */,
    titleData: {} /* 标题组件数据 */,
    rate: null /* 有值已经评级，空则没有评级 */,
    stageLoading: false,
    progressOver: false /* 总进展是否已经结束 */,
    courseId: getCourseId() /* 订单id */,
    readonly: getReadonly() /* 不允许操作 */
};

const mutations = {
    DISABLED: (state, bool) => {
        state.disabled = bool;
    },
    UPDATE_STAGES: (state, list) => {
        state.stages = list;
    },
    COURSEID: (state, id) => {
        state.courseId = id;
    },

};

function changeEleForArray(index1, index2, arr) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}

const actions = {
    setDisabled({ commit }, bool) {
        commit("DISABLED", bool);
    },
    setCourseId({ commit }, id) {
        commit("COURSEID", id);
    },
    // 表单排序操作
    sortTable({ dispatch, state }, sortForm) {
        const { tables } = state
        const { newSort, oldSort } = sortForm
        const newTables = changeEleForArray(newSort, oldSort, deepOClone(tables))
        dispatch("reload", newTables)
    },
    async reload({ state }, sortTables) {
        state.stageLoading = true;
        let body, status;

        const res = paper_stage();
        status = res.status;
        body = sortTables || res.body;
        if (sortTables) await sleepSync(500)
        state.stageLoading = false;
        if (status === 200) {
            state.tables = body;
            state.stages = body.map(item => {
                return {
                    ...item,
                    contain: item.stageClass
                        .map(stage => stage.className)
                        .join("、")
                };
            });
        }
    },
    async initTitle({ state }) {
        let body, status;

        const res = await paper_teacherRate();
        status = res.status;
        body = res.body;
        if (status === 200) {
            const { OVER, ERR_OVER } = HeaderStatused;
            const {
                schedule,
                dealDeadline,
                officialDeadline,
                statused,
                rate
            } = body;
            state.titleData = {
                schedule: Math.round(+schedule * 100),
                dealDeadline,
                officialDeadline,
                statused,
                rate
            };
            state.progressOver = [OVER, ERR_OVER].includes(+statused);
            state.rate = rate;
        }
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
