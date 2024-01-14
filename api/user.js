export function getDeployTask() {
	var user = uni.getStorageSync("user");
	var data = [];
	if (user) {
		data = [{
				"title": "洛阳黄河同力水泥有限责任公司绿色新能源",
				"sno": "ZTW-12109196R",
				"type": "工程类/房建标书",
				"status": "已完成",
				"done": true
			},
			{
				"title": "洛阳黄河同力水泥有限责任公司绿色新能源",
				"sno": "ZTW-12109196R",
				"type": "工程类/房建标书",
				"status": "待审核",
				"done": false
			},
		];
	}
	return data;
}

export function getSubscribeTask() {
	var user = uni.getStorageSync("user");
	var data = [];
	if (user) {
		data = [{
				"title": "洛阳黄河同力水泥有限责任公司绿色新材料项目污水处理站设备采购及安装询比（文件）采购",
				"sno": "洛阳政采公开-2021-11号",
				"city": "河南省·洛阳市",
				"date": "2021-10-31"
			},
			{
				"title": "洛阳黄河同力水泥有限责任公司绿色新材料项目污水处理站设备采购及安装询比（文件）采购",
				"sno": "洛阳政采公开-2022-11号",
				"city": "河南省·洛阳市",
				"date": "2022-11-31"
			},
		];
	} else {
		data = [{
				"title": "兰州黄河同力水泥有限责任公司绿色新材料项目污水处理站设备采购及安装询比（文件）采购",
				"sno": "兰州政采公开-2021-11号",
				"city": "甘肃省·兰州市",
				"date": "2021-10-31"
			},
			{
				"title": "兰州黄河同力水泥有限责任公司绿色新材料项目污水处理站设备采购及安装询比（文件）采购",
				"sno": "兰州政采公开-2021-21号",
				"city": "甘肃省·兰州市",
				"date": "2021-11-01"
			},
		];
	}
	return data;
}