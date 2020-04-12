<template>
	<view class="body">
		
		
		
		
		<view class="wrap">
		    <view class="item" @click="touxiang">
				<view>头像</view>
				<view class="item-r">
					<view>
						<image class="touxiang" :src="globalinfo.faceImage"></image>
					</view>
					<view>
						<image class="jiantou" src="../../static/icos/left-gray-arrow.png"></image>
					</view>				
				</view>
			</view>
			
			<view class="line-wrap">
				<view class="line"></view>
			</view>
			
			<view class="item"  @click="gainame">
				<view>昵称</view>
				<view class="item-r">
					<view>{{globalinfo.nickname}}</view>
					<view>
						<image class="jiantou" src="../../static/icos/left-gray-arrow.png"></image>
					</view>				
				</view>
			</view>
			
			<view class="line-wrap">
				<view class="line"></view>
			</view>
			
			
			<view class="item" @click="tobirthday">
				<view>生日</view>
				<view class="item-r">
					<view>
						{{globalinfo.birthday}}
					</view>
					<view>
						<image class="jiantou" src="../../static/icos/left-gray-arrow.png"></image>
					</view>				
				</view>
			</view>
			
			<view class="line-wrap">
				<view class="line"></view>
			</view>
			
			<view class="item" @click="tosex">
				<view>性别</view>
				<view class="item-r">
					<view v-if="globalinfo.sex ==1">
						女
					</view>
					<view v-else-if="globalinfo.sex ==0">
						男
					</view>					
					<view v-else>
						未选择
					</view>					
					<view>
						<image class="jiantou" src="../../static/icos/left-gray-arrow.png"></image>
					</view>				
				</view>
			</view>
			
		</view>
		
		<view class="bottom">
			<view class="item" @click="myclear">清理缓存</view>
			
			<view class="liner">
				
			</view>			
			
			
			<view class="item" @click="logout">退出登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalinfo:{}
			}
		},
		methods: {
			touxiang() {
				let userinfo= uni.getStorageSync("globalinfo");
				uni.showActionSheet({
					itemList:["预览头像","从相册选择上传"],
					success: (res) => {
						if(res.tapIndex == 0){
							let array=[];
							array.push(userinfo.faceImage);
							uni.previewImage({
								current:array[0],
								urls:array
							})
						}else if(res.tapIndex == 1){
							uni.chooseImage({
								count:1,
								sizeType:["compressed"],
								sourceType:["album"],
								success:(res) =>{
									let tempFilePaths =res.tempFilePaths;

									uni.navigateTo({
										url:"../meface/meface?tempFilePaths="+tempFilePaths[0]
									})
									
									
								}
								
							})
							
						}
					}
				})
			},
			myclear() {
				uni.clearStorageSync();
				uni.showToast({
					title:"清理缓存成功"
				})
			},
			logout() {
				let userinfo= uni.getStorageSync("globalinfo");
				let myid = userinfo.id;
				uni.request({
					url:"https://www.imovietrailer.com/superhero/user/logout?userId=" + myid + "&qq=3129996800",
					method:"POST",
					success: (res) => {
						//console.log(res.data.status)
						if(res.data.status == 200){
							uni.removeStorageSync("globalinfo");
							uni.switchTab({
								url:"../me/me"
							})							
						}
					}
				})

			},
			gainame(){
				uni.navigateTo({
					url:"../gainame/gainame"
				})
			},
			tobirthday() {
				uni.navigateTo({
					url:"../tobirthday/tobirthday"
				})
			},
			tosex() {
				uni.navigateTo({
					url:"../tosex/tosex"
				})
			}
		},
		onShow() {
			let userinfo= uni.getStorageSync("globalinfo");
			if(userinfo){
				this.globalinfo = userinfo;
			}else{
				this.globalinfo ={};
			}

		},		
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.body{
		background: #f5f4f4;
		width: 100%;
		height: 100%;
	}
	.wrap{
	    background: #fff;
		.item{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			font-size: 36rpx;
			padding: 20rpx;
			color: #333333;
			.item-r{
				display: flex;
				align-items: center;
				color: #999999;
				font-size: 32rpx;
			}
			.touxiang{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
			.jiantou{
				width: 40rpx;
				height: 40rpx;
				margin-left: 12rpx;
			}
		}				
	}

.line-wrap{
	padding:0 20rpx;
	.line{
		width: 100%;
		height: 2rpx;
		background-color: #f5f4f4;
	}
}
.bottom{
	position: fixed;
	bottom: 0;
	text-align: center;
	width: 100%;
	background: #fff;
	.liner{
		width: 100%;
		height: 8rpx;
		background: #f5f4f4;
	}
	.item{
		padding: 20rpx;
		text-align: center;
		font-size: 36rpx;
		color: #333333;
	}
}
</style>
