<template name="KButton">
	<button :class="styles" @click="_click">
		<view class="text">
			<transition name="fade">
				<i  :class="icon_styles" v-show="icon"></i>
			</transition>
			<text>
				<slot></slot>
			</text>
		</view>
	</button>
	
</template>

<script>
	
	export default {
		name:"KButton",
		props:{
			 /* 内置按钮风格 */
			type: {//按钮状态
				type: String,
				default: 'normal'
			},
			// text: {//文字
			// 	type: String,
				
			// },
			plain:{//朴素按钮
				type: Boolean,
			},
			round:{//圆角
				type: Boolean,
			},
			disabled:{//可选
				type: Boolean,
			},
			size:{//尺寸small.medium.large
				type: String,
				default: 'small'
			},
			block:{//可选
				type: Boolean,
			},
			icon:{//图标
				type: String,
			},
			icon_rotate:{
				type: Boolean,
			}
		},
		computed: {
			/* 根据不同的props，展示按钮样式 */
			styles: {
				get() {
					return ['sp-button',  this.type, 
					this.plain?'plain':'',this.size,
					this.round?'round':'',
					this.disabled?'disabled':'',
					this.block?'block':'',
					]
				}
			},
			icon_styles:{
				get(){
					return['fa',this.icon,
					this.icon_rotate?'icon_rotate':'',
					]
				}
			}
		},
		data() {
			return {
			};
		},
		mounted() {
		},
		watch:{
		},
		methods:{
			_click(){
				this.$emit('click')
				// console.log('_a')
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../init.scss';
@keyframes rotate{
	from{
		transform:rotate(0deg)
		}
	to{
		transform:rotate(360deg)
	}
}
.fade-enter-active,.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.sp-button {
    width: fit-content;
	// padding: 0 10rpx;
    height: 60rpx;
    outline: none; /*outline 去除原生的button样式*/
	box-sizing: border-box;
    /*动画设置*/
	
    transition: border 0.8s;
    -webkit-transition: border 0.8s;
    transition: background-color 0.1s;
    -webkit-transition: background-color 0.1s;
	cursor: pointer;
	// border-radius: 8rpx;
	position: relative;
	&::after{
		border: none;
	}
	.text{
		margin: 0 auto;
		text-align: center;
		box-sizing: border-box;
		line-height: 56rpx;
		display: block;
		font-size: 24rpx;
		position: relative;
		i{
			margin-right: 4rpx;
			line-height: 60rpx;
			&.icon_rotate{
				animation: rotate 1s infinite linear;
			}
		}
	}
	
	display: inline-block;
}
.round{//圆角
	border-radius: 100rpx;
}
.disabled {//不可选中
    cursor: not-allowed;
    opacity: 0.5;
}
.medium{
	height: 80rpx;
	padding: 0 38rpx;
	.text{
		line-height: 76rpx;
		font-size: 30rpx;
	}
}
.large{
	height: 100rpx;
	padding: 0 50rpx;
	.text{
		line-height: 96rpx;
		font-size: 36rpx;
	}
}
.block{
	width: 100%;
}
/* ------------------------------------------------normal style*/
	// plain
.normal.plain {
    border: 1px solid $k-color-default;
    background-color: #ffffff;
    color: $k-color-default;
	box-shadow: none;
	
}
.normal.plain:hover {
    color: $k-color-default;
    border: 1px solid $k-color-default;
    background-color: rgba(122,115,116,0.1);
}
.normal.plain:active {
    color:$k-color-default;
    border: 1px solid $k-color-default;
    background-color: rgba(122,115,116,0.1);
}

	//default
.normal{
	border: 1px solid $k-color-default;
	background-color: $k-color-default;
	color: white;
	box-shadow: 0 7upx 8upx rgba(122,115,116,0.5);
}
.normal:hover{
  color: white;
  border: 1px solid $k-color-default;
  background-color:  rgba(122,115,116,0.6);
}
.normal:active {
   color: white;
   border: 1px solid $k-color-default;
   background-color:  rgba(122,115,116,0.9);
}
	//disabled
.disabled.normal:hover{
  background-color:  $k-color-default;
}
.disabled.normal:active {
   background-color:  $k-color-default;
}	
	//plain 禁用效果
.disabled.normal.plain:hover{
	border: 1px solid $k-color-default;
	background-color: #ffffff;
	color: $k-color-default;
	box-shadow: none;
}
.disabled.normal.plain:active {
   border: 1px solid $k-color-default;
   background-color: #ffffff;
   color: $k-color-default;
   box-shadow: none;
}
/* ------------------------------------------------ primary style */
	// plain
.primary.plain {
	border: 1px solid $k-color-primary;
	background-color: #ffffff;
	color: $k-color-primary;
	box-shadow: none;
}

.primary.plain:hover{
   border: 1px solid $k-color-primary;
   background-color: rgba(21, 85, 154, 0.1);
}
.primary.plain:active {
   border: 1px solid $k-color-primary;
   background-color: rgba(21, 85, 154, 0.1);
}
	//default
.primary {
	border: 1px solid $k-color-primary;
	background-color:$k-color-primary;
	color: white;
	box-shadow: 0 7upx 8upx rgba(21, 85, 154, 0.5);
}
.primary:hover{
  border: 1px solid $k-color-primary;
  background-color: rgba(21, 85, 154, 0.6);
}
.primary:active {
   border: 1px solid $k-color-primary;
   background-color: rgba(21, 85, 154, 0.9);
}
	//disabled
.disabled.primary:hover{
  background-color:  $k-color-primary;
}
.disabled.primary:active {
   background-color:  $k-color-primary;
}
	//plain 禁用效果
.disabled.primary.plain:hover{
  border: 1px solid $k-color-primary;
  background-color: #ffffff;
  color: $k-color-primary;
  box-shadow: none;
}
.disabled.primary.plain:active {
   border: 1px solid $k-color-primary;
   background-color: #ffffff;
   color: $k-color-primary;
   box-shadow: none;
}

/* ------------------------------------------------ success style */
	// plain
.success.plain {
	border: 1px solid $k-color-success;
	background-color: #ffffff;
	color: $k-color-success;
	box-shadow: none;
}

.success.plain:hover{
   color: $k-color-success;
   border: 1px solid $k-color-success;
   background-color: rgba(27,167,132,0.1);
}
.success.plain:active {
   color: $k-color-success;
   border: 1px solid $k-color-success;
   background-color: rgba(27,167,132,0.1);
}
.success.plain:disabled{
    cursor: not-allowed;
    background-color: rgb(241, 243, 245);
    opacity: 0.8;
}
	//default
.success {
	border: 1px solid $k-color-success;
	background-color:$k-color-success;
	color: white;
	box-shadow: 0 7upx 8upx rgba(27,167,132, 0.5);
}
.success:hover{
  color: white;
  border: 1px solid $k-color-success;
  background-color: rgba(27,167,132, 0.6);
}
.success:active {
   color: white;
   border: 1px solid $k-color-success;
   background-color: rgba(27,167,132, 0.9);
}
	//disabled
.disabled.success:hover{
  background-color:  $k-color-success;
}
.disabled.success:active {
   background-color:  $k-color-success;
}
	//plain 禁用效果
.disabled.success.plain:hover{
  border: 1px solid $k-color-success;
  background-color: #ffffff;
  color: $k-color-success;
  box-shadow: none;
}
.disabled.success.plain:active {
   border: 1px solid $k-color-success;
   background-color: #ffffff;
   color: $k-color-success;
   box-shadow: none;
}
/* ------------------------------------------------  warning style */
	// plain
.warning.plain {
	border: 1px solid $k-color-warning;
	background-color: #ffffff;
	color: $k-color-warning;
	box-shadow: none;
}
.warning.plain:hover{
   color: $k-color-warning;
   border: 1px solid $k-color-warning;
   background-color: rgba(250,142,22,0.1);
}
.warning.plain:active {
   color: $k-color-warning;
   border: 1px solid $k-color-warning;
   background-color: rgba(250,142,22,0.1);
}
.warning.plain:disabled{
    cursor: not-allowed;
    background-color: rgb(241, 243, 245);
    opacity: 0.8;
}
	//default
.warning {
	border: 1px solid $k-color-warning;
	background-color:$k-color-warning;
	color: white;
	box-shadow: 0 7upx 8upx rgba(250,142,22, 0.5);
}
.warning:hover{
  color: white;
  border: 1px solid $k-color-warning;
  background-color: rgba(250,142,22, 0.6);
}
.warning:active {
   color: white;
   border: 1px solid $k-color-warning;
   background-color: rgba(250,142,22, 0.9);
}
	//disabled
.disabled.warning:hover{
  background-color:  $k-color-warning;
}
.disabled.warning:active {
   background-color: $k-color-warning;
}
	//plain 禁用效果
.disabled.warning.plain:hover{
  border: 1px solid $k-color-warning;
  background-color: #ffffff;
  color: $k-color-warning;
  box-shadow: none;
}
.disabled.warning.plain:active {
   border: 1px solid $k-color-warning;
   background-color: #ffffff;
   color: $k-color-warning;
   box-shadow: none;
}
/* ------------------------------------------------ danger style */
// plain
.danger.plain {
	border: 1px solid $k-color-error;
	background-color: #ffffff;
	color: $k-color-error;
	box-shadow: none;
}
.danger.plain:hover{
   color: $k-color-error;
   border: 1px solid $k-color-error;
   background-color: rgba(237,90,101,0.1);
}
.danger.plain:active {
   color: $k-color-error;
   border: 1px solid $k-color-error;
   background-color: rgba(237,90,101,0.1);
}
.danger.plain:disabled{
    cursor: not-allowed;
    background-color: rgb(241, 243, 245);
    opacity: 0.8;
}
	//default
.danger {
	border: 1px solid $k-color-error;
	background-color:$k-color-error;
	color: white;
	box-shadow: 0 7upx 8upx rgba(237,90,101, 0.5);
}
.danger:hover{
  color: white;
  border: 1px solid $k-color-error;
  background-color: rgba(237,90,101, 0.6);
}
.danger:active {
   color: white;
   border: 1px solid $k-color-error;
   background-color: rgba(237,90,101, 0.9);
}
	//disabled
.disabled.danger:hover{
  background-color:  $k-color-error;
}
.disabled.danger:active {
   background-color:  $k-color-error;
}
	//plain 禁用效果
.disabled.danger.plain:hover{
  border: 1px solid $k-color-error;
  background-color: #ffffff;
  color: $k-color-error;
  box-shadow: none;
}
.disabled.danger.plain:active {
   border: 1px solid $k-color-error;
   background-color: #ffffff;
   color: $k-color-error;
   box-shadow: none;
}
</style>
