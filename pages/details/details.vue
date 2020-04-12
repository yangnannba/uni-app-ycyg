<template>
	<view>
		    <!--#ifndef MP-WEIXIN -->
			<video
			    id="myVideo" 
				class="video" 
				:src="mydetails.trailer" 
				:poster="mydetails.poster"
			></video>
			<!--#endif -->
			<!--#ifdef MP-WEIXIN -->
			<image class="video" :src="mydetails.poster" ></image>
			<!--#endif -->
		<view class="content">
			<navigator :url="'/pages/showimg/showimg?cover='+mydetails.cover">
			    <image class="content-img" :src="mydetails.cover"></image>
			</navigator>
			<view class="info">
				<view class="name">{{mydetails.name}}</view>
				<view>{{mydetails.basicInfo}}</view>
				<view>{{mydetails.originalName}}</view>
				<view>{{mydetails.totalTime}}</view>
				<view>{{mydetails.releaseDate}}</view>
			</view>
		</view>
		<view class="pingfen-wrap">
			<view class="zhpf">
				<view>综合评分</view>
				<view class="score">{{mydetails.score}}</view>
			</view>
			<view>
				<xin :score="mydetails.score" :myscore="false"></xin>
				<view>{{mydetails.prisedCounts}}人点赞</view>
			</view>
		</view>
		
		<view class="line-wrap">
			<view class="line"></view>
		</view>
		
		
		<view class="item">
			<view class="title">剧情介绍</view>
			<view class="jieshao">{{mydetails.plotDesc}}</view>
		</view>
		
		<view class="item">
			<view class="title">演职人员</view>
			<scroll-view scroll-x="true" class="yuanyuan">
				
				
				<view class="yuanyuan-item" v-for="item in roledaoyan" :key="item.id">
					<image :src="item.photo" @click="myshowrole(item.photo)"></image>
					<view class="name">{{item.name}}</view>
					<view class="actName">饰 {{item.actName}}</view>
				</view>
				
				<view class="yuanyuan-item" v-for="item in roleyanyuan" :key="item.id">
					<image :src="item.photo" @click="myshowrole(item.photo)"></image>
					<view class="name">{{item.name}}</view>
					<view class="actName">饰 {{item.actName}}</view>
				</view>				

				
				
			</scroll-view>
		</view>		

		<view class="item">
			<view class="title">剧照</view>
			<scroll-view scroll-x="true" class="juzhao">
				
				<image v-for="item in myjuzhao" mode="aspectFill" :src="item" @click="myshowjuzho(item)" :key="item.id"></image>

			</scroll-view>
		</view>
				
	</view>
</template>

<script>
	import xin from '../../components/xiin.vue'
	export default {
		data() {
			return {
				mydetails:{},
				roledaoyan:[],
				roleyanyuan:[],
				marvelid:"",
				myjuzhao:[]
			}
		},
		methods: {
			postdetails(){
				uni.request({
					url:"https://www.imovietrailer.com/superhero/search/trailer/"+this.marvelid+"?qq=3129996800",
					method:"POST",
					success: (res) => {
						//console.log(res.data.data);
						this.mydetails = res.data.data;
						this.myjuzhao = JSON.parse(res.data.data.plotPics);
						
						
						uni.setNavigationBarTitle({
							title: this.mydetails.name
						});	
					}
				})
			},
			myshowjuzho(item) {
				uni.previewImage({
					current:item,
					urls:this.myjuzhao
				})
			},
			role1() {
				uni.request({
					url:"https://www.imovietrailer.com/superhero/search/staff/"+this.marvelid+"/1?qq=3129996800",
					method:"POST",
					success: (res) => {
						//console.log(res.data.data)
						this.roledaoyan = res.data.data
					}
				})
			},
			role2() {
				uni.request({
					url:"https://www.imovietrailer.com/superhero/search/staff/"+this.marvelid+"/2?qq=3129996800",
					method:"POST",
					success: (res) => {
						//console.log(res.data.data)
						this.roleyanyuan = res.data.data
					}
				})
			},
			myshowrole(item) {
				let urls=[];
				/*
				for(var i=0; i<this.roledaoyan.length;i++){
					urls.push(this.roledaoyan[i].photo);
				}
				for(var i=0; i<this.roleyanyuan.length;i++){
					urls.push(this.roleyanyuan[i].photo);
				}
				*/
				const map1 = this.roledaoyan.map((item) => {
					return item.photo;
				})
				
				const map2 = this.roleyanyuan.map((item) => {
					return item.photo;
				})	
				urls= [...map1,...map2]			
				uni.previewImage({
					current:item,
					urls:urls
				})
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				console.log(11);
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 1,
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});				
				
				
				
			}
		},
		onShareAppMessage() {
			return {
				title:this.mydetails.name,
				path:'pages/details/details?id='+this.mydetails.id
			}
		},
		onReady(res) {
		        this.videoContext = uni.createVideoContext('myVideo')
		},
		onHide() {
			this.videoContext.pause()
		},
		onShow() {
			//if(this.videoContext){
			//	this.videoContext.play()
			//}
		},
		onLoad(options) {
			this.marvelid = options.id;
			this.postdetails();
			this.role1();
			this.role2();
		},
		components:{
			xin
		}
	}
</script>

<style lang="scss">
.video{
	width: 100%;
	height: 440rpx;
	display: block;
}
.content{
	display: flex;
	flex-direction: row;
	padding: 30rpx 20rpx;
	.content-img{
		width: 200rpx;
		height: 270rpx;
		display: block;
		margin-right: 20rpx;
	}
	.info{
		font-size: 28rpx;
		color: darkgray;
		.name{
			font-size: 50rpx;
			font-weight: bold;
			color: #000;
			margin-bottom: 10rpx;
		}
	}
}
.item{
	padding: 20rpx;
	.title{
		font-size: 32rpx;
		color: darkgray;
		line-height: 2em;
	}
	.jieshao{
		font-size: 28rpx;
		color: #444;
		line-height: 1.75em;
		text-align: justify;
	}
	.juzhao{
		width: 100%;
		white-space: nowrap;
		image{
			display: inline-block;
			width: 250rpx;
			height: 350rpx;
			margin-right: 16rpx;
			&:nth-last-child(1){
				margin-right: 0;
			}
		}
	}
	.yuanyuan{
		width: 100%;
		white-space: nowrap;
		.yuanyuan-item{
			width: 200rpx;
			display: inline-block;
			margin-right: 10rpx;
			&:nth-last-child(1){
				margin-right: 0;
			}
			.name{
				font-size: 28rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.actName{
				font-size: 24rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #A9A9A9;
			}
		}
		image{
			width: 200rpx;
			height: 282rpx;
		}
	}
}
.pingfen-wrap{
	display: flex;
	background: #f5efef;
	padding: 30rpx 20rpx;
	margin:0 20rpx;
	font-size: 38rpx;
	.zhpf{
		margin-right: 60rpx;
	}
	.score{
		color: red;
		font-size: 50rpx;
	}
}

.line-wrap{
	padding: 30rpx 20rpx;
	.line{
		width: 100%;
		height:4rpx;
		background: #efeff4;
	}
}
</style>
