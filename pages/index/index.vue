<template>
	<view class="content">
		<swiper 
		  class="swiper"
		  :indicator-dots="indicatorDots" 
		  :autoplay="autoplay" 
		  :indicator-color="indicatorcolor"
		  :indicator-active-color="indicatoractivecolor"
		>
			<swiper-item class="swiper-item" v-for="item in bannerlist" :key="item.movieId">
			   <image :src="item.image"  @click="todetails(item.movieId)"></image>
			</swiper-item>
		</swiper>
		
		<view class="hot">
			<view class="hot-title"><image class="hot-ico" src="../../static/icos/hot.png"></image><text>热门超英</text></view>
			<scroll-view class="scroll-view" scroll-x="true">
				<view v-for="item in superherolist" class="item" @click="todetails(item.id)" :key="item.id">
					<image class="item-img" :src="item.cover"></image>
					<view class="title">{{item.name}}</view>
					<xin :score="item.score" :myscore="true"></xin>

				</view>
			</scroll-view>
		</view>

		
        <view class="line"></view>
		<!--#ifndef MP-WEIXIN -->
		<view class="hot">
			<view class="hot-title"><image class="hot-ico" src="../../static/icos/interest.png"></image><text>热门预告</text></view>
			<view class="video-wrap">
				<video 
					v-for="item in trailerlist" 
					:src="item.trailer" controls 
					:poster="item.poster" 
					:key="item.id"
					:id="item.id"
					:data-indexviedoid="item.id"
					@play="startplay"
					class="video"
				></video>
			</view>
		</view>
		<!--#endif -->
		
		<!--#ifdef MP-WEIXIN  -->
		<view class="hot">
			<view class="hot-title"><image class="hot-ico" src="../../static/icos/interest.png"></image><text>热门预告</text></view>
			<view class="video-wrap">
				<image v-for="item in trailerlist" :key="item.id" :src="item.poster" class="video" @click="todetails(item.id)"></image>
			</view>
		</view>		
		<!-- #endif -->

        <view class="line"></view>
		
		<view class="hot">
			<view class="hot-title"><image class="hot-ico" src="../../static/icos/guess-u-like.png"></image><text>猜你喜欢</text></view>
			<view class="guess">
				<view class="guessULike" v-for="(item,gindex) in guesslist" :key="item.id">
					<image class="item-img" :src="item.cover"  @click="todetails(item.id)"></image>
					<view class="guess-content">
						<view class="name">{{item.name}}</view>
						<xin :score="item.score" :myscore="false"></xin>
						<view class="basicInfo">{{item.basicInfo}}</view>
						<view class="releaseDate">{{item.releaseDate}}</view>
					</view>
					<view class="dianzan" @click="dianzhan(gindex)">
						<image class="dianzan-img" src="../../static/icos/praise.png"></image>
						<view>点赞</view>
						<view :animation="animationDataarray[gindex]" class="animation">+1</view>
					</view>
				</view>
			</view>
		</view>		
	</view>
</template>

<script>
	import xin from '../../components/xiin.vue'
	export default {
		data() {
			return {
				indicatorDots:true,
				autoplay:true,
				indicatorcolor:'#999',
				indicatoractivecolor:'#000',
				bannerlist:[],
				superherolist:[],
				trailerlist:[],
				guesslist:[],
				animationData: {},
				animationDataarray:[]
			}
		},
		methods: {
			postbanner(){
				uni.request({
					url:"https://www.imovietrailer.com/superhero/index/carousel/list?qq=3129996800",
					method:"POST",
					success:(res) => {
						console.log(res)
						this.bannerlist =res.data.data
					}
				})				
			},
			hotsuperhero() {
				uni.request({
					url: "https://www.imovietrailer.com/superhero/index/movie/hot?type=superhero&qq=3129996800",
					method:"POST",
					success:(res) => {
						//console.log(res.data.data)
						this.superherolist =res.data.data
					}					
				})
			},
			hottrailer() {
				uni.request({
					url: "https://www.imovietrailer.com/superhero/index/movie/hot?type=trailer&qq=3129996800",
					method:"POST",
					success:(res) => {
						console.log(res.data.data)
						this.trailerlist =res.data.data
					}					
				})				
			},
			guessULike() {
				
				//#ifndef APP-PLUS
				uni.showNavigationBarLoading();
				//#endif
				
				uni.showLoading({
					mask:true
				})
				uni.request({
					url: "https://www.imovietrailer.com/superhero/index/guessULike?qq=3129996800",
					method:"POST",
					success:(res) => {
						//console.log(res.data.data)
						this.guesslist =res.data.data
					},
					complete: () => {
						uni.stopPullDownRefresh();
						//#ifndef APP-PLUS
						uni.hideNavigationBarLoading();
						//#endif
						uni.hideLoading();
					}
				})						
			},
			todetails(id) {
				uni.navigateTo({
					url: '/pages/details/details?id='+id
				})
			},
			startplay(e){
				let myid;
				if(e){
					myid= e.currentTarget.dataset.indexviedoid;
				}
				
				this.indexvideo =uni.createVideoContext(myid);
				let  trailerlist = this.trailerlist
				for(var i=0; i<trailerlist.length;i++){
					let trailerlistid =  trailerlist[i].id
					if(trailerlistid != myid){
						uni.createVideoContext(trailerlistid).pause();
						
					}
				}
			},
			dianzhan(e) {
				this.animation = uni.createAnimation()
				this.animation.translateY(-70).opacity(1).step({ duration: 400 });
				this.animationData =this.animation;
				this.animationDataarray[e] = this.animationData.export();
				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({ duration: 0 });
				this.animationData =this.animation;
				this.animationDataarray[e] = this.animationData.export();				
				}.bind(this),401)
			}
		},
		onLoad() {
            this.postbanner();
			this.hotsuperhero();
			this.hottrailer();
			this.guessULike();

		},
		onUnload() {
			this.animationData = {}
		},
		onHide() {
			if(this.indexvideo){
				this.indexvideo.pause();
			}
		},

		onShareAppMessage() {
			return {
			  title: '超英预告',
			  path: 'pages/index/index'
			}
		},
		onPullDownRefresh() {
			//console.log('refresh');
			this.guessULike();
		},
		components:{
			xin
		}
	}
</script>

<style lang="scss">
.swiper{
	width: 750rpx;
	height: 440rpx;
	image{
	    width: 750rpx;
		height: 440rpx;
	}
}

.hot{
	margin-bottom: 20rpx;
	.hot-title{
		line-height: 80rpx;
		font-size: 36rpx;
		vertical-align: middle;
		padding: 0 20rpx;
	}
	.hot-ico{
		width: 30rpx;
		height: 30rpx;
		vertical-align: middle;
		margin-right: 10rpx;
	}
}

.scroll-view{
	width: 100%;
	white-space: nowrap;
	.item{
		width: 200rpx;
		display: inline-block;
		margin-left: 20rpx;
	}
	.item-img{
		width:200rpx;
		height: 270rpx;

	}
	.title{
		font-size: 28rpx;
		line-height: 1em;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
.line{
	width: 100%;
	height: 14rpx;
	background-color: #F2F6FC;
}
.video-wrap{
	display: flex;
	padding: 0 20rpx;
	flex-wrap: wrap;
	justify-content: space-between;
	.video{
		width:350rpx;
		height: 205rpx;
		margin-bottom: 12rpx;
	}
}
.guess{
	padding: 0 20rpx;
}
.guessULike{
	display: flex;
	justify-content: space-between;
	padding: 20rpx 0;
	border-bottom: 2rpx dashed #EBEEF5;
	.name{
		color: #000;
		font-size: 40rpx;
	}
	.basicInfo,.releaseDate{
		color:grey;
		font-size: 24rpx;
		
	}
	.item-img{
		width:160rpx;
		height: 216rpx;
		flex-shrink: 0;
		flex-grow: 0;
		margin-right: 14rpx;
	}
	&:nth-child(1){
		padding-top: 0;
	}
	&:nth-last-child(1){
		border-bottom: 0 dashed #EBEEF5;
	}
	.guess-content{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex: 1;
	}
	.dianzan{
		width: 130rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	    text-align: center;
		border-left: 6rpx dashed #EBEEF5;
		margin-left: 20rpx;
		flex-shrink: 0;
		flex-grow: 0;
		font-size: 32rpx;
		color: #feb432;
		.dianzan-img{
			width: 60rpx;
			height: 60rpx;
		}
	}
}
.animation{
	opacity: 0;
}
</style>
