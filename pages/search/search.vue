<template>
	<view>
		<view class="search">
			<view class="search-wrap">
				<image class="search-ico" src="../../static/icos/search.png"></image>
				<input type="text" placeholder="搜索预告片" :value="myword"  @input="mysearch" />				
			</view>
		</view>
		<view class="searchlist">
			<view class="item" v-for="item in searchlist" @click="todetails(item.id)" :key="item.id">
				<image :src="item.cover"></image>
				<view class="name">{{item.name}}</view>
			</view>
		</view>
		<view class="wancheng" v-if="wancheng">---😊数据加载完😊---</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchlist:[],
				myword:"",
				records:"",
				page:2,
				wancheng:false
			}
		},
		methods: {
			postsearch(keywords,page,pageSize) {
				
				
				//#ifndef APP-PLUS
				uni.showNavigationBarLoading()
				//#endif
				
				
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url:"https://www.imovietrailer.com/superhero/search/list?keywords=" + keywords + "&page=" + page + "&pageSize=" + pageSize + "&qq=3129996800",
					method:"POST",
					success: (res) => {
						if(res.data.status = 200){
							//console.log(res.data)
							this.searchlist =[...this.searchlist,...res.data.data.rows];
							this.records = res.data.data.records;
							
						}
						
					},
					complete: () => {
						uni.hideLoading();
						//#ifndef APP-PLUS
						uni.hideNavigationBarLoading();
						//#endif
						uni.stopPullDownRefresh();
					}
				})

			},
			mysearch(e) {
				this.searchlist =[];
				this.myword = e.detail.value;
				this.postsearch(this.myword,1,6);
			},
			todetails(id) {
				uni.navigateTo({
					url: '/pages/details/details?id='+id
				})
			}
		},
		onReachBottom() {
			
			if((this.page - 1) * 6<= this.records){
				//console.log(111);
				this.postsearch(this.myword,this.page,6);
				this.page++				
			}else{
				this.wancheng =true
			}

		},
		onLoad() {
			this.postsearch("",1,6)
		},
		onShareAppMessage() {
			return {
			  title: '搜索预告片',
			  path: 'pages/search/search'
			}
		},
		onPullDownRefresh() {
			//console.log('refresh');
			this.searchlist =[];
			this.postsearch("",1,6);
		}
	}
</script>

<style lang="scss">
.search{
	padding: 0 20rpx 10rpx;
	position: fixed;
	top: 44px;
	left: 0;
	right: 0;
	z-index: 9;
	background-color: #fff;
	.search-wrap{
	    display: flex;
		align-items: center;
		background: #eaeaea;
		line-height: 80rpx;
		input{
			background: #eaeaea;
			flex: 1;
			height: 80rpx;
			line-height: 80rpx;
		}
	}
	.search-ico{
		width: 40rpx;
		height: 40rpx;
		line-height: 80rpx;
		padding: 0 20rpx;
	}
}
/* #ifndef H5 */
.search{
	padding: 0 20rpx 10rpx;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9;
	background-color: #fff;
	.search-wrap{
	    display: flex;
		align-items: center;
		background: #eaeaea;
		line-height: 80rpx;
		input{
			background: #eaeaea;
			flex: 1;
			height: 80rpx;
			line-height: 80rpx;
		}
	}
	.search-ico{
		width: 40rpx;
		height: 40rpx;
		line-height: 80rpx;
		padding: 0 20rpx;
	}
}
/* #endif */


.searchlist{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;

	padding: 0 20rpx;
	margin-top: 98rpx;
	.item{
		width: 348rpx;
		position: relative;
		margin-bottom: 16rpx;
		box-shadow: 0 0 6rpx #ccc;
		.name{
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 0 10rpx;
			font-size: 28rpx;
			color: #fff;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			background: linear-gradient(top, rgba(0,0,0,0) , rgba(0,0,0,0.7));
			line-height: 1.8em;
		}
		image{
			width: 348rpx;
			height: 470rpx;
			display: block;
		}
	}
}
.wancheng{
	text-align: center;
	font-size: 30rpx;
}
</style>
