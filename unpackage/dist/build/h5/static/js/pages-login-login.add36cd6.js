(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"036d":function(t,e,n){"use strict";n.r(e);var a=n("db6c"),i=n("ab60");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("bbee");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"39f2f62e",null,!1,a["a"],o);e["default"]=u.exports},"8b27":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{mysubmit:function(t){var e=t.detail.value.usename,n=t.detail.value.password;uni.request({url:"https://www.imovietrailer.com/superhero/user/registOrLogin?qq=3129996800",data:{username:e,password:n},method:"POST",success:function(t){200==t.data.status?(uni.setStorageSync("globalinfo",t.data.data),uni.switchTab({url:"../me/me"})):500==t.data.status&&uni.showToast({title:t.data.msg,image:"/static/icos/error.png"})}})},getuserinfo:function(t){var e=t.detail.userInfo,n=e.avatarUrl,a=e.nickName;console.log(n),console.log(a),uni.login({provider:"weixin",success:function(t){var e=t.code;console.log(e),uni.request({url:"https://www.imovietrailer.com/superhero/stu/mpWXLogin/"+e,data:{avatarUrl:n,nickName:a,whichMP:1},method:"POST",success:function(t){console.log(t);var e={id:1234567890,faceImage:n,nickname:a,birthday:"1985.12.14",sex:0};uni.setStorageSync("globalinfo",e),uni.switchTab({url:"../me/me"})}})}})},dsfdenglu:function(t){var e=t.currentTarget.dataset.denglutype;uni.login({provider:e,success:function(t){uni.getUserInfo({provider:e,success:function(t){var n=t.userInfo;"weixin"==e?(n.avatarUrl,n.nickName,n.openId):"qq"==e?(n.avatarUrl,n.nickname,n.openId):"sinaweibo"==e&&(n.avatarUrl,n.nickname,n.id),uni.request({url:"https://www.imovietrailer.com/superhero/appUnionLogin/"+e+"?qq=3129996800",data:{face:n.avatarUrl,nickname:n.nickName,openIdOrUid:n.openId},method:"POST",success:function(t){200==t.data.status&&(uni.setStorageSync("globalinfo",t.data.data),uni.switchTab({url:"../me/me"}))}})}})}})}}};e.default=a},ab60:function(t,e,n){"use strict";n.r(e);var a=n("8b27"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},b2bd:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.body[data-v-39f2f62e]{padding:0 %?40?%}.body .touxiang[data-v-39f2f62e]{width:%?160?%;height:%?160?%;display:block;margin:auto;padding:%?120?% 0}.body .myinput[data-v-39f2f62e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:3em;font-size:%?36?%;border-bottom:%?2?% #ccc solid;color:grey}.body .myinput uni-label[data-v-39f2f62e]{margin-right:%?20?%;width:%?120?%;text-align:center}.body .myinput uni-input[data-v-39f2f62e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:3em;line-height:3em;font-size:%?36?%}.body .btn-submit[data-v-39f2f62e]{margin-top:%?50?%;font-size:%?40?%}.pingtai[data-v-39f2f62e]{margin-top:%?100?%;text-align:center}.pingtai .title[data-v-39f2f62e]{font-size:%?32?%;color:#999;text-align:center;margin-bottom:%?40?%}.pingtai .weixin[data-v-39f2f62e]{width:%?100?%;height:%?100?%;margin:0 %?20?%}',""])},bbee:function(t,e,n){"use strict";var a=n("f97f"),i=n.n(a);i.a},db6c:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"body"},[n("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.mysubmit.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"touxiang",attrs:{src:"../../static/icos/default-face.png"}}),n("v-uni-view",{staticClass:"myinput"},[n("v-uni-label",[t._v("账号")]),n("v-uni-input",{attrs:{type:"text",name:"usename",placeholder:"请输入账号","placeholder-style":"color:#ccc"}})],1),n("v-uni-view",{staticClass:"myinput"},[n("v-uni-label",[t._v("密码")]),n("v-uni-input",{attrs:{type:"text",name:"password",password:!0,placeholder:"请输入密码","placeholder-style":"color:#ccc"}})],1),n("v-uni-button",{staticClass:"btn-submit",attrs:{type:"primary","form-type":"submit"}},[t._v("注册/登录")])],1)],1)},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},f97f:function(t,e,n){var a=n("b2bd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("316bb06e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);