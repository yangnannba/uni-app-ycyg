(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"5f30":function(t,i,n){"use strict";(function(t){n("29a1"),n("921b");e(n("66fd"));var i=e(n("851f"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("543d")["createPage"])},6852:function(t,i,n){"use strict";var e,a=function(){var t=this,i=t.$createElement;t._self._c},o=[];n.d(i,"b",function(){return a}),n.d(i,"c",function(){return o}),n.d(i,"a",function(){return e})},"776f":function(t,i,n){"use strict";var e=n("8239"),a=n.n(e);a.a},8239:function(t,i,n){},"851f":function(t,i,n){"use strict";n.r(i);var e=n("6852"),a=n("dc4f");for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);n("776f");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);i["default"]=u.exports},dc4f:function(t,i,n){"use strict";n.r(i);var e=n("f89c"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);i["default"]=a.a},f89c:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=function(){return n.e("components/xiin").then(n.bind(null,"ece0"))},a={data:function(){return{indicatorDots:!0,autoplay:!0,indicatorcolor:"#999",indicatoractivecolor:"#000",bannerlist:[],superherolist:[],trailerlist:[],guesslist:[],animationData:{},animationDataarray:[]}},methods:{postbanner:function(){var i=this;t.request({url:"https://www.imovietrailer.com/superhero/index/carousel/list?qq=3129996800",method:"POST",success:function(t){i.bannerlist=t.data.data}})},hotsuperhero:function(){var i=this;t.request({url:"https://www.imovietrailer.com/superhero/index/movie/hot?type=superhero&qq=3129996800",method:"POST",success:function(t){i.superherolist=t.data.data}})},hottrailer:function(){var i=this;t.request({url:"https://www.imovietrailer.com/superhero/index/movie/hot?type=trailer&qq=3129996800",method:"POST",success:function(t){console.log(t.data.data),i.trailerlist=t.data.data}})},guessULike:function(){var i=this;t.showNavigationBarLoading(),t.showLoading({mask:!0}),t.request({url:"https://www.imovietrailer.com/superhero/index/guessULike?qq=3129996800",method:"POST",success:function(t){i.guesslist=t.data.data},complete:function(){t.stopPullDownRefresh(),t.hideNavigationBarLoading(),t.hideLoading()}})},todetails:function(i){t.navigateTo({url:"/pages/details/details?id="+i})},startplay:function(i){var n;i&&(n=i.currentTarget.dataset.indexviedoid),this.indexvideo=t.createVideoContext(n);for(var e=this.trailerlist,a=0;a<e.length;a++){var o=e[a].id;o!=n&&t.createVideoContext(o).pause()}},dianzhan:function(i){this.animation=t.createAnimation(),this.animation.translateY(-70).opacity(1).step({duration:400}),this.animationData=this.animation,this.animationDataarray[i]=this.animationData.export(),setTimeout(function(){this.animation.translateY(0).opacity(0).step({duration:0}),this.animationData=this.animation,this.animationDataarray[i]=this.animationData.export()}.bind(this),401)}},onLoad:function(){this.postbanner(),this.hotsuperhero(),this.hottrailer(),this.guessULike()},onUnload:function(){this.animationData={}},onHide:function(){this.indexvideo&&this.indexvideo.pause()},onShareAppMessage:function(){return{title:"超英预告",path:"pages/index/index"}},onPullDownRefresh:function(){this.guessULike()},components:{xin:e}};i.default=a}).call(this,n("543d")["default"])}},[["5f30","common/runtime","common/vendor"]]]);