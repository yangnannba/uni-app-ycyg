(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tosex-tosex"],{"4e50":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{userinfo:{},sex:null}},methods:{radioChange:function(t){this.sex=t.detail.value},formSubmit:function(){uni.request({url:"https://www.imovietrailer.com/superhero/user/modifyUserinfo?qq=3129996800",method:"POST",data:{userId:this.userinfo.id,sex:this.sex},header:{headerUserId:this.userinfo.id,headerUserToken:this.userinfo.userUniqueToken},success:function(t){200==t.data.status?(uni.setStorageSync("globalinfo",t.data.data),uni.navigateBack({delta:1})):uni.showToast({title:t.dta.status,image:"/static/icos/error.png"})}})}},onLoad:function(){var t=uni.getStorageSync("globalinfo");this.userinfo=t,this.sex=this.userinfo.sex,console.log(this.sex)}};n.default=e},"7e35":function(t,n,a){"use strict";a.r(n);var e=a("9495"),i=a("a3b0");for(var r in i)"default"!==r&&function(t){a.d(n,t,function(){return i[t]})}(r);a("c507");var s,o=a("f0c5"),u=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"3bb96d2c",null,!1,e["a"],s);n["default"]=u.exports},9495:function(t,n,a){"use strict";var e,i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"page"},[a("v-uni-form",{on:{submit:function(n){arguments[0]=n=t.$handleEvent(n),t.formSubmit.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"radio-wrap"},[a("v-uni-radio-group",{on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.radioChange.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"label"},[a("v-uni-view",[a("v-uni-radio",{attrs:{value:"0",checked:0==this.sex}}),t._v("男")],1)],1),a("v-uni-label",{staticClass:"label"},[a("v-uni-view",[a("v-uni-radio",{attrs:{value:"1",checked:1==this.sex}}),t._v("女")],1)],1)],1)],1),a("v-uni-button",{staticClass:"submit",attrs:{type:"primary","form-type":"submit"}},[t._v("提交")])],1)],1)},r=[];a.d(n,"b",function(){return i}),a.d(n,"c",function(){return r}),a.d(n,"a",function(){return e})},a171:function(t,n,a){var e=a("b054");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("6f7ff45f",e,!0,{sourceMap:!1,shadowMode:!1})},a3b0:function(t,n,a){"use strict";a.r(n);var e=a("4e50"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,function(){return e[t]})}(r);n["default"]=i.a},b054:function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-3bb96d2c]{background:#f5f4f4;width:100%;height:100%}.radio-wrap[data-v-3bb96d2c]{margin-top:%?20?%}.radio-wrap .label[data-v-3bb96d2c]{background-color:#fff;padding:%?20?% %?20?%;display:block;font-size:%?34?%}.radio-wrap .label[data-v-3bb96d2c]:nth-child(1){border-bottom:%?2?% solid #f5f4f4}.submit[data-v-3bb96d2c]{margin:%?20?% auto;width:96%}body.?%PAGE?%[data-v-3bb96d2c]{background:#f5f4f4}',""])},c507:function(t,n,a){"use strict";var e=a("a171"),i=a.n(e);i.a}}]);