(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meinfo-meinfo"],{"25b9":function(i,t,a){"use strict";var n=a("d69a"),e=a.n(n);e.a},"62f4":function(i,t,a){"use strict";a.r(t);var n=a("b6fc"),e=a("6485");for(var o in e)"default"!==o&&function(i){a.d(t,i,function(){return e[i]})}(o);a("25b9");var s,r=a("f0c5"),c=Object(r["a"])(e["default"],n["b"],n["c"],!1,null,"1aa421a7",null,!1,n["a"],s);t["default"]=c.exports},6485:function(i,t,a){"use strict";a.r(t);var n=a("9b7d"),e=a.n(n);for(var o in n)"default"!==o&&function(i){a.d(t,i,function(){return n[i]})}(o);t["default"]=e.a},"9b7d":function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{globalinfo:{}}},methods:{touxiang:function(){var i=uni.getStorageSync("globalinfo");uni.showActionSheet({itemList:["预览头像","从相册选择上传"],success:function(t){if(0==t.tapIndex){var a=[];a.push(i.faceImage),uni.previewImage({current:a[0],urls:a})}else 1==t.tapIndex&&uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(i){var t=i.tempFilePaths;uni.navigateTo({url:"../meface/meface?tempFilePaths="+t[0]})}})}})},myclear:function(){uni.clearStorageSync(),uni.showToast({title:"清理缓存成功"})},logout:function(){var i=uni.getStorageSync("globalinfo"),t=i.id;uni.request({url:"https://www.imovietrailer.com/superhero/user/logout?userId="+t+"&qq=3129996800",method:"POST",success:function(i){200==i.data.status&&(uni.removeStorageSync("globalinfo"),uni.switchTab({url:"../me/me"}))}})},gainame:function(){uni.navigateTo({url:"../gainame/gainame"})},tobirthday:function(){uni.navigateTo({url:"../tobirthday/tobirthday"})},tosex:function(){uni.navigateTo({url:"../tosex/tosex"})}},onShow:function(){var i=uni.getStorageSync("globalinfo");this.globalinfo=i||{}}};t.default=n},b6fc:function(i,t,a){"use strict";var n,e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"wrap"},[a("v-uni-view",{staticClass:"item",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.touxiang.apply(void 0,arguments)}}},[a("v-uni-view",[i._v("头像")]),a("v-uni-view",{staticClass:"item-r"},[a("v-uni-view",[a("v-uni-image",{staticClass:"touxiang",attrs:{src:i.globalinfo.faceImage}})],1),a("v-uni-view",[a("v-uni-image",{staticClass:"jiantou",attrs:{src:"../../static/icos/left-gray-arrow.png"}})],1)],1)],1),a("v-uni-view",{staticClass:"line-wrap"},[a("v-uni-view",{staticClass:"line"})],1),a("v-uni-view",{staticClass:"item",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.gainame.apply(void 0,arguments)}}},[a("v-uni-view",[i._v("昵称")]),a("v-uni-view",{staticClass:"item-r"},[a("v-uni-view",[i._v(i._s(i.globalinfo.nickname))]),a("v-uni-view",[a("v-uni-image",{staticClass:"jiantou",attrs:{src:"../../static/icos/left-gray-arrow.png"}})],1)],1)],1),a("v-uni-view",{staticClass:"line-wrap"},[a("v-uni-view",{staticClass:"line"})],1),a("v-uni-view",{staticClass:"item",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tobirthday.apply(void 0,arguments)}}},[a("v-uni-view",[i._v("生日")]),a("v-uni-view",{staticClass:"item-r"},[a("v-uni-view",[i._v(i._s(i.globalinfo.birthday))]),a("v-uni-view",[a("v-uni-image",{staticClass:"jiantou",attrs:{src:"../../static/icos/left-gray-arrow.png"}})],1)],1)],1),a("v-uni-view",{staticClass:"line-wrap"},[a("v-uni-view",{staticClass:"line"})],1),a("v-uni-view",{staticClass:"item",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tosex.apply(void 0,arguments)}}},[a("v-uni-view",[i._v("性别")]),a("v-uni-view",{staticClass:"item-r"},[1==i.globalinfo.sex?a("v-uni-view",[i._v("女")]):0==i.globalinfo.sex?a("v-uni-view",[i._v("男")]):a("v-uni-view",[i._v("未选择")]),a("v-uni-view",[a("v-uni-image",{staticClass:"jiantou",attrs:{src:"../../static/icos/left-gray-arrow.png"}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"item",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.myclear.apply(void 0,arguments)}}},[i._v("清理缓存")]),a("v-uni-view",{staticClass:"liner"}),a("v-uni-view",{staticClass:"item",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.logout.apply(void 0,arguments)}}},[i._v("退出登录")])],1)],1)},o=[];a.d(t,"b",function(){return e}),a.d(t,"c",function(){return o}),a.d(t,"a",function(){return n})},d69a:function(i,t,a){var n=a("fec1");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=a("4f06").default;e("34ce8d63",n,!0,{sourceMap:!1,shadowMode:!1})},fec1:function(i,t,a){t=i.exports=a("2350")(!1),t.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-1aa421a7]{height:100%}.body[data-v-1aa421a7]{background:#f5f4f4;width:100%;height:100%}.wrap[data-v-1aa421a7]{background:#fff}.wrap .item[data-v-1aa421a7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?36?%;padding:%?20?%;color:#333}.wrap .item .item-r[data-v-1aa421a7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999;font-size:%?32?%}.wrap .item .touxiang[data-v-1aa421a7]{width:%?100?%;height:%?100?%;border-radius:50%}.wrap .item .jiantou[data-v-1aa421a7]{width:%?40?%;height:%?40?%;margin-left:%?12?%}.line-wrap[data-v-1aa421a7]{padding:0 %?20?%}.line-wrap .line[data-v-1aa421a7]{width:100%;height:%?2?%;background-color:#f5f4f4}.bottom[data-v-1aa421a7]{position:fixed;bottom:0;text-align:center;width:100%;background:#fff}.bottom .liner[data-v-1aa421a7]{width:100%;height:%?8?%;background:#f5f4f4}.bottom .item[data-v-1aa421a7]{padding:%?20?%;text-align:center;font-size:%?36?%;color:#333}',""])}}]);