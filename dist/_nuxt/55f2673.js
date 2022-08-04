(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{470:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAVNJREFUOE/FlNFRg0AQhndPg6/pIFqBlJB0EDsI4d1ABdIB4DuQDowViB3YgViBvObQWw8CDHMBBpjMyOPt3nf//f8eCBf+cArvOeCWALgnBr5taB9NRg10I7q9op+FesAvXn/ZBibVuh/yPRGs5caEEBaEsztZT6t6AfSDowOIT+1q6XW3vVkXfSVMKlvmyryApwzAeTQ1TwUmCOg1CypchbkB3zCESJwU1jc4KQw5CcSVbcziNpWdMALDNrX9mYd9wDGwHNyrcCysFzgF1gks58yp0qwDKD2TIzZHyl7kyDw0R6YT6IfHg3Qj3W21jQrLN7lRtmREb21BtnqYz5d097M8URdKmqOA+XUYZd8S9g5EsWB4UJ/XKOCQt/0vwJgACBFbX4qqmoTQZWgry9Tmaq0IxY24LlNzZNNZQ5cFAsFSva3HZohvQ3sm/WD74BcH/gEDoyckS7WqAgAAAABJRU5ErkJggg=="},471:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAKJJREFUOE9jZKAyYKSyeQyjBlIeohhh+MogwQBkrNiFBRfwGY9LHYaBLw0SNwAF7RkY/jviMhRiGOP+/wwMB8UvzA9AthjDwPcGCQK/GZkOMPz/L4/NUJhhDIyMD1n//3MQvLDgA14DQZK4DCVkGEgvznSIbijEFYz7cbkM5kq8CRvVUJB52L1J0MvICuCGAgWxhRl6ShjNejTIepQaOfgjBQAQt1YV/NKemQAAAABJRU5ErkJggg=="},595:function(e,t,n){"use strict";n.r(t);var r=n(1),o=(n(15),n(50),n(103),{fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,data,o,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$route.params.id,t.next=3,e.$axios.get("/reservations/".concat(n));case 3:return r=t.sent,(data=r.data).day=e.$moment(data.day).format("MMMM Do YYYY, h:mm a"),data.createdAt=e.$moment(data.createdAt).format("MMMM Do YYYY, h:mm a"),e.tableData.push(data),e.data=data,t.next=11,e.$axios.get("/reservations?parent=".concat(n));case 11:return o=t.sent,l=o.data.totalDocs,e.children=l>0?l:1,t.next=16,e.$axios.get("/users?state=FREE&status=VALID&roles=EMPLOYEE");case 16:c=t.sent,e.validEmployees=c.data.map((function(e){return{id:e.id,profile:e.profile,empName:e.empName}}));case 18:case"end":return t.stop()}}),t)})))()},data:function(){return{tableData:[],data:{},showNote:!1,children:null,statusOptions:[{value:"ACCEPTED",label:"Accepted"},{value:"PROCCESSING",label:"Processing"},{value:"DONE",label:"Done"},{value:"CANCELLED",label:"Cancelled"},{value:"REJECTED",label:"Rejected"}],form:{day:null,adminNotes:""},formRules:{day:[{required:!0,message:"Please select date and time"}],adminNotes:[{required:!0,message:"Please enter notes"}]},showPopup:!1,showEmpPopup:!1,validEmployees:[],employee:null}},computed:{id:function(){return this.$route.params.id}},methods:{changeStatus:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.status,o=t.$route.params.id,n.prev=2,n.next=5,t.$axios.patch("/reservations/".concat(o,"/update?status=").concat(r));case 5:t.$message.success("Status updated successfully"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),t.$message.error("Error updating status");case 11:case"end":return n.stop()}}),n,null,[[2,8]])})))()},toggleEmpPopup:function(){this.showEmpPopup=!this.showEmpPopup},togglePopup:function(){this.showPopup=!this.showPopup},addSession:function(){var e=this;this.$refs.form.validate(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=19;break}return r=e.$loading(),t.prev=2,o=e.$route.params.id,e.form.day=e.form.day.toISOString(),e.form.slot=e.data.slot,t.next=8,e.$axios.post("/reservations/".concat(o,"/chiled"),e.form);case 8:e.showPopup=!1,e.$message.success("Session added successfully"),window.location.reload(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),e.$message.error(t.t0.response.data.message||"Error adding session");case 16:return t.prev=16,r.close(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[2,13,16,19]])})));return function(e){return t.apply(this,arguments)}}())},editEmployee:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.employee){t.next=3;break}return e.$message.error("Please select an employee"),t.abrupt("return");case 3:return n=e.$loading(),t.prev=4,r=e.$route.params.id,t.next=8,e.$axios.patch("/reservations/".concat(r,"/update"),{empolyee:e.employee});case 8:e.$message.success("Employee assigned successfully"),e.showEmpPopup=!1,window.location.reload(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),e.$message.error(t.t0.response.data.message||"Error assigning employee");case 16:return t.prev=16,n.close(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[4,13,16,19]])})))()}}}),l=o,c=n(44),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$fetchState.pending||e.$fetchState.error?e._e():r("section",[r("div",{staticClass:"header"},[r("h2",[r("span",[e._v("Reservations > ")]),e._v("Reservation #"+e._s(e.id))]),e._v(" "),r("button",{staticClass:"btn btn--pink btn--details",on:{click:e.togglePopup}},[e._v("\n      + Add Session\n    ")])]),e._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"content__left"},[r("el-table",{attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{label:"ID",type:"index",align:"center"}},[e._v("\n          1\n        ")]),e._v(" "),r("el-table-column",{attrs:{prop:"day",label:"DATE & TIME",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{label:"Employee",prop:"empolyee",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("figure",{staticClass:"d-flex align-items-center justify-content-between"},[r("div",{staticClass:"d-flex align-items-center gap-2"},[r("img",{staticClass:"rounded-circle",attrs:{src:t.row.empolyee.profile,alt:"employee",width:"30",height:"30"}}),e._v(" "),r("figcaption",[e._v(e._s(t.row.empolyee.empName))])]),e._v(" "),r("div",[r("img",{attrs:{src:n(470),alt:"edit",role:"button"},on:{click:function(t){return e.toggleEmpPopup()}}})])])]}}],null,!1,2155151094)}),e._v(" "),r("el-table-column",{attrs:{label:"STATE",prop:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-select",{on:{change:function(n){return e.changeStatus(t.row)}},model:{value:t.row.status,callback:function(n){e.$set(t.row,"status",n)},expression:"scope.row.status"}},e._l(e.statusOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}],null,!1,1154748181)}),e._v(" "),r("el-table-column",{attrs:{label:"NOTE",align:"center",width:"80"}},[r("img",{attrs:{src:n(471),alt:"down arrow",role:"button"},on:{click:function(t){e.showNote=!e.showNote}}})])],1),e._v(" "),e.showNote?r("div",{staticClass:"note"},[r("p",[r("span",[e._v("Note")]),e._v("\n          "+e._s(e.tableData.clientNotes||"There are no notes")+"\n        ")])]):e._e()],1),e._v(" "),r("div",{staticClass:"content__right"},[r("div",{staticClass:"heading"},[e._v("Order Day")]),e._v(" "),r("div",{staticClass:"info"},[e._v(e._s(e.data.createdAt))]),e._v(" "),r("div",{staticClass:"heading"},[e._v("Customer Information")]),e._v(" "),r("div",{staticClass:"info"},[r("h6",[r("span",[e._v("Name")]),e._v("\n          "+e._s(e.data.firstName+" "+e.data.lastName)+"\n        ")]),e._v(" "),r("h6",[r("span",[e._v("Phone")]),e._v(" "+e._s(e.data.phone))]),e._v(" "),r("h6",[r("span",[e._v("City")]),e._v(" "+e._s(e.data.city))])]),e._v(" "),r("div",{staticClass:"heading"},[e._v("Name Of Service")]),e._v(" "),r("div",{staticClass:"info"},[e._v(e._s(e.data.service.nameEn))]),e._v(" "),r("div",{staticClass:"heading"},[e._v("Number Of Sessions")]),e._v(" "),r("div",{staticClass:"info"},[e._v(e._s(e.children)+" / "+e._s(e.data.service.numofsets))]),e._v(" "),r("div",{staticClass:"heading"},[e._v("Session Price")]),e._v(" "),r("div",{staticClass:"info"},[e._v("$ "+e._s(e.data.total))])])]),e._v(" "),e.showPopup?r("uiPopupForm",{attrs:{modalTrigger:e.showPopup},on:{"update:modalTrigger":e.togglePopup}},[r("el-form",{ref:"form",staticClass:"p-3",staticStyle:{width:"500px"},attrs:{rules:e.formRules,model:e.form}},[r("el-form-item",{attrs:{label:"Date",prop:"day"}},[r("el-date-picker",{staticClass:"w-100",attrs:{type:"datetime",placeholder:"Select date and time"},model:{value:e.form.day,callback:function(t){e.$set(e.form,"day",t)},expression:"form.day"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Notes",prop:"adminNotes"}},[r("el-input",{attrs:{type:"textarea",placeholder:"Enter note",rows:3},model:{value:e.form.adminNotes,callback:function(t){e.$set(e.form,"adminNotes",t)},expression:"form.adminNotes"}})],1)],1),e._v(" "),r("button",{staticClass:"popupBtn",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.addSession.apply(null,arguments)}}},[e._v("\n      Add\n    ")])],1):e._e(),e._v(" "),e.showEmpPopup?r("uiPopupForm",{staticClass:"text-center",attrs:{modalTrigger:e.showEmpPopup},on:{"update:modalTrigger":e.toggleEmpPopup}},[r("el-select",{staticClass:"w-75 my-5",attrs:{filterable:"",placeholder:"select an employee",required:""},model:{value:e.employee,callback:function(t){e.employee=t},expression:"employee"}},e._l(e.validEmployees,(function(t){return r("el-option",{key:t.id,attrs:{label:t.empName,value:t.id}},[r("img",{staticClass:"rounded-circle mx-2",attrs:{src:t.profile,width:"25",height:"25"}}),e._v(" "),r("span",[e._v(e._s(t.empName))])])})),1),e._v(" "),r("button",{staticClass:"popupBtn my-5",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.editEmployee.apply(null,arguments)}}},[e._v("\n      Assign\n    ")])],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);