import request from "@/utils/request.js";
/**
 * 获取主页数据 无需授权
 *
 */
export function getIndexData() {
	return request.get("index", {}, {
		noAuth: true
	});
}

export function addArticle(data){
	return request.post("article/add", data);
}