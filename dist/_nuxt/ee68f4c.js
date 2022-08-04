(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{564:function(e,t,n){"use strict";n.r(t);var r=n(1),o=(n(15),{data:function(){return{form:{titleEn:"",titleAr:"",titleHeb:"",contentAr:"",contentEn:"",contentHeb:""},formRules:{titleEn:[{required:!0,message:"Please input title in English"}],titleAr:[{required:!0,message:"Please input title in Arabic"}],titleHeb:[{required:!0,message:"Please input title in Hebrew"}],contentEn:[{required:!0,message:"Please input content in English"}],contentAr:[{required:!0,message:"Please input content in Arabic"}],contentHeb:[{required:!0,message:"Please input content in Hebrew"}]}}},methods:{addInfo:function(){var e=this;this.$refs.form.validate(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=16;break}return r=e.$loading(),t.prev=2,o={about:[e.form]},t.next=6,e.$store.dispatch("about/addInfo",o);case 6:e.$message.success("Info created successfully"),e.$router.push("/about"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),e.$message.error("Info Creation Failed");case 13:return t.prev=13,r.close(),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})));return function(e){return t.apply(this,arguments)}}())},goTo:function(){this.$router.push("/about")}}}),l=o,c=n(44),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"main-form mb-5"},[n("h2",{staticClass:"main-form__title"},[e._v("Add Info")]),e._v(" "),n("el-form",{ref:"form",staticClass:"mt-5",attrs:{rules:e.formRules,model:e.form}},[n("el-form-item",{attrs:{label:"Name Of Prargraph En",prop:"titleEn"}},[n("el-input",{model:{value:e.form.titleEn,callback:function(t){e.$set(e.form,"titleEn",t)},expression:"form.titleEn"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Content Of Paragraph En",prop:"contentEn"}},[n("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.contentEn,callback:function(t){e.$set(e.form,"contentEn",t)},expression:"form.contentEn"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Name Of Paragraph Ar",prop:"titleAr"}},[n("el-input",{model:{value:e.form.titleAr,callback:function(t){e.$set(e.form,"titleAr",t)},expression:"form.titleAr"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Content Of Paragraph Ar",prop:"contentAr"}},[n("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.contentAr,callback:function(t){e.$set(e.form,"contentAr",t)},expression:"form.contentAr"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Name Of Paragraph Heb",prop:"titleHeb"}},[n("el-input",{model:{value:e.form.titleHeb,callback:function(t){e.$set(e.form,"titleHeb",t)},expression:"form.titleHeb"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Content Of Paragraph Heb",prop:"contentHeb"}},[n("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.contentHeb,callback:function(t){e.$set(e.form,"contentHeb",t)},expression:"form.contentHeb"}})],1)],1),e._v(" "),n("button",{staticClass:"btn btn--pink btn--add",on:{click:function(t){return t.preventDefault(),e.addInfo()}}},[e._v("\n    Save\n  ")]),e._v(" "),n("button",{staticClass:"btn btn--white btn--add",on:{click:function(t){return t.preventDefault(),e.goTo()}}},[e._v("\n    Cancel\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);