<template>
	<view class="body">
		<k-title type="h1" >
			<text slot="english" >h1</text>
			<text slot="desc">h1：主标题</text>
		</k-title>
		<view class="section">
			<k-title type="h2" num="61">h2:可以传数字的标题</k-title>
		</view>
		<view class="section">
			<k-title type="h3">h3：普通标题</k-title>
		</view>
		<view class="section">
			<k-title type="h7">
				<text slot="default" >h7解释标题：</text>
				<text slot="content">解释内容</text>
			</k-title>
		</view>
		
	</view>
</template>

<script>
	// #ifdef MP
	import KTitle from '../../components/kun-title/kun-title.vue'
	// #endif
	export default {
		data() {
			return {
				loading:false,
				icon:''
			};
		},
		// #ifdef MP
		components:{
			KTitle
		},
		// #endif
		mounted() {
			console.log(this)
		},
		methods:{
		}
	}
	
</script>

<style lang="scss">
.body{
	background-color: $k-back-color;
	
}
.section{
	padding: 20rpx 0;
	background-color: white;
	border-radius: 10rpx;
	margin-bottom:20rpx ;
}
.plain,.default{
	display: flex;
	justify-content: space-between;
	margin-bottom: 20rpx;
	flex-wrap: wrap;
}

</style>
