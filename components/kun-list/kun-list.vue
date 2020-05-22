<template name="KList">
	<view class="k-list-body">
		<view class="list1" v-if="type=='list1'" @click="_click">
			<view class="left">
				<view class="icon">
					<image :src="img" mode="aspectFit" v-if="img" class="img"></image>
				</view>
				<view class="word">
					<text class="title">
						<slot name="title"></slot>
					</text>
					<text class="desc">
						<slot name="desc"></slot>
					</text>
				</view>
			</view>
			<view class="right" v-if="noRight">
				<image src="http://api.kunic.cn/zerg/public/kun-ui/right.png" mode="aspectFit" class="img"></image>
			</view>
		</view>
		
		<view class="list2" v-if="type=='list2'" @click="_click">
			<view class="left">
				<view class="icon">
					<image :src="img" mode="aspectFit" v-if="img" class="img"></image>
				</view>
				<view class="word">
					<text class="title">
						<slot name="title"></slot>
					</text>
					<text class="desc">
						<slot name="desc"></slot>
					</text>
				</view>
			</view>
			<view class="right" v-if="noRight">
				<image src="http://api.kunic.cn/zerg/public/kun-ui/right2.png" mode="aspectFit" class="img"></image>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		name:"KList",
		props:{
			 /* 内置标题种类 */
			type: {//标题种类
				type: String,
				default: 'list1'
			},
			text: {//文字
				type: String,
			},
			img:{//图标
				type: String,
			},
			num:{
				type:[String, Number]
			},
			noRight:{
				type:Boolean,
				default:true
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
			
		},
		methods:{
			_click:function(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../init.scss';
// --------------------------------list1
.list1{
	width: 90%;
	margin: 20rpx auto;
	box-shadow: 0 0 20rpx $k-border-color;
	min-height: 60rpx;
	display: flex;
	justify-content: space-between;
	border-radius: 10rpx;
	padding: 0 20rpx;
	.left{
		display: flex;
		justify-content: flex-start;
		width: 80%;
		.word{
			display: flex;
			flex-direction: column;
			padding: 20rpx ;
			overflow: hidden;
			.title{
				color: $k-color-primary;
				font-size: $k-h1-fz;
				
				display: block;
				overflow-wrap: break-word;
			}
			.desc{
				color: #a6a5a6;
				font-size: $k-h7-fz;
			}
		}
		.icon{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.img{
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
	.right{
		display: flex;
		padding: 20rpx ;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.img{
			width: 40rpx;
			height: 40rpx;
		}
	}
}
//--------------------------------list2
.list2{
	width: 90%;
	margin: 20rpx auto;
	border-bottom:1px solid $k-border-color;
	min-height: 60rpx;
	display: flex;
	justify-content: space-between;
	border-radius: 10rpx;
	padding: 0 20rpx;
	.left{
		display: flex;
		justify-content: flex-start;
		width: 80%;
		.word{
			display: flex;
			flex-direction: column;
			padding: 20rpx ;
			padding-left: 0;
			overflow: hidden;
			.title{
				color: $k-color-primary;
				font-size: $k-h1-fz;
				
				display: block;
				overflow-wrap: break-word;
			}
			.desc{
				color: #a6a5a6;
				font-size: $k-h7-fz;
			}
		}
		.icon{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			
			.img{
				margin-right: 20rpx;
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
	.right{
		display: flex;
		padding: 20rpx ;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-right: 0;
		.img{
			width: 40rpx;
			height: 40rpx;
		}
	}
}
</style>
