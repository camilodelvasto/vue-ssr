webpackJsonp([2],{13:function(t,e){},15:function(t,e,n){"use strict";function r(t){return new Promise(function(e,n){N.a.get(j+"/"+t).then(function(t){e(t.data[0])}).catch(function(t){n(t)})})}function i(){return new I.a.Store({state:{nonprofit:{}},actions:M,mutations:G,getters:R})}function o(){return new T.a({mode:"history",fallback:!1,scrollBehavior:function(){return{y:0}},routes:[{path:"/nonprofits/:ein",name:"home",component:E}]})}function a(t){var e=t.$options.title;if(e)return"function"==typeof e?e.call(t):e}function c(t){var e=t.replace(/^https?:\/\//,"").replace(/\/.*$/,""),n=e.split(".").slice(-3);return"www"===n[0]&&n.shift(),n.join(".")}function s(t){var e=Date.now()/1e3-Number(t);return e<3600?u(~~(e/60)," minute"):e<86400?u(~~(e/3600)," hour"):u(~~(e/86400)," day")}function u(t,e){return 1===t?t+e:t+e+"s"}Object.defineProperty(e,"__esModule",{value:!0});var l={};n.d(l,"host",function(){return c}),n.d(l,"timeAgo",function(){return s});var h=n(1),p=(n(18),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",{staticClass:"header"},[r("nav",{staticClass:"inner"},[r("router-link",{attrs:{to:"/",exact:""}},[r("img",{staticClass:"logo",attrs:{src:n(20),alt:"logo"}})]),r("router-link",{attrs:{to:"/top"}},[t._v("Top")]),r("router-link",{attrs:{to:"/new"}},[t._v("New")]),r("router-link",{attrs:{to:"/show"}},[t._v("Show")]),r("router-link",{attrs:{to:"/ask"}},[t._v("Ask")]),r("router-link",{attrs:{to:"/job"}},[t._v("Jobs")]),r("a",{staticClass:"github",attrs:{href:"https://github.com/vuejs/vue-hackernews-2.0",target:"_blank",rel:"noopener"}},[t._v("\n        Built with Vue.js\n      ")])],1)]),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view",{staticClass:"view"})],1)],1)}),d=[],f=n(5),m=n.n(f);h.a.use(m.a);var v={name:"App",metaInfo:function(){return{title:"Basic",titleTemplate:"%s | DS SSR Test",htmlAttrs:{lang:"en",amp:void 0},headAttrs:{test:!0},meta:[{vmid:"description",name:"description",content:"Double the results, half the effort"},{vmid:"og:url",property:"og:url",content:"https://volunteerathon.com/"},{vmid:"og:type",property:"og:type",content:"website"},{vmid:"og:title",property:"og:title",content:"Create a volunteerathon and do good!"},{vmid:"og:image",property:"og:image",content:"https://res.cloudinary.com/startics/image/upload/v1523024114/truck_twugdy.png"},{vmid:"og:site_name",property:"og:site_name",content:"volunteerathon"},{vmid:"og:description",property:"og:description",content:"Double the results, half the effort"}],script:[{innerHTML:'{ "@context": "http://www.schema.org", "@type": "Organization" }',type:"application/ld+json"},{innerHTML:'{ "body": "yes" }',body:!0,type:"application/ld+json"}],__dangerouslyDisableSanitizers:["script"]}}},g=v,b=(n(21),n(4)),A=Object(b.a)(g,p,d,!1,null,null,null),w=A.exports,I=n(22),y=n(14),N=n.n(y),j=void 0,M={FETCH_NONPROFIT:function(t,e){var n=t.commit;t.dispatch,t.state;return r(e.ein).then(function(t){n("SET_NONPROFIT",{nonprofit:t})})}},G={SET_NONPROFIT:function(t,e){var n=e.nonprofit;t.nonprofit=n}},R={activeItems:function(t,e){return e.activeIds.map(function(e){return t.items[e]}).filter(function(t){return t})}};h.a.use(I.a);var T=n(41);h.a.use(T.a),h.a.use(m.a,{ssrAttribute:"data-vue-meta-server-rendered"});var E=function(){return n.e(0).then(n.bind(null,51))},k=n(42),D={mounted:function(){var t=a(this);t&&(document.title="Vue HN 2.0 | "+t)}},S=D;h.a.mixin(S),Object.keys(l).forEach(function(t){h.a.filter(t,l[t])});var U=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},O=[],W={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},C=W,Z=(n(43),Object(b.a)(C,U,O,!1,null,"71be013b",null)),J=Z.exports,Q=h.a.prototype.$bar=new h.a(J).$mount();document.body.appendChild(Q.$el),h.a.mixin({beforeRouteUpdate:function(t,e,n){var r=this.$options.asyncData;r?r({store:this.$store,route:t}).then(n).catch(n):n()}});var Y=function(){var t=i(),e=o();return Object(k.sync)(t,e),{app:new h.a({router:e,store:t,render:function(t){return t(w)}}),router:e,store:t}}(),F=Y.app,L=Y.router,V=Y.store;window.__INITIAL_STATE__&&V.replaceState(window.__INITIAL_STATE__),L.onReady(function(){L.beforeResolve(function(t,e,n){var r=L.getMatchedComponents(t),i=L.getMatchedComponents(e),o=!1,a=r.filter(function(t,e){return o||(o=i[e]!==t)}),c=a.map(function(t){return t.asyncData}).filter(function(t){return t});if(!c.length)return n();Q.start(),Promise.all(c.map(function(e){return e({store:V,route:t})})).then(function(){Q.finish(),n()}).catch(n)}),F.$mount("#app")}),"https:"===location.protocol&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")},20:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3RDBBRDcwNDU4NEMxMUU2ODdFNjg5OTYwMjlGNjQ0QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NTU3NUVGQUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NTU3NUVGOUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NTUwMDE5LTVjNjQtNGRiNy1iNjhjLTQ1ZWIxYzkxM2FiYiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlZDc4OTczLWViM2ItMTE3OS04YzQyLWNlMTYwYmQ0NTQ1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv38lU4AAAMkSURBVHja7FnbSxRRGP+N666upqUECWK+mUqbmxbRQ4QmFEFQmtZDEPQcvfQ/9BL1WO920SyCjJCIyC5iXsmVMjVB8pbVqnhBc2dm+84azHzjbszsupPBfA8L8ztnzvzmu/zON2elcDiMrWQp2GK25QilsqvQKmB/BCW408SvkZC8iptVCE7CJdlHhjI4LQNXXyE7bwMhGguOYWba4LXkmgp43VCVGCFzeQRgM6FUj1NlDiGH0L9T6r/YWqRE9aapa7RiXuOIC/CY2gVMEyqrRnqWdqmE8PE55FAUTsQmKxdFRxk4N47RHkFrcwjRFnf4Ig5dYOCNSgy0CT8Z7Bdw4hJqrzOw6TIGe+DdrBwiN7y5bQQP1BmDiEhQKDTlZxm4PIvuJng2MalprZFOTAYYuO8UsjOMnGSgoBSFFQwMtOBH0Ey8rHhoRUHnPQbmFKDoCEJ8Jl2WnUYKz4T3Dear2fREclJvc6Rh0llFPfMQxStdQnktm/NtCEPvTMbLCiF656kxfH7JQN9J5GRpnMg9hT4U+Nmc7kYshyAlQxjViPP1Rl3VnkpNciiB/DWQdGsqa+hphDtJSk1uH2jFwjSvtXotXhku7K9hoyNvMT6cNEI0d34RfY8ZWHocuTlQ1uPlR/5eNtrRINyWxL2MSrfzLkO27URJtWBDnEQ665Jl6ScCT82nc1yEyPmjXRj/wKN2LhKvVPjPMLz/CYJzJuUnXkL0/quq0Uklx7A9E7vLkFfM5edOHM2E9TvISX0PEVrREO8OFFcJCdDb9CeMtFuNV1yEhCB9xeALBlZdQXkdQ7ruY1mGZAOh9Qrv4IJEeZ3v0+1oJD8PLFV7YoQoENQMzU/FnDDchokvNhISgrSEvkcxJ5CgKzb31H8EKVpPuvgdgWdxpHNihIQg9WIiEGWovwWz81blx3pPvVGQZBWt13DwvHHo9a1ETgcSuJW66Y5mtDdHWdIT/zFTYicd7ti64Hy5OoQcQlGrTFVEJ6/a+HzxODkWIUkcJ3gz7T70TM+EpLUpku6/jjAWZqDI+uGkGz2dPpuydyHFtZGQk9T/BaHfAgwAytLfbeiDo+IAAAAASUVORK5CYII="},21:function(t,e,n){"use strict";var r=n(7),i=n.n(r);i.a},43:function(t,e,n){"use strict";var r=n(13),i=n.n(r);i.a},7:function(t,e){}},[15]);