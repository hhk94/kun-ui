<template>
	<view class="body">
		<k-title type="h1" >
			<text slot="english" >List</text>
			<text slot="desc">列表布局</text>
		</k-title>
		<view class="section">
			<k-title type="h7">
				<text slot="default" >右侧箭头/字体颜色，请自行去components源码修改</text>
			</k-title>
			<k-title type="h7">
				<text slot="default" >类别参数[type]：</text>
				<text slot="content">顶级列表[list1];基本列表[list2]</text>
			</k-title>
			<k-title type="h3">顶级列表</k-title>
			<k-title type="h7">
				<text slot="default" >icon参数：</text>
				<text slot="content">img[String];不传无图标</text>
			</k-title>
			<k-title type="h7">
				<text slot="default" >标题slot[title]：</text>
				<text slot="content">主标题</text>
			</k-title>
			<k-title type="h7">
				<text slot="default" >标题slot[desc]：</text>
				<text slot="content">副标题</text>
			</k-title>
			<k-list type="list1" img="/static/index/base.png">
				<text slot="title">listlist</text>
				<text slot="desc">列表布局</text>
			</k-list>
			<k-list type="list1" >
				<text slot="title">listlist</text>
				<text slot="desc">列表布局</text>
			</k-list>
			<k-list type="list1" >
				<text slot="title">listlist</text>
				<!-- <text slot="desc">列表布局</text> -->
			</k-list>
		</view>
		<view class="section">
			<k-title type="h3">普通列表</k-title>
			<k-title type="h7">
				<text slot="default" >icon参数：</text>
				<text slot="content">img[String];不传无图标</text>
			</k-title>
			<k-title type="h7">
				<text slot="default" >标题slot[title]：</text>
				<text slot="content">主标题</text>
			</k-title>
			<k-title type="h7">
				<text slot="default" >标题slot[desc]：</text>
				<text slot="content">副标题</text>
			</k-title>
			<k-list type="list2" >
				<text slot="title">客服中心</text>
				<text slot="desc">工作时间: 8:00-18:00</text>
			</k-list>
			<k-list type="list2" >
				<text slot="title">设置</text>
			</k-list>
			<k-list type="list2" img="/static/index/nl.png">
				<text slot="title">闹铃</text>
			</k-list>
		</view>
		<view class="section">
			<k-title type="h3">点击事件</k-title>
			<k-title type="h7">
				<text slot="default" >点击事件：</text>
				<text slot="content">@click</text>
			</k-title>
			<k-list type="list2" @click="click('客服中心')">
				<text slot="title">客服中心</text>
				<text slot="desc">工作时间: 8:00-18:00</text>
			</k-list>
			<k-list type="list1" img="/static/index/base.png" @click="click('list')">
				<text slot="title">list</text>
				<text slot="desc">列表布局</text>
			</k-list>
		</view>
		<view class="section">
			<k-title type="h7">
				<text slot="default" >是否显示右侧图标：</text>
				<text slot="content">noRight[boolean]</text>
			</k-title>
			<k-list type="list2" img="/static/index/nl.png" :noRight="false">
				<text slot="title">闹铃</text>
			</k-list>
		</view>
	</view>
</template>

<script>
	// #ifdef MP
	import KTitle from '../../components/kun-title/kun-title.vue'
	import kList from '../../components/kun-list/kun-list.vue'
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
			kList
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
.plain,.default{
	display: flex;
	justify-content: space-between;
	margin-bottom: 20rpx;
	flex-wrap: wrap;
}

</style>
