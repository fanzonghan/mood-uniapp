<template>
	<view class="main">
		<!-- 		<u-navbar title="发表" :safeAreaInsetTop="false" :placeholder="true">
			<view class="u-nav-slot" slot="left"></view>
		</u-navbar> -->

		<u--form labelPosition="left" :model="formData" :rules="rules" ref="form1">
			<u-form-item label="状态" prop="mood" borderBottom ref="item3">
				<u-radio-group v-model="formData.mood" @change="groupChange" placement="row" class="radio-group">
					<u-radio customStyle="18px" v-for="(item, index) in moodList" :key="index" :label="item.label"
						:name="item.name">
						<view @click="selectRadio(item.name)">
							<u--image :showLoading="true" :src="item.src" width="30px"
								height="30px"></u--image>{{item.label}}
						</view>
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="内容" prop="intro" borderBottom ref="item3">
				<u--textarea placeholder="不低于3个字" v-model="formData.intro" count></u--textarea>
			</u-form-item>
			<u-form-item label="配图" prop="img" borderBottom ref="item3">
				<addFile ref="adFile"></addFile>
			</u-form-item>
			<u-form-item label="权限" prop="visible" borderBottom ref="item3">
				<u-radio-group v-model="formData.visible" @change="groupChange">
					<u-radio activeColor="red" label="私密" name="1"></u-radio>
					<u-radio activeColor="red" label="公开" name="2"></u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="时间" prop="hotel" labelWidth="80" borderBottom @click="showCalendar = true">
				<u--input v-model="formData.hotel" disabled disabledColor="#ffffff" placeholder="请选择时间"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
		</u--form>
		<u-button type="primary" text="提交" customStyle="margin-top: 50px" @click="submit"></u-button>

		<u-calendar :show="showCalendar" mode="single" @confirm="calendarConfirm" @close="calendarClose"
			:defaultDate="formData.hotel"></u-calendar>

		<tabbar :tabbar="tabbar"></tabbar>
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar/tabbar.vue"
	import addFile from "@/components/upload-imagesAndvideo/index.vue"
	import {
		addArticle
	} from "@/api/api.js"
	export default {
		components: {
			tabbar,
			addFile
		},
		data() {
			return {
				tabbar: 1,
				formData: {
					intro: '',
					hotel: '',
					visible: '1', // 1私密 2公开
					mood: '1',
					img: '',
				},
				rules: {},
				showCalendar: false,
				moodList: [{
						"label": "开心",
						"name": "kuaile",
						"src": "/static/img/bq/开心.png",
					},
					{
						"label": "满足",
						"name": "manzu",
						"src": "/static/img/bq/满足.png",
					},
					{
						"label": "喜欢",
						"name": "xihuan",
						"src": "/static/img/bq/喜欢.png",
					},
					{
						"label": "感激",
						"name": "ganji",
						"src": "/static/img/bq/感谢.png",
					},
					{
						"label": "惊讶",
						"name": "jingya",
						"src": "/static/img/bq/惊讶.png",
					},
					{
						"label": "紧张",
						"name": "jinzhang",
						"src": "/static/img/bq/紧张.png",
					},
					{
						"label": "迷惑",
						"name": "mihuo",
						"src": "/static/img/bq/迷惑.png",
					},
					{
						"label": "生气",
						"name": "shengqi",
						"src": "/static/img/bq/生气.png",
					},
					{
						"label": "悲伤",
						"name": "beishang",
						"src": "/static/img/bq/哭.png",
					},
					{
						"label": "厌恶",
						"name": "yane",
						"src": "/static/img/bq/鄙视.png",
					},
					{
						"label": "疲劳",
						"name": "pilao",
						"src": "/static/img/bq/疲惫.png",
					},
					{
						"label": "难过",
						"name": "nanguo",
						"src": "/static/img/bq/哭.png",
					},
					{
						"label": "焦虑",
						"name": "jiaolv",
						"src": "/static/img/bq/焦虑.png",
					},
				]
			}
		},
		methods: {
			//选择心情
			selectRadio(name) {
				this.formData.mood = name;
			},
			groupChange(n) {
				console.log('groupChange', n);
			},
			calendarConfirm(e) {
				this.showCalendar = false
				this.formData.hotel = e[0]
				this.$refs.form1.validateField('hotel')
			},
			calendarClose() {
				this.showCalendar = false
				this.$refs.form1.validateField('hotel')
			},
			//提交
			submit() {
				let a = this.$refs.adFile.getImages();
				let formData = this.formData;
				formData.img = a.join(',')
				// if(fm == "" || fm == null || fm == undefined){
				// 	return uni.showToast({
				// 		title: '请上传封面',
				// 		icon:'none',
				// 		duration: 2000
				// 	});
				// }
				if (formData.mood == "" || formData.mood == null) {
					return uni.showToast({
						title: '请选择心情状态',
						icon: 'none',
						duration: 2000
					});
				}
				if (formData.intro == "" || formData.intro == null) {
					return uni.showToast({
						title: '请填写内容',
						icon: 'none',
						duration: 2000
					});
				}
				if (formData.visible == "" || formData.visible == null) {
					return uni.showToast({
						title: '请选择隐私权限',
						icon: 'none',
						duration: 2000
					});
				}
				if (formData.hotel == "" || formData.hotel == null) {
					return uni.showToast({
						title: '请选择日期',
						icon: 'none',
						duration: 2000
					});
				}
				console.log(formData)
				addArticle(formData).then(res => {

				})
				// uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	.main {
		padding: 30rpx;
		background-color: #fff;
	}

	.u-radio {
		margin-right: 30rpx
	}

	.radio-group {
		display: flex;
		flex-wrap: wrap;
	}

	.u-radio {
		padding: 10rpx
	}
</style>