<template>
	<div class="home">
		<div class="left-box" :style="{ background: `url(${logoUrl}) no-repeat center center`, backgroundSize: 'cover' }">
			<div class="logo"></div>
		</div>
		<div class="right-box">
			<div class="right-container">
				<div class="title">{{ loginTitle }}</div>
				<a-form :model="formState" :rules="rulesRef" ref="formRef">
					<a-form-item name="mobile">
						<a-input v-model:value="formState.mobile" placeholder="请输入手机号" />
					</a-form-item>
					<div class="code-name">
						<a-form-item name="verifyCode">
							<a-input v-model:value="formState.verifyCode" placeholder="请输入验证码" class="verification-code" />
							<h-button class="btn-code" @click="getVerification" :disabled="codeButtonDisabled">{{ codeButtonText }}</h-button>
						</a-form-item>
					</div>
					<a-form-item class="btn-pos">
						<h-button v-if="isLogin" class="btn-login" @click="handleLogin" :disabled="loginDisabled" :loading="loginLoading"
							>登录</h-button
						>
					</a-form-item>
				</a-form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, computed, ref, defineProps } from 'vue'
import { Form, message } from 'ant-design-vue'
import store from '@/store'
import { resultFactory } from './utils'
import { mobileCode } from './request'
const defaultCountdownNumber = 60
const props = defineProps({
	// 登录title
	loginTitle: {
		type: String,
		default: '手机号登录',
	},
	// 多久获取一次验证码，默认是60
	countdownNumber: {
		type: Number,
		default: 60,
	},
	// 登录回调
	submitLogin: {
		type: Function,
		default: null,
	},
	// 验证码登录请求
	submitLoginRequest: {
		type: Function,
		default: null,
	},
	// 获取验证码回调
	getVerificationCode: {
		type: Function,
		default: null,
	},
	// 获取验证码网络请求
	getVerificationCodeRequest: {
		type: Function,
		default: null,
	},
	// logo背景
	logoUrl: {
		type: String,
		default: require('./images/img_logo.png'),
	},
})
const useForm = Form.useForm
const formState = reactive({
	mobile: '',
	verifyCode: '',
})
const formRef = ref()
const isLogin = ref(true)
const goRegister = () => {
	formRef.value.resetFields()
	isLogin.value = !isLogin.value
	countdown.value = 0
}
const loginDisabled = computed(() => {
	return !(formState.mobile && formState.verifyCode)
})
const countdown = ref(props.countdownNumber)
const clear = ref(null)
const loginLoading = computed(() => {
	return store.state.account.loginLoading
})
const codeButtonDisabled = computed(() => {
	return countdown.value < defaultCountdownNumber && countdown.value >= 1
})
const codeButtonText = computed(() => {
	return codeButtonDisabled.value ? `${countdown.value}s` : '获取验证码'
})
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
const { validate, validateInfos } = useForm(formState, rulesRef)
const getVerification = async () => {
	try {
		if (formState.mobile) {
			countdown.vaue = defaultCountdownNumber
			const request =
				(props.getVerificationCodeRequest && props.getVerificationCodeRequest(formState)) ||
				mobileCode({ mobile: formState.mobile })
			const result = await request
			resultFactory({ result, successMsg: '验证码已发送' }).then((res) => {
				props.getVerificationCode && props.getVerificationCode(res)
				countdown.value -= 1
				clearInterval(clear.value)
				clear.value = null
				clear.value = setInterval(() => {
					if (countdown.value > 0) {
						countdown.value -= 1
					} else {
						clearInterval(clear.value)
					}
				}, 1000)
			})
		} else {
			message.error('请输入手机号')
		}
	} catch (error) {
		message.error(error)
	}
}
const handleLogin = () => {
	validate()
		.then(() => {
			store.commit('account/SET_LOGIN_LOADING', true)
			props.submitLogin && props.submitLogin(formState)
		})
		.catch((err) => {
			message.error(err.errorFields[0].errors[0])
		})
}
</script>

<style lang="less" scoped>
.verification-code {
	width: 148px !important;
}
.home {
	display: flex;
	.left-box {
		width: 40%;
		height: 100vh;
		// background: url('./images/img_logo.png') no-repeat;
		// background-size: cover;
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
		:deep(.ant-form-item-control-input .ant-form-item-control-input-content .ant-input-affix-wrapper) {
			border-radius: 12px !important;
		}
		:deep(.ant-input) {
			width: 300px;
			height: 50px;
			background: rgba(245, 247, 250, 1) !important;
			border-radius: 4px;
			border: 1px solid #f5f7fa;
			padding-left: 25px;
			box-sizing: border-box;
			font-size: 18px !important;
			caret-color: #333;
			&:focus {
				border: rgba(56, 138, 252, 1) solid 1px;
			}
		}
		.code-name {
			// width: 600px;
			display: flex;
		}
		.btn-code {
			width: 142px;
			margin-left: 10px;
		}

		.register {
			display: flex;
			font-size: 12px;
			justify-content: right;

			span {
				margin-left: 5px;
				color: #187af8;
				cursor: pointer;
			}
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
			border: 1px solid red !important;
			outline: none;
			border-radius: 12px;
		}
		:deep(.anticon, .anticon-loading) {
			margin-right: 5px;
		}
	}
}
.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
.ant-form-item-has-error
	:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper,
.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
.ant-form-item-has-error
	:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover,
.ant-form-item-has-error
	:not(.ant-input-number-affix-wrapper-disabled):not(
		.ant-input-number-affix-wrapper-borderless
	).ant-input-number-affix-wrapper:hover {
	background: rgba(245, 247, 250, 1) !important;
	border-radius: 4px;
	border-color: red;
}
</style>
-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover,
.ant-form-item-has-error
    :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
    background: rgba(245, 247, 250, 1) !important;
    border-radius: 4px;
    border-color: red;
}
</style>-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover,
.ant-form-item-has-error
    :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
    background: rgba(245, 247, 250, 1) !important;
    border-radius: 4px;
    border-color: red;
}
</style>-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover,
.ant-form-item-has-error
    :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
    background: rgba(245, 247, 250, 1) !important;
    border-radius: 4px;
    border-color: red;
}
</style>-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover,
.ant-form-item-has-error
    :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
    background: rgba(245, 247, 250, 1) !important;
    border-radius: 4px;
    border-color: red;
}
</style>