(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{436:function(t,I,c){t.exports=c.p+"img/logout.667fef8.svg"},437:function(t,I,c){t.exports=c.p+"img/avatar.bf5727a.svg"},438:function(t,I){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iU2VhcmNoIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8zMDkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDMwOSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwIi8+DQogIDxnIGlkPSJTZWFyY2gtMiIgZGF0YS1uYW1lPSJTZWFyY2giPg0KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfOTAiIGRhdGEtbmFtZT0iRWxsaXBzZSA5MCIgY3g9IjkuMzYyIiBjeT0iOS4zNjIiIHI9IjkuMzYyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMzA4MzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIvPg0KICAgIDxsaW5lIGlkPSJMaW5lXzY0IiBkYXRhLW5hbWU9IkxpbmUgNjQiIHgxPSIyLjA2NyIgeTE9IjIuMDY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS45MzMgMTkuOTMzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDMwODM1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogIDwvZz4NCjwvc3ZnPg0K"},439:function(t,I,c){t.exports=c.p+"img/cart.c1954ae.svg"},484:function(t,I,c){"use strict";c.r(I);var l=[function(){var t=this,I=t.$createElement,l=t._self._c||I;return l("ul",{staticClass:"nav-links"},[l("li",[l("img",{attrs:{src:c(438),alt:"search-icon"}})]),t._v(" "),l("li",[l("img",{attrs:{src:c(439),alt:"cart-icon"}})])])}],o=(c(13),c(27),c(28),c(192),c(80),{methods:{logout:function(){this.$auth.logout(),localStorage.clear(),document.cookie.split(";").forEach((function(t){document.cookie=t.replace(/^ +/,"").replace(/=.*/,"=;expires="+(new Date).toUTCString())}))}},computed:{user:function(){return this.$auth.$storage.getUniversal("user")}}}),e=c(40),component=Object(e.a)(o,(function(){var t=this,I=t.$createElement,l=t._self._c||I;return l("nav",{staticClass:"navbar"},[l("button",{staticClass:"logout-btn",attrs:{type:"button"},on:{click:t.logout}},[l("img",{attrs:{src:c(436),alt:"logout"}}),t._v("\n    Logout\n  ")]),t._v(" "),l("div",{staticClass:"navbar__left"},[t._m(0),t._v(" "),l("figure",[l("img",{attrs:{src:c(437),alt:"avatar"}}),t._v(" "),l("figcaption",[l("span",[t._v(t._s(t.user.firstName))]),t._v(" "),l("span",[t._v(t._s(t.user.role))])])])])])}),l,!1,null,null,null);I.default=component.exports}}]);