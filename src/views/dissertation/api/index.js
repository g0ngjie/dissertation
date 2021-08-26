
/**
 * 阶段反馈
 * @param {String} stageId 阶段ID
 * @param {String} feedbackValue 反馈内容
 */
export const paper_feedback = data => Promise.resolve({ status: 200, data })

/**
 * 阶段重新排序
 * @param {String} stageId 阶段ID
 * @param {String} oldSort 旧排序sort
 * @param {String} newSort 新排序sort
 */
export const stage_sort = data => Promise.resolve({ status: 200, data })

/**
 * 加课
 * @param {String} stageType 阶段类型
 * @param {String} classType 阶段课堂类型
 * @param {String} className 课堂名称
 * @param {String} remark 课堂说明
 * @param {String} courseId 订单ID
 */
export const add_class = data => Promise.resolve({ status: 200, data })

/**
 * 排课
 * @param {String} name 课堂名称
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {String} description 课堂说明
 * @param {String} cdId 订单ID
 * @param {String} bigPaperStageId 阶段ID
 * @param {String} bigPaperClassId 大论文课堂ID
 */
export const order_putClassroom = data => Promise.resolve({ status: 200, data })

/**
 * 上传文件
 * @param {String} url url
 * @param {String} name 文件名称
 * @param {String} type 此处固定为 类型
 * @param {String} remark 备注描述
 * @param {String} teacherId 讲师ID
 * @param {String} courseId 订单ID
 * @param {String} stageId 阶段ID
 * @param {String} stageClassId 课堂ID
 * @param {String} stageClassFileType 大论文阶段课堂文件类型
 */
export const sysfile_upload = data => Promise.resolve({ status: 200, data })

/**
 * 论文评级
 * @param {String} courseId 订单ID
 * @param {String} rate 论文评级 1 A  2 B 3 C  4 D
 */
export const paper_rate = data => Promise.resolve({ status: 200, data })

/**
 * 上传必论文修改文件 更新阶段状态
 * @param {String} courseId 订单ID
 * @param {String} stageId 阶段ID
 * @param {String} stageClassId 阶段课堂实例ID
 * @param {String} teacherId 讲师ID
 * @param {String} url 文件地址
 * @param {String} remark 备注
 * @param {String} type 
 */
export const stage_over = data => Promise.resolve({ status: 200, data })

/**
 * 删除上传的文件
 * @param {String} id
 */
export const delete_id = id => Promise.resolve({ status: 200, id })

/**
 * 刪除阶段课堂接口
 * @param {String} courseId 订单ID
 * @param {String} stageClassId 阶段课堂ID
 */
export const delete_class = data => Promise.resolve({ status: 200, data })

/**
 * 通过课堂ID查询大论文课堂大论文材料文件
 * @param {String} courseId 订单ID
 * @param {String} stageClassId 阶段课堂ID
 */
export const queryfile_stageclass = data => Promise.resolve({ status: 200, data })

/**
 * 更新课堂
 * @param {String} id classroomId
 * @param {String} cdId 订单ID
 * @param {String} name 课堂名称
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @param {String} description 课堂说明
 */
export const order_updateClassroom = data => Promise.resolve({ status: 200, data })

/**
 * 根据classroomId查询实际课堂信息
 * @param {String} classroomId
 */
export const findClassroomInfo = classroomId => Promise.resolve({ status: 200, classroomId })

/**
 * 获取oss 私钥
 */
export const getAliOSSUploadSign = () => Promise.resolve({ status: 200, data: Date.now() })

/**
 * 批量上传文件
 * @param {String} url url
 * @param {String} name 文件名称
 * @param {String} type 此处固定为
 * @param {String} remark 备注描述
 * @param {String} teacherId 讲师ID
 * @param {String} courseId 订单ID
 * @param {String} stageId 阶段ID
 */
export const sysfile_uploadList = data => Promise.resolve({ status: 200, data })

