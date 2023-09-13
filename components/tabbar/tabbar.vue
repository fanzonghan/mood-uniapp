<template>
	<view>
		<u-tabbar @change="onTabbar" :value="tabbar" :fixed="true" :placeholder="true" :safeAreaInsetBottom="false">
			<u-tabbar-item text="首页" icon="home"></u-tabbar-item>
			<u-tabbar-item text="写心情" icon="photo"></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import {} from '@/api/api.js';
	export default {
		props: {
			tabbar: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				banner: [{
					image: 'https://up.enterdesk.com/edpic_source/03/b3/b8/03b3b8ebc0ccf1067770a6cddbb5790b.jpg',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东',
				}],
			}
		},
		onLoad() {},
		methods: {
			onTabbar(item) {
				let page = '';
				switch (item) {
					case 0:
						page = '/pages/index/index';
						break;
					case 1:
						page = '/pages/writing/index';
						break;
					case 2:
						page = '/pages/user/index';
						break;
				}
				if (item != this.check) {
					uni.navigateTo({
						url: page,
					});
				}
			},
		}
	}
</script>

<style lang="scss">

</style>