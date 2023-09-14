<template>
	<view>
<!-- 		<u-navbar title="心情笔记" :safeAreaInsetTop="false" :placeholder="true" bgColor="#a9a9a9">
			<view class="u-nav-slot" slot="left"></view>
		</u-navbar> -->
<!-- 		<u-search :showAction="true" actionText="搜索" height="35" borderColor="#000" bgColor="#fff"
			:animation="true"></u-search> -->
		<u-swiper :list="banner" height="180" keyName="image" showTitle :autoplay="false" circular></u-swiper>

		<u-notice-bar text="测试测试测试测试测试测试测试" mode="link" speed="80" url="/pages/componentsB/tag/tag"></u-notice-bar>
		<u-tabs :list="list1" @click="click"></u-tabs>
		<Articlelist></Articlelist>
		<tabbar :tabbar="tabbar"></tabbar>
	</view>
</template>

<script>
	import {
		getIndexData
	} from '@/api/api.js';
	import defaultExpansion from "@/components/expansion-theme/default.vue"
	import Articlelist from "./extend/list.vue"
	import tabbar from "@/components/tabbar/tabbar.vue"
	export default {
		components: {
			defaultExpansion,
			Articlelist,
			tabbar
		},
		data() {
			return {
				tabbar: 0,
				banner: [{
					image: 'http://pan.xiaofan.ink/down/banner.jpg',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东',
				}],
				list1: [{
					name: '推荐',
				}, {
					name: '最新',
				}]
			}
		},
		onLoad() {
			getIndexData().then(res => {

			})
		},
		methods: {
			menusClick(name) {
				// this.$refs.uToast.success(`点击了第${name}个`)
			},
			toPage(page) {
				uni.navigateTo({
					url: page,
				});
			}
		}
	}
</script>

<style lang="scss">

</style>