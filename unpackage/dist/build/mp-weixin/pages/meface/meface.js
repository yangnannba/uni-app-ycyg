(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meface/meface"],{"165d":function(e,t,n){"use strict";n.r(t);var a=n("b2bf"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},4031:function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return a})},6086:function(e,t,n){"use strict";(function(e){n("29a1"),n("921b");a(n("66fd"));var t=a(n("9ec3"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"6ee3":function(e,t,n){},"9ec3":function(e,t,n){"use strict";n.r(t);var a=n("4031"),o=n("165d");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("df65");var c,i=n("f0c5"),r=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=r.exports},b2bf:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{imgface:null}},methods:{cxxz:function(){var t=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(e){var n=e.tempFilePaths[0];t.imgface=n}})},toshangchuan:function(){e.showLoading({title:"图片上传中..."});var t=e.getStorageSync("globalinfo");e.uploadFile({url:"https://www.imovietrailer.com/superhero/user/uploadFace?userId="+t.id+"&qq=3129996800",method:"POST",filePath:this.imgface,name:"file",header:{headerUserId:t.id,headerUserToken:t.userUniqueToken},success:function(t){var n=JSON.parse(t.data);console.log(n),200==n.status?(e.setStorageSync("globalinfo",n.data),e.navigateBack({delta:1})):200!=n.status&&e.showToast({title:n.msg,image:"/static/icos/error.png"})},complete:function(){e.hideLoading()}})}},onLoad:function(e){this.imgface=e.tempFilePaths}};t.default=n}).call(this,n("543d")["default"])},df65:function(e,t,n){"use strict";var a=n("6ee3"),o=n.n(a);o.a}},[["6086","common/runtime","common/vendor"]]]);