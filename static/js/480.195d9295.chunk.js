"use strict";(self.webpackChunkblog_admin_app=self.webpackChunkblog_admin_app||[]).push([[480],{6480:function(t,e,n){n.r(e);var r=n(4165),i=n(1413),s=n(5861),o=n(885),a=n(2791),u=n(2372),c=n(6563),l=n(9434),d=n(6871),p=n(3504),f=n(9351),h=n(8057),b=(n(4238),n(184));e.default=function(){var t=(0,d.s0)(),e=(0,a.useContext)(u.Z),n=(0,a.useState)({activeTab:"public",loaded:!1,posts:"",error:"",actionError:""}),v=(0,o.Z)(n,2),x=v[0],m=v[1],Z=((0,l.v9)((function(t){return t.userDisplay.isLoading})),(0,l.I0)(),{token:e.token,domain:e.domain});(0,a.useEffect)((function(){g()}),[]);var g=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(){var s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,h.c)("GET","/post/all",Z);case 2:200==(s=n.sent).status?m((0,i.Z)((0,i.Z)({},x),{},{loaded:!0,posts:s.data})):(401==s.status&&e.logout(),t("/admin/login"),m((0,i.Z)((0,i.Z)({},x),{},{loaded:!0,error:s.message})));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(t){m((0,i.Z)((0,i.Z)({},x),{},{activeTab:t}))},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t==x.activeTab?E:e?{cursor:"pointer"}:T},k=function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("You are about to Publish this post.. Go Ahead?")){t.next=3;break}return t.next=3,C("publish",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure you want to change the visibility of this post?")){t.next=3;break}return t.next=3,C("visibility",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e,n){var s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s="",t.t0=e,t.next="publish"===t.t0?4:"visibility"===t.t0?7:10;break;case 4:return t.next=6,(0,h.c)("GET","/post/toggle_publish/"+n,Z);case 6:s=t.sent;case 7:return t.next=9,(0,h.c)("GET","/post/toggle_visibility/"+n,Z);case 9:s=t.sent;case 10:""!=s&&(200==s.status?(x.posts.map((function(t,e){t.id==s.data.id&&(console.log("replace data"),x.posts[e]=s.data)})),m((0,i.Z)((0,i.Z)({},x),{},{posts:x.posts}))):m((0,i.Z)((0,i.Z)({},x),{},{actionError:s.message})));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),T={borderRight:"medium solid #000",width:"25%",textAlign:"center",cursor:"pointer"},A={display:"flex",flexDirection:"row",justifyContent:"space-around"},E={width:"25%",textAlign:"center",backgroundColor:"grey"};return(0,b.jsxs)("div",{className:c.Z["container-fluid"],children:[(0,b.jsxs)("div",{style:{marginBottom:"4em"},children:[(0,b.jsx)("h1",{style:{marginBottom:"1em"},children:"Dashboard"}),(0,b.jsx)(p.rU,{to:"/admin/posts/add",children:(0,b.jsx)("h3",{style:{marginLeft:"5%",textDecorationLine:"underline"},children:"New Post"})})]}),(0,b.jsxs)("div",{style:A,children:[(0,b.jsx)("p",{style:w("public"),onClick:function(){return y("public")},children:"Public"}),(0,b.jsx)("p",{style:w("unpublished"),onClick:function(){return y("unpublished")},children:"Unpublished"}),(0,b.jsx)("p",{style:w("hidden",!0),onClick:function(){return y("hidden")},children:"Hidden"})]}),function(){if(!x.loaded)return(0,b.jsx)("div",{style:{marginTop:"5em",textAlign:"center"},children:"LOADING..."});if(""!=x.error)return(0,b.jsx)("p",{className:"alert alert-danger",children:x.error});var t=x.posts.filter((function(t){return t.published&&t.visible})),e=x.posts.filter((function(t){return!t.published})),n=x.posts.filter((function(t){return!t.visible}));switch(x.activeTab){case"public":return(0,b.jsx)(f.Z,{posts:t,publish:k,visibility:j});case"unpublished":return(0,b.jsx)(f.Z,{posts:e,publish:k,visibility:j});case"hidden":return(0,b.jsx)(f.Z,{posts:n,publish:k,visibility:j})}}()]})}}}]);
//# sourceMappingURL=480.195d9295.chunk.js.map