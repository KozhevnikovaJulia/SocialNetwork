(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){e.exports={users:"Users_users__3Klio",userAvatar:"Users_userAvatar__2ACyu",userInfo:"Users_userInfo__ZPqTA",city:"Users_city__29Uis",country:"Users_country__2LALU"}},19:function(e,t,a){e.exports={dialogsContant:"Dialogs_dialogsContant__hGwIU",dialogs:"Dialogs_dialogs__QDQRf",messages:"Dialogs_messages__20rp8"}},23:function(e,t,a){e.exports={profileContant:"Profile_profileContant__3dM-B",ava:"Profile_ava__3haH9"}},24:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__2lcYr",posts:"MyPosts_posts__mwAOx"}},26:function(e,t,a){e.exports={dialog:"Dialog_dialog__3qeaM",active:"Dialog_active__vrtRv"}},37:function(e,t,a){e.exports={header:"Header_header__1_tfC"}},38:function(e,t,a){e.exports={post:"Post_post__1zl_i"}},40:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/iconfinder_user_male4_172628.695aec55.png"},46:function(e,t,a){e.exports=a(75)},5:function(e,t,a){e.exports={navBur:"NavBur_navBur__3XnXd",item:"NavBur_item__1QFyM",active:"NavBur_active__1B9xd"}},51:function(e,t,a){},52:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(17),c=a.n(r),o=(a(51),a(52),a(10)),i=a(2),l=a(5),u=a.n(l);function m(){return s.a.createElement("nav",{className:u.a.navBur},s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/profile",activeClassName:u.a.active},"Profile")),s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/dialogs",activeClassName:u.a.active},"Dialogs")),s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/users",activeClassName:u.a.active},"Users")),s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/news",activeClassName:u.a.active},"News")),s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/music",activeClassName:u.a.active},"Music")),s.a.createElement("div",{className:u.a.item},s.a.createElement(o.b,{to:"/settings",activeClassName:u.a.active},"Settings")))}var d=a(37),g=a.n(d);function p(){return s.a.createElement("div",{className:g.a.header},s.a.createElement("img",{src:"https://www.clipartmax.com/png/full/342-3428376_vector-black-and-white-download-drawing-at-getdrawings-whisper-outline.png"}))}var v=a(23),f=a.n(v),E=a(24),_=a.n(E),w=a(38),h=a.n(w);function b(e){return s.a.createElement("div",{className:h.a.post},s.a.createElement("img",{src:"https://pbs.twimg.com/media/ECfnBGCXoAAAIRM.jpg:large"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"Like")," ",e.likesCount))}var N=a(12),O=a(3),x={posts:[{id:1,message:"It is my first post",likesCount:0},{id:2,message:"Hi",likesCount:4},{id:3,message:"Hello",likesCount:5}],newPostText:"OK"},y=a(11),C=Object(y.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:"ADD-POST"})},changePost:function(t){e(function(e){return{type:"CHANGE-POST",postMessage:e}}(t))}}}))((function(e){var t=e.posts.map((function(e){return s.a.createElement(b,{message:e.message,likesCount:e.likesCount,id:e.id})})),a=s.a.createRef(),n=e.addPost;return s.a.createElement("div",{className:_.a.myPosts},s.a.createElement("h1",null,"My posts"),s.a.createElement("div",null,s.a.createElement("textarea",{onChange:function(){if(a.current){var t=null===a||void 0===a?void 0:a.current.value;e.changePost(t)}},ref:a,value:e.newPostText}),s.a.createElement("button",{onClick:n},"Add post")),s.a.createElement("div",{className:_.a.posts},t))}));function M(e){return s.a.createElement("div",{className:f.a.profileContant},s.a.createElement("img",{src:"https://sun9-72.userapi.com/c854024/v854024783/139230/wZlmqJc56E4.jpg"}),s.a.createElement("div",{className:f.a.ava},s.a.createElement("img",{src:"https://images.pexels.com/photos/3473525/pexels-photo-3473525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}),"ava"),s.a.createElement(C,null))}var P=a(19),j=a.n(P),A=a(26),T=a.n(A);function S(e){return s.a.createElement("div",{className:T.a.dialog},s.a.createElement(o.b,{to:"/dialogs/"+e.id,activeClassName:T.a.active},e.name))}var k=a(40),U=a.n(k);function D(e){return s.a.createElement("div",{className:U.a.message},e.textMessage)}var B={dialogs:[{id:1,name:"Ann"},{id:2,name:"Andy"},{id:3,name:"Mike"}],messages:[{id:1,textMessage:"Hi"},{id:2,textMessage:"Hello"},{id:3,textMessage:"How are you"}],newMessageText:""},H=Object(y.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.newMessageText}}),(function(e){return{sendMessage:function(){e({type:"SEND-MESSAGE"})},changeMessage:function(t){e(function(e){return{type:"CHANGE-MESSAGE",messageText:e}}(t))}}}))((function(e){var t=e.dialogs.map((function(e){return s.a.createElement(S,{id:e.id,name:e.name})})),a=e.messages.map((function(e){return s.a.createElement(D,{textMessage:e.textMessage,id:e.id})})),n=e.sendMessage;return s.a.createElement("div",{className:j.a.dialogsContant},s.a.createElement("div",{className:j.a.dialogs},t),s.a.createElement("div",{className:j.a.messages},s.a.createElement("div",null,a),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("textarea",{value:e.newMessageText,onChange:function(t){var a=t.currentTarget.value;e.changeMessage(a)},placeholder:"Enter your message"}),"  "),s.a.createElement("div",null,s.a.createElement("button",{onClick:n},"Send message")))))})),I=a(41),L=a(45),G=a(44),F=a(14),R=a.n(F),W=a(42),q=a.n(W),J=a(43),Q=a.n(J),X=function(e){Object(L.a)(a,e);var t=Object(G.a)(a);function a(){var e;Object(I.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){q.a.get("https://social-network.samuraijs.com/api/1.0/users").then((function(t){e.props.setUsers(t.data.items)}))},e.render=function(){return s.a.createElement("div",null,e.props.users.map((function(t){return s.a.createElement("div",{key:t.id,className:R.a.users},s.a.createElement("div",{className:R.a.userAvatar},s.a.createElement("div",null,s.a.createElement("img",{src:t.uniqueUrlName?t.uniqueUrlName:Q.a})),s.a.createElement("div",null,t.followed?s.a.createElement("button",{onClick:function(){e.props.unfollow(t.id)}},"Unfollow"):s.a.createElement("button",{onClick:function(){e.props.follow(t.id)}},"Follow")," ")),s.a.createElement("div",{className:R.a.userInfo},s.a.createElement("h3",null,t.name),s.a.createElement("div",{className:R.a.city},"u.location.city"),s.a.createElement("div",{className:R.a.country},"u.location.country"),s.a.createElement("div",null,t.status)))})))},e}return a}(s.a.Component),K={users:[]},Z=Object(y.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(t){e(function(e){return{type:"FOLLOW",actionId:e}}(t))},unfollow:function(t){e(function(e){return{type:"UNFOLLOW",actionId:e}}(t))},setUsers:function(t){e(function(e){return{type:"SET-USERS",users:e}}(t))}}}))(X);var z=function(e){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(p,null),s.a.createElement(m,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(i.a,{path:"/profile",render:function(){return s.a.createElement(M,null)}}),s.a.createElement(i.a,{path:"/dialogs",render:function(){return s.a.createElement(H,null)}}),s.a.createElement(i.a,{path:"/users",render:function(){return s.a.createElement(Z,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(16),$=Object(Y.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:e.newPostText,likesCount:0},n=Object(O.a)({},e);return n.posts=Object(N.a)(e.posts),n.posts.push(a),n.newPostText="",n;case"CHANGE-POST":var s=Object(O.a)({},e);return s.newPostText=t.postMessage,s;default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var a={id:6,textMessage:e.newMessageText},n=Object(O.a)(Object(O.a)({},e),{},{messages:Object(N.a)(e.messages)});return n.messages.push(a),n.newMessageText="",n;case"CHANGE-MESSAGE":var s=Object(O.a)({},e);return s.newMessageText=t.messageText,s;default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":var a=Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.actionId?Object(O.a)(Object(O.a)({},e),{},{followed:!0}):e}))});return a;case"UNFOLLOW":var n=Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.actionId?Object(O.a)(Object(O.a)({},e),{},{followed:!1}):e}))});return n;case"SET-USERS":var s=Object(O.a)(Object(O.a)({},e),{},{users:[].concat(Object(N.a)(e.users),Object(N.a)(t.users))});return s;default:return e}}}),V=Object(Y.c)($);c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y.a,{store:V},s.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.4f05f8fe.chunk.js.map