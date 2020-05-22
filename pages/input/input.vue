<template>
	<view class="body">
		<k-title type="h1" >
			<text slot="english" >Input</text>
			<text slot="desc">输入框</text>
		</k-title>
		<view class="section">
			<k-title type="h3">基础使用</k-title>
			<k-title type="h7">
				<text slot="default" >type参数：</text>
				<text slot="content">default[默认]/plain/success/warning/error</text>
			</k-title>
			<k-input  type="default">
				<text slot="desc">电话default：</text>
				<input type="text" slot="input" placeholder="您的电话号码" class="input-test">
			</k-input>
			<k-input  type="plain">
				<text slot="desc">电话plain：</text>
				<input type="text" slot="input" placeholder="您的电话号码" class="input-test">
			</k-input>
			<k-input  type="success">
				<text slot="desc">电话plain：</text>
				<input type="text" slot="input" placeholder="您的电话号码" class="input-test">
			</k-input>
			<k-input  type="warning">
				<text slot="desc">电话plain：</text>
				<input type="text" slot="input" placeholder="您的电话号码" class="input-test">
			</k-input>
			<k-input  type="error">
				<text slot="desc">电话plain：</text>
				<input type="text" slot="input" placeholder="您的电话号码" class="input-test">
			</k-input>
		</view>
		
	</view>
</template>

<script>
	// #ifdef MP
	import KTitle from '../../components/kun-title/kun-title.vue'
	import KInput from '../../components/kun-input/kun-input.vue'
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
			KTitle,
			KInput
		},
		// #endif
		mounted() {
		},
		methods:{
			click:function(e){
				uni.showToast({
					title:"点击"+e,
					icon:'none'
				})
			}
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

.input-test{
	text-indent: 10rpx;
	color: black;
}
</style>
