(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{541:function(t,e,n){"use strict";n.r(e);var c=n(1),r=(n(16),{fetch:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("cities/fetchCities");case 3:case"end":return e.stop()}}),e)})))()},methods:{goTo:function(){this.$router.push("/cities/add")}},computed:{cities:function(){return this.$store.state.cities.cities}}}),o=n(43),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("uiAddButton",{attrs:{text:"Add City"},on:{click:function(e){return t.goTo()}}}),t._v(" "),t.cities.length?t._e():n("uiEmpty",{attrs:{imgSrc:"cities/no-cities.png",caption:"No cities have been added yet."}}),t._v(" "),n("citiesList",{attrs:{cities:t.cities}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);