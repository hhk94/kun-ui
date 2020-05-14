<template>
	<view class="body">
		<k-title type="h1" >
			<text slot="english" >Grid</text>
			<text slot="desc">宫格布局</text>
		</k-title>
		<view class="section" :showBorder="true">
			<k-title type="h3">基础用法</k-title>
			<k-title type="h7">
				<text slot="default" >每行个数：</text>
				<text slot="content">column[默认3]</text>
			</k-title>
			<k-grid :column="3" @change="change">
				<k-grid-item
				v-if="index<6"
				v-for="(item,index) of list"
				:key="index"
				:index="index"
				>
					<image :src="item.src" mode="aspectFill" class="image"></image>
					<text class="text">{{item.word}}</text>
				</k-grid-item>
			</k-grid>
			<k-title type="h7">
				<text slot="default" >每行个数：</text>
				<text slot="content">column=4</text>
			</k-title>
			<k-grid :column="4" @change="change">
				<k-grid-item
				v-if="index<8"
				v-for="(item,index) of list"
				:key="index"
				:index="index"
				>
					<text class="text">{{item.word}}</text>
				</k-grid-item>
			</k-grid>
		</view>
		<view class="section">
			<k-title type="h3">无边框</k-title>
			<k-title type="h7">
				<text slot="default" >边框参数：</text>
				<text slot="content">showBorder[Boolean]</text>
			</k-title>
			<k-grid :column="3" @change="change" :showBorder='false'>
				<k-grid-item
				v-if="index<6"
				v-for="(item,index) of list"
				:key="index"
				:index="index"
				>
					<image :src="item.src" mode="aspectFill" class="image"></image>
					<text class="text">{{item.word}}</text>
				</k-grid-item>
			</k-grid>
		</view>
		<view class="section">
			<k-title type="h3">角标</k-title>
			<k-title type="h7">
				<text slot="default" >角标参数text：</text>
				<text slot="content">角标文字</text>
			</k-title>
			<k-title type="h7">
				<text slot="default" >角标参数type：</text>
				<text slot="content">primary/success/warning/danger/default</text>
			</k-title>
			<k-grid :column="3" @change="change" :showBorder='false'>
				<k-grid-item
				v-if="index<5"
				v-for="(item,index) of list"
				:key="index"
				:index="index"
				>
					<image :src="item.src" mode="aspectFill" class="image"></image>
					<text class="text">{{item.word}}</text>
					<view v-if="item.badge" class="grid-dot">
						<!-- <uni-badge :text="item.badge" :type="item.type" :inverted="true"/> -->
						<uni-badge :text="item.badge" :type="item.type" />
					</view>
				</k-grid-item>
			</k-grid>
		</view>
		
	</view>
</template>

<script>
	// #ifdef MP
	import KGrid from '../../components/kun-grid/kun-grid/kun-grid.vue'
	import KGridItem from '../../components/kun-grid/kun-grid-item/kun-grid-item.vue'
	import KTitle from '../../components/kun-title/kun-title.vue'
	// #endif
	export default {
		data() {
			return {
				list:[
					{
						word:'测试1',
						src:'/static/c1.png',
						badge:1,
						type:'primary'
					},
					{
						word:'测试2',
						src:'/static/c2.png',
						badge:1,
						type: "success"
					},
					{
						word:'测试3',
						src:'/static/c3.png',
						badge:1,
						type: "warning"
					},
					{
						word:'测试4',
						src:'/static/c4.png',
						badge:1,
						type: "error"
					},
					{
						word:'测试5',
						src:'/static/c5.png',
						badge:1,
						type: "default"
					},
					{
						word:'测试6',
						src:'/static/c6.png',
						badge:1
					},
					{
						word:'测试7',
						src:'/static/c7.png',
						badge:1
					},
					{
						word:'测试8',
						src:'/static/c8.png',
						badge:1
					},
					{
						word:'测试9',
						src:'/static/c9.png',
						badge:1
					},
					
				]
			};
		},
		// #ifdef MP
		components:{
			KGridItem,
			KGrid,
			KTitle
		},
		// #endif
		mounted() {
			console.log(this)
			
		},
		methods:{
			change(e){
				let {index} = e.detail
				console.log(index)
			}
		}
	}
	
</script>

<style lang="scss">
.section{
	padding: 20rpx ;
	
}
.plain,.default{
	display: flex;
	justify-content: space-between;
	margin-bottom: 20rpx;
	flex-wrap: wrap;
}
.text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}
.image {
		width: 50rpx;
		height: 50rpx;
	}
.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}
.grid-item-box {
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
</style>
