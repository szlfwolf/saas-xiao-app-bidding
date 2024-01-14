<template>
	<view class="flex-col page">
		<view class="flex-col flex-1 group">
			<view class="flex-col items-center self-stretch">
				<view class="flex-col justify-start items-center image-wrapper">
					<image class="shrink-0 image_5" src="/static/login/17040121941654525094.png" />
				</view>
				<text class="text mt-13">览众·众标</text>
			</view>

			<!-- #ifdef H5 -->
			<view class="flex-col justify-start items-center button text-wrapper" @click="login">
				<text class="font text_2 text-wrapper">微信登录</text>
			</view>
			<!-- #endif -->

			<!-- #ifdef MP-WEIXIN -->
			<view class="flex-col justify-start items-center button text-wrapper">
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"
					class="font text_2 text-wrapper">一键登录</button>
			</view>
			<!-- #endif -->

			<text class="self-center font text_3 text_4" @click="mockLogin()">直接试用</text>
			<view class="flex-row items-center checkbox group_2">
				<image class="shrink-0 image_6" src="/static/login/17040121941599837139.png" />
				<text class="font_2 text_3 text_5">登录代表同意</text>
				<text class="font_2 text_6">览众·保标《用户服务协议》</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import * as AuthApi from "@/api/member/auth.js"
	import * as UserApi from "@/api/member/user.js"

	const goIndex = () => {
		uni.switchTab({
			url: '/pages/index/index'
		});
	}
	const mockLogin = () => {
		console.log("mockLogin")
		uni.setStorageSync("user", {
			"nickname": "demo",
			"mobile": "135****1234",
			"avatar": "/static/user/3f22133883cbe76cf616a7b10eeba089.png"
		});
		goIndex()
	}
	// #ifdef H5
	const login = () => {
		mockLogin()
	}
	// #endif

	// #ifdef MP-WEIXIN
	/**
	 * 微信一键登录
	 */
	async function getPhoneNumber(e) {		
		// 情况一：拒绝授权手机号码
		const phoneCode = e.detail.code
		if (!e.detail.code) {			
			uni.showModal({
				title: '授权失败',
				content: '您已拒绝获取绑定手机号登录授权，可以使用其他手机号验证登录',
				confirmText: '知道了',
				confirmColor: '#3C9CFFFF'
			})
			return;
		}
		uni.showLoading();
		// 情况二：允许授权手机号码
		const loginCode = await getCode()
		AuthApi.weixinMiniAppLogin(phoneCode, loginCode).then(res => {
			const data = res.data;
			uni.setStorageSync("token", data.accessToken);
			getUserInfo();
		}).catch(e => {
			console.log(e)
		});
		uni.hideLoading();
	}
	async function getCode() {
		let provider = await getProvider();
		return new Promise((resolve, reject) => {
			uni.login({
				provider: provider,
				success(res) {
					console.log("getCode")
					console.log(res)
					return resolve(res.code);
				},
				fail() {
					return reject(null);
				}
			})
		})
	}
	/**
	 * 获取服务供应商
	 */
	async function getProvider() {
		return new Promise((resolve, reject) => {
			uni.getProvider({
				service: 'oauth',
				success(res) {
					console.log("getProvider")
					console.log(res)
					resolve(res.provider);
				},
				fail() {
					resolve(false);
				}
			});
		});
	}
	// #endif

	function getUserInfo() {
		UserApi.getUserInfo().then(res => {
			uni.hideLoading();
			uni.setStorageSync("user", res.data);
			goIndex();
		});
	}
</script>

<style scoped lang="scss">
	.mt-13 {
		margin-top: 26rpx;
	}

	.page {
		background-color: #ffffff;
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		height: 100%;

		.group {
			padding: 198rpx 94rpx 104rpx;
			overflow-y: auto;

			.image-wrapper {
				padding: 24rpx 0;
				background-color: #1890ff;
				border-radius: 32rpx;
				overflow: hidden;
				width: 136rpx;

				.image_5 {
					width: 118rpx;
					height: 86rpx;
				}
			}

			.text {
				color: #4f4f4f;
				font-size: 32rpx;
				font-family: Source Han Sans CN;
				line-height: 29.6rpx;
			}

			.button {
				align-self: stretch;
				margin-top: 440rpx;

				.text_2 {
					color: #ffffff;
					line-height: 29.7rpx;
				}
			}

			.text-wrapper {
				padding: 24rpx 0;
				background-color: #1890ff;
				border-radius: 116rpx;
			}

			.font {
				font-size: 32rpx;
				font-family: PingFang SC;
				line-height: 29.6rpx;
			}

			.text_3 {
				text-transform: capitalize;
			}

			.text_4 {
				margin-top: 60rpx;
				color: #1890ff;
				line-height: 29.5rpx;
			}

			.checkbox {
				align-self: stretch;
				margin-top: 120rpx;

				.image_6 {
					width: 32rpx;
					height: 32rpx;
				}

				.font_2 {
					font-size: 24rpx;
					font-family: PingFang SC;
					line-height: 22.42rpx;
				}

				.text_5 {
					margin-left: 16rpx;
					color: #333333;
					line-height: 22.28rpx;
				}

				.text_6 {
					color: #1890ff;
				}
			}

			.group_2 {
				padding-left: 36rpx;
				padding-right: 32rpx;
			}
		}
	}
</style>