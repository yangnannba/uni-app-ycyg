<template>
	<view>
	     <view class="touxiang">
			 <image :src="imgface" mode="aspectFill"></image>
		 </view>
		 <view class="tishi">*请上传长宽等比的图片*</view>
		 <view class="bottom">
			 <view @click="cxxz">从新选择</view>
			 <view @click="toshangchuan">上传图片</view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgface:null
			}
		},
		methods: {
			cxxz() {
				uni.chooseImage({
					count:1,
					sizeType:["compressed"],
					sourceType:["album"],
					success:(res) =>{
						let tempFilePaths =res.tempFilePaths[0];
						this.imgface = tempFilePaths;
					}
				})
				
			},
			toshangchuan(){
				uni.showLoading({
					title:"图片上传中..."
				})
				let userinfo= uni.getStorageSync("globalinfo");
				uni.uploadFile({
					url:"https://www.imovietrailer.com/superhero/user/uploadFace?userId="+userinfo.id+"&qq=3129996800",
					method:"POST",
					filePath:this.imgface,
					name:"file",
					header:{
						"headerUserId":userinfo.id,
						"headerUserToken":userinfo.userUniqueToken
					},
					success:(res) => {
						//console.log(typeof(res.data));
						
						let resdata=JSON.parse(res.data);
						console.log(resdata);
						if(resdata.status == 200){
							uni.setStorageSync("globalinfo",resdata.data);
							uni.navigateBack({
								delta:1
							})							
							
						}else if(resdata.status != 200){
							uni.showToast({
								title:resdata.msg,
								image:"/static/icos/error.png"
							})

						}
			
					},
					complete: () => {
						uni.hideLoading()
					}
					
				})
			}
		},
		onLoad(option) {
			this.imgface = option.tempFilePaths;
		}
	}
</script>

<style lang="scss">
page{
	background: #000;
}
.touxiang{
	image{
		width: 750rpx;
		height: 750rpx;
	}
}
.tishi{
	font-size: 28rpx;
	color: #999;
	text-align: center;
}
.bottom{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-top: 2rpx solid #808080;
	view{
		
		
		font-size: 32rpx;
		line-height: 3em;
		padding: 0 30rpx;
	}
}
</style>
