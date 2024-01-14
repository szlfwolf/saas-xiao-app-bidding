import request from "@/utils/request.js";

// 微信小程序的一键登录登录
export function weixinMiniAppLogin(phoneCode, loginCode) {
	const state = "weixinMiniAppLogin"
	return request.post('app-api/member/auth/weixin-mini-app-login', {
		phoneCode,
		loginCode,
		state
	}, {
		noAuth: true
	});
}