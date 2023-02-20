export const UPLOAD_STATUS = {
    uploading: 'uploading',
    end: 'end',
}

export const MAX_FILE_SIZE = 1024 * 1024 * 1000 * 5
export const MAX_FILE_SIZE_TIP = '请上传5000M以内的文件'

export const TIME_OUT = 24 * 60 * 60 * 1000

export const IS_DECODE = process.env.VUE_APP_SOURCE_MODE === 'decode'

export const AUTH_DIRECTIVE_TYPE_MAP = {
    OR: "OR", // 或
    AND: "AND", // 且
};

export const CODES_OF_BUTTONS = {
    sys_user_add: "sys_user_add",// 添加管理员
    sys_user_update: "sys_user_update",// 更新管理员
    sys_user_del: "sys_user_del",// 删除管理员
    role_add: "role_add",// 添加角色
    role_perm_set: "role_perm_set",// 设置权限
    role_update: "role_update",// 更新角色
    user_review_detail: "user_review_detail",// 查看用户
    user_review_check: "user_review_check",// 审核用户
};