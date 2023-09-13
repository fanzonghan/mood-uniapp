<template>
	<view class="">
		<view
			style="background-color: #FFFFFF;width: 100%; margin: 10rpx auto;height: 100%;border-radius: 20rpx;overflow: hidden;"
			v-for="(i,index) in particularsList" :key='i.id'>
			<view style=" display: flex;justify-content: space-between;padding-top: 20rpx;">
				<view style="display: flex;padding: 20rpx; 20rpx 0 20rpx;">
					<u-avatar :src="i.headimgurl" fontSize="26"></u-avatar>
					<view style="margin-left: 15rpx; ">
						<view style="color:#181518;font-size: 31rpx;font-weight: bold;margin-bottom: 10rpx;">
							{{i.user_name}}
						</view>
						<view style="width: 100rpx;">
							<u-tag v-for="(tags,j) in i.need_pd" :key="j" :text="tags.item_name" borderColor='#F2F6F9'
								bgColor='#F2F6F9' color="#999999" />
						</view>
					</view>
				</view>
				<view style="padding: 30rpx 0rpx 0 0rpx; color: #999999;font-size: 28rpx;width: 120rpx;width: 180rpx;">
					{{i.created_at.split(' ')[0]}}
				</view>
			</view>
			<view style=" padding: 0 10rpx 20rpx 120rpx;">
				<view class="conts" v-if="i.showText">
					<text class="content_text" selectable="true">{{i.content}}</text>
					<text v-if="i.content !== null && i.content.length > 60"
						style="color:#B7905B;font-size:30rpx;margin-left: 10rpx;"
						@click="toggleDescription(index)">收起</text>
				</view>
				<view v-else class="cont">
					<text class="content_text" selectable="true"
						v-if="i.content !== null && i.content.length > 0 && i.content.length < 60">
						{{i.content.substr(0, 61)}}
					</text>
					<text class="content_text" selectable="true"
						v-if="i.content !== null && i.content.length > 0 && i.content.length > 60">
						{{i.content.substr(0, 61)+'...'}}
					</text>
					<text v-if="i.content !== null && i.content.length > 70"
						style="color:#B7905B;font-size:30rpx;margin-left: 10rpx;"
						@click="toggleDescription(index)">展开全文</text>
				</view>
				<view style="margin: 20rpx 0 10rpx 0;">
					<u-grid :col="3" :border='false' hover-class='none'>
						<u-grid-item :custom-style="customStyleImg" v-for="(list,x) in i.img_list" :key="list">
							<image @click="previewPhoto(index,x)" lazy-load :lazy-load-margin="0"
								style="width: 170rpx; height: 170rpx;border-radius: 10rpx;" :src="list"
								mode="scaleToFill">
							</image>
						</u-grid-item>
					</u-grid>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			scrollTop: {
				type: Number,
				default: 0
			},
			particularsList: {
				type: Array,
				default: []
			}

		},
		data() {
			return {
				customStyleImg: {
					padding: '7rpx 0'
				},
			}
		},
		methods: {
			// 全文展开收起
			toggleDescription(index) {
				let that = this
				that.$emit('trigger', index)

			},
			previewPhoto(index, j) {
				var that = this
				uni.previewImage({
					current: j,
					urls: this.particularsList[index].img_list,
					loop: true
				});

			},
		}
	}
</script>

<style lang="scss">
	.content_text {
		letter-spacing: 3rpx;
		color: #181518;
		font-size: 30rpx;
	}
</style>