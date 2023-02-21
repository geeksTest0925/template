import { message } from "ant-design-vue";
export const isUndefined = (data) => {
    return data == null ||
        data === 'null' ||
        data === '' ||
        data === undefined ||
        data === 'undefined' ||
        data === 'unknown';
}

export const resultFactory = (params = {}) => {
    const { result = {}, successMsg = '操作成功', successCode = 200 } = params || {};
    return new Promise((resolve, reject) => {
        let Message = '';
        const { code, msg } = result || {};
        if (code === successCode) {
            Message = successMsg;
            message.success(Message)
            resolve(result);
        } else {
            Message = msg;
            reject(Message);
        }
    })
}