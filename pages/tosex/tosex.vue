<template>
	<view class="page">
		<form @submit="formSubmit">
			<view class="radio-wrap">
				<radio-group @change="radioChange">
					<label class="label">
						<view >
							<radio value="0" :checked="this.sex ==0" />男
						</view>
						
					</label>
					<label class="label">
						<view>
							<radio value="1" :checked="this.sex ==1" />女
						</view>
						
					</label>					
				</radio-group>
			</view>
			<button class="submit" type="primary" form-type="submit">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo:{},
				sex:null
			}
		},
		methods: {
			radioChange(e){
				//console.log(e.detail.value)
				this.sex = e.detail.value;
			},
			formSubmit() {
				
				uni.request({
					url:"https://www.imovietrailer.com/superhero/user/modifyUserinfo?qq=3129996800",
					method:"POST",
					data:{
						"userId":this.userinfo.id,
						"sex":this.sex
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
			this.sex =this.userinfo.sex;
			console.log(this.sex )
		}
	}
</script>

<style lang="scss">
	page{
		background: #f5f4f4;
		width: 100%;
		height: 100%;
	}
.radio-wrap{
	margin-top: 20rpx;
    .label{
		background-color: #fff;
		padding: 20rpx 20rpx;
		display: block;
		font-size: 34rpx;
		&:nth-child(1){
			border-bottom: 2rpx solid #f5f4f4;
		}
	}

}
	.submit{
		margin:20rpx auto;
		width: 96%;
	}
</style>
