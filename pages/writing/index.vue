<template>
	<view class="main">
		<u-navbar title="发表" :safeAreaInsetTop="false" :placeholder="true">
			<view class="u-nav-slot" slot="left"></view>
		</u-navbar>

		<u--form labelPosition="left" :model="formData" :rules="rules" ref="form1">
			<u-form-item label="心情" prop="intro" borderBottom ref="item3">
				<u-radio-group v-model="formData.mood" @change="groupChange" placement="row" class="radio-group">
					<u-radio customStyle="18px" v-for="(item, index) in moodList" :key="index" :label="item.label"
						:name="item.name">
						<u--image :showLoading="true"
							:src="item.src"
							width="30px" height="30px"></u--image>{{item.label}}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="内容" prop="intro" borderBottom ref="item3">
				<u--textarea placeholder="不低于3个字" v-model="formData.intro" count></u--textarea>
			</u-form-item>
			<u-form-item label="权限" prop="intro" borderBottom ref="item3">
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
	export default {
		components: {
			tabbar
		},
		data() {
			return {
				tabbar: 1,
				formData: {
					intro: '',
					hotel: '',
					visible: '1', // 1私密 2公开
					mood: '1',
				},
				rules: {},
				showCalendar: false,
				moodList: [{
						"label": "快乐",
						"name": "kuaile",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "满足",
						"name": "manzu",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "喜欢",
						"name": "xihuan",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "感激",
						"name": "ganji",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "兴奋",
						"name": "xingfen",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "安静",
						"name": "anjing",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "惊讶",
						"name": "jingya",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "紧张",
						"name": "jinzhang",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "迷惑",
						"name": "mihuo",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "生气",
						"name": "shengqi",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "悲伤",
						"name": "beishang",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "厌恶",
						"name": "yane",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "疲劳",
						"name": "pilao",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "情绪低落",
						"name": "qingxudiluo",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "难过",
						"name": "nanguo",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "焦虑",
						"name": "jiaolv",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					},
					{
						"label": "恐慌",
						"name": "konghuang",
						"src": "https://gd-hbimg.huaban.com/68a7105d207dbb6430ba9c3103370140cfee4d899756-c5mLTm_fw236",
					}
				]
			}
		},
		methods: {
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