(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{450:function(e,t,r){e.exports=r.p+"img/step2.743017b.png"},491:function(e,t,r){var content=r(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(82).default)("b0e6bce2",content,!0,{sourceMap:!1})},503:function(e,t,r){"use strict";r(491)},504:function(e,t,r){var n=r(81)(!1);n.push([e.i,".slots[data-v-24971208]{margin:2rem;padding:1rem;background:#fafafa;display:flex;flex-wrap:wrap;align-items:center}.slots__title[data-v-24971208]{font-size:1.5rem;margin:1rem 0}.slots__items[data-v-24971208]{padding:0;margin:0;list-style:none;display:flex;flex-wrap:wrap;grid-gap:1rem;gap:1rem;width:100%}.slots__time[data-v-24971208]{padding:.8rem;cursor:pointer;font-size:1.5rem;text-align:center;width:100px;border:1px solid #d8d6de;border-radius:.5rem}",""]),e.exports=n},565:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center my-5"},[t("img",{attrs:{src:r(450),alt:"step2"}})])}],o=r(27),l=r(1),m=(r(16),{mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("emp/fetchValidEmployees");case 2:e.validEmployees=t.sent,e.form=JSON.parse(sessionStorage.getItem("form2"))||{employees:[],deuration:0};case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{form:{employees:[],deuration:0},formRules:{employees:[{required:!0,message:"Please select employees"}],deuration:[{required:!0,message:"Please enter time of service"}]},validEmployees:[],slots:[]}},methods:{goNext:function(){var e=this;this.$refs.form.validate((function(t){t&&(sessionStorage.setItem("form2",JSON.stringify(e.form)),e.$router.push("/services-offers/add/step3"))}))},goBack:function(){this.$router.push("/services-offers/add/step1")},handleChange:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var n,l,m,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$store.dispatch("workTimes/fetchWorkingHoursPerDay");case 2:n=r.sent,l=Object(o.a)(n,2),m=l[0],c=l[1],t.slots=t.generateSlots(m,c,e);case 7:case"end":return r.stop()}}),r)})))()},generateSlots:function(e,t,r){for(var n=this.$moment(e,"HH:mm"),o=this.$moment(t,"HH:mm").add(1,"days"),l=[];n<o;)l.push(n.format("HH:mm")),n.add(r,"minutes");return l}}}),c=(r(503),r(43)),component=Object(c.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"main-form mb-5"},[r("h2",{staticClass:"main-form__title"},[e._v("Add Service")]),e._v(" "),e._m(0),e._v(" "),r("el-form",{ref:"form",staticClass:"mt-5",attrs:{rules:e.formRules,model:e.form}},[r("el-form-item",{attrs:{prop:"employees"}},[r("span",{staticClass:"d-block"},[e._v("Employees")]),e._v(" "),r("el-select",{staticClass:"d-block",attrs:{multiple:"",filterable:"",placeholder:"Select Employees"},model:{value:e.form.employees,callback:function(t){e.$set(e.form,"employees",t)},expression:"form.employees"}},e._l(e.validEmployees,(function(e){return r("el-option",{key:e.id,attrs:{label:e.empName,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{prop:"deuration"}},[r("span",{staticClass:"d-block"},[e._v("Time of Services")]),e._v(" "),r("el-input-number",{attrs:{min:0,step:5,"default-value":0},on:{change:e.handleChange},model:{value:e.form.deuration,callback:function(t){e.$set(e.form,"deuration",t)},expression:"form.deuration"}}),e._v(" "),r("span",[e._v("Minutes")])],1)],1),e._v(" "),r("div",{staticClass:"slots w-100"},[r("h6",{staticClass:"slots__title"},[e._v("Time Slotes Over Day")]),e._v(" "),r("ul",{staticClass:"slots__items"},e._l(e.slots,(function(slot){return r("li",{key:slot,staticClass:"slots__time"},[e._v("\n        "+e._s(slot)+"\n      ")])})),0)]),e._v(" "),r("button",{staticClass:"btn btn--pink btn--add",on:{click:function(t){return t.preventDefault(),e.goNext()}}},[e._v("\n    Next\n  ")]),e._v(" "),r("button",{staticClass:"btn btn--white btn--add",on:{click:function(t){return t.preventDefault(),e.goBack()}}},[e._v("\n    Previous\n  ")])],1)}),n,!1,null,"24971208",null);t.default=component.exports}}]);