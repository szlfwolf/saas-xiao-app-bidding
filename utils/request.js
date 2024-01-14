const baseEnvUrl = {
	"DEV": "https://api.lfwolf.cn/",
	"LOCAL": ""
}

let BASEURL = baseEnvUrl['DEV']

const baseRequest = (url, method, data, params) => {
	return new Promise((resolve, reject) => {
		handleRequest(url, method, data, resolve, reject)
	})
}

// 发起请求
function handleRequest(url, method, data, resolve, reject) {
	const header = {
		'content-type': 'application/json'
	};
	// todo: 设置租户
	if (url.indexOf('app-api') >= 0) {
		header['tenant-id'] = 1
	}
	const token = uni.getStorageSync("token")
	if (token) {
		header['Authorization'] = 'Bearer ' + token;
	}
	console.log(url)
	uni.request({
		url: BASEURL + url,
		method: method,
		header: header,
		data: data || {},
		success: (res) => {
			console.log(res)
			if (res.data.code === 200 || res.data.code === 0)
				return resolve(res.data, res);
			else if ([410000, 410001, 410002, 401].indexOf(res.data.code) !== -1) {
				// toLogin();
				return reject(res.data);
			} else
				return reject(res.data.msg || res.data.message || '系统错误');
		},
		fail: (fail) => {
			console.log('fail', fail)
			return reject(fail);
		}

	})
}


const request = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
	request[method] = (api, data, opt, params) => baseRequest(api, method, data, opt || {}, params)
});



export default request;