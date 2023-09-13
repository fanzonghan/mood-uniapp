<template>
	<view class="main">
		<view class="wp">
			<!-- #ifdef MP-WEIXIN -->
			<view class="m1" :style="{'padding-top': paddingBottomHeight + 'rpx'}">
				<!-- #endif -->
				<!-- #ifdef H5 || APP -->
				<view class="m1 box">
					<!-- #endif -->
					<view class="ul-list1">
						<navigator url="/pages/personal/personal" hover-class="none" class="con">
							<view class="li">
								<view class="pic">
									<image src="http://test.h5.org.cn/qz/pet/images/mine/d-icon1.png" mode="">
									</image>
								</view>
								<view class="desc">
									茶花花
								</view>
							</view>
						</navigator>
					</view>
				</view>
				<view class="m1">
					<view class="ul-list2">
						<view class="li">
							<navigator url="/pages/myPost/myPost" hover-class="none" class="con">
								<text class="s1">34</text>
								<text>我的帖子</text>
							</navigator>
						</view>
						<view class="li">
							<navigator url="" hover-class="none" class="con">
								<text class="s1">1324</text>
								<text>我的点赞</text>
							</navigator>
						</view>
						<view class="li">
							<navigator url="/pages/myAttention/myAttention" hover-class="none" class="con">
								<text class="s1">16</text>
								<text>关注的人</text>
							</navigator>
						</view>
						<view class="li">
							<navigator url="/pages/myFans/myFans" hover-class="none" class="con">
								<text class="s1">456</text>
								<text>我的粉丝</text>
							</navigator>
						</view>
					</view>
				</view>
				<view class="m1">
					<view class="ul-list3">
						<view class="li">
							<navigator url="" hover-class="none" class="con">
								<view class="pic">
									<image src="http://test.h5.org.cn/qz/pet/images/mine/d-icon2.png" mode="">
								</view>
								<view class="txt">
									<view class="text">
										<view class="h3">
											柯基小短腿
										</view>
										<view class="desc">
											<view class="icon">
												<image src="http://test.h5.org.cn/qz/pet/images/mine/d-icon3.png"
													mode=""></image>
											</view>
											今天又是躺着的一天
											<image class="arrow1"
												src="http://test.h5.org.cn/qz/pet/images/mine/d-arrow.png" mode="">
											</image>
										</view>
									</view>
									<view class="arrow">
										<image src="http://test.h5.org.cn/qz/pet/images/mine/d-arrow.png" mode="">
										</image>
									</view>
								</view>
							</navigator>
						</view>
					</view>
				</view>

				<view class="m1">
					<view class="ul-list4">
						<!-- <navigator url="" hover-class="none" class="con"> -->
						<view class="li">
							<navigator url="/pages/messges/messageCenter" hover-class="none" class="con">
								<view class="pic">
									<image src="http://test.h5.org.cn/qz/pet/images/mine/d-icon4.png" mode="">
								</view>
								<view class="txt">
									消息中心
								</view>
							</navigator>
						</view>
						<view class="li">
							<navigator url="/pages/equipment/equipment" hover-class="none" class="con">
								<view class="pic">
									<image src="http://test.h5.org.cn/qz/pet/images/mine/d-icon5.png" mode="">
								</view>
								<view class="txt">
									设备
								</view>
							</navigator>
						</view>
						<view class="li">
							<navigator url="/pages/contact/contact" hover-class="none" class="con">
								<view class="pic">
									<image src="http://test.h5.org.cn/qz/pet/images/mine/d-icon6.png" mode="">
								</view>
								<view class="txt">
									宠物紧急联系人
								</view>
							</navigator>
						</view>
						<view class="li">
							<navigator url="" hover-class="none" class="con">
								<view class="pic">
									<image src="http://test.h5.org.cn/qz/pet/images/mine/d-icon7.png" mode="">
								</view>
								<view class="txt">
									账号安全
								</view>
							</navigator>
						</view>
						<view class="li">
							<navigator url="../chat/chat2 " hover-class="none" class="con">
								<view class="pic">
									<image src="http://test.h5.org.cn/qz/pet/images/mine/d-icon8.png" mode="">
								</view>
								<view class="txt">
									帮助与反馈
								</view>
							</navigator>
						</view>
						<view class="li">
							<navigator url="../catalogue/catalogue" hover-class="none" class="con">
								<view class="pic">
									<image src="http://test.h5.org.cn/qz/pet/images/mine/d-icon9.png" mode="">
								</view>
								<view class="txt">
									<text>设置</text>
								</view>
							</navigator>
						</view>
						<!-- </navigator> -->
					</view>
				</view>
			</view>
			<tabbar :tabbar="tabbar"></tabbar>
		</view>
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar/tabbar.vue"
	export default {
		components: {
			tabbar
		},
		data() {
			return {
				// #ifdef MP-WEIXIN
				paddingBottomHeight: 60,
				// #endif
				tabbar: 2,
			}
		},
		// #ifdef MP-WEIXIN
		created() {
			let that = this;
			uni.getSystemInfo({
				success: function(res) {
					let model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15'];
					model.forEach(item => {
						//适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
						if (res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
							that.paddingBottomHeight = 100;
						}
					})
				}
			});
		},
		// #endif
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.wp {
		padding: 0 30rpx 30rpx 30rpx;
	}


	/*  #ifdef  H5 || APP  */
	.box {
		padding-top: 30rpx;
	}

	/*  #endif  */
	.ul-list1 {
		padding: 50rpx 0;
		overflow: hidden;
		position: relative;
	}

	.ul-list1 .pic {
		float: left;
		width: 86rpx;
		height: 86rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 15rpx;
	}

	.ul-list1 .pic image {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.ul-list1 .desc {
		padding-top: 20rpx;
		font-weight: bold;
		letter-spacing: 1rpx;
		float: left;
	}

	.ul-list1 .li::after {
		content: '';
		position: absolute;
		width: 20rpx;
		height: 20rpx;
		top: 75rpx;
		right: 5rpx;
		border-top: 2rpx rgb(133, 133, 133) solid;
		border-left: 2rpx rgb(133, 133, 133) solid;
		transform: rotate(135deg);

	}

	.ul-list2 {
		overflow: hidden;
		margin-bottom: 50rpx;
		display: flex;
		justify-content: space-between;
	}

	/* .ul-list2 .li {
		float: left;
		width: 25%;
	} */

	.ul-list2 .li text {
		display: block;
		text-align: center;
	}

	.ul-list2 .li .con {
		display: block;

	}

	.ul-list2 .li .s1 {
		margin-bottom: 15rpx;
		font-size: 38rpx;
		color: #000;
		font-weight: bold;
	}

	.ul-list2 .li text {
		font-size: 22rpx;
		color: #666666;
	}

	.ul-list3 {
		background-color: #5b31ff;
		border-radius: 20rpx;
		padding: 30rpx 24rpx 54rpx 42rpx;
		margin-bottom: 32rpx;
		position: relative;
	}

	.ul-list3 .con {
		display: block;
		overflow: hidden;
	}

	.ul-list3 .pic {
		float: left;
		width: 82rpx;
		height: 82rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-top: 30rpx;
	}

	.ul-list3 .pic image {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.ul-list3 .txt {
		padding-top: 15rpx;
		overflow: hidden;
		padding-left: 40rpx;
	}

	.ul-list3 .txt .text {
		float: left;
		width: 80%;
	}

	.ul-list3 .txt .h3 {
		font-size: 26rpx;
		color: #fff;
		margin-bottom: 22rpx;
	}

	.ul-list3 .txt .desc {
		position: relative;
		display: inline-block;
		border-radius: 30rpx;
		padding: 6rpx 20rpx;
		font-size: 12px;
		color: #8881a8;
		background-color: rgb(255, 255, 255);
	}

	.ul-list3 .txt .desc .icon {
		position: absolute;
		top: -10rpx;
		left: -20rpx;
		width: 32rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
	}

	.ul-list3 .txt .desc .icon image {
		display: inline-block;
		width: 100%;
		max-height: 100%;
		vertical-align: middle;
	}

	.ul-list3 .txt .desc .arrow1 {
		display: inline-block;
		width: 14rpx;
		height: 24rpx;
		margin-left: 15rpx;
		margin-top: -4rpx;
		vertical-align: middle;
	}

	.ul-list3 .txt .arrow {
		float: right;
		width: 41rpx;
		height: 70rpx;
		line-height: 68rpx;
		text-align: center;
		margin-top: 20rpx;
		border-radius: 5rpx;
		background-color: #997aff;
		/* background-color: rgba(92, 43, 255,0.1); */
	}

	.ul-list3 .txt .arrow image {
		display: inline-block;
		width: 14rpx;
		height: 24rpx;
		vertical-align: middle;
	}

	.ul-list4 {
		padding-bottom: 180rpx;
	}

	.ul-list4 .li {
		overflow: hidden;
		padding: 28rpx 0 25rpx;
		position: relative;
	}

	.ul-list4 .li::after {
		content: '';
		position: absolute;
		width: 15rpx;
		height: 15rpx;
		top: 44rpx;
		right: 15rpx;
		border-top: 2rpx #c7c7c7 solid;
		border-left: 2rpx #c7c7c7 solid;
		transform: rotate(135deg);
	}

	.ul-list4 .con {
		display: block;
		overflow: hidden;
	}

	.ul-list4 .li .pic {
		float: left;
		width: 36rpx;
		height: 38rpx;
		line-height: 36rpx;
		text-align: center;
		margin-right: 15rpx;
	}

	.ul-list4 .li .pic image {
		display: inline-block;
		max-width: 100%;
		max-height: 100%;
		vertical-align: middle;

	}

	.ul-list4 .li .txt {
		float: left;
		font-size: 26rpx;
		padding-top: 6rpx;
	}

	.ul-list5 {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		padding: 20rpx 0;
		box-shadow: #c1c1b9 5px -3px 17px 1px;
	}

	.ul-list5 .li {
		float: left;
		width: 25%;
		text-align: center;
		display: block;
	}

	.ul-list5 .li .pic {
		display: block;
	}

	.ul-list5 .li .txt {
		display: inline-block;

	}

	.ul-list5 .li text {
		font-size: 20rpx;
		color: #666666;
	}

	.ul-list5 .li:hover {
		color: #5b31ff;
	}
</style>