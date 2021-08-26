const getters = {
    draggableDisabled: state => state.dissertation.disabled,
    stages: state => state.dissertation.stages,
    stageTables: state => state.dissertation.tables,
    stageLoading: state => state.dissertation.stageLoading,
    courseId: state => state.dissertation.courseId,
    dissertationTitleData: state => state.dissertation.titleData,
    progressOver: state => state.dissertation.progressOver,
    dissertationRate: state => state.dissertation.rate,
    readonly: state => state.dissertation.readonly,
};
export default getters;
