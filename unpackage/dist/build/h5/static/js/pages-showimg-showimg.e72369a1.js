(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-showimg-showimg"],{"29e7":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{cover:""}},methods:{longpress:function(){var n=this;uni.showActionSheet({itemList:["下载图片"],success:function(t){0==t.tapIndex&&(uni.showLoading({title:"图片下载中..."}),uni.downloadFile({url:n.cover,success:function(n){var t=n.tempFilePath;console.log("下载成功"),uni.saveImageToPhotosAlbum({filePath:t,success:function(n){uni.showToast({title:"保存成功"})},complete:function(){uni.hideLoading()}})}}))}})}},onLoad:function(n){this.cover=n.cover}};t.default=i},"4db5":function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"cover"},[e("v-uni-image",{attrs:{src:n.cover},on:{longpress:function(t){arguments[0]=t=n.$handleEvent(t),n.longpress.apply(void 0,arguments)}}})],1)},o=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return i})},"4ed1":function(n,t,e){"use strict";e.r(t);var i=e("4db5"),a=e("6a40");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("e46d");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"37a4a141",null,!1,i["a"],r);t["default"]=c.exports},"6a40":function(n,t,e){"use strict";e.r(t);var i=e("29e7"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);t["default"]=a.a},"8f12":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-37a4a141], body[data-v-37a4a141]{height:100%}.cover[data-v-37a4a141]{background:#000;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cover uni-image[data-v-37a4a141]{width:%?400?%;height:%?540?%}',""])},a2f0:function(n,t,e){var i=e("8f12");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("7b18f411",i,!0,{sourceMap:!1,shadowMode:!1})},e46d:function(n,t,e){"use strict";var i=e("a2f0"),a=e.n(i);a.a}}]);