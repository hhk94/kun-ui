<template>
	<view class="body">
		<view class="section">
			<k-title type="h2" :num="list.length">拓展组件</k-title>
			<k-list type="list1" :img="item.img" 
			@click="jump(item)"
			v-for="item of list"
			:key="item.page">
				<text slot="title">{{item.englist}}</text>
				<text slot="desc">{{item.desc}}</text>
			</k-list>
		</view>
		
	</view>
</template>

<script>
	// #ifdef MP
	import KTitle from '../../components/kun-title/kun-title.vue'
	import kList from '../../components/kun-list/kun-list.vue'
	// #endif
	export default {
		data() {
			return {
				list:[
					{
						englist:'Poster',
						desc:'海报',
						page:'/pages/poster/poster',
						img:'/static/index/poster.png'
					},
					
				]
			};
		},
		// #ifdef MP
		components:{
			KTitle,
			kList
		},
		// #endif
		mounted() {
		},
		methods:{
			jump:function(e){
				let {page} = e
				uni.navigateTo({
					url:page
				})
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
.section{
	margin-top: 20rpx;
}
</style>
