(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{583:function(t,e,r){"use strict";r.r(e);var n=r(1),o=(r(15),{fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.route,o=n.params.id,e.next=4,r.dispatch("customers/fetchCustomer",o);case 4:case"end":return e.stop()}}),e)})))()},computed:{customer:function(){return this.$store.state.customers.customer}}}),c=r(44),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"header"},[r("h2",[r("span",[t._v("Customers > ")]),t._v(t._s(t.customer.firstName+" "+t.customer.lastName)+"\n    ")])]),t._v(" "),r("nav",{staticClass:"customers_nav"},[r("nuxt-link",{staticClass:"customers_nav--item",attrs:{to:"/customers/details/"+t.customer.id}},[t._v("info")]),t._v(" "),r("nuxt-link",{staticClass:"customers_nav--item",attrs:{to:"/customers/details/reservations/"+t.customer.id}},[t._v("reservations")]),t._v(" "),r("nuxt-link",{staticClass:"customers_nav--item active-link",attrs:{to:"/customers/details/notifications/"+t.customer.id}},[t._v("notifications")]),t._v(" "),r("nuxt-link",{staticClass:"customers_nav--item",attrs:{to:"/customers/details/messages/"+t.customer.id}},[t._v("messages")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);