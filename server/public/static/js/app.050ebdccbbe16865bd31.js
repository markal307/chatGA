webpackJsonp([1],{0:function(t,e){},ClEL:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},r=a("VU/8")({name:"App"},n,!1,null,null,null).exports,o=a("/ocq"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var c=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcomsaddae to Your Vue.js App"}}},i,!1,function(t){a("q8uC")},"data-v-ded231ec",null).exports,u=a("Xxa5"),l=a.n(u),d=a("exGp"),m=a.n(d),p=a("mtWM"),g=a.n(p),v={register:t=>(()=>g.a.create({baseURL:"http://192.168.2.199:3300"}))().post("req",t)},h={data:function(){return{username:"abc",password:"123"}},sockets:{connect:function(){console.log("socket connected")}},methods:{register:function(){var t=this;return m()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.register({username:t.username,password:t.password,socket:t.$socket.id});case 2:a=e.sent,console.log(a.data),t.$user.username=a.data;case 5:case"end":return e.stop()}},e,t)}))()}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v("Register")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("button",{on:{click:t.register}},[t._v("Register")])])},staticRenderFns:[]},b=a("VU/8")(h,f,!1,null,null,null).exports,_={name:"Chat",data:function(){return{messages:["Connecting..."],messageInput:"",user:{username:"not logged in"}}},sockets:{connect:function(){this.messages.push("Connected to socket")},chatMessage:function(t){console.log(this.$socket.id),this.messages.push("<strong>"+t.username+"</strong>: "+t.message)}},methods:{send:function(){this.$socket.emit("chatMessage",{message:this.messageInput}),this.messageInput=""}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"},[t._m(0),t._v(" "),a("h1",{staticClass:"navbar-brand",attrs:{href:"#",id:"displayName"}},[t._v(t._s(this.$user.username))]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container",attrs:{id:"chatBoxDiv"}},[a("div",{attrs:{id:"output"}},t._l(t.messages,function(e){return a("p",{domProps:{innerHTML:t._s(e)}})}),0),t._v(" "),a("form",{staticClass:"input-group",attrs:{id:"chatForm"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.messageInput,expression:"messageInput"}],staticClass:"col-10",attrs:{type:"text",autocomplete:"off",placeholder:"message",required:"",id:"chatInput",maxlength:"200"},domProps:{value:t.messageInput},on:{input:function(e){e.target.composing||(t.messageInput=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn-primary col-2",attrs:{id:"chatSubmit"},on:{click:t.send}},[t._v("Send")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo03"}},[e("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"}),this._v(" "),e("ul",{staticClass:"navbar-nav my-2 my-lg-0"},[e("button",{staticClass:"btn btn-primary mx-2",attrs:{type:"button","data-toggle":"modal","data-target":"#modalLogin"}},[this._v("\n          Log in\n        ")]),this._v(" "),e("button",{staticClass:"btn btn-success mx-2",attrs:{type:"button","data-toggle":"modal","data-target":"#modalCreate"}},[this._v("\n          Sign up\n        ")]),this._v(" "),e("button",{staticClass:"btn btn-secondary mx-2",attrs:{type:"button","data-toggle":"modal","data-target":"#modalGuest"}},[this._v("\n          Guest\n        ")])])])}]};var w=a("VU/8")(_,C,!1,function(t){a("ClEL")},"data-v-1add7bf2",null).exports;s.a.use(o.a);var x=new o.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/register",name:"register",component:b},{path:"/chat",name:"chat",component:w}]}),k=a("HI0L"),y=a.n(k),$=a("DmT9"),I=a.n($);a.d(e,"SocketInstance",function(){return E}),s.a.config.productionTip=!1,s.a.prototype.$user={username:"not logged in!"};var E=I()("http://192.168.2.199:3300/");s.a.use(new y.a({debug:!0,connection:E})),new s.a({el:"#app",router:x,components:{App:r},template:"<App/>"})},q8uC:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.050ebdccbbe16865bd31.js.map