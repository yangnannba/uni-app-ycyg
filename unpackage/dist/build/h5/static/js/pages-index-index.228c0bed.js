(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"2ade":function(t,i,e){"use strict";var a=e("7276"),n=e.n(a);n.a},"2e51":function(t,i,e){var a=e("8fe9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("38277e9f",a,!0,{sourceMap:!1,shadowMode:!1})},"3ffd":function(t,i,e){"use strict";e.r(i);var a=e("4814"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},4814:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"myscore",data:function(){return{}},props:["score","myscore"],computed:{staryellow:function(){return Math.floor(this.score/2)},stargray:function(){return 5-this.staryellow}}};i.default=a},"4fcd":function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("ece0")),s={data:function(){return{indicatorDots:!0,autoplay:!0,indicatorcolor:"#999",indicatoractivecolor:"#000",bannerlist:[],superherolist:[],trailerlist:[],guesslist:[],animationData:{},animationDataarray:[]}},methods:{postbanner:function(){var t=this;uni.request({url:"https://www.imovietrailer.com/superhero/index/carousel/list?qq=3129996800",method:"POST",success:function(i){t.bannerlist=i.data.data}})},hotsuperhero:function(){var t=this;uni.request({url:"https://www.imovietrailer.com/superhero/index/movie/hot?type=superhero&qq=3129996800",method:"POST",success:function(i){t.superherolist=i.data.data}})},hottrailer:function(){var t=this;uni.request({url:"https://www.imovietrailer.com/superhero/index/movie/hot?type=trailer&qq=3129996800",method:"POST",success:function(i){t.trailerlist=i.data.data}})},guessULike:function(){var t=this;uni.showNavigationBarLoading(),uni.showLoading({mask:!0}),uni.request({url:"https://www.imovietrailer.com/superhero/index/guessULike?qq=3129996800",method:"POST",success:function(i){t.guesslist=i.data.data},complete:function(){uni.stopPullDownRefresh(),uni.hideNavigationBarLoading(),uni.hideLoading()}})},todetails:function(t){uni.navigateTo({url:"/pages/details/details?id="+t})},startplay:function(t){var i;t&&(i=t.currentTarget.dataset.indexviedoid),this.indexvideo=uni.createVideoContext(i);for(var e=this.trailerlist,a=0;a<e.length;a++){var n=e[a].id;n!=i&&uni.createVideoContext(n).pause()}},dianzhan:function(t){this.animation=uni.createAnimation(),this.animation.translateY(-70).opacity(1).step({duration:400}),this.animationData=this.animation,this.animationDataarray[t]=this.animationData.export(),setTimeout(function(){this.animation.translateY(0).opacity(0).step({duration:0}),this.animationData=this.animation,this.animationDataarray[t]=this.animationData.export()}.bind(this),401)}},onLoad:function(){this.postbanner(),this.hotsuperhero(),this.hottrailer(),this.guessULike()},onUnload:function(){this.animationData={}},onHide:function(){this.indexvideo&&this.indexvideo.pause()},onShareAppMessage:function(){return{title:"超英预告",path:"pages/index/index"}},onPullDownRefresh:function(){this.guessULike()},components:{xin:n.default}};i.default=s},"5ddf":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".star-yellow[data-v-a098f66c]{width:%?22?%;height:%?22?%}.star-gray[data-v-a098f66c]{width:%?22?%;height:%?22?%}.score[data-v-a098f66c]{color:red;font-size:%?28?%}",""])},"6bc6":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,"indicator-color":t.indicatorcolor,"indicator-active-color":t.indicatoractivecolor}},t._l(t.bannerlist,function(i){return e("v-uni-swiper-item",{key:i.movieId,staticClass:"swiper-item"},[e("v-uni-image",{attrs:{src:i.image},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.todetails(i.movieId)}}})],1)}),1),e("v-uni-view",{staticClass:"hot"},[e("v-uni-view",{staticClass:"hot-title"},[e("v-uni-image",{staticClass:"hot-ico",attrs:{src:"../../static/icos/hot.png"}}),e("v-uni-text",[t._v("热门超英")])],1),e("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-x":"true"}},t._l(t.superherolist,function(i){return e("v-uni-view",{key:i.id,staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.todetails(i.id)}}},[e("v-uni-image",{staticClass:"item-img",attrs:{src:i.cover}}),e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.name))]),e("xin",{attrs:{score:i.score,myscore:!0}})],1)}),1)],1),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"hot"},[e("v-uni-view",{staticClass:"hot-title"},[e("v-uni-image",{staticClass:"hot-ico",attrs:{src:"../../static/icos/interest.png"}}),e("v-uni-text",[t._v("热门预告")])],1),e("v-uni-view",{staticClass:"video-wrap"},t._l(t.trailerlist,function(i){return e("v-uni-video",{key:i.id,attrs:{src:i.trailer,controls:!0,poster:i.poster,id:i.id,"data-indexviedoid":i.id},on:{play:function(i){arguments[0]=i=t.$handleEvent(i),t.startplay.apply(void 0,arguments)}}})}),1)],1),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"hot"},[e("v-uni-view",{staticClass:"hot-title"},[e("v-uni-image",{staticClass:"hot-ico",attrs:{src:"../../static/icos/guess-u-like.png"}}),e("v-uni-text",[t._v("猜你喜欢")])],1),e("v-uni-view",{staticClass:"guess"},t._l(t.guesslist,function(i,a){return e("v-uni-view",{key:i.id,staticClass:"guessULike"},[e("v-uni-image",{staticClass:"item-img",attrs:{src:i.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.todetails(i.id)}}}),e("v-uni-view",{staticClass:"guess-content"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(i.name))]),e("xin",{attrs:{score:i.score,myscore:!1}}),e("v-uni-view",{staticClass:"basicInfo"},[t._v(t._s(i.basicInfo))]),e("v-uni-view",{staticClass:"releaseDate"},[t._v(t._s(i.releaseDate))])],1),e("v-uni-view",{staticClass:"dianzan",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.dianzhan(a)}}},[e("v-uni-image",{staticClass:"dianzan-img",attrs:{src:"../../static/icos/praise.png"}}),e("v-uni-view",[t._v("点赞")]),e("v-uni-view",{staticClass:"animation",attrs:{animation:t.animationDataarray[a]}},[t._v("+1")])],1)],1)}),1)],1)],1)},s=[];e.d(i,"b",function(){return n}),e.d(i,"c",function(){return s}),e.d(i,"a",function(){return a})},7276:function(t,i,e){var a=e("5ddf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("2b940d7e",a,!0,{sourceMap:!1,shadowMode:!1})},"7d0f":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t._l(t.staryellow,function(t){return e("v-uni-image",{key:t,staticClass:"star-yellow",attrs:{src:"/static/icos/star-yellow.png"}})}),t._l(t.stargray,function(t){return e("v-uni-image",{key:t+"a",staticClass:"star-gray",attrs:{src:"/static/icos/star-gray.png"}})}),t.myscore?e("v-uni-text",{staticClass:"score"},[t._v(t._s(t.score))]):t._e()],2)},s=[];e.d(i,"b",function(){return n}),e.d(i,"c",function(){return s}),e.d(i,"a",function(){return a})},"851f":function(t,i,e){"use strict";e.r(i);var a=e("6bc6"),n=e("dc4f");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("b451");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"19434090",null,!1,a["a"],o);i["default"]=c.exports},"8fe9":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiper[data-v-19434090]{width:%?750?%;height:%?440?%}.swiper uni-image[data-v-19434090]{width:%?750?%;height:%?440?%}.hot[data-v-19434090]{margin-bottom:%?20?%}.hot .hot-title[data-v-19434090]{line-height:%?80?%;font-size:%?36?%;vertical-align:middle;padding:0 %?20?%}.hot .hot-ico[data-v-19434090]{width:%?30?%;height:%?30?%;vertical-align:middle;margin-right:%?10?%}.scroll-view[data-v-19434090]{width:100%;white-space:nowrap}.scroll-view .item[data-v-19434090]{width:%?200?%;display:inline-block;margin-left:%?20?%}.scroll-view .item-img[data-v-19434090]{width:%?200?%;height:%?270?%}.scroll-view .title[data-v-19434090]{font-size:%?28?%;line-height:1em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.line[data-v-19434090]{width:100%;height:%?14?%;background-color:#f2f6fc}.video-wrap[data-v-19434090]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?20?%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.video-wrap uni-video[data-v-19434090]{width:%?350?%;height:%?205?%;margin-bottom:%?12?%}.guess[data-v-19434090]{padding:0 %?20?%}.guessULike[data-v-19434090]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?20?% 0;border-bottom:%?2?% dashed #ebeef5}.guessULike .name[data-v-19434090]{color:#000;font-size:%?40?%}.guessULike .basicInfo[data-v-19434090], .guessULike .releaseDate[data-v-19434090]{color:grey;font-size:%?24?%}.guessULike .item-img[data-v-19434090]{width:%?160?%;height:%?216?%;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;margin-right:%?14?%}.guessULike[data-v-19434090]:nth-child(1){padding-top:0}.guessULike[data-v-19434090]:nth-last-child(1){border-bottom:0 dashed #ebeef5}.guessULike .guess-content[data-v-19434090]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-flex:1;-webkit-flex:1;flex:1}.guessULike .dianzan[data-v-19434090]{width:%?130?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;border-left:%?6?% dashed #ebeef5;margin-left:%?20?%;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;font-size:%?32?%;color:#feb432}.guessULike .dianzan .dianzan-img[data-v-19434090]{width:%?60?%;height:%?60?%}.animation[data-v-19434090]{opacity:0}',""])},b451:function(t,i,e){"use strict";var a=e("2e51"),n=e.n(a);n.a},dc4f:function(t,i,e){"use strict";e.r(i);var a=e("4fcd"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},ece0:function(t,i,e){"use strict";e.r(i);var a=e("7d0f"),n=e("3ffd");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("2ade");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"a098f66c",null,!1,a["a"],o);i["default"]=c.exports}}]);