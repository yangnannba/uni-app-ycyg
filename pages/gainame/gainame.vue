<template>
	<view class="page">
		<form @submit="formSubmit">
			<view class="input-wrap">
				<input 
				  type="text"
				  :value="nickname"
				  name="nickname"
				  placeholder="请输入昵称"
				
				 />
			</view>
			<button class="submit" type="primary" form-type="submit">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname:"",
				userinfo:{}
			}
		},
		methods: {
			formSubmit(e){
				//console.log(e.detail.value.nickname);
				let nickname = e.detail.value.nickname;
				uni.request({
					url:"https://www.imovietrailer.com/superhero/user/modifyUserinfo?qq=3129996800",
					method:"POST",
					data:{
						"userId":this.userinfo.id,
						"nickname":nickname
					},
					header:{
						"headerUserId":this.userinfo.id,
						"headerUserToken":this.userinfo.userUniqueToken
					},
					success(res) {
						//console.log(res)
						if(res.data.status == 200){
							uni.setStorageSync("globalinfo",res.data.data);
							uni.navigateBack({
								delta:1
							})
						}else {
							uni.showToast({
								title:res.dta.status,
								image:"/static/icos/error.png"
							})
						}
					}
				})
				
			}
		},
		onLoad() {
			let userinfo= uni.getStorageSync("globalinfo");
			this.userinfo=userinfo;
			this.nickname =this.userinfo.nickname;
		}
	}
</script>

<style lang="scss">
	page{
		background: #f5f4f4;
		width: 100%;
		height: 100%;
	}
.input-wrap{
	margin-top: 20rpx;
	input{
		background-color: #fff;
		font-size: 32rpx;
		line-height: 3em;
		height: 3em;
		text-indent: 1em;
	}

}
	.submit{
		margin:20rpx auto;
		width: 96%;
	}
</style>
