<template>
    <div class="home">
        <div class="left-box">
            <div class="logo">
                <!-- <img src="../../assets/image/login/login.svg" /> -->
            </div>
        </div>
        <div class="right-box">
            <div class="right-container">
                <div class="title">手机号登录</div>
                <a-form :model="formState" name="normal_login">
                    <a-form-item name="mobile" v-bind="validateInfos.mobile">
                        <a-input v-model:value="formState.mobile" @blur="validate('mobile', { trigger: 'change' })" placeholder="请输入手机号"/>
                    </a-form-item>
                    <div class="codename">
                        <a-form-item name="verifyCode" v-bind="validateInfos.verifyCode">
                            <a-input v-model:value="formState.verifyCode" @blur=" validate('verifyCode', { trigger: 'change' })" placeholder="请输入验证码" class="verification-code"/>
                            <h-button class="btn-code" @click="clickCode" :disabled="codeDisabled" >{{ codeTime }}</h-button>
                        </a-form-item>
                    </div>

                    <a-form-item :wrapper-col="{ offset: 8, span: 16 }" class="btn-pos">
                        <h-button class="btn-login" @click="handelLogin" :disabled="loginDisabled" :loading="loginLoading">登录</h-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script>
import {
    reactive,
    computed,
    defineComponent,
    ref,
    nextTick,
} from 'vue'
import { Form, message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import store from '@/store'
// import { fetchCode } from '@/api/common'
import { authInit } from '@/auth'
import { trackIns } from '@/track'

const useForm = Form.useForm
export default defineComponent({
    setup() {
        const router = useRouter()

        // const loginLoading = ref(false);

        const formState = reactive({
            mobile: '',
            verifyCode: '',
        })
        const codeTime = ref('获取验证码')
        const codeDisabled = ref(false)

        const validatorUserName = (rule, value, callback) => {
            if (isNaN(Number(value))) {
                return Promise.reject('只能输入数字')
            } else if (value.length < 11) {
                return Promise.reject('手机号错误')
            } else {
                return Promise.resolve()
            }
        }
        const validatorCode = (rule, value, callback) => {
            if (isNaN(Number(value))) {
                return Promise.reject('只能输入数字')
            } else if (value === '') {
                return Promise.reject('请输入验证码')
            } else if (value.length !== 4) {
                return Promise.reject('验证码错误')
            } else {
                return Promise.resolve()
            }
        }

        const rulesRef = reactive({
            mobile: [
                {
                    required: true,
                    message: '手机号错误',
                    trigger: 'change',
                    validator: validatorUserName,
                },
            ],
            verifyCode: [
                {
                    required: true,
                    message: '验证码错误',
                    trigger: 'change',
                    validator: validatorCode,
                },
            ],
        })
        let timeNull = ref(null)

        // const isLoading = ref(false);
        const { validate, validateInfos } = useForm(formState, rulesRef)
        const clickCode = () => {
            if (formState.mobile) {
                codeDisabled.value = true
                let time = 60
                // 获取验证码
                fetchCode({ mobile: formState.mobile }).catch((err) => {
                    message.error(err)
                })
                timeNull = setInterval(() => {
                    time--
                    if (time < 0) {
                        codeTime.value = '获取验证码'
                        codeDisabled.value = false
                        clearTimeout(timeNull)
                    } else {
                        codeTime.value = time + 's'
                    }
                }, 1000)
            } else {
                message.error('请输入手机号')
            }
        }
        const loginDisabled = computed(() => {
            return !(formState.mobile && formState.verifyCode)
        })
        const loginLoading = computed(() => {
            return store.state.account.loginLoading
        })
        const handelLogin = () => {
            validate()
                .then(() => {
                    store.commit('account/SET_LOGIN_LOADING', true)
                    loginLoading.value = true
                    store
                        .dispatch('account/loginByNameAndPwd', formState)
                        .then(async () => {
                            const userId = store.state.account.userInfo.user_id
                            if (userId) {
                                // 监控平台埋点pv上报
                                trackIns.pageViewTrack(userId)
                            }
                            // 设置权限自定义指令
                            await authInit()
                            store.commit('account/SET_LOGIN_LOADING', false)
                            router.push({ name: 'HOME_DETAIL' })
                        })
                        .catch((err) => {
                            store.commit('account/SET_LOGIN_LOADING', false)
                            message.error(err)
                        })
                })
                .catch((err) => {
                    message.error(err.errorFields[0].errors[0])
                })
        }
        const disabled = computed(() => {
            nextTick(() => {
                return !(formState.mobile && formState.verifyCode)
            })
        })
        return {
            loginDisabled,
            loginLoading,
            handelLogin,
            timeNull,
            codeDisabled,
            codeTime,
            clickCode,
            rulesRef,
            formState,
            validate,
            // onSubmit,
            disabled,
            // isLoading,
            validateInfos,
        }
    },
})
</script>
<style lang="less" scoped>
.verification-code {
    width: 148px !important;
}
.btn-pos {
    margin-left: -210px;
}
.home {
    display: flex;
    .left-box {
        width: 40%;
        height: 100vh;
        background: url('../../assets/image/login/img_logo.png') no-repeat;
        background-size: cover;
        .logo {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 240px;
            }
        }
    }
    .right-box {
        width: 60%;
        display: flex;
        justify-content: center;
        .right-container {
            width: 420px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .header {
                font-size: 32px;
            }
            .title {
                font-size: 24px;
                margin-top: 57px;
                margin-bottom: 30px;
            }
            :deep(.ant-form-item) {
                margin-top: 21px;
            }
            .login-form-button {
                width: 420px;
                height: 72px;
                margin-top: 30px;
                background: rgba(56, 138, 252, 1);
                border-radius: 12px;
                font-size: 16px;
                outline: none;
                border: none;
                &:hover {
                    background: rgba(92, 142, 216, 1);
                }
            }
            .login-form-button-disabled {
                width: 420px;
                height: 72px;
                margin-top: 30px;
                background: rgba(92, 142, 216, 1);
                border-radius: 12px;
                font-size: 16px;
                outline: none;
                border: none;
            }
        }
        // background: rgba(33, 35, 50, 1);
        :deep(.ant-form-item-control-input-content) {
            position: relative;
            display: flex;
            justify-content: space-between;
        }
        :deep(.ant-input-prefix) {
            position: absolute;
            width: 25px;
            height: 25px;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
            z-index: 1;
            img {
                width: 100%;
            }
        }
        :deep(.ant-input-suffix) {
            display: none;
        }
        :deep(
                .ant-form-item-control-input
                    .ant-form-item-control-input-content
                    .ant-input-affix-wrapper
            ) {
            border-radius: 12px !important;
        }
        :deep(.ant-input) {
            width: 300px;
            // height: 80px;
            height: 50px;
            background: rgba(245, 247, 250, 1) !important;
            border-radius: 4px;
            border: 0;
            padding-left: 25px;
            box-sizing: border-box;
            &:focus {
                border: rgba(56, 138, 252, 1) solid 1px;
            }
            //color: red;
            font-size: 18px !important;
            caret-color: #333;
        }
        .codename {
            width: 600px;
            display: flex;
        }
        .btn-code {
            width: 142px;
            margin-left: 10px;
        }
        .btn-login {
            width: 300px;
            height: 42px;
            display: flex;
            // margin-left: -100px;
            justify-content: center;
            align-items: center;
        }
        :deep(.ant-input-suffix) {
            margin: 0;
        }
        :deep(.ant-input-affix-wrapper) {
            padding: 0;
            background: rgba(47, 50, 69, 1);
            border: 0;
            input:-webkit-autofill,
            textarea:-webkit-autofill,
            select:-webkit-autofill {
                -webkit-text-fill-color: #ffffff;
                -webkit-box-shadow: 0 0 0px 100px transparent inset !important;
                background-image: none;
                background: transparent;
                transition: background-color 50000s ease-in-out 0s;
            }
            input {
                font-weight: normal;
            }
            input {
                font-weight: normal !important;
                &:-webkit-autofill::first-line {
                    font-size: 18px;
                    font-weight: normal !important;
                }
            }
        }
        :deep(.ant-input-affix-wrapper-focused) {
            border-color: transparent;
            border-radius: 12px;
            outline: none;
        }
        :deep(.ant-form-item-explain-error) {
            color: red;
            margin-top: 7px;
            margin-left: 20px;
            font-size: 12px;
            border-radius: 12px;
        }
        :deep(.ant-form-item-has-error .ant-input) {
            border: 1px solid red;
            outline: none;
            border-radius: 12px;
        }
        :deep(.anticon, .anticon-loading) {
            margin-right: 5px;
        }
    }
}
</style>
<style scoped>
.ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
.ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(
        .ant-input-affix-wrapper-borderless
    ).ant-input-affix-wrapper,
.ant-form-item-has-error
    :not(.ant-input-number-affix-wrapper-disabled):not(
        .ant-input-number-affix-wrapper-borderless
    ).ant-input-number-affix-wrapper,
.ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
.ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(
        .ant-input-affix-wrapper-borderless
    ).ant-input-affix-wrapper:hover,
.ant-form-item-has-error
    :not(.ant-input-number-affix-wrapper-disabled):not(
        .ant-input-number-affix-wrapper-borderless
    ).ant-input-number-affix-wrapper:hover {
    background: rgba(245, 247, 250, 1) !important;
    border-radius: 4px;
    border-color: red;
}
</style>
