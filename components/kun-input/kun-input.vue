<template name="Kinput">
	<view class="Kinput-body">
		<view class="input-body"  :class="'input-'+type">
			<view class="desc"><slot name="desc"></slot></view>
			<view class="input" :style="{'width':'calc(100% - '+width+'rpx)'}"><slot name="input"></slot></view>
			
		</view>
		<!-- <view class="input-plain input-body" v-if="type=='plain'">
			<view class="desc"><slot name="desc"></slot></view>
			<view class="input" :style="{'width':'calc(100% - '+width+'rpx)'}"><slot name="input"></slot></view>
			
		</view> -->
	</view>
	
</template>

<script>
	export default {
		name:"KInput",
		props:{
			 /* 内置标题种类 */
			type: {//标题种类
				type: String,
				default: 'default'
			},
			text: {//文字
				type: String,
			},
			placehoder: {//文字
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
			width:0
		};
		},
		mounted() {
			this._input_init()
		},
		methods:{
			_input_init(){
				uni.createSelectorQuery()
					.in(this)
					.select(`.desc`)
					.boundingClientRect()
					.exec(ret => {
						console.log(ret)
						// this.width = parseInt((ret[0].width-1) / this.column) + 'px'
						// fn(this.width)
						this.width = ret[0].width
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../init.scss';
// --------------------------------list1
.input-body{
	display: flex;
	justify-content: flex-start;
	padding: 20rpx 20rpx;
	font-size: $k-h2-fz;
	margin: 10rpx 20rpx;
	box-sizing: border-box;
	&.input-default{
		border-bottom: 1px solid $k-border-color;
	}
	&.input-plain{
		border: 1px solid $k-color-primary;
		border-radius: 10rpx;
		background-color: rgba(21,85,154,0.1);
		.desc{
			color: black
		}
	}
	&.input-success{
		border: 1px solid $k-color-success;
		border-radius: 10rpx;
		background-color: rgba(27,167,132,0.1);
		.desc{
			color: black
		}
	}
	&.input-warning{
		border: 1px solid $k-color-warning;
		border-radius: 10rpx;
		background-color: rgba(250,142,22,0.1);
		.desc{
			color: black
		}
	}
	&.input-error{
		border: 1px solid $k-color-error;
		border-radius: 10rpx;
		background-color: rgba(237,90,101,0.1);
		.desc{
			color: black
		}
	}
	.desc{
		white-space: nowrap;
		color: black;
		text-align: left;
	}
}
</style>
