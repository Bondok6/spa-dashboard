(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{474:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(46),{data:function(){return{form:{descriptionAr:"",descriptionEn:"",descriptionHeb:"",image:[]},formRules:{descriptionAr:[{required:!0,message:"Description Of Advertisement Ar is required"}],descriptionEn:[{required:!0,message:"Description Of Advertisement En is required"}],descriptionHeb:[{required:!0,message:"Description Of Advertisement Heb is required"}],image:[{required:!0,message:"Image is required"}]},showUpload:!0}},methods:{toggleUpload:function(){this.showUpload=!this.showUpload},handleChange:function(e){this.form.image.push(e.raw),this.toggleUpload()},handleRemove:function(){this.form.image.pop(),this.toggleUpload()},createAd:function(){var e=this;this.$refs.form.validate(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=18;break}if(0!==e.form.image.length){t.next=4;break}return e.$message.error("Please Upload Image"),t.abrupt("return");case 4:return n=e.$loading(),t.prev=5,t.next=8,e.$store.dispatch("ads/addAd",e.form);case 8:e.$message.success("Advertisement Created Successfully"),e.$router.push("/ads"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e.$message.error("Advertisement Creation Failed");case 15:return t.prev=15,n.close(),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[5,12,15,18]])})));return function(e){return t.apply(this,arguments)}}())},goTo:function(){this.$router.push("/ads")}}}),c=o,l=r(40),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"main-form mb-5"},[r("h2",{staticClass:"main-form__title"},[e._v("Add Advertisements")]),e._v(" "),r("el-form",{ref:"form",staticClass:"mt-5",attrs:{rules:e.formRules,model:e.form}},[r("div",{staticClass:"d-flex align-items-center gap-4 mb-5"},[r("el-upload",{staticClass:"upload-demo",class:{hideUpload:!e.showUpload},attrs:{"list-type":"picture-card",action:"#","on-change":e.handleChange,"on-remove":e.handleRemove,"show-file-list":!0,"auto-upload":!1,limit:1,accept:"image/*"}},[r("i",{staticClass:"el-icon-upload"})]),e._v(" "),r("div",{staticClass:"img-caption"},[r("h5",[e._v("Advertisement image")]),e._v(" "),r("h6",[e._v("Please Upload Image 340*160")])])],1),e._v(" "),r("el-form-item",{attrs:{label:"Description Of Advertisement En",prop:"descriptionEn"}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.descriptionEn,callback:function(t){e.$set(e.form,"descriptionEn",t)},expression:"form.descriptionEn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Description Of Advertisement Ar",prop:"descriptionAr"}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.descriptionAr,callback:function(t){e.$set(e.form,"descriptionAr",t)},expression:"form.descriptionAr"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Description Of Advertisement Heb",prop:"descriptionAr"}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.descriptionHeb,callback:function(t){e.$set(e.form,"descriptionHeb",t)},expression:"form.descriptionHeb"}})],1)],1),e._v(" "),r("button",{staticClass:"btn btn--pink btn--add",on:{click:function(t){return t.preventDefault(),e.createAd()}}},[e._v("\n    Save\n  ")]),e._v(" "),r("button",{staticClass:"btn btn--white btn--add",on:{click:function(t){return t.preventDefault(),e.goTo()}}},[e._v("\n    Cancel\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);