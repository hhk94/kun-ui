<template>
	<view class="content">
		<k-title type="h1" >
			<text slot="english" >KUN UI</text>
			<text slot="desc">首页</text>
		</k-title>
		<view class="section">
			<k-grid :column="2" @change="change" :highlight="false" :square="false" :show-border="false">
				<k-grid-item
				v-if="index<8"
				v-for="(item,index) of list"
				:key="index"
				:index="index"
				>
					<div class="center">
						<image :src="item.src" mode="aspectFill" class="image"></image>
						<text class="text">{{item.word}}</text>
					</div>
					
				</k-grid-item>
			</k-grid>
		</view>
		<view @click="go_to('button')">按钮</view>
		<view @click="go_to('title')">标题</view>
		<view @click="go_to('grid')">宫格</view>
		<view @click="go_to('list')">列表</view>
	</view>
</template>

<script>
	// #ifdef MP
	import KGrid from '../../components/kun-grid/kun-grid/kun-grid.vue'
	import KBadge from '../../components/kun-grid/kun-badge/kun-badge.vue'
	import KGridItem from '../../components/kun-grid/kun-grid-item/kun-grid-item.vue'
	import KTitle from '../../components/kun-title/kun-title.vue'
	// #endif
	export default {
		data() {
			return {
				title: 'Hello',
				list:[
					{
						word:'表单组件',
						src:'/static/index/base.png',
						badge:1,
						type:'primary',
						page:'/pages/formPage/formPage'
					},
					{
						word:'布局组件',
						src:'/static/index/bj.png',
						badge:1,
						type: "success",
						page:'/pages/layoutPage/layoutPage'
					},
					{
						word:'拓展组件',
						src:'/static/index/tz.png',
						badge:1,
						type: "success",
						page:'/pages/expand/expand'
					},
					{
						word:'布局组件',
						src:'/static/c2.png',
						badge:1,
						type: "success",
						page:'/pages/base/base'
					},
					
					
				]
			}
		},
		// #ifdef MP
		components:{
			KGridItem,
			KGrid,
			KBadge,
			KTitle,
			
		},
		// #endif
		onLoad() {

		},
		methods: {
			go_to:function(item){
				uni.navigateTo({
					url:'/pages/'+item+'/'+item
				})
			},
			change(e) {
				let {
					index
				} = e.detail
				console.log(e)
				uni.navigateTo({
					url:this.list[index].page
				})
				
			},
		}
	}
</script>

<style scoped lang="scss">
.section{
	margin-top: 40rpx;
	padding: 0 40rpx;
	background-color: transparent;
}
.center{
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background: white;
	padding: 40rpx 80rpx;
	margin: 20rpx ;
	border-radius: 10rpx;
}
.image {
		width: 100rpx;
		height: 100rpx;
		margin: 0 auto;
	}
.text{
	font-size: 30rpx;
}
</style>
