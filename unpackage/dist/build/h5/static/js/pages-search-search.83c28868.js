(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"0d19":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.search[data-v-601dbcca]{padding:0 %?20?% %?10?%;position:fixed;top:44px;left:0;right:0;z-index:9;background-color:#fff}.search .search-wrap[data-v-601dbcca]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#eaeaea;line-height:%?80?%}.search .search-wrap uni-input[data-v-601dbcca]{background:#eaeaea;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?80?%;line-height:%?80?%}.search .search-ico[data-v-601dbcca]{width:%?40?%;height:%?40?%;line-height:%?80?%;padding:0 %?20?%}.searchlist[data-v-601dbcca]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?20?%;margin-top:%?98?%}.searchlist .item[data-v-601dbcca]{width:%?348?%;position:relative;margin-bottom:%?16?%;box-shadow:0 0 %?6?% #ccc}.searchlist .item .name[data-v-601dbcca]{position:absolute;bottom:0;left:0;right:0;padding:0 %?10?%;font-size:%?28?%;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.7));background:linear-gradient(top,transparent,rgba(0,0,0,.7));line-height:1.8em}.searchlist .item uni-image[data-v-601dbcca]{width:%?348?%;height:%?470?%;display:block}.wancheng[data-v-601dbcca]{text-align:center;font-size:%?30?%}',""])},1969:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("75fc")),r={data:function(){return{searchlist:[],myword:"",records:"",page:2,wancheng:!1}},methods:{postsearch:function(t,e,a){var n=this;uni.showNavigationBarLoading(),uni.showLoading({title:"加载中"}),uni.request({url:"https://www.imovietrailer.com/superhero/search/list?keywords="+t+"&page="+e+"&pageSize="+a+"&qq=3129996800",method:"POST",success:function(t){(t.data.status=200)&&(n.searchlist=[].concat((0,i.default)(n.searchlist),(0,i.default)(t.data.data.rows)),n.records=t.data.data.records)},complete:function(){uni.hideLoading(),uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}})},mysearch:function(t){this.searchlist=[],this.myword=t.detail.value,this.postsearch(this.myword,1,6)},todetails:function(t){uni.navigateTo({url:"/pages/details/details?id="+t})}},onReachBottom:function(){6*(this.page-1)<=this.records?(this.postsearch(this.myword,this.page,6),this.page++):this.wancheng=!0},onLoad:function(){this.postsearch("",1,6)},onShareAppMessage:function(){return{title:"搜索预告片",path:"pages/search/search"}},onPullDownRefresh:function(){this.searchlist=[],this.postsearch("",1,6)}};e.default=r},3580:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"search"},[a("v-uni-view",{staticClass:"search-wrap"},[a("v-uni-image",{staticClass:"search-ico",attrs:{src:"../../static/icos/search.png"}}),a("v-uni-input",{attrs:{type:"text",placeholder:"搜索预告片",value:t.myword},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.mysearch.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"searchlist"},t._l(t.searchlist,function(e){return a("v-uni-view",{key:e.id,staticClass:"item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.todetails(e.id)}}},[a("v-uni-image",{attrs:{src:e.cover}}),a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))])],1)}),1),t.wancheng?a("v-uni-view",{staticClass:"wancheng"},[t._v("---😊数据加载完😊---")]):t._e()],1)},r=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return r}),a.d(e,"a",function(){return n})},"54a1a":function(t,e,a){"use strict";a.r(e);var n=a("1969"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"75fc":function(t,e,a){"use strict";a.r(e);var n=a("a745"),i=a.n(n);function r(t){if(i()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var s=a("774e"),c=a.n(s),o=a("c8bb"),d=a.n(o);function u(t){if(d()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){return r(t)||u(t)||l()}a.d(e,"default",function(){return h})},"7ad0":function(t,e,a){"use strict";var n=a("fdc4"),i=a.n(n);i.a},eab4:function(t,e,a){"use strict";a.r(e);var n=a("3580"),i=a("54a1a");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("7ad0");var s,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"601dbcca",null,!1,n["a"],s);e["default"]=o.exports},fdc4:function(t,e,a){var n=a("0d19");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("3fba71d1",n,!0,{sourceMap:!1,shadowMode:!1})}}]);