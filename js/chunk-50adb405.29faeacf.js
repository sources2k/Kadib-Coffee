(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50adb405"],{1276:function(t,e,a){"use strict";var n=a("d784"),i=a("44e7"),s=a("825a"),l=a("1d80"),r=a("4840"),c=a("8aa5"),o=a("50c4"),u=a("14c3"),d=a("9263"),f=a("d039"),g=[].push,v=Math.min,h=4294967295,p=!f((function(){return!RegExp(h,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(l(this)),s=void 0===a?h:a>>>0;if(0===s)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,s);var r,c,o,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,p=new RegExp(t.source,f+"g");while(r=d.call(p,n)){if(c=p.lastIndex,c>v&&(u.push(n.slice(v,r.index)),r.length>1&&r.index<n.length&&g.apply(u,r.slice(1)),o=r[0].length,v=c,u.length>=s))break;p.lastIndex===r.index&&p.lastIndex++}return v===n.length?!o&&p.test("")||u.push(""):u.push(n.slice(v)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var i=l(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i,a):n.call(String(i),e,a)},function(t,i){var l=a(n,t,this,i,n!==e);if(l.done)return l.value;var d=s(t),f=String(this),g=r(d,RegExp),m=d.unicode,I=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"y":"g"),k=new g(p?d:"^(?:"+d.source+")",I),b=void 0===i?h:i>>>0;if(0===b)return[];if(0===f.length)return null===u(k,f)?[f]:[];var x=0,C=0,y=[];while(C<f.length){k.lastIndex=p?C:0;var $,w=u(k,p?f:f.slice(C));if(null===w||($=v(o(k.lastIndex+(p?0:C)),f.length))===x)C=c(f,C,m);else{if(y.push(f.slice(x,C)),y.length===b)return y;for(var S=1;S<=w.length-1;S++)if(y.push(w[S]),y.length===b)return y;C=x=$}}return y.push(f.slice(x)),y}]}),!p)},"77be":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account"},[a("van-nav-bar",{attrs:{title:"账号管理","left-arrow":""},on:{"click-left":t.back}}),a("van-cell-group",[a("van-cell",{staticClass:"v-cell",attrs:{title:"头像"}},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"fr user-img"},[a("img",{staticClass:"auto-img",attrs:{src:t.userInfo.userImg,alt:""}}),a("van-uploader",{staticClass:"upload-box",attrs:{"after-read":t.uploadFile}})],1)])]),a("van-cell",{staticClass:"v-cell",attrs:{title:"用户id",value:t.userInfo.userId}}),a("van-cell",{staticClass:"v-cell",attrs:{title:"手机号",value:t.userInfo.phone}}),a("van-cell",{staticClass:"v-cell",attrs:{title:"昵称"}},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"fr"},[a("van-field",{staticClass:"v-filed",attrs:{"input-align":"right"},on:{blur:function(e){return t.updateUserInfo({key:"nickName",value:t.userInfo.nickName,url:"/updateNickName"})}},model:{value:t.userInfo.nickName,callback:function(e){t.$set(t.userInfo,"nickName",e)},expression:"userInfo.nickName"}})],1)])]),a("van-cell",[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"fl v-cell-text"},[t._v("简介")]),a("div",{staticClass:"fl v-cell-textarea"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.desc,expression:"userInfo.desc"}],staticClass:"textarea",domProps:{value:t.userInfo.desc},on:{change:function(e){return t.updateUserInfo({key:"desc",value:t.userInfo.desc,url:"/updateDesc"})},input:function(e){e.target.composing||t.$set(t.userInfo,"desc",e.target.value)}}})])])])],1)],1)},i=[],s=(a("ac1f"),a("5319"),a("1276"),a("ade3")),l=(a("80f1"),{data:function(){return{userInfo:{}}},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this,e=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findAccountInfo",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),"B001"==e.data.code&&(t.userInfo=e.data.result[0])})).catch((function(e){t.$toast.clear()}))},uploadFile:function(t){var e=this,a=t.content.replace(/^data:image\/[A-Za-z]+;base64,/,""),n=t.file.type.split("/")[1],i=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/updateAvatar",data:{appkey:this.appkey,tokenString:i,imgType:n,serverBase64Img:a}}).then((function(t){e.$toast.clear(),"H001"==t.data.code?e.userInfo.userImg=t.data.userImg:e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))},updateUserInfo:function(t){var e=this,a=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:t.url,data:Object(s["a"])({appkey:this.appkey,tokenString:a},t.key,t.value)}).then((function(t){e.$toast.clear()})).catch((function(t){e.$toast.clear()}))},back:function(){this.$router.go(-1)}}}),r=l,c=a("2877"),o=Object(c["a"])(r,n,i,!1,null,null,null);e["default"]=o.exports},"80f1":function(t,e,a){},ade3:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=chunk-50adb405.29faeacf.js.map