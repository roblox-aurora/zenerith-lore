(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{233:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("28f1127f",content,!0,{sourceMap:!1})},234:function(t,e,n){"use strict";var r=n(233);n.n(r).a},235:function(t,e,n){(e=n(50)(!1)).push([t.i,".container{max-width:1500px;margin:15px auto;color:#fff}",""]),t.exports=e},248:function(t,e,n){"use strict";n.r(e);n(33);var r=n(6),c=n(0).a.extend({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("index").fetch();case 3:return article=e.sent,e.abrupt("return",{article:article,slug:"/".concat(null!==(n=c.slug)&&void 0!==n?n:"")});case 5:case"end":return e.stop()}}),e)})))()}}),l=(n(234),n(27)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[t.article.title?n("h1",{staticClass:"title"},[t._v(t._s(t.article.title))]):t._e(),t._v(" "),n("div",{staticClass:"slug"},[t._v(t._s(t.slug))]),t._v(" "),n("div",{class:{"two-column":void 0!==t.article.sidebar}},[t.article.sidebar?n("div",{staticClass:"sidebar"},[n("pane",{staticClass:"muddy-slate"},t._l(t.article.sidebar,(function(link,e){return n("div",{key:link},[n("nuxt-link",{attrs:{to:""+t.slug+link}},[t._v(t._s(e))])],1)})),0)],1):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("nuxt-content",{attrs:{document:t.article}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pane:n(176).default})}}]);