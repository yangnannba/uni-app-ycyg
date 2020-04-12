<template>
	<view>
		<view class="header">
			
			<image class="touxiang" v-if="denglu" :src="globalinfo.faceImage"></image>
			<image class="touxiang" v-else src="../../static/icos/default-face.png"></image>
			
			<view class="dlzc" v-if="denglu">
				<view class="name">{{globalinfo.nickname}}</view>
				<view class="id">id:{{globalinfo.id}}</view>
			</view>
			<view v-else>
				<navigator url="../login/login">
					<view class="dlzc">注册/登录</view>
				</navigator>				
			</view>

			
			<view v-if="denglu">
				<navigator url="../meinfo/meinfo">
					<image class="settings"  src="../../static/icos/settings.png"></image>
				</navigator>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				denglu:false,
				globalinfo:{}
			}
		},
		methods: {
			
		},
		onShow() {
			let userinfo= uni.getStorageSync("globalinfo");
			if(userinfo){
				this.globalinfo = userinfo;
				this.denglu =true;		
			}else{
				this.denglu =false;
				this.globalinfo ={};
			}

		},
		onShareAppMessage() {
			return {
				title:"我的",
				path:"pages/me/me"
			}
		}
	}
</script>

<style lang="scss">
.header{
	display: flex;
	flex-direction: row;
	align-items: center;
	
	background: #e6a23d;
	padding:60px 20rpx 30rpx;
	background-image: url(../../static/icos/bg.png);
	.touxiang{
		width: 100rpx;
		height: 100rpx;
		margin-right: 20rpx;
		border-radius: 50%;
		flex-shrink: 0;
	}
	.dlzc{
		font-size: 36rpx;
		flex: 1;
		.name{
			font-size: 40rpx;
		}
		.id{
			font-size: 32rpx;
			color: #808080;
		}
		
	}
	.settings{
		width: 50rpx;
		height: 50rpx;
		align-self: flex-start;
	}
}
</style>
