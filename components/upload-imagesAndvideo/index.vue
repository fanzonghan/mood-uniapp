<template>
	<view>
		<view class="flex flex-wrap p-l-20 p-t-20">
			<view class="m-r-20 m-b-20 tool-content-box position-relative" v-for="(imgItem, imgIndex) in imageList"
				:key="imgIndex">
				<image @click="previewImage(imgIndex)" :src="imgItem.localUrl" class="tool-cover-mini"
					mode="aspectFill" />
				<view class="text-center position-absolute top-0 right-0 text-greey p-t-5 p-r-5">
					<image :src="require('@/components/upload-imagesAndvideo/images/close.png')" class="tool-close-icon"
						@click="delImage(imgIndex)" mode="aspectFill" />
				</view>
				<view v-if="imgItem.loadState == 'fail'"
					class="p-y-10 flex align-center justify-center position-absolute bottom-0 left-0 right-0 text-center font-24 tool-upload-fail">
					上传失败
				</view>
				<view v-if="imgItem.loadState == 'loading'"
					class="flex align-center justify-center position-absolute top-0 bottom-0 left-0 right-0 font-24">
					已上传({{imgItem.progress}})
				</view>
			</view>
			<view class="m-r-20 m-b-20 tool-content-box position-relative" v-for="(vItem, vIndex) in videoList"
				:key="vIndex">
				<image :src="vItem.coverImg" class="tool-cover-mini" mode="aspectFill" />
				<view class="flex align-center justify-center position-absolute top-0 bottom-0 left-0 right-0">
					<image @click="previewVideo(vIndex)"
						:src="require('@/components/upload-imagesAndvideo/images/player.png')"
						class="tool-player-icon" />
					<view class="text-center position-absolute top-0 right-0 text-greey p-t-5 p-r-5">
						<image :src="require('@/components/upload-imagesAndvideo/images/close.png')"
							class="tool-close-icon" @click="delVideo(vIndex)" mode="aspectFill" />
					</view>
				</view>
				<view v-if="vItem.loadState == 'fail'"
					class="p-y-10 flex align-center justify-center position-absolute bottom-0 left-0 right-0 text-center tool-upload-fail">
					上传失败
				</view>
				<view v-if="vItem.loadState == 'loading'"
					class="flex align-center justify-center position-absolute top-0 bottom-0 left-0 right-0 font-24">
					已上传({{vItem.progress}})
				</view>
			</view>
			<view class="m-r-20 m-b-20 flex flex-column justify-center tool-box" @click="chooseImage()"
				v-if="useImageTool && imageList.length < maxImagesCount">
				<view class="text-center m-b-10">
					<image :src="require('@/components/upload-imagesAndvideo/images/image.png')" class="tool-image"
						mode="aspectFill"></image>
				</view>
				<view class="text-center font-26 color-999999">
					添加图片
				</view>
			</view>
			<!-- 			<view @click="chooseVideo()" v-if="useVideoTool && videoList.length < maxVideoCount" class="m-r-20 m-b-20 flex flex-column justify-center tool-box" >
				<view class="text-center m-b-10">
					<image  :src="require('@/components/upload-imagesAndvideo/images/movie.png')" class="tool-image" mode="aspectFill"></image>
				</view>
				<view class="text-center font-26 color-999999">
					添加视频1
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import {
		HTTP_REQUEST_URL,
		HEADER,
		TOKENNAME
	} from '@/config/app'
	const baseUrlUpload = HTTP_REQUEST_URL + '/api/upload' // 这是文件上传的地址，必填！！！，视频、图片的上传地址都是这个
	export default {
		name: 'uploadImagesAndvideo',
		props: {
			useVideoTool: {
				type: Boolean,
				default: true
			},
			useImageTool: {
				type: Boolean,
				default: true
			},
			uGridCol: {
				type: Number,
				default: 4
			},
			maxImagesCount: {
				type: Number,
				default: 5
			},
			maxVideoCount: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				imageList: [],
				videoList: [],
				previewVideoUrl: ''
			}
		},
		methods: {
			//删除图片
			delImage(index) {
				this.imageList.splice(index, 1);
			},
			//删除视频
			delVideo(index) {
				this.videoList.splice(index, 1);
			},
			//选择图片
			chooseImage() {
				uni.chooseImage({
					count: this.maxImagesCount - this.imageList.length,
					sizeType: ['original', 'compressed'],
					sourceType: ['camera', 'album'], //camera 拍照 album 相册
					success: (res) => {
						res.tempFilePaths.forEach(item => {
							this.imageList.push({
								localUrl: item,
								uploadUrl: '',
								loadState: 'loading', //loading，fail，success
								progress: 0
							})
							this.imageList.forEach(uitem => {
								const downloadTask = uni.uploadFile({
									url: baseUrlUpload, //仅为示例，非真实的接口地址
									filePath: uitem.localUrl,
									name: 'file',
									success: (res) => {
										let data = JSON.parse(res.data)
										data = data.data
										let image = data.url
										uitem.uploadUrl = image
										uitem.loadState = 'success'
									},
									fail: (err) => {
										uitem.loadState = 'fail'
									},
								});
								downloadTask.onProgressUpdate((res) => {
									uitem['progress'] = res.progress
								});
							})
						})
					},
					fail() {
						uni.showToast({
							title: "获取图片失败",
							icon: 'none',
							duration: 1000
						})
					}
				})
			},
			//选择视频
			chooseVideo() {
				uni.chooseVideo({
					sourceType: ['camera', 'album'],
					success: (res) => {
						this.videoList.push({
							coverImg: res.thumbTempFilePath,
							localUrl: res.tempFilePath,
							uploadUrl: '',
							loadState: 'loading', //loading，fail，success
							progress: 0
						})
						this.videoList.forEach(vitem => {
							const downloadTask = uni.uploadFile({
								url: baseUrlUpload, //仅为示例，非真实的接口地址
								filePath: vitem.localUrl,
								name: 'file',
								success: (ures) => {
									let data = JSON.parse(ures.data)
									data = data.data
									let video = data.url
									vitem.uploadUrl = video
									vitem.loadState = 'success'
								},
								fail: (err) => {
									vitem.loadState = 'fail'
								},
							});
							downloadTask.onProgressUpdate((res) => {
								vitem['progress'] = res.progress
							});
						})

					},
					fail() {
						//获取视频失败
					}
				})
			},
			//预览图片
			previewImage(index) {
				let urls = []
				this.imageList.forEach(item => {
					urls.push(item.localUrl)
				})
				uni.previewImage({
					current: index,
					urls: urls
				});
			},
			//获取所有上传的图片
			getImages() {
				let images = []
				this.imageList.forEach(item => {
					images.push(item.uploadUrl)
				})
				return images
			},
			//获取所有上传的视频
			getVideos() {
				let videos = []
				this.videoList.forEach(item => {
					videos.push(item.uploadUrl)
				})
				return videos
			},
			//预览视频
			previewVideo(index) {
				this.previewVideoUrl = this.videoList[index].uploadUrl
			}
		}
	}
</script>

<style lang="scss">
	.tool-content-box {
		width: 150rpx;
		height: 150rpx;
		border-radius: 10rpx;
		overflow: hidden;
		border: 1px solid #EEEEEE;
	}

	.tool-box {
		width: 150rpx;
		height: 150rpx;
		border: 1px dashed #000000;
		border-radius: 10rpx;
	}

	.tool-image {
		width: 100rpx;
		height: 100rpx;
	}

	.tool-cover-mini {
		width: 100%;
		height: 100%;
	}

	.tool-close-icon {
		width: 35rpx;
		height: 35rpx;
	}

	.tool-player-icon {
		width: 70rpx;
		height: 70rpx;
	}

	.tool-upload-fail {
		background-color: #FA3534;
		color: #FFFFFF;
	}
</style>