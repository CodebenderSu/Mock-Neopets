(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/banner.62e45bef.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/neopets-logo.0ae9224b.png"},25:function(e,a,t){e.exports=t(64)},34:function(e,a,t){},36:function(e,a,t){},38:function(e,a,t){},42:function(e,a,t){},6:function(e){e.exports={a:{Username:"Zezima",Avatar:"https://codebendersu.github.io/Mock-Neopets/user/wealthy.gif",Neopoints:"2,147,483,647"},e:{Avatar:"https://codebendersu.github.io/Mock-Neopets/user/pet.jpg",Name:"Rytlock",Species:"Xweetok",Health:666,HealthMax:999,Mood:"grumpy",Hunger:"fine",Age:"6,899",Level:"80"},c:[{Name:"Dan",Status:!0,Avatar:"https://codebendersu.github.io/Mock-Neopets/avatars/angryairmote.gif"},{Name:"Arin",Status:!0,Avatar:"https://codebendersu.github.io/Mock-Neopets/avatars/kingkelpbeard.gif"},{Name:"Durial321",Status:!1,Avatar:"https://codebendersu.github.io/Mock-Neopets/avatars/ghostlupe.gif"},{Name:"Markiplier",Status:!0,Avatar:"https://codebendersu.github.io/Mock-Neopets/avatars/gelertstarry.gif"}],d:[{Name:"Destruct-O-Match III",Avatar:"https://codebendersu.github.io/Mock-Neopets/games/destructomatch.png"},{Name:"Kass Basher",Avatar:"https://codebendersu.github.io/Mock-Neopets/games/kassbasher.png"},{Name:"Fashion Fever",Avatar:"https://codebendersu.github.io/Mock-Neopets/games/fashionfever.png"},{Name:"Jelly Blobs of Doom",Avatar:"https://codebendersu.github.io/Mock-Neopets/games/jellyblob.png"},{Name:"Smug Bug Smite",Avatar:"https://codebendersu.github.io/Mock-Neopets/games/smugbugsmite.png"},{Name:"Splat-A-Sloth",Avatar:"https://codebendersu.github.io/Mock-Neopets/games/splatasloth.png"}],b:[{Image:"https://codebendersu.github.io/Mock-Neopets/carousel/neopetshome.jpg"},{Image:"https://codebendersu.github.io/Mock-Neopets/carousel/codebendersu.jpg"},{Image:"https://codebendersu.github.io/Mock-Neopets/carousel/healspring.jpg"}]}},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),s=(t(34),t(1)),m=t(2),i=t(4),o=t(3),u=t(5),h=t(10),p=t(9),d=(t(36),t(38),t(42),t(23)),E=t.n(d),b=t(15),v=t.n(b),f=t(7),N=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navigation"},r.a.createElement("div",null,r.a.createElement("a",{href:"",className:"nav-item"},r.a.createElement(f.a,{className:"nav-icon",icon:"user-circle"}),r.a.createElement("span",null,"Account"))),r.a.createElement("div",null,r.a.createElement("a",{href:"",className:"nav-item"},r.a.createElement(f.a,{className:"nav-icon",icon:"globe"}),r.a.createElement("span",null,"Explore"))),r.a.createElement("div",null,r.a.createElement("a",{href:"",className:"nav-item"},r.a.createElement(f.a,{className:"nav-icon",icon:"dice"}),r.a.createElement("span",null,"Games"))),r.a.createElement("div",null,r.a.createElement("a",{href:"",className:"nav-item"},r.a.createElement(f.a,{className:"nav-icon",icon:"store"}),r.a.createElement("span",null,"Shops"))),r.a.createElement("div",null,r.a.createElement("a",{href:"",className:"nav-item"},r.a.createElement(f.a,{className:"nav-icon",icon:"users"}),r.a.createElement("span",null,"Community"))))}}]),a}(n.Component),j=t(16),O=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).tick=function(){t.setState({time:j(new Date).tz("America/Los_Angeles").format("LTS")})},t.state={time:j(new Date).tz("America/Los_Angeles").format("LTS")},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){return e.tick()},500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return r.a.createElement("div",{className:"clock"},r.a.createElement("span",null,this.state.time," ",r.a.createElement("b",null,"NST")))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{autoComplete:"on",name:"search",placeholder:"Search Neopets",type:"text",title:""}),r.a.createElement("button",{type:"submit"},r.a.createElement(f.a,{icon:"search"}))))}}]),a}(n.Component),y=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-master"},r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header-left"},r.a.createElement("img",{className:"banner",src:v.a,alt:"banner"}),r.a.createElement("a",{href:""},r.a.createElement("img",{src:E.a,alt:"Neopets"}))),r.a.createElement("div",{className:"header-center"},r.a.createElement(N,null),r.a.createElement(O,null),r.a.createElement(g,null)),r.a.createElement("div",{className:"header-right"},"Log In/Out",r.a.createElement("img",{className:"banner",src:v.a,alt:"banner"}))))}}]),a}(n.Component),k=t(6),w=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-label"},r.a.createElement("a",{href:""},k.a.Username)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"avatar"},r.a.createElement("div",{className:"avatar-photo"},r.a.createElement("span",{className:"change-avatar"},"Change"),r.a.createElement("img",{src:k.a.Avatar,alt:"avatar",title:"I'm rich, you know"})),r.a.createElement("div",{className:"peripherals"},r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"shopping-bag"})," Inventory"),r.a.createElement("br",null),r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"home"})," Neohome"),r.a.createElement("br",null),r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"university"})," Bank"))),r.a.createElement("div",{className:"card-subtitle"},r.a.createElement("span",null,r.a.createElement("b",null,"NP:")," ",k.a.Neopoints))))}}]),a}(n.Component),A=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e,a=k.e.Health/k.e.HealthMax;return a>=.5?e="green":a<.5&&a>.1?e="yellow":a<=.1&&(e="red"),r.a.createElement("div",{className:"pet-stats"},r.a.createElement("div",{className:"stats-left"},"Species: ",r.a.createElement("br",null),"Health: ",r.a.createElement("br",null),"Mood: ",r.a.createElement("br",null),"Hunger: ",r.a.createElement("br",null),"Age: ",r.a.createElement("br",null),"Level:"),r.a.createElement("div",{className:"stats-right"},r.a.createElement("b",null,k.e.Species),r.a.createElement("br",null),r.a.createElement("b",{className:e},k.e.Health," / ",k.e.HealthMax),r.a.createElement("br",null),r.a.createElement("b",null,k.e.Mood),r.a.createElement("br",null),r.a.createElement("b",null,k.e.Hunger),r.a.createElement("br",null),r.a.createElement("b",null,k.e.Age," days"),r.a.createElement("br",null),r.a.createElement("b",null,k.e.Level)))}}]),a}(n.Component),C=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-label"},r.a.createElement("a",{href:""},k.e.Name)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"pet-photo"},r.a.createElement("img",{src:k.e.Avatar,alt:"pet"})),r.a.createElement("hr",null),r.a.createElement(A,null),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-subtitle"},r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"paw"})," Pets"),r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"door-closed"})," Closet"))))}}]),a}(n.Component),M=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"friend"},r.a.createElement("div",{className:"friend-avatar"},r.a.createElement("a",{href:""},r.a.createElement("img",{src:this.props.avatar,alt:"user avatar"}))),r.a.createElement("div",{className:"friend-info"},r.a.createElement("h1",null,r.a.createElement("a",{href:""},this.props.username)),r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"envelope"})," Neomail"),r.a.createElement("span",null,r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"home"})," Visit")," | ",r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"store"})," Shop"))))}}]),a}(n.Component),S=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).handleClick=function(){var e=t.state.drawer;t.setState({drawer:!e})},t.state={drawer:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e,a;return this.state.drawer?(e=r.a.createElement("div",null,r.a.createElement("span",null,"These Neofriends are currently online!"),r.a.createElement("hr",null),r.a.createElement(M,{avatar:k.c[0].Avatar,username:k.c[0].Name}),r.a.createElement(M,{avatar:k.c[1].Avatar,username:k.c[1].Name}),r.a.createElement(M,{avatar:k.c[3].Avatar,username:k.c[3].Name})),a=r.a.createElement(f.a,{className:"icon",icon:"caret-square-up",onClick:this.handleClick})):(e=r.a.createElement("div",null),a=r.a.createElement(f.a,{className:"icon",icon:"caret-square-down",onClick:this.handleClick})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-label"},"Neofriends",a),r.a.createElement("div",{className:"card-content"},e,r.a.createElement("hr",null),r.a.createElement("div",{className:"card-subtitle"},r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"users"})," Neofriends"),r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"envelope"})," Neomail"))))}}]),a}(n.Component),I=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"left-margin"},r.a.createElement(w,null),r.a.createElement(C,null),r.a.createElement(S,null))}}]),a}(n.Component),H=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"games-item"},r.a.createElement("span",{className:"change-game"},this.props.name),r.a.createElement("a",{href:""},r.a.createElement("img",{src:this.props.avatar,alt:this.props.name,title:this.props.name})))}}]),a}(n.Component),x=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-label"},"Favourite Games"),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"games"},r.a.createElement(H,{avatar:k.d[0].Avatar,name:k.d[0].Name}),r.a.createElement(H,{avatar:k.d[1].Avatar,name:k.d[1].Name}),r.a.createElement(H,{avatar:k.d[2].Avatar,name:k.d[2].Name}),r.a.createElement(H,{avatar:k.d[3].Avatar,name:k.d[3].Name}),r.a.createElement(H,{avatar:k.d[4].Avatar,name:k.d[4].Name}),r.a.createElement(H,{avatar:k.d[5].Avatar,name:k.d[5].Name})),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-subtitle"},r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"icon",icon:"gamepad"})," All games"))))}}]),a}(n.Component),L=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"ad-space"},r.a.createElement("a",{href:"https://codebendersu.github.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://codebendersu.github.io/cover.png",alt:"[Insert funny doge meme here]",title:"Brought to you by CodebenderSu"})),r.a.createElement("span",null,"Advertisement"))))}}]),a}(n.Component),D=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"footer"},"\xa9 1999-2018 Neopets, Inc."),r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"http://www.neopets.com/aboutus.phtml"},"About")," | ",r.a.createElement("a",{href:"http://www.neopets.com/help.phtml"},"Help")," | ",r.a.createElement("a",{href:"http://www.neopets.com/terms.phtml"},"Terms")," | ",r.a.createElement("a",{href:"http://www.neopets.com/privacy.phtml"},"Privacy policy")," | ",r.a.createElement("a",{href:"http://www.neopets.com/safetytips.phtml"},"Safety tips")," | ",r.a.createElement("a",{href:"http://www.neopets.com/contact.phtml"},"Contact us")," | ",r.a.createElement("a",{href:"http://www.neopets.com/refer/index.phtml"},"Referral program"))))}}]),a}(n.Component),B=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"right-margin"},r.a.createElement(x,null),r.a.createElement(L,null),r.a.createElement(D,null))}}]),a}(n.Component),T=t(24),U=t.n(T),q=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"carousel"},r.a.createElement(U.a,{arrows:!1,autoplay:!0,autoplaySpeed:1e4,dots:!0},r.a.createElement("div",null,r.a.createElement("img",{src:k.b[0].Image,alt:""})),r.a.createElement("div",null,r.a.createElement("img",{src:k.b[1].Image,alt:""})),r.a.createElement("div",null,r.a.createElement("img",{src:k.b[2].Image,alt:""}))))}}]),a}(n.Component),z=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"panels"},r.a.createElement("div",{className:"events"},"Events / spotlight"),r.a.createElement("div",{className:"new"},"New items / games"))}}]),a}(n.Component),F=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"old-news"},"Old news")}}]),a}(n.Component),J=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-master"},r.a.createElement(q,null),r.a.createElement(z,null),r.a.createElement(F,null))}}]),a}(n.Component),P=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).handleClick=function(){t.setState({show:!1})},t.state={show:!0},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e;return e=this.state.show?r.a.createElement("div",{className:"construction"},r.a.createElement("div",{className:"construction-content"},r.a.createElement("span",{onClick:this.handleClick},r.a.createElement(f.a,{icon:"window-close"})),r.a.createElement("h2",null," Under Construction "),r.a.createElement("p",null,"Hey there, I know you're checking out this page, and I'ma let you finish, but this webpage is currently under construction."))):r.a.createElement("div",null),r.a.createElement("div",null,e)}}]),a}(n.Component);h.b.add(p.k,p.o,p.h,p.d,p.m,p.p,p.f,p.i,p.l,p.j,p.n,p.e,p.c,p.b,p.g,p.q,p.a);var _=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(y,null),r.a.createElement("div",{className:"content"},r.a.createElement(I,null),r.a.createElement(J,null),r.a.createElement(B,null)))}}]),a}(n.Component);l.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.3835005c.chunk.js.map