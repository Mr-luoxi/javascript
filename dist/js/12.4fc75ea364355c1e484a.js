(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{197:function(t,s,e){},208:function(t,s,e){"use strict";var i=e(197);e.n(i).a},222:function(t,s,e){"use strict";e.r(s);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("navbar-vue",{attrs:{title:"新闻列表"}}),s._v(" "),e("ul",{staticClass:"mui-table-view"},s._l(s.newslist,function(t){return e("li",{key:t.id,staticClass:"mui-table-view-cell mui-media"},[e("router-link",{attrs:{to:{name:"newsdetail",query:{id:t.id}}}},[e("img",{staticClass:"mui-media-object mui-pull-left",attrs:{src:t.img}}),s._v(" "),e("div",{staticClass:"mui-media-body"},[e("span",{staticClass:"text-hiden",domProps:{textContent:s._s(t.title)}}),s._v(" "),e("div",{staticClass:"mui-ellipsis"},[e("p",[s._v("点击数：\n              "),e("span",{domProps:{textContent:s._s(t.click)}})]),s._v(" "),e("p",[s._v("发表时间："+s._s(s._f("convertData")(t.add_time)))])])])])],1)}),0)],1)};i._withStripped=!0;var n={data:function(){return{newslist:[]}},methods:{},created:function(){var s=this;this.$axios.get("/getnewslists").then(function(t){s.newslist=t.data.message})}},a=(e(208),e(16)),l=Object(a.a)(n,i,[],!1,null,"4fa300ef",null);l.options.__file="src/components/newslist/newslist.vue";s.default=l.exports}}]);