// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2023 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

import {
	HTTP_REQUEST_URL,
	HEADER,
	TOKENNAME
} from '@/config/app';
import store from '../store';

/**
 * 发送请求
 */
function baseRequest(url, method, data, {
	noAuth = false,
	noVerify = false
}) {
	let Url = HTTP_REQUEST_URL,
		header = HEADER;

	if (!noAuth) {
		if (!store.state.app.token) {
			return Promise.reject({
				msg: "未登录"
			});
		}
	}
	if (store.state.app.token) header[TOKENNAME] = 'Bearer ' + store.state.app.token;

	return new Promise((reslove, reject) => {
		if (uni.getStorageSync('locale')) {
			header['Cb-lang'] = uni.getStorageSync('locale')
		}
		uni.request({
			url: Url + '/api/' + url,
			method: method || 'GET',
			header: header,
			data: data || {},
			success: (res) => {
				if (noVerify)
					reslove(res.data, res);
				else if (res.data.status == 200)
					reslove(res.data, res);
				else if ([110002, 110003, 110004].indexOf(res.data.status) !== -1) {
					toLogin();
					reject(res.data);
				} else if (res.data.status == 100103) {
					uni.showModal({
						title: `提示`,
						content: res.data.msg,
						showCancel: false,
						confirmText: `我知道了`
					});
				} else
					reject(res.data.msg || `系统错误`);
			},
			fail: (msg) => {
				let data = {
					mag: `请求失败`,
					status: 1 //1没网
				}
				reject(`请求失败`);
			}
		})
	});
}

const request = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
	request[method] = (api, data, opt) => baseRequest(api, method, data, opt || {})
});



export default request;
