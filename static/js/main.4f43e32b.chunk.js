(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={nav:"NavBar_nav__faJGn",item:"NavBar_item__2Z1AZ",itemS:"NavBar_itemS__3XgvR",itemA:"NavBar_itemA__BFxeJ",word:"NavBar_word__3GE4U"}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(38),a=n(5),s="ADD-MESSAGE",c={messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Hi Yatora )"},{id:4,message:"Hi Julia"},{id:5,message:"Hi Dima"}],dialogs:[{id:1,name:"Dima"},{id:2,name:"Arina"},{id:3,name:"Anton"},{id:4,name:"Oleg"},{id:5,name:"Igor"},{id:6,name:"Yoto"}]},i=function(e){return{type:s,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var n={id:6,message:t.newMessageText},i=Object(a.a)({},e);return i.messages=Object(r.a)(e.messages),i.messages.push(n),i}return e}},166:function(e,t,n){},167:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(131),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6cc60ee9-2297-42fe-a7fc-ee37c082ac6b"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},auth:function(){return a.get("auth/me",{withCredentials:!0})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")},getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}}},295:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(0),s=n.n(a),c=n(65),i=n.n(c),o=(n(166),n(30)),u=n(31),l=n(34),f=n(33),d=(n(167),n(18)),j=n(11),b=n.n(j),p=n(1),v=function(){return Object(p.jsxs)("nav",{className:b.a.nav,children:[Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.itemA),children:Object(p.jsx)(d.b,{to:"/Profile",activeClassName:b.a.word,children:"Profile"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.itemA),children:Object(p.jsx)(d.b,{to:"/Dialogs",activeClassName:b.a.word,children:"Messages"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.itemA),children:Object(p.jsx)(d.b,{to:"/News",activeClassName:b.a.word,children:"News"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.itemA),children:Object(p.jsx)(d.b,{to:"/Music",activeClassName:b.a.word,children:"Music"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.itemA),children:Object(p.jsx)(d.b,{to:"/Users",activeClassName:b.a.word,children:"Users"})}),Object(p.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.itemS),children:Object(p.jsx)(d.b,{to:"/Settings",activeClassName:b.a.word,children:"Settings"})})]})},h=function(e){return Object(p.jsx)("div",{children:"Dialogs"})},g=function(e){return Object(p.jsx)("div",{children:"Dialogs"})},O=function(e){return Object(p.jsx)("div",{children:"Dialogs"})},x=n(13),A=n(10),m=n.n(A),P=n(19),w=n(38),S=n(5),H=n(17),I=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},k="FOLLOW",N="UNFOLLOW",C="SET_USERS",F="SET_CURRENT_PAGE",L="SET_TOTAL_USERS_COUNT",X="TOGGLE_IS_FETCHING",E="TOGGLE_IS_FOLLOWING_PROGRESS",R={users:[],pageSize:10,totalUsersCount:200,currentPage:1,isFetching:!0,followingInProgress:[]},W=function(e){return{type:k,userId:e}},y=function(e){return{type:N,userId:e}},B=function(e){return{type:F,currentPage:e}},D=function(e){return{type:X,isFetching:e}},T=function(e,t){return{type:E,isFetching:e,userId:t}},z=function(){var e=Object(P.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(T(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(S.a)(Object(S.a)({},e),{},{users:I(e.users,t.userId,"id",{followed:!0})});case N:return Object(S.a)(Object(S.a)({},e),{},{users:I(e.users,t.userId,"id",{followed:!1})});case C:return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case F:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case L:return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.count});case X:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case E:return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(w.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},K=n(51),U=n(69),G=n(127),Q=n(52),M=n.n(Q),Z=n(132),V=n.n(Z),Y=function(e){for(var t=e.currentPage,n=e.onPageChanged,r=e.totalItemsCount,s=e.portionSize,c=void 0===s?10:s,i=Math.ceil(r/c),o=[],u=1;u<=i;u++)o.push(u);var l=Math.ceil(i/c),f=Object(a.useState)(1),d=Object(G.a)(f,2),j=d[0],b=d[1],v=(j-1)*c+1,h=j*c;return Object(p.jsxs)("div",{className:M.a.number,children:[j>1&&Object(p.jsx)("button",{onClick:function(){b(j-1)},children:"Prev"}),o.filter((function(e){return e>=v&&e<=h})).map((function(e){return Object(p.jsx)("span",{className:V()(Object(U.a)({},M.a.selectedPage,t===e&&M.a.pageNumber),M.a.pageNumber),onClick:function(){n(e)},children:e},e)})),l>j&&Object(p.jsx)("button",{onClick:function(){b(j+1)},children:"Next"})]})},q=n(71),_=n.n(q),$=n(54),ee=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsxs)($.NavLink,{to:"/profile/"+t.id,children:[" ",Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/jpeg;base64,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",className:_.a.photo})," "]})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{className:_.a.aButton,disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"UnFollow"}):Object(p.jsx)("button",{className:_.a.dButton,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"user.location.country"}),Object(p.jsx)("div",{children:"user.location.city"})]})]})]},t.id)},te=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],ne=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,s=e.users,c=Object(K.a)(e,te);return Object(p.jsxs)("div",{children:[Object(p.jsx)(Y,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),Object(p.jsxs)("div",{children:[s.map((function(e){return Object(p.jsx)(ee,{user:e,followingInProgress:c.followingInProgress,follow:c.follow,unfollow:c.unfollow},e.id)})),";"]})]})},re=n(45),ae=n(9),se=n(136),ce=Object(se.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ie=function(e){return e.usersPage.pageSize},oe=function(e){return e.usersPage.totalUsersCount},ue=function(e){return e.usersPage.currentPage},le=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},de=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsersThunkCreator(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(re.a,{}):null,Object(p.jsx)(ne,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),je=Object(ae.d)(Object(x.b)((function(e){return{users:ce(e),pageSize:ie(e),totalUsersCount:oe(e),currentPage:ue(e),isFetching:le(e),followingInProgress:fe(e)}}),{follow:function(e){return function(){var t=Object(P.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(n,e,H.a.follow.bind(H.a),W);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(n,e,H.a.unfollow.bind(H.a),y);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:B,toggleIsFollowingProgress:T,getUsersThunkCreator:function(e,t){return function(n){n(D(!0)),n(B(e)),H.a.getUsers(e,t).then((function(e){var t;n(D(!1)),n((t=e.items,{type:C,users:t}))}))}}}))(de),be=n(7),pe=n(72),ve=n.n(pe),he=function(e){return Object(p.jsxs)("header",{className:"".concat(ve.a.header," ").concat(ve.a.img," "),children:[Object(p.jsx)("img",{src:"https://yangv85.files.wordpress.com/2012/11/linkin-park-live1.jpg",alt:"none"}),Object(p.jsx)("div",{className:ve.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[" ",e.login," -"," ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(p.jsx)($.NavLink,{to:"/login",children:"Login"})})]})},ge=n(53),Oe="sao-data/auth/SET_USER_DATE",xe={userId:null,email:null,login:null,isAuth:!1},Ae=function(e,t,n,r){return{type:Oe,payload:{userId:e,email:t,login:n,isAuth:r}}},me=function(){return function(){var e=Object(P.a)(m.a.mark((function e(t){var n,r,a,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.auth();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(Ae(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;return t.type===Oe?Object(S.a)(Object(S.a)({},e),t.payload):e},we=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(he,Object(S.a)({},this.props))}}]),n}(s.a.Component),Se=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(P.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.logout();case 2:0===e.sent.data.resultCode&&t(Ae(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(we),He=n(125),Ie=n(126),ke=n(75),Ne=n(66),Ce=n(48),Fe=n.n(Ce),Le=Object(Ie.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsx)("div",{children:Object(p.jsx)(He.a,{placeholder:"Email",name:"email",component:Ne.a,validate:[ke.b]})}),Object(p.jsx)("div",{children:Object(p.jsx)(He.a,{placeholder:"Password",name:"password",type:"password",component:Ne.a,validate:[ke.b]})}),Object(p.jsxs)("div",{children:[" ",Object(p.jsx)(He.a,{component:Ne.a,name:"rememberMe",type:"checkbox"})," ","Remember me"," "]}),n&&Object(p.jsx)("div",{className:Fe.a.formSummaryError,children:n}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),Xe=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(P.a)(m.a.mark((function r(a){var s,c;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,H.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(me()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(ge.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(be.Redirect,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(Le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ee="INITIALIZED_SUCCESS",Re={initialized:!1},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;return t.type===Ee?Object(S.a)(Object(S.a)({},e),{},{initialized:!0}):e},ye=n(124),Be=n(94),De={},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return e},ze=n(135),Je=n(128),Ke=Object(ae.c)({profilePage:Be.b,dialogsPage:ye.b,sidebar:Te,usersPage:J,auth:Pe,form:Je.a,app:We}),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,Ge=Object(ae.e)(Ke,Ue(Object(ae.a)(ze.a))),Qe=s.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),Me=s.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),Ze=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(Se,{}),Object(p.jsx)(v,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsxs)(a.Suspense,{fallback:Object(p.jsx)("div",{children:Object(p.jsx)(re.a,{})}),children:[Object(p.jsx)(be.Route,{path:"/Dialogs",render:function(){return Object(p.jsx)(Qe,{})}}),Object(p.jsx)(be.Route,{path:"/Profile/:userId?",render:function(){return Object(p.jsx)(Me,{})}})]}),Object(p.jsx)(be.Route,{path:"/News",render:function(){return Object(p.jsx)(g,{})}}),Object(p.jsx)(be.Route,{path:"/Music",render:function(){return Object(p.jsx)(h,{})}}),Object(p.jsx)(be.Route,{path:"/Settings",render:function(){return Object(p.jsx)(O,{})}}),Object(p.jsx)(be.Route,{path:"/users",render:function(){return Object(p.jsx)(je,{})}}),Object(p.jsx)(be.Route,{path:"/login",render:function(){return Object(p.jsx)(Xe,{})}})]})]}):Object(p.jsx)(re.a,{})}}]),n}(a.Component),Ve=Object(ae.d)(be.withRouter,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(me());Promise.all([t]).then((function(){return e({type:Ee})}))}}}))(Ze),Ye=function(e){return Object(p.jsx)(d.a,{children:Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(x.a,{store:Ge,children:Object(p.jsx)(Ve,{})})})})};i.a.render(Object(p.jsx)(Ye,{}),document.getElementById("root")),r()},45:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/block.a960d68e.svg",a=n(1);t.a=function(e){return Object(a.jsx)("img",{src:r})}},48:function(e,t,n){e.exports={formControl:"formsControls_formControl__2sA4J",error:"formsControls_error__33DAg",formSummaryError:"formsControls_formSummaryError__1_685"}},52:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__3C2mO",number:"Paginator_number__3uLMr",selectedPage:"Paginator_selectedPage__2s69P"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d}));var r=n(5),a=n(51),s=(n(0),n(48)),c=n.n(s),i=n(1),o=["input","meta","child"],u=["input","meta","child"],l=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(s?c.a.error:""),children:[Object(i.jsx)("div",{children:a}),n&&r&&Object(i.jsx)("span",{children:r})]})},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,o));return Object(i.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(i.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},71:function(e,t,n){e.exports={photo:"users_photo__1lXHV",page:"users_page__LXdDX",aButton:"users_aButton__1HjFu",dButton:"users_dButton__1iPCl",number:"users_number__1FG3K"}},72:function(e,t,n){e.exports={header:"Header_header__4RKGD",loginBlock:"Header_loginBlock__219xj"}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max Length is ".concat(e," symbols")}}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return g}));var r=n(10),a=n.n(r),s=n(19),c=n(38),i=n(5),o=n(17),u="ADD-POST",l="SET_USER_PROFILE",f="SET_STATUS",d="DELETE_POST",j={posts:[{id:1,message:"Hey,why nobody love me ?",likeCounts:23},{id:2,message:"Its our new program! Hey!",likeCounts:4}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:f,status:e}},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likeCounts:0},r=Object(i.a)({},e);return r.posts=Object(c.a)(e.posts),r.posts.push(n),r.newPostText="",r;case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[295,1,2]]]);
//# sourceMappingURL=main.4f43e32b.chunk.js.map