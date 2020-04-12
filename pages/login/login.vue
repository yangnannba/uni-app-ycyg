<template>
	<view class="body">
		<form @submit="mysubmit">
			
			<image class="touxiang" src="../../static/icos/default-face.png"></image>
			
			<view class="myinput">
				<label>账号</label>
				<input type="text" name="usename" placeholder="请输入账号" placeholder-style="color:#ccc" />
			</view>
			<view class="myinput">
				<label>密码</label>
				<input type="text" name="password"  password placeholder="请输入密码" placeholder-style="color:#ccc" />
			</view>
			
			<button class="btn-submit" type="primary" form-type="submit">注册/登录</button>	
					
		</form>
		<!-- #ifndef H5 -->
		<view class="pingtai">
			<view class="title">------第三方平台登录------</view>
			
			<!-- #ifdef MP-WEIXIN -->
			<view>
				<button open-type="getUserInfo" @getuserinfo="getuserinfo" class="button"><image class="weixin" src="../../static/icos/weixin.png"></image></button>
			</view>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<view>
				<image class="tubiao" src="../../static/icos/weixin.png" data-denglutype="weixin" @click="dsfdenglu"></image>
				<image class="tubiao" src="../../static/icos/QQ.png" data-denglutype="qq" @click="dsfdenglu"></image>
				<image class="tubiao" src="../../static/icos/weibo.png" data-denglutype="sinaweibo" @click="dsfdenglu"></image>
			</view>
			<!-- #endif -->			
		</view>
        <!-- #endif --> 

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			mysubmit(e) {
				let usename = e.detail.value.usename;
				let password = e.detail.value.password;
				uni.request({
					url:"https://www.imovietrailer.com/superhero/user/registOrLogin?qq=3129996800",
					data:{
						"username":usename,
						"password":password
					},
					method:"POST",
					success: (res) => {
						//console.log(res.data)
						if(res.data.status == 200){
					
							uni.setStorageSync("globalinfo",res.data.data);
							
							uni.switchTab({
								url:"../me/me"
							})
						}
						else if(res.data.status == 500){
							uni.showToast({
								title:res.data.msg,
								image:"/static/icos/error.png"
							})
						}
					}
				})
			},
			getuserinfo(e){
				let userInfo =e.detail.userInfo;
				let avatarUrl = userInfo.avatarUrl;
				let nickName = userInfo.nickName;
				console.log(avatarUrl);
				console.log(nickName);
				uni.login({
					provider: 'weixin',
					success: (loginRes) => {
						let code = loginRes.code;
						console.log(code);
						uni.request({
							url:"https://www.imovietrailer.com/superhero/stu/mpWXLogin/"+ code,
							data:{
								"avatarUrl":avatarUrl,
								"nickName":nickName,
								"whichMP":1
							},
							method:"POST",
							success: (res) => {
								console.log(res);
								let globalinfo ={
									id:1234567890,
									faceImage:avatarUrl,
									nickname:nickName,
									birthday:"1985.12.14",
									sex:0
								}
								/*
								if(res.data.status == 200){
									uni.setStorageSync("globalinfo",res.data.data);
									uni.switchTab({
										url:"../me/me"
									})
								}
								*/
									uni.setStorageSync("globalinfo",globalinfo);
									uni.switchTab({
										url:"../me/me"
									})							   
							}
						})
					}
				})
			},
			dsfdenglu(e) {
				let denglutype=e.currentTarget.dataset.denglutype;
				//console.log(denglutype);
				uni.login({
					provider:denglutype,
					success: (loginRes) => {
						//console.log(loginRes);
						uni.getUserInfo({
							provider:denglutype,
							success: (res) => {
								//console.log(res.userInfo)
								let userInfo = res.userInfo;
								let face="";
								let nickname="";
								let openIdOrUid="";
								if(denglutype == "weixin"){
									face=userInfo.avatarUrl;
									nickname=userInfo.nickName;
									openIdOrUid=userInfo.openId;
								}else if(denglutype == "qq"){
									face=userInfo.avatarUrl;
									nickname=userInfo.nickname;
									openIdOrUid=userInfo.openId;									
								}else if(denglutype == "sinaweibo"){
									face=userInfo.avatarUrl;
									nickname=userInfo.nickname;
									openIdOrUid=userInfo.id;									
								}
								uni.request({
									url:"https://www.imovietrailer.com/superhero/appUnionLogin/"+denglutype+"?qq=3129996800",
									data:{
										"face":userInfo.avatarUrl,
										"nickname":userInfo.nickName,
										"openIdOrUid":userInfo.openId
									},
									method:"POST",
									success: (loginRes) => {
										//console.log(loginRes.data.data);
										if(loginRes.data.status == 200) {
											uni.setStorageSync("globalinfo",loginRes.data.data);
											uni.switchTab({
												url:"../me/me"
											})
										}
									}
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.body{
	padding: 0 40rpx;
	.touxiang{
		width: 160rpx;
		height: 160rpx;
		display: block;
		margin:  auto;
		padding: 120rpx 0;
		
	}
	.myinput{
		width: 100%;
		display: flex;
		line-height: 3em;
		font-size: 36rpx;
		border-bottom: 2rpx #ccc solid;
		color: gray;
		label{
			margin-right: 20rpx;
			width: 120rpx;
			text-align: center;
		}
		input{
			flex: 1;
			height: 3em;
			line-height: 3em;
			font-size: 36rpx;
		}
	}
	.btn-submit{
		margin-top: 50rpx;
		font-size: 40rpx;
	}
}
.pingtai{
	margin-top: 100rpx;
	text-align: center;
	
	.title{
		font-size: 32rpx;
		color: #999999;
		text-align: center;
		margin-bottom: 40rpx;
	}
	.weixin{
		width: 100rpx;
		height: 100rpx;
		
		
	}
	.tubiao{
		width: 100rpx;
		height: 100rpx;
		margin:0 20rpx;					
	}
	.button{
		display: inline-block;
		background: transparent;
		width: 100rpx;
		height: 100rpx;
		border:0;
		padding: 0;
		margin:0 20rpx;	
		border-radius: 50%;
	}
}
</style>
