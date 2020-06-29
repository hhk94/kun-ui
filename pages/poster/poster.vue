<template>
	<view class="poster">
		<k-title type="h1" >
			<text slot="english" >Poster</text>
			<text slot="desc">基于tki-qrcode生成二维码海报</text>
		</k-title>
		<view class="img">
			
			<view class="qrimg">
				<tki-qrcode 
				style="visibility: hidden;"
				cid="qrcode1" ref="qrcode" 
				:val="val" :size="size" 
				:unit="unit" 
				:icon="icon"
				:iconSize="iconsize" 
				:onval="onval" 
				:loadMake="loadMake" 
				:usingComponents="true" 
				@result="qrR" />
			</view>
			<image :src="poster_src" mode="widthFix"  v-show="poster_src" class="img-download"></image>
		</view>
		<view :class="{'wrapper':true,opacity:poster_src?true:false}" @tap="saveQrcode" >
			<canvas class="canvas" style="height: 1334rpx;" canvas-id="firstCanvas"></canvas>
		</view>
	</view>
</template>

<script>
	import KTitle from '../../components/kun-title/kun-title.vue'
	import { Storage } from '../../utils/storage.js'
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
	const result =[
				{
					desc:'你的“超学力”是万中无一的',
					result:'逆风翻盘'
				},
				{
					desc:'你的“超学力”是前无古人的',
					result:'无限成长'
				},
				{
					desc:'你的“超学力”是巅峰之境的',
					result:'天马行空'
				},
				{
					desc:'你的“超学力”是千古绝唱的',
					result:'稳如磐石'
				},
				{
					desc:'你的“超学力”是无人能挡的',
					result:'潜力王者'
				}
			]
	export default {
		components: {tkiQrcode,KTitle},
		data() {
			return {
				//二维码相关
				size:233,//二维码尺寸
				unit:'upx',//单位
				icon:'https://cswendu.oss-cn-hangzhou.aliyuncs.com/app/wx0.0.1/logo1.jpg',//二维码图标
				iconsize: 10, // 二维码图标大小
				val:'hhh',//二维码内容
				onval:true,//监听val值变化自动重新生成二维码
				show:false,//默认使用组件中的image标签显示二维码
				loadMake:true,//组件初始化完成后自动生成二维码，val需要有值
				usingComponents:false,//是否使用了自定义组件模式（主要是为了修复非自定义组件模式时 v-if 无法生成二维码的问题）
				src: '',//生成的二维码链接
				//海报相关
				cover:'http://api.kunic.cn/zerg/public/kun-ui/poster3.png',//海报背景图
				nickname:'文都考研',//默认昵称
				headimgurl:'http://api.kunic.cn/zerg/public/kun-ui/logo1.jpg',//默认头像
				poster_src:'',//海报生成的链接
				test_title:null,//海报大标题
				content_result:'这里是默认内容，仅仅作为展示。这里是默认内容，仅仅作为展示。这里是默认内容，仅仅作为展示。这里是默认内容，仅仅作为展示。',//默认中心内容
				 
			};
		},
		created() {
			// #ifdef H5
			//微信浏览器 h5 - ios系统，如果读取localstorage ，uni.canvasToTempFilePath方法将不执行，无法生成图片src - 需要先获取wxinfo授权
			let userAgent = navigator.userAgent;/* 判断浏览器类型 */
			let isMac = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);/* ios终端 */
			if(isMac){
				//ios不做处理，使用默认图片 
			} else{
				//其他系统读取本地缓存
				try{
					this.nickname = uni.getStorageSync('nickname')?uni.getStorageSync('nickname'):this.nickname;
					this.headimgurl = uni.getStorageSync('headimgurl')?uni.getStorageSync('headimgurl'):this.headimgurl;
				}catch(e){
					//TODO handle the exception
				}
			}
			// #endif
			
			
		},
		onLoad(option) {
			let storage = new Storage()
			this.content_result = storage.get_storage('answer_end')||this.content_result
			this.test_title = result[Math.floor(Math.random()*result.length)]
			
			// #ifdef H5
			this.val = window.location.href.split('#')[0]
			// #endif
			
		},
		destroyed() {
			uni.navigateTo({
				url:'/pages/index/index'
			})
		},
		methods:{
			creatQrcode() {
				
				this.$refs.qrcode._makeCode()
			},
			saveQrcode() {
				// #ifdef MP-WEIXIN
				// this.$refs.qrcode._saveCode()
				// #endif
				// #ifdef H5
				// var alink = document.createElement("a");
				// alink.href = this.poster_src;
				// alink.download = '海报分享.jpg';
				// alink.click();
				// if(wx.isWechat()){
				// 	//微信浏览器
					
				// }
				// #endif
			},
			qrR(path) {//生成二维码
						this.src = path
						let system_info = uni.getSystemInfoSync();
						
						this.canvas_draw()
			},
			canvas_draw:function(){//canvas绘制
				let that = this
				let ctx = uni.createCanvasContext('firstCanvas');
				uni.getImageInfo({
					src: that.cover,
					success(res) {
						// console.log('2');
						// console.log(res);
						ctx.drawImage(res.path, 0, 0, uni.upx2px(750), uni.upx2px(1334));
						let wxInfo = {
							ctx:ctx,
							center_x:uni.upx2px(40),//中心点x坐标
							center_y:uni.upx2px(20),//中心点y坐标
							cricle_r:uni.upx2px(40),//头像半径
							font:'16px Arial',//文字样式
							color:'#fff'//文字颜色
						}
						that.drawWXInfo(wxInfo)
						/*绘制标题内容*/
							let title = {
								ctx:ctx,
								text:that.test_title.desc,
								font:'24px Arial',
								textColor:"white",
								x:uni.upx2px(60),
								y:uni.upx2px(280),
								width:uni.upx2px(600),
								lightHeight:0,
								textAlign:'center',
								bgOffset:uni.upx2px(20)
							}
							that.drawText(title)
							//四字描述
							let title_desc = {
								ctx:ctx,
								text:that.test_title.result,
								font:'italic bold 55px Arial',
								textColor:"#fcce34",
								x:uni.upx2px(100),
								y:uni.upx2px(430),
								width:uni.upx2px(600),
								lightHeight:0,
								textAlign:'center', 
								bgOffset:uni.upx2px(20)
							}
							that.drawText(title_desc)
						/*标题内容结束*/
						/*绘制中心内容*/
						let content = {
							ctx:ctx,
							text:that.content_result,
							font:'12px Arial',
							textColor:"white",
							x:uni.upx2px(90),
							y:uni.upx2px(550),
							width:uni.upx2px(550),
							lightHeight:20,
							background:'rgba(46,41,84,0.9)',
							bgOffset:uni.upx2px(20)
						}
						that.drawText(content)
						/*中心内容结束*/
						/*二维码开始 - start*/
						ctx.fillStyle = '#FFFFFF';
						//刻画二维码背景 - 白色
						ctx.fillRect(uni.upx2px(60), uni.upx2px(1118), uni.upx2px(200), uni.upx2px(200));
						//刻画二维码图片 
						ctx.drawImage(that.src, uni.upx2px(80), uni.upx2px(1138), uni.upx2px(158), uni.upx2px(158));
						//刻画二维码文字说明
						let emw_title = {
							ctx:ctx,
							text:'长按保存海报',
							font:'bold 13px Arial ',
							textColor:"white",
							x:uni.upx2px(280),
							y:uni.upx2px(1180),
							width:uni.upx2px(200),
							lightHeight:0,
						}
						that.drawText(emw_title)
						let emw_desc = {
							ctx:ctx,
							text:'来测测你的“超学力”吧',
							font:'13px Arial',
							textColor:"white",
							x:uni.upx2px(280),
							y:uni.upx2px(1230),
							width:uni.upx2px(300),
							lightHeight:0,
						}
						that.drawText(emw_desc)
						/*二维码结束 -end*/
						let scale = 2//为了增加图片清晰度，放大系数
						ctx.draw(false, () => {
							uni.canvasToTempFilePath({
								x: 0,
								y: 0,
								width:uni.upx2px(750),
								height: uni.upx2px(1334),
								destWidth: uni.upx2px(750)*scale,
								destHeight: uni.upx2px(1334)*scale,
								canvasId: 'firstCanvas',
								quality:1,
								success: function(res) {
									console.log(res)
									that.poster_src = res.tempFilePath
									
								},
								fail(e) {
									console.log(e);
									// alert('a')
									uni.showToast({
										title: '生成海报失败',
										icon: 'none'
									});
									
								},
								complete(e){
									// alert('测试ios是否调用方法')
								}
							});
						});
					},
					fail(error) {
						console.log(error);
					}
				});
			},
			//绘制文字 - 可换行
			drawText:function(obj){
				// let example = {
				// 	ctx:ctx,canvas对象
				// 	text:'text',文本内容
				// 	font:'14px Arial',文字样式
				// 	textColor:"white",//文字颜色
				// 	x:uni.upx2px(90),绘制左上角圆点坐标x
				// 	y:uni.upx2px(550), 绘制左上角圆点坐标y
				// 	width:uni.upx2px(550),文本宽度 - 计算换行
				// 	lightHeight:20,行高
				// 	background:'rgba(46,41,84,0.9)',文字背景色
				// 	bgOffset:uni.upx2px(20)，偏移量
				//  textAlign:'center'文字居中
				// }
				let context = obj.ctx,
				lh = obj.lightHeight,
				chr = obj.text.split(""),
				temp = "",
				row = []
				context.font = obj.font;
				for(let a = 0; a < chr.length; a++){
					if( context.measureText(temp).width < obj.width ){
					}else{
						row.push(temp);
						temp = "";
					}
					temp += chr[a];
				}
				row.push(temp);
				if(obj.background){//有背景色 绘制 文字背景色
					context.fillStyle = obj.background||'transparent';
					context.fillRect(obj.x-obj.bgOffset, obj.y,  obj.width+obj.bgOffset*2+uni.upx2px(20) ,(row.length+2)*lh );
					context.save()
				}
				context.fillStyle = obj.textColor;
				context.textBaseline = obj.textBaseline||"middle";
				for(let b = 0; b < row.length; b++){//循环分行绘制文字
					if(obj.textAlign){//是否居中
						context.textAlign = obj.textAlign
						context.fillText(row[b],uni.upx2px(375)-obj.bgOffset,obj.y+(b+1)*lh);
					}else{
						context.textAlign = 'left'
						context.fillText(row[b],obj.x,obj.y+(b+1)*lh);
					}
				}
				context.save()
			},
			//绘制头像和昵称
			drawWXInfo(obj){
				// let obj = {
				//	ctx:ctx,
				// 	center_x:uni.upx2px(400),//中心点x坐标
				// 	center_y:uni.upx2px(80),//中心点y坐标
				// 	cricle_r:uni.upx2px(40),//头像半径
				// 	font:'18px Arial',//文字样式
				// 	color:'#fff'//文字颜色
				// }
				/* 刻画人物头像 -start*/
				let ctx = obj.ctx
				ctx.save()//裁切前 保存画布状态
				let tx_x = obj.center_x //头像x坐标
				let tx_y = obj.center_y//头像y坐标
				let cricle_r = obj.cricle_r//圆的半径
				let cricle_x = tx_x + cricle_r//圆中心点 X
				let cricle_y = tx_y + cricle_r//圆中心点 Y
				ctx.beginPath();//开始画圆
				ctx.arc(cricle_x,cricle_y,cricle_r,0,2*Math.PI);
				ctx.clip();//裁切
				// console.log(that.headimgurl)
				ctx.drawImage(this.headimgurl,tx_x, tx_y,cricle_r*2,cricle_r*2);//开始画头像
				ctx.restore() //恢复画布不被裁切
				ctx.save()//裁切前 保存画布状态
				let nickname_x =tx_x + cricle_r*2 +9
				let nickname_y =tx_y + cricle_r 
				ctx.font = obj.font;//刻画nickname
				ctx.fillStyle = obj.color;
				ctx.fillText(this.nickname, nickname_x, nickname_y+9);
				ctx.restore() //恢复画布不被裁切
				/*刻画人物头像 -end */
			}
		}
	}
</script>

<style lang="scss" scoped>
.poster{
	overflow: hidden;
	.img{
		position: relative;
		.img-bg{
			width: 100%;
		}
		.qrimg{
			position: absolute;
			left: 41upx;
			bottom: 28upx;
			// display: none;
		}
	}
	.wrapper {
		height: 1334rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		// display: none;
		// margin-top: 50upx;
		.canvas{
			height: 1334upx;;width: 100%;backgroundColor: #FFFFFF;
		}
	}
	.opacity{
		// opacity: 0;
	}
	.save-body{
		margin: 40upx auto;
		width: 400upx;;
	}
	.img-download{
		width: 100%;
		height: 1334upx;
		position: absolute!important;
		left: 0;
		right: 0;
		top: 0;
		z-index: 997;
		// background-color: black;
		image{
			width: 100%!important;
			height: 100%!important;
			display: block;
		}
	}
}
</style>
