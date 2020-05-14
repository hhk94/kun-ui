<template>
	<text v-if="text" :class="inverted ? 'kun-badge--' + type + ' kun-badge--' + size + ' kun-badge--' + type + '-inverted' : 'kun-badge--' + type + ' kun-badge--' + size"
	 class="kun-badge" @click="onClick()">{{ text }}</text>
</template>

<script>
	export default {
		name: 'UniBadge',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			text: {
				type: [String,Number],
				default: ''
			},
			size: {
				// small.normal
				type: String,
				default: 'normal'
			}
		},
		data() {
			return {

			};
		},
		methods: {
			onClick() {
				this.$emit('click');
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '../../init.scss';
	$bage-size: 12px;
	$bage-small: scale(0.8);
	$bage-height: 40rpx;

	.kun-badge {
		display: flex;
		flex-direction: row;
		height: $bage-height;
		line-height: $bage-height;
		color: $uni-text-color;
		border-radius: 100px;
		background-color: $uni-bg-color-hover;
		background-color: transparent;
		text-align: center;
		// font-family: 'Helvetica Neue', Helvetica, sans-serif;
		font-size: $bage-size;
		padding: 0px 6px;
	}

	.kun-badge--inverted {
		padding: 0 5px 0 0;
		color: $uni-bg-color-hover;
	}

	.kun-badge--default {
		color: $k-color-default;
		background-color:$k-border-color;
	}

	.kun-badge--default-inverted {
		color: $k-color-default;
		background-color: transparent;
	}

	
	
	.kun-badge--primary {
		color: $uni-text-color-inverse;
		background-color: $k-color-primary;
	}

	.kun-badge--primary-inverted {
		color: $k-color-primary;
		background-color: transparent;
	}

	.kun-badge--success {
		color: $uni-text-color-inverse;
		background-color: $k-color-success;
	}

	.kun-badge--success-inverted {
		color: $k-color-success;
		background-color: transparent;
	}

	.kun-badge--warning {
		color: $uni-text-color-inverse;
		background-color: $k-color-warning;
	}

	.kun-badge--warning-inverted {
		color: $k-color-warning;
		background-color: transparent;
	}

	.kun-badge--error {
		color: $uni-text-color-inverse;
		background-color: $k-color-error;
	}

	.kun-badge--error-inverted {
		color: $k-color-error;
		background-color: transparent;
	}

	.kun-badge--small {
		transform: $bage-small;
		transform-origin: center center;
	}
</style>
