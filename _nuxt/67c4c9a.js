(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{436:function(t,e,n){t.exports=n.p+"img/watch-icon.b2200b9.png"},437:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAABHNCSVQICAgIfAhkiAAAAbNJREFUSEvdlT1SAkEQhbuXwGJJIFQI8AZ4gzUQDCEUAjkCngA8gXgCNGANIZRNWE8AN0CqAEOMtKCKbXsGZmsL+ZlFTZxoa3bq656e97oR/nDhb7Avn97SRIsGAFpA8DAzzRu3kHj/MfyiOcowpAsIQyBs83cZkAadYurch3N0i6NXd92EwLh3iidtdSYInkdjlsh2yfG6HtGZhItred6ih4AvBNDfFmBumnUBEP83gcV+zp5UAOgO0TiVcLlBVOmUkmmdN9gG5v2ygdggglunlKxJeLY5rnGdLKeYsvbB94IBH7l0ZcEJBQ8DDgUPC9aGHwLWgh8K1oJn7ZGUptLxSoZLVQQeT0n6+er4VYli54NarWn86PNjypCCMo8vtzWwuCEH7HWKSd+YO+FZe5JHoNYsaiaEeZRB1jNeZS2dqQ3P2aM6G+IaUbiWmxKvTeDD4M2x6CMZQnQ5KzdiRNxgTYOGUz1FO/N9bv3ncKECrmnVKaUSYUoRPKuU9a3msp/Tos+TZAAG+MNAOxBRnGdBnoCGwc7qC17aHA1u9J5WT18PzKD+LBqrqWHi2187w5AHvwAtG2sb2hE0/wAAAABJRU5ErkJggg=="},438:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAABHNCSVQICAgIfAhkiAAAATFJREFUSEvtlcERgjAQRcPNI0ePWoFYgViB2AElWIJ2YAl0gB2AHWAFUoAHDt71f2dhABPCDHjQcYedMOzuy2aTLI76oDg29kOpGXwWUK/mm+P9jGCORumEAxwgMu6I3wJwMtlt8BSBBZw4SUMw8REfNrDNh8BTAPYauI9vCWzGBCsDMqHzCsoaU1jPUEauoC30o50TT0UzjJeyVG04HblxhUAJuEHvGvhEgEyCfi6U8AjQiP5vS8IKmKW2FJoJXp8Qw6R8wPy6z4/DpVQ7LDOTSxXjfVmWYFBZEIxHrQFM5VQ1juAf/n1l4Y0NZEN5G6/1njJoQ003c5SjOCacTcfV9fCO3sLe7vXpLWw+CbsbNLdlDTv3gD+TA+CcpBJto5ffW8gV9IDTpWqzVnhPoNXtCXm0jRhdFxPcAAAAAElFTkSuQmCC"},506:function(t,e,n){"use strict";n.r(e);var o=n(2),c=(n(35),{props:{videos:{type:Array,required:!0}},methods:{deleteVideo:function(video){var t=this;this.$confirm("Are you sure you want to delete '".concat(video.titleEn,"' video?"),"Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("videos/deleteVideo",video.id);case 2:t.$message({type:"success",message:"Delete completed"});case 3:case"end":return e.stop()}}),e)})))).catch((function(){t.$message({type:"info"})}))},goTo:function(t){this.$router.push("/videos/edit/".concat(t))},goToDetails:function(t){this.$router.push("/videos/details/".concat(t))}}}),A=n(41),component=Object(A.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"blog-cards"},t._l(t.videos,(function(video){return o("li",{key:video.id,staticClass:"blog-cards__card"},[o("div",{on:{click:function(e){return t.goToDetails(video.id)}}},[o("img",{staticClass:"blog-cards__card-image",attrs:{src:n(436),alt:"video icon"}})]),t._v(" "),o("div",{staticClass:"blog-cards__card-content",on:{click:function(e){return t.goToDetails(video.id)}}},[o("h3",{staticClass:"blog-cards__card-title"},[t._v(t._s(video.titleEn))]),t._v(" "),o("p",{staticClass:"blog-cards__card-text"},[t._v("\n        "+t._s(video.briefEn.split(" ").slice(0,30).join(" ")+"...")+"\n      ")])]),t._v(" "),o("div",{staticClass:"blog-cards__card-buttons"},[o("img",{attrs:{src:n(437),alt:"edit-icon"},on:{click:function(e){return t.goTo(video.id)}}}),t._v(" "),o("img",{attrs:{src:n(438),alt:"delete-icon"},on:{click:function(e){return t.deleteVideo(video)}}})])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);