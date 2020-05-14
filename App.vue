<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
body,.body{
	background-color: $k-back-color;
	
}
.section{
	padding: 20rpx 0;
	background-color: white;
	border-radius: 10rpx;
	margin-bottom:20rpx ;
}
</style>
