import {
    Storage,
} from "@/utils/VEnum";

/**
 * localStorage get by id
 */
export function getStorage(id) {
    const storage = JSON.parse(localStorage.getItem(id));
    return storage || null;
}

/**
 * localStorage set
 */
export function setStorage(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
}

/**
 * 获取老师登录后的用户详情
 */
export function getTeacherInfo() {
    const info = JSON.parse(localStorage.getItem(Storage.TEACHER_INFO));
    if (!info) throw "未能获取到登录用户信息";
    return info;
}
