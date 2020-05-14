<template>
	<view class="kun-grid-wrap">
		<view :id="elId" ref="kun-grid" class="kun-grid" :class="{ 'kun-grid--border': showBorder }" :style="{ 'border-left-style':'solid','border-left-color':borderColor, 'border-left-width':showBorder?'0px':0 }">
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'KGrid',
		props: {
			// 每列显示个数
			column: {
				type: Number,
				default: 3
			},
			// 是否显示边框
			showBorder: {
				type: Boolean,
				default: true
			},
			// 边框颜色
			borderColor: {
				type: String,
				default: 'rbg(226,225,228)'
			},
			// 是否正方形显示,默认为 true
			square: {
				type: Boolean,
				default: true
			},
			highlight: {
				type: Boolean,
				default: true
			}
		},
		provide() {
			return {
				grid: this
			}
		},
		data() {
			const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
			return {
				elId,
				width: 0
			}
		},
		created() {
			this.children = []
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				setTimeout(() => {
					this._getSize((width) => {
						this.children.forEach((item, index) => {
							item.width = width
						})
					})
				}, 50)
			},
			change(e) {
				this.$emit('change', e)
			},
			_getSize(fn) {
				uni.createSelectorQuery()
					.in(this)
					.select(`#${this.elId}`)
					.boundingClientRect()
					.exec(ret => {
						console.log(ret)
						this.width = parseInt((ret[0].width-1) / this.column) + 'px'
						fn(this.width)
					})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../init.scss';
	.kun-grid-wrap {
		display: flex;
		flex: 1;
		flex-direction: column;
		width: 100%;
	}

	.kun-grid {
		display: flex;
		// flex: 1;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.kun-grid--border {
		border-left-color: $k-border-color;
		border-left-style: solid;
		border-left-width: 0px;
	}
</style>
