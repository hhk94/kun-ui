<template name="KTitle">
	<view>
		<view class="title" v-if="type=='h1'">
			<text class="english">
				<slot name="english"></slot>
			</text>
			<text class="desc">
				<slot name="desc"></slot>
			</text>
		</view>
		<view class="name" v-if="type=='h2'">
			<slot>{{text}}</slot>
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
				default: 'h2'
			},
			text: {//文字
				type: String,
				
			},
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
.name{
	color: $hk-color;
	font-size: 24rpx;
	margin: 20rpx ;
	padding: 0 30rpx;
	position: relative;
}
.name::after{
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
.name{
	color: $hk-color;
	font-size: 24rpx;
	margin: 20rpx ;
	padding: 0 30rpx;
	position: relative;
}
.name::after{
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
</style>
