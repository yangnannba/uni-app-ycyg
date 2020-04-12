<template>
	<view class="cover">
		<image :src="cover" @longpress="longpress"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover:""
			}
		},
		methods: {
			longpress() {
				uni.showActionSheet({
					itemList:["下载图片"],
					success:  (res)=> {
						if(res.tapIndex == 0){
							uni.showLoading({
								title:"图片下载中..."
							})
							uni.downloadFile({
								url:this.cover,
								success: (ress) => {
									let tempFilePath =ress.tempFilePath;
									console.log('下载成功');
									uni.saveImageToPhotosAlbum({
										filePath:tempFilePath,
										success: (resss) => {
											uni.showToast({
												title:"保存成功"
											})
										},
										complete: () => {
											uni.hideLoading()
										}
									})
								}								
							})
						}
						
					}
				})
			}
		},
		onLoad(options) {
			this.cover=options.cover
			
		}
	}
</script>

<style lang="scss">
	page,body{
		height: 100%;
	}
.cover{
	background: #000;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	image{
		width: 400rpx;
		height: 540rpx;
	}
	
}
</style>
