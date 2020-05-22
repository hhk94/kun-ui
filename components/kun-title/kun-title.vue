<template name="KTitle">
	<view class="k-title">
		<!-- h1 -->
		<view class="title" v-if="type=='h1'">
			<text class="english">
				<slot name="english"></slot>
			</text>
			<text class="desc">
				<slot name="desc"></slot>
			</text>
		</view>
		<!-- h2 -->
		<view class="hk-h2" v-if="type=='h2'">
			<text class="hk-h2-word">
				<slot></slot>
			</text>
			<text class="num">{{num}}</text>
		</view>
		<!-- h3 -->
		<view class="hk-h3" v-if="type=='h3'">
			<slot></slot>
			
		</view>
		<!-- h7 -->
		<view class="hk-h7 " v-if="type=='h7'">
			<view class="default">
				<slot name="default"></slot>
			</view>
			<view class="content">
				<slot name="content"></slot>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		name:"KTitle",
		props:{
			 /* 内置标题种类 */
			type: {//标题种类
				type: String,
				default: 'h3'
			},
			text: {//文字
				type: String,
				
			},
			num:{
				type:[String, Number]
			}
		},
		// computed: {
		// 	/* 根据不同的props，展示按钮样式 */
		// 	styles: {
		// 		get() {
		// 			return ['sp-button',  this.type]
		// 		}
		// 	}
		// },
		data() {
		return {

		};
		},
		mounted() {
		}
	}
</script>

<style lang="scss" scoped>
@import '../init.scss';
// --------------------------------h1
.k-title{
	width: 100%;
}
.title{
	background-color:$hk-color;
	font-size: 36rpx;
	text-align: center;
	
	color:$hk-bg;
	overflow: hidden;
	margin-bottom: 50rpx;
	text{
		display: block;
		margin: 20rpx 0;
	}
	.english{
		position: relative;
	}
}
.english::after{
	position: absolute;
	bottom: -10rpx;
	left: 50%;
	transform: translateX(-50%);
	content: '';
	display: block;
	visibility: visible;
	width: 30rpx;
	height: 4rpx;
	border-radius: 4rpx;
	background:$hk-bg ;
}
.desc{
	font-size: 20rpx;
}
// ------------------------------------h2
.hk-h2{
	color: $k-h2-color;
	font-size:32rpx;
	margin: 20rpx ;
	padding: 0 5rpx;
	position: relative;
	&:after{
		position: absolute;
		display: block;
		visibility: visible;
		content: '';
		background-color: $k-h2-color;
		left: -20rpx;
		top: 0;
		width: 6rpx;
		height: 38rpx;
	}
	.hk-h2-word{
		max-width: 75%;
		display: inline-block;
	}
	.num{
		text-align: center;
		padding: 0 10rpx;
		position: absolute;
		right: 0;
		top: 0;
		border-radius: 5rpx;
		background-color: $k-back-color;
		color: $k-h2-color;
		
	}
}
// ------------------------------------h3
.hk-h3{
	color: $hk-color;
	font-size: 28rpx;
	margin: 20rpx ;
	padding: 0 30rpx;
	position: relative;
}
.hk-h3::after{
	position: absolute;
	display: block;
	visibility: visible;
	content: '';
	width: 16rpx;
	height: 16rpx;
	border-radius: 16rpx;
	border: 4rpx solid $hk-color;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
}
//---------------------------h7
.hk-h7{
	margin: 10rpx 0;
	display: flex;
	justify-content: flex-start;
	padding: 0 80rpx;
	position: relative;
	flex-wrap: wrap;
	
	.default{
		position: relative;
		&::after{
			position: absolute;
			display: block;
			visibility: visible;
			content: '';
			width: 16rpx;
			height: 2rpx;
			background-color: $hk-color;
			left:-30rpx;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	view{
		color: $hk-color;
		font-size: 24rpx;
	}
}
</style>
