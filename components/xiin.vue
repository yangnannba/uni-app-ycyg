<template>
	<view>
		<image v-for="item in staryellow" :key="item" class="star-yellow" src="/static/icos/star-yellow.png"></image>

		<image v-for="item in stargray" :key="item+'a'" class="star-gray" src="/static/icos/star-gray.png"></image>
		<text class="score" v-if="myscore">{{score}}</text>
	</view>	
</template>

<script>
	export default {
		name:"myscore",
		data() {
			return {
				
			}
		},
		props:["score","myscore"],
		computed:{
			staryellow() {
				return Math.floor(this.score/2)
			},
			stargray() {
				return 5 - this.staryellow
			}
		}
	}
</script>

<style>
	.star-yellow{
		width: 22rpx;
		height: 22rpx;
	}
	.star-gray{
		width: 22rpx;
		height: 22rpx;		
	}
	.score{
		color: red;
		font-size: 28rpx;
	}
</style>
