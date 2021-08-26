/**
 * 查询订单阶段信息
 */
export function paper_stage() {
    return {
        status: 200,
        body: [
            {
                "id": 2386,
                "stageType": 0,
                "statused": 2,
                "stageName": "调研/定题阶段",
                "sort": 1,
                "stageClass": [
                    {
                        "className": "课",
                        "classType": 1
                    },
                    {
                        "className": "定题课",
                        "classType": 2
                    }
                ],
                "summary": null,
                "classTime": 50,
                "stageClassInstance": [
                    {
                        "id": 4524,
                        "classType": 1,
                        "className": "调研",
                        "statused": 2,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"1）了解学生...\",\"2）介绍每部分的...等服务\"] ",
                        "classStartTime": null,
                        "classTime": 30,
                        "teacherFilsValue": "-1",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4525,
                        "classType": 2,
                        "className": "定题课",
                        "statused": 2,
                        "paperStageAdd": 0,
                        "type": 2,
                        "remark": "[\"提供学生...，在课上与学生进行讨论\"]",
                        "classStartTime": null,
                        "classTime": 20,
                        "teacherFilsValue": "1",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    }
                ]
            },
            {
                "id": 2387,
                "stageType": 1,
                "statused": 1,
                "stageName": "建议阶段",
                "sort": 2,
                "stageClass": [
                    {
                        "className": "xxx 课 - 01",
                        "classType": 1
                    },
                    {
                        "className": "xxx 课",
                        "classType": 2
                    },
                    {
                        "className": "xxx 课",
                        "classType": 3
                    },
                    {
                        "className": "proofreading",
                        "classType": 4
                    }
                ],
                "summary": null,
                "classTime": 23,
                "stageClassInstance": [
                    {
                        "id": 4526,
                        "classType": 1,
                        "className": "xxx 课 - 01",
                        "statused": 1,
                        "paperStageAdd": 0,
                        "type": 2,
                        "remark": "[\"1) 协助...，主要是帮助...\",\"2) 获取反馈，优化课程 \"]",
                        "classStartTime": null,
                        "classTime": 23,
                        "teacherFilsValue": "-1",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4527,
                        "classType": 2,
                        "className": "xxx 课",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"1） 如有提交建议 ... 进行讲解\",\"2）不需要提交建议 ... 进行讲解\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "2",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4528,
                        "classType": 3,
                        "className": "xxx 课",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"学生完成写作后，... 进行修改\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "3",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4529,
                        "classType": 4,
                        "className": "proofreading",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 3,
                        "remark": "",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "7",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    }
                ]
            },
            {
                "id": 2388,
                "stageType": 2,
                "statused": 0,
                "stageName": "Recommend",
                "sort": 3,
                "stageClass": [
                    {
                        "className": "框架搭建",
                        "classType": 1
                    },
                    {
                        "className": "调整修改",
                        "classType": 2
                    },
                    {
                        "className": "校对",
                        "classType": 3
                    }
                ],
                "summary": null,
                "classTime": 0,
                "stageClassInstance": [
                    {
                        "id": 4530,
                        "classType": 1,
                        "className": "框架搭建",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"（1）讲解 ... \",\"（2）提出 ... \",\"（3）确认 ... \",\"（4）论文 ... 安排\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "2",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4531,
                        "classType": 2,
                        "className": "调整修改",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"学生完成 ... 继续修改\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "3",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4532,
                        "classType": 3,
                        "className": "校对",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 3,
                        "remark": "",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "7",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    }
                ]
            },
            {
                "id": 2389,
                "stageType": 3,
                "statused": 0,
                "stageName": "Review",
                "sort": 4,
                "stageClass": [
                    {
                        "className": "讲解",
                        "classType": 1
                    },
                    {
                        "className": "精读",
                        "classType": 2
                    },
                    {
                        "className": "研讨",
                        "classType": 3
                    },
                    {
                        "className": "批改",
                        "classType": 4
                    },
                    {
                        "className": "研讨02",
                        "classType": 5
                    },
                    {
                        "className": "校对",
                        "classType": 6
                    }
                ],
                "summary": null,
                "classTime": 0,
                "stageClassInstance": [
                    {
                        "id": 4533,
                        "classType": 1,
                        "className": "讲解",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"讲解 ... 以及\\\" ... \\\"，并且 ... 讲解\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "2,6",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4534,
                        "classType": 2,
                        "className": "精读",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"引导学生 ... 阅读和引用。\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "-1",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4535,
                        "classType": 3,
                        "className": "研讨",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 2,
                        "remark": "[\"确定 ... 解修改方法\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "-1",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4536,
                        "classType": 4,
                        "className": "批改",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"学生 ... 继续修改\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "3",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4537,
                        "classType": 5,
                        "className": "研讨02",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 2,
                        "remark": "[\"可再次 ... 修改方法\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "-1",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4538,
                        "classType": 6,
                        "className": "校对",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 3,
                        "remark": "",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "7",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    }
                ]
            },
            {
                "id": 2390,
                "stageType": 4,
                "statused": 0,
                "stageName": "Workmanship",
                "sort": 5,
                "stageClass": [
                    {
                        "className": "分析课",
                        "classType": 1
                    },
                    {
                        "className": "讨论课",
                        "classType": 2
                    },
                    {
                        "className": "自我批改",
                        "classType": 3
                    },
                    {
                        "className": "校对",
                        "classType": 4
                    }
                ],
                "summary": null,
                "classTime": 0,
                "stageClassInstance": [
                    {
                        "id": 4539,
                        "classType": 1,
                        "className": "分析课",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"手把手 ... 收集与分析等\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "2",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4540,
                        "classType": 2,
                        "className": "讨论课",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 2,
                        "remark": "[\"协助学生 ... 策略是否可行\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "-1",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4542,
                        "classType": 3,
                        "className": "自我批改",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "3",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4541,
                        "classType": 4,
                        "className": "校对",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 3,
                        "remark": "[\"结合导师 ... 意见讲解\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "7",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    }
                ]
            },
            {
                "id": 2391,
                "stageType": 5,
                "statused": 0,
                "stageName": "Modify",
                "sort": 6,
                "stageClass": [
                    {
                        "className": "剖析课",
                        "classType": 1
                    },
                    {
                        "className": "会议讨论",
                        "classType": 2
                    },
                    {
                        "className": "提供建议",
                        "classType": 3
                    }
                ],
                "summary": null,
                "classTime": 0,
                "stageClassInstance": [
                    {
                        "id": 4543,
                        "classType": 1,
                        "className": "剖析课",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"讲解Data ... 进行验证等\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "4",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4544,
                        "classType": 2,
                        "className": "会议讨论",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 2,
                        "remark": "[\"梳理导师 ... 修改中\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "-1",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4545,
                        "classType": 3,
                        "className": "提供建议",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 3,
                        "remark": "",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "7",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    }
                ]
            },
            {
                "id": 2392,
                "stageType": 6,
                "statused": 0,
                "stageName": "Discuss the results",
                "sort": 7,
                "stageClass": [
                    {
                        "className": "总结课",
                        "classType": 1
                    },
                    {
                        "className": "拆分批改",
                        "classType": 2
                    },
                    {
                        "className": "拆分批改校对",
                        "classType": 3
                    }
                ],
                "summary": null,
                "classTime": 0,
                "stageClassInstance": [
                    {
                        "id": 4546,
                        "classType": 1,
                        "className": "总结课",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"根据数据 ... 对未来的展望\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "2",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4547,
                        "classType": 2,
                        "className": "拆分批改",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"课上带学生 ... 如何修改\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "3",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4548,
                        "classType": 3,
                        "className": "拆分批改校对",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 3,
                        "remark": "",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "7",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    }
                ]
            },
            {
                "id": 2393,
                "stageType": 7,
                "statused": 0,
                "stageName": "梳理全文",
                "sort": 8,
                "stageClass": [
                    {
                        "className": "自习研讨课",
                        "classType": 1
                    },
                    {
                        "className": "全文校验",
                        "classType": 2
                    }
                ],
                "summary": null,
                "classTime": 0,
                "stageClassInstance": [
                    {
                        "id": 4549,
                        "classType": 1,
                        "className": "自习研讨课",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 1,
                        "remark": "[\"学生与导师 ... 进行修改讲解\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "-1",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    },
                    {
                        "id": 4550,
                        "classType": 2,
                        "className": "全文校验",
                        "statused": 0,
                        "paperStageAdd": 0,
                        "type": 3,
                        "remark": "[\"在学生 ... 总体proofreading\"]",
                        "classStartTime": null,
                        "classTime": null,
                        "teacherFilsValue": "5",
                        "classroomId": null,
                        "classroomRemark": null,
                        "teacherFiles": []
                    }
                ]
            }
        ]
    };
}

/**
 * 查询毕业论文辅导进度等头部信息
 */
export function paper_teacherRate() {
    return {
        status: 200,
        body: {
            "courseId": 239906,
            "schedule": 0.1,
            "dealDeadline": "2021-05-31 22:00:00",
            "officialDeadline": "2021-06-05 21:59:59",
            "statused": 3,
            "rate": null
        }
    }
}

export default {}