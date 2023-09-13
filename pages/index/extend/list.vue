<template>
	<view>
		<default-expansion @trigger='trigger' :particularsList='particularsList'
			:scrollTop="scrollTop"></default-expansion>
		<view style='padding:20rpx 0;margin: 10rpx 0;'>
			<u-loadmore color='#999999' :status="status" />
		</view>
	</view>
</template>

<script>
	import defaultExpansion from "@/components/expansion-theme/default.vue"
	export default {
		components: {
			defaultExpansion
		},
		data() {
			return {
				scrollTop: 0,
				status: 'loadmore',//loadmore 、loading、nomore
				particularsList: [{
						"id": 1,
						"created_at": "2023-03-16 03:19:51",
						"content": '人与人的关系，大都有个规律。从向往一个人，靠近一个人，到认识一个人，熟悉一个人，到误解一个人，离开一个人，最终回到一个人，释怀一个人。那些释怀的人再相遇时，鼓起勇气也只能问一句：你还好吗？“你还好吗？”不是让你回答我很好。而是想告诉你，没有联系的日子里，我在一直牵挂你.在时光的小河里，用文字追逐一缕心灵的暗香。在这不可惊扰的一刻静谧里，没有泪，没有哀伤，只有生命的坦然与从容，安详和淡泊。',
						"img_list": [
							"https://browser6.qhimg.com/t01f0c4e363868e7879.jpg",
							"http://pan.xiaofan.ink/down/banner.jpg",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/fb73178a-42be-4bdb-b83b-75aa704bb502.png",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/6e6291f6-9b9e-4f34-9b92-332ff2195e39.png",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8c0d8d26-a969-4564-aa95-1bf5447bbb41.png",
							"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/9d644eff-4b92-4d70-a80d-d1c5af82d1cd.png"
						],
						"user_name": "橙不七",
						"headimgurl": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png",
						"need_pd": [{
							"item_id": 1621,
							"item_name": "原创"
						}],
						"showText": false,
					},
					{
						"id": 5,
						"created_at": "2023-03-16 03:19:51",
						"content": "情思理还乱，红颜剪不断，秋去冬来成感伤，花谢花开几苍凉？恋恋卷风尘，昙花乍一现，情思已逝暗留香，红颜已往空留叹。冷月夜，寒芳岁，凄风扶盏意消退；十指扣，浓眉皱，情至红颜华年愁。琉璃深处，点点忧伤，绾向前世愿，却了结不断今生残缘。无奈幽幽乱红，纵然血溅春泥，终因一场水月镜花，负了你我，负了天下。转身处，一觞浊酒，于心间，尽洒万碧情缘。",
						"img_list": [
							"https://img2.woyaogexing.com/2023/03/19/d668d0cdd1131e37a001789f0c1e9ada.jpeg",
							// "https://img2.woyaogexing.com/2023/03/17/2df5cc78e2334780b3477b4aad613323.jpeg",
							// "https://img2.woyaogexing.com/2023/03/15/dd363f9eb70567340bec34a1968777dc.jpeg"
						],
						"user_name": "正一不正经",
						"headimgurl": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png",
						"need_pd": [{
							"item_id": 1621,
							"item_name": "转载"
						}],
						"showText": false,
					},
					{
						"id": 6,
						"created_at": "2023-03-16 03:19:51",
						"content": "千回百转，缘聚缘散，情牵几许，随流年渐行渐远。问世间，情为何物？多少蜜语甜言，多少海誓山盟，季节的风，不懂得山誓海盟，吹起了你的发梢，吹走了你的誓言，我的影子，真的好孤单。无法守候想要的天长地久，无法留住你的温柔，心里万点忧，眉间朱砂扣，人比黄花瘦，娥眉锁忧愁。",
						"img_list": [
							// "https://sns-img-bd.xhscdn.com/48470def-cc1a-0750-50ca-e000e22b9b8f?imageView2/2/w/1920/format/webp|imageMogr2/strip",
							// "https://sns-img-qc.xhscdn.com/0f0cceca-3984-4e6c-874d-287006581a47?imageView2/2/w/1920/format/webp|imageMogr2/strip",
							// "https://sns-img-qc.xhscdn.com/fdd7199a-ef1c-cc08-cba8-ddbafd9cb17a?imageView2/2/w/1920/format/webp|imageMogr2/strip"
						],
						"user_name": "猪猪叠叠乐",
						"headimgurl": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-773911e8-6917-4f03-9f50-e2393807e7c3/8ce21b4a-778e-4af1-a4c2-f7c4aff11949.png",
						"need_pd": [{
							"item_id": 1621,
							"item_name": "转载"
						}],
						"showText": false,
					}
				]
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		//上拉加载更多
		onReachBottom: function() {
			var that = this
			// this.communication()

		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
		},
		methods: {
			trigger(index) {
				var that = this
				that.$set(that.particularsList[index], 'showText', !that.particularsList[index].showText)
				if (that.particularsList[index].showText) {
					that.particularsList[index].scrollTop = this.scrollTop - 30
				} else {
					uni.pageScrollTo({
						scrollTop: that.particularsList[index].scrollTop,
						duration: 250,
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7F8FA;
	}
</style>