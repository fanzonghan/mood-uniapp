import request from "@/utils/request.js";
/**
 * 获取主页数据 无需授权
 *
 */
export function getIndexData() {
	return request.get("v1/index", {}, {
		noAuth: true
	});
}