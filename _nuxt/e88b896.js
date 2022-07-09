(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{489:function(e,t,r){"use strict";r.r(t);r(29),r(21),r(28),r(12),r(42),r(26),r(43);var n=r(15),o=r(3);r(41);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$route.params.id,t.next=3,e.$store.dispatch("blogs/fetchBlog",r);case 3:data=t.sent,e.form=c(c({},data),{},{image:[]});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{form:{},formRules:{titleEn:[{required:!0,message:"Please input title in English"}],titleAr:[{required:!0,message:"Please input title in Arabic"}],titleHeb:[{required:!0,message:"Please input title in Hebrew"}],briefEn:[{required:!0,message:"Please input brief in English"}],briefAr:[{required:!0,message:"Please input brief in Arabic"}],briefHeb:[{required:!0,message:"Please input brief in Hebrew"}],contentEn:[{required:!0,message:"Please input content in English"}],contentAr:[{required:!0,message:"Please input content in Arabic"}],contentHeb:[{required:!0,message:"Please input content in Hebrew"}]},showUpload:!0}},methods:{toggleUpload:function(){this.showUpload=!this.showUpload},handleChange:function(e){this.form.image.push(e.raw),this.toggleUpload()},handleRemove:function(){this.form.image.pop(),this.toggleUpload()},updateBlog:function(){var e=this;this.$refs.form.validate(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=16;break}return e.form.image.length>0&&delete e.form.images,n=e.$loading(),t.prev=3,t.next=6,e.$store.dispatch("blogs/updateBlog",e.form);case 6:e.$message.success("Blog Updated Successfully"),e.$router.push("/blogs"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),e.$message.error("Blog Updated Failed");case 13:return t.prev=13,n.close(),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[3,10,13,16]])})));return function(e){return t.apply(this,arguments)}}())},goTo:function(){this.$router.push("/blogs")}}},m=f,d=r(40),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"main-form mb-5"},[r("h2",{staticClass:"main-form__title"},[e._v("Add Blog")]),e._v(" "),r("el-form",{ref:"form",staticClass:"mt-5",attrs:{rules:e.formRules,model:e.form}},[r("div",{staticClass:"d-flex align-items-center gap-4 mb-5"},[r("el-upload",{staticClass:"upload-demo",class:{hideUpload:!e.showUpload},attrs:{"list-type":"picture-card",action:"#","on-change":e.handleChange,"on-remove":e.handleRemove,"show-file-list":!0,"auto-upload":!1,limit:1,accept:"image/*"}},[r("i",{staticClass:"el-icon-upload"})]),e._v(" "),r("div",{staticClass:"img-caption"},[r("h5",[e._v("Blog image")]),e._v(" "),r("h6",[e._v("Please Upload Image 160*160")])])],1),e._v(" "),r("div",{staticClass:"d-flex flex-wrap gap-5"},[r("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"Title of Blog En",prop:"titleEn"}},[r("el-input",{model:{value:e.form.titleEn,callback:function(t){e.$set(e.form,"titleEn",t)},expression:"form.titleEn"}})],1),e._v(" "),r("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"Title of Blog Ar",prop:"titleAr"}},[r("el-input",{model:{value:e.form.titleAr,callback:function(t){e.$set(e.form,"titleAr",t)},expression:"form.titleAr"}})],1),e._v(" "),r("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"Title of Blog Heb",prop:"titleHeb"}},[r("el-input",{model:{value:e.form.titleHeb,callback:function(t){e.$set(e.form,"titleHeb",t)},expression:"form.titleHeb"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Brief of Blog En",prop:"briefEn"}},[r("el-input",{attrs:{type:"textarea",rows:1,maxlength:"300"},model:{value:e.form.briefEn,callback:function(t){e.$set(e.form,"briefEn",t)},expression:"form.briefEn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Brief of Blog Ar",prop:"briefAr"}},[r("el-input",{attrs:{type:"textarea",rows:1,maxlength:"300"},model:{value:e.form.briefAr,callback:function(t){e.$set(e.form,"briefAr",t)},expression:"form.briefAr"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Brief of Blog Heb",prop:"briefHeb"}},[r("el-input",{attrs:{type:"textarea",rows:1,maxlength:"300"},model:{value:e.form.briefHeb,callback:function(t){e.$set(e.form,"briefHeb",t)},expression:"form.briefHeb"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Content Of Blog En",prop:"contentEn"}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.contentEn,callback:function(t){e.$set(e.form,"contentEn",t)},expression:"form.contentEn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Content Of Blog Ar",prop:"contentAr"}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.contentAr,callback:function(t){e.$set(e.form,"contentAr",t)},expression:"form.contentAr"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Content Of Blog Heb",prop:"contentHeb"}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.contentHeb,callback:function(t){e.$set(e.form,"contentHeb",t)},expression:"form.contentHeb"}})],1)],1),e._v(" "),r("button",{staticClass:"btn btn--pink btn--add",on:{click:function(t){return t.preventDefault(),e.updateBlog()}}},[e._v("\n    Save\n  ")]),e._v(" "),r("button",{staticClass:"btn btn--white btn--add",on:{click:function(t){return t.preventDefault(),e.goTo()}}},[e._v("\n    Cancel\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);