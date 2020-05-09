<template>
	<view>
		<k-title type="h1">
			<text slot="english" >Button</text>
			<text slot="desc">按钮</text>
		</k-title>
		<k-title type="h2">朴素按钮</k-title>
		<view class="plain">
			<k-button plain>normal</k-button>
			<k-button type="primary" plain>primary</k-button>
			<k-button type="success" plain>success</k-button>
			<k-button type="warning" plain>warning</k-button>
			<k-button type="danger" plain>danger</k-button>
		</view>
		<k-title type="h2">基础按钮</k-title>
		<view class="default">
			<k-button >normal</k-button>
			<k-button type="primary" >primary</k-button>
			<k-button type="success" >success</k-button>
			<k-button type="warning" >warning</k-button>
			<k-button type="danger" >danger</k-button>
		</view>
		<k-title type="h2">圆角按钮</k-title>
		<view class="default">
			<k-button type="normal" round>normal</k-button>
			<k-button type="primary" round>primary</k-button>
			<k-button type="success" round>success</k-button>
			<k-button type="warning" round>warning</k-button>
			<k-button type="danger" round>danger</k-button>
		</view>
		<k-title type="h2">禁止选中</k-title>
		<view class="default">
			<k-button type="normal" disabled>normal</k-button>
			<k-button type="normal" round disabled>normal</k-button>
			<k-button type="normal" plain disabled>normal</k-button>
		</view>
		<view class="default">
			<k-button type="primary" disabled>primary</k-button>
			<k-button type="primary" round disabled>primary</k-button>
			<k-button type="primary" plain disabled>primary</k-button>
		</view>
		<view class="default">
			<k-button type="success" disabled>success</k-button>
			<k-button type="success" round disabled>success</k-button>
			<k-button type="success" plain disabled>success</k-button>
		</view>
		<view class="default">
			<k-button type="warning" disabled>warning</k-button>
			<k-button type="warning" round disabled>warning</k-button>
			<k-button type="warning" plain disabled>warning</k-button>
		</view>
		<view class="default">
			<k-button type="danger" disabled>danger</k-button>
			<k-button type="danger" round disabled>danger</k-button>
			<k-button type="danger" plain disabled>danger</k-button>
		</view>
		<k-title type="h2">按钮尺寸</k-title>
		<view class="default">
			<k-button type="primary" size="small">small</k-button>
			<k-button type="primary" size="medium">medium</k-button>
			<k-button type="primary" size="large">large</k-button>
		</view>
		<view class="default">
			<k-button type="danger" size="small" round plain>small</k-button>
			<k-button type="danger" size="medium" round plain>medium</k-button>
			<k-button type="danger" size="large" round plain >large</k-button>
		</view>
		<k-title type="h2">块级按钮</k-title>
		<view >
			<k-button type="primary" size="small" round plain block>small</k-button>
			<k-button type="primary" size="medium"  block>medium</k-button>
			<k-button type="primary" size="large" round block >large</k-button>
		</view>
		<k-title type="h2">图标按钮</k-title>
		<view class="default">
			<k-button type="primary" size="small" icon="fa-bar-chart" >small</k-button>
			<k-button type="primary" size="medium" icon="fa-bar-chart">medium</k-button>
			<k-button type="primary" size="large" icon="fa-bar-chart" plain>large</k-button>
		</view>
		<k-title type="h2">图标旋转/加载</k-title>
		<view class="default">
			<k-button type="primary" size="small" icon="fa-spinner" icon_rotate>small</k-button>
			<k-button type="primary" size="medium" icon="fa-spinner" icon_rotate>medium</k-button>
			<k-button type="primary" size="large" icon="fa-spinner" plain icon_rotate>large</k-button>
		</view>
		<k-title type="h2" >点击加载</k-title>
		<view class="">
			<k-button type="primary" size="medium" 
			:icon="icon" 
			:icon_rotate="loading" 
			block 
			@click.native="enterLoading()">medium</k-button>
		</view>
	</view>
</template>

<script>
	// #ifdef MP
	import kButton from '../../components/kun-button/kun-button.vue'
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
			kButton,
			KTitle
		},
		// #endif
		mounted() {
			console.log(this)
		},
		methods:{
			enterLoading(){
				console.log('a')
				this.loading = true
				this.icon = 'fa-spinner'
				setTimeout(() => {
				  this.loading = false
				  this.icon = ''
				}, 2000)
			}
		}
	}
	
</script>

<style lang="scss">

.plain,.default{
	display: flex;
	justify-content: space-between;
	margin-bottom: 20rpx;
	flex-wrap: wrap;
}

</style>
