(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},147:function(e,t){},150:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=a(52),s=a(26),i=a(30),u=a(79),m=a(29),p=a(8),d=a(15),E=a.n(d),f=a(27),h=a(35),y=a.n(h),v=function(e){return"app/".concat("concerts","/").concat(e)},O=v("START_REQUEST"),b=v("END_REQUEST"),S=v("ERROR_REQUEST"),_=v("LOAD_CONCERTS"),g={data:[],request:{pending:!1,error:null,success:null}};var j=a(23),k=function(e){return e.seats.requests},D=function(e){return"app/".concat("seats","/").concat(e)},A=D("START_REQUEST"),T=D("END_REQUEST"),w=D("ERROR_REQUEST"),N=D("LOAD_SEATS"),x=D("ADD_SEAT"),q=function(e){return{payload:e,type:A}},R=function(e){return{payload:e,type:T}},C=function(e){return{payload:e,type:w}},L=function(e){return{payload:e,type:N}},F={data:[],requests:[]};var U=Object(i.c)({concerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case _:return Object(p.a)({},e,{data:Object(m.a)(t.payload)});case O:return Object(p.a)({},e,{request:{pending:!0,error:null,success:!1}});case b:return Object(p.a)({},e,{request:{pending:!1,error:null,success:!0}});case S:return Object(p.a)({},e,{request:{pending:!1,error:t.error,success:!1}});default:return e}},seats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case N:return Object(p.a)({},e,{data:Object(m.a)(t.payload)});case x:return Object(p.a)({},e,{data:[].concat(Object(m.a)(e.data),[t.payload])});case A:return Object(p.a)({},e,{requests:Object(p.a)({},e.requests,Object(j.a)({},t.payload.name,{pending:!0,error:null,success:!1}))});case T:return Object(p.a)({},e,{requests:Object(p.a)({},e.requests,Object(j.a)({},t.payload.name,{pending:!1,error:null,success:!0}))});case w:return Object(p.a)({},e,{requests:Object(p.a)({},e.requests,Object(j.a)({},t.payload.name,{pending:!1,error:t.payload.error,success:!1}))});default:return e}}}),P=Object(i.e)(U,Object(i.d)(Object(i.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),H=a(18),M=a(19),I=a(21),W=a(20),Q=a(22),J=a(28),X=a(159),Y=a(160),$=a(161),G=a(162),V=a(163),B=a(164),z=a(165),K=a(166),Z=function(e){function t(){var e,a;Object(H.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(I.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(Q.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(X.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(Y.a,{href:"/"},"New Wave Festival"),r.a.createElement($.a,{onClick:this.toggle}),r.a.createElement(G.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(V.a,{className:"ml-auto align-items-center",navbar:!0},r.a.createElement(B.a,null,r.a.createElement(z.a,{href:"/"},"Home")),r.a.createElement(B.a,null,r.a.createElement(z.a,{href:"/prices"},"Prices")),r.a.createElement(B.a,null,r.a.createElement(z.a,{href:"/order-a-ticket"},r.a.createElement(K.a,{outline:!0,color:"primary"},"Order a ticket!")))))))}}]),t}(r.a.Component),ee=function(){return r.a.createElement("footer",{id:"sticky-footer",className:"py-4 mt-5 bg-dark text-white-50"},r.a.createElement("div",{className:"text-center"},r.a.createElement("small",null,"Copyright \xa9 New Wave Festival 2019")))},te=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(Z,null),t,r.a.createElement(ee,null))},ae=a(170),ne=a(175),re=(a(118),[{src:"/img/promo/promo1.jpg",header:"Great atmosphere!",caption:"Have fun with thousands of people!",alt:"Have fun with thousands of people!"},{src:"/img/promo/promo2.jpg",altText:"Listen to the greatest hits!",caption:"Take a part in phenomenal performances.",header:"Listen to the greatest hits"},{src:"/img/promo/promo3.jpg",altText:"Meet stars!",caption:"Meet the biggest music starts live!",header:"Meet stars!"}]),ce=function(){return r.a.createElement(ne.a,{className:"promoCarousel",items:re})},oe=a(169),le=a(176),se=a(167),ie=a(168),ue=(a(119),function(e){var t=e.performer,a=e.price,n=e.genre,c=e.day,o=e.image,l=e.tickets;return r.a.createElement("article",{className:"concert"},r.a.createElement(se.a,{noGutters:!0},r.a.createElement(ie.a,{xs:"6"},r.a.createElement("div",{className:"concert__image-container"},r.a.createElement("img",{className:"concert__image-container__img",src:o,alt:t}))),r.a.createElement(ie.a,{xs:"6"},r.a.createElement("div",{className:"concert__info"},r.a.createElement("img",{className:"concert__info__back",src:o,alt:t}),r.a.createElement("h2",{className:"concert__info__performer"},t),r.a.createElement("h3",{className:"concert__info__genre"},n),r.a.createElement("h3",{className:"concert__info__tickets"},"Only ",l," tickets left"),r.a.createElement("p",{className:"concert__info__day-n-price"},"Day: ",c,", Price: ",a,"$")))))}),me=function(e){var t=e.concerts;return r.a.createElement("section",null,t.map(function(e){return r.a.createElement(ue,Object.assign({key:e.id},e))}))},pe=function(e){function t(){return Object(H.a)(this,t),Object(I.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.loadConcerts)()}},{key:"render",value:function(){var e=this.props,t=e.request,a=e.concerts;return t.pending?r.a.createElement(oe.a,{animated:!0,color:"primary",value:50}):t.error?r.a.createElement(le.a,{color:"warning"},t.error):t.success&&a.length?t.success?r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{concerts:a})):void 0:r.a.createElement(le.a,{color:"info"},"No concerts")}}]),t}(r.a.Component),de=Object(s.b)(function(e){return{concerts:(a=e,a.concerts.data),request:(t=e,t.concerts.request)};var t,a},function(e){return{loadConcerts:function(){return e(function(){var e=Object(f.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:O}),e.prev=1,e.next=4,y.a.get("".concat("/api","/concerts"));case 4:a=e.sent,t({payload:a.data,type:_}),t({type:b}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({error:e.t0.message,type:S});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}())}}})(pe),Ee=function(){return r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(ae.a,null,r.a.createElement("h1",null,"Who's on?"),r.a.createElement(de,null)))},fe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},he=function(){return r.a.createElement(ae.a,null,r.a.createElement("h1",null,"Prices"),r.a.createElement("p",null,"Prices may differ according the day of the festival. Remember that ticket includes not only the star performance, but also 10+ workshops. We gathered several genre teachers to help you increase your vocal skills, as well as self confidence."),r.a.createElement(le.a,{color:"info"},"Attention! ",r.a.createElement("strong",null,"Children under 4 can go freely with you without any other fee!")),r.a.createElement("h2",null,"Day one"),r.a.createElement("p",null,"Price: 25$"),r.a.createElement("p",null,'Workshops: "Rock Music Style", "How to make you voice grooowl", "Make your voice stronger", "History of Rock"'),r.a.createElement("h2",null,"Day Two"),r.a.createElement("p",null,"Price: 25$"),r.a.createElement("p",null,'Workshops: "Find your real tune", "Find your real YOU", "Fell the music", "Jam session"'),r.a.createElement("h2",null,"Day three"),r.a.createElement("p",null,"Price: 50$"),r.a.createElement("p",null,'Workshops: "Increase your vocal range", "How to properly warmup before singing", "It\'s time for YOU!"'))},ye=a(171),ve=a(172),Oe=a(173),be=a(174),Se=(a(120),a(40)),_e=a(81),ge=a.n(_e),je=(a(150),function(e){function t(){var e,a;Object(H.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(c)))).state={totalSeats:50},a.countEmptySeats=function(){var e=a.props,t=e.seats,n=e.chosenDay,r=t.filter(function(e){return e.day==n}).length;return a.state.totalSeats-r},a.isTaken=function(e){var t=a.props,n=t.seats,r=t.chosenDay;return n.some(function(t){return t.seat===e&&t.day===r})},a.prepareSeat=function(e){var t=a.props,n=t.chosenSeat,c=t.updateSeat,o=Object(Se.a)(a).isTaken;return e===n?r.a.createElement(K.a,{key:e,className:"seats__seat",color:"primary"},e):o(e)?r.a.createElement(K.a,{key:e,className:"seats__seat",disabled:!0,color:"secondary"},e):r.a.createElement(K.a,{key:e,color:"primary",className:"seats__seat",outline:!0,onClick:function(t){return c(t,e)}},e)},a}return Object(Q.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=ge()("localhost:8000"),t=this.props,a=t.loadSeats,n=t.loadSeatsData;e.on("seatsUpdated",function(e){return n(e)}),a()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.seats,n=t.loadSeats;a!==e.seats&&n()}},{key:"render",value:function(){var e=this.prepareSeat,t=this.countEmptySeats,a=this.props.requests;return r.a.createElement("div",null,r.a.createElement("h3",null,"Pick a seat"),r.a.createElement("small",{id:"pickHelp",className:"form-text text-muted ml-2"},r.a.createElement(K.a,{color:"secondary"})," \u2013 seat is already taken"),r.a.createElement("small",{id:"pickHelpTwo",className:"form-text text-muted ml-2 mb-4"},r.a.createElement(K.a,{outline:!0,color:"primary"})," \u2013 it's empty"),a.LOAD_SEATS&&a.LOAD_SEATS.success&&r.a.createElement("div",{className:"seats"},Object(m.a)(Array(50)).map(function(t,a){return e(a+1)})),a.LOAD_SEATS&&a.LOAD_SEATS.pending&&r.a.createElement(oe.a,{animated:!0,color:"primary",value:50}),a.LOAD_SEATS&&a.LOAD_SEATS.error&&r.a.createElement(le.a,{color:"warning"},"Couldn't load seats..."),r.a.createElement("p",null,"Free seats: ",t(),"/",this.state.totalSeats))}}]),t}(r.a.Component)),ke=Object(s.b)(function(e){return{seats:(t=e,t.seats.data),requests:k(e)};var t},function(e){return{loadSeats:function(){return e(function(){var e=Object(f.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(q({name:"LOAD_SEATS"})),e.prev=1,e.next=4,y.a.get("".concat("/api","/seats"));case 4:return a=e.sent,e.next=7,new Promise(function(e){return setTimeout(e,2e3)});case 7:t(L(a.data)),t(R({name:"LOAD_SEATS"})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t(C({name:"LOAD_SEATS",error:e.t0.message}));case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}())},loadSeatsData:function(t){return e(L(t))}}})(je),De=function(e){function t(){var e,a;Object(H.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(I.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(r)))).state={order:{client:"",email:"",day:1,seat:""},isError:!1},a.updateSeat=function(e,t){var n=a.state.order;e.preventDefault(),a.setState({order:Object(p.a)({},n,{seat:t})})},a.updateTextField=function(e){var t=e.target,n=a.state.order,r=t.value,c=t.name;a.setState({order:Object(p.a)({},n,Object(j.a)({},c,r))})},a.updateNumberField=function(e){var t=e.target,n=a.state.order,r=t.value,c=t.name;a.setState({order:Object(p.a)({},n,Object(j.a)({},c,parseInt(r)))})},a.submitForm=function(){var e=Object(f.a)(E.a.mark(function e(t){var n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.state.order,r=a.props.addSeat,t.preventDefault(),n.client&&n.email&&n.day&&n.seat?(r(n),a.setState({order:{client:"",email:"",day:1,seat:""},isError:!1})):a.setState({isError:!0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(Q.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.updateSeat,t=this.updateTextField,a=this.updateNumberField,n=this.submitForm,c=this.props.requests,o=this.state,l=o.order,s=o.isError;return r.a.createElement(ye.a,{className:"order-ticket-form",onSubmit:n},r.a.createElement(se.a,null,r.a.createElement(ie.a,{xs:"12",md:"6"},s&&r.a.createElement(le.a,{color:"warning"},"There are some errors in you form. Have you fill all the fields? Maybe you forgot to choose your seat?"),c.ADD_SEAT&&c.ADD_SEAT.error&&!s&&r.a.createElement(le.a,{color:"danger"},c.ADD_SEAT.error),c.ADD_SEAT&&c.ADD_SEAT.success&&!s&&r.a.createElement(le.a,{color:"success"},"You've booked your ticket! Check you email in order to make a payment."),c.ADD_SEAT&&c.ADD_SEAT.pending&&r.a.createElement(oe.a,{animated:!0,className:"mb-5",color:"primary",value:75}),r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{for:"clientEmail"},"Name"),r.a.createElement(be.a,{type:"text",value:l.client,name:"client",onChange:t,id:"clientName",placeholder:"John Doe"})),r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{for:"clientEmail"},"Email"),r.a.createElement(be.a,{type:"email",value:l.email,name:"email",onChange:t,id:"clientEmail",placeholder:"johndoe@example.com"})),r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{for:"clientDay"},"Select which day of festivals are you interested in:"),r.a.createElement(be.a,{type:"select",value:l.day,name:"day",onChange:a,id:"exampleSelect"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3")),r.a.createElement("small",{id:"dayHelp",className:"form-text text-muted"},"Every day of the festival uses individual ticket. You can book only one ticket at the time.")),r.a.createElement(ve.a,{check:!0},r.a.createElement(Oe.a,{check:!0},r.a.createElement(be.a,{required:!0,type:"checkbox"})," I agree with ",r.a.createElement("a",{href:"/#"},"Terms and conditions")," and ",r.a.createElement("a",{href:"/#"},"Privacy Policy"),".")),r.a.createElement(K.a,{color:"primary",className:"mt-3"},"Submit")),r.a.createElement(ie.a,{xs:"12",md:"6"},r.a.createElement(ke,{chosenDay:l.day,chosenSeat:l.seat,updateSeat:e}))))}}]),t}(r.a.Component),Ae=Object(s.b)(function(e){return{requests:k(e)}},function(e){return{addSeat:function(t){return e(function(e){return function(){var t=Object(f.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(q({name:"ADD_SEAT"})),t.prev=1,t.next=4,y.a.post("".concat("/api","/seats"),e);case 4:n=t.sent,a({payload:n,type:x}),a(R({name:"ADD_SEAT"})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a(C({name:"ADD_SEAT",error:t.t0.message}));case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(De),Te=function(){return r.a.createElement(ae.a,null,r.a.createElement("h1",null,"Order a ticket"),r.a.createElement(Ae,null))},we=function(e){function t(){return Object(H.a)(this,t),Object(I.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement(te,null,r.a.createElement(J.c,null,r.a.createElement(J.a,{path:"/",exact:!0,component:Ee}),r.a.createElement(J.a,{path:"/prices",exact:!0,component:he}),r.a.createElement(J.a,{path:"/order-a-ticket",exact:!0,component:Te}),r.a.createElement(J.a,{component:fe})))}}]),t}(r.a.Component);a(156),a(157);o.a.render(r.a.createElement(function(){return r.a.createElement(s.a,{store:P},r.a.createElement(l.a,null,r.a.createElement(we,null)))},null),document.getElementById("root"))},83:function(e,t,a){e.exports=a(158)}},[[83,1,2]]]);
//# sourceMappingURL=main.d4ab6ab5.chunk.js.map