(this["webpackJsonpmoney-convertor"]=this["webpackJsonpmoney-convertor"]||[]).push([[0],{49:function(e,t,n){},61:function(e,t,n){e.exports=n(92)},66:function(e,t,n){},67:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),l=n.n(c),u=(n(66),n(14)),o=(n(67),n(49)),i=n.n(o),s=n(17),m=n(100),E=n(101),d=function(e){return a.a.createElement("header",{className:i.a.header},a.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},a.a.createElement(m.a.Brand,null,a.a.createElement(s.b,{className:"nav-link",to:"/ratelist"},"RATES&CONVERT")),a.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),a.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},a.a.createElement(E.a,{className:"mx-auto font-weight-bold"},a.a.createElement(s.b,{className:"nav-link",to:"/convertor"},"CONVERTOR"),a.a.createElement(s.b,{className:"nav-link",to:"/ratelist"},"EXCHANGE RATES")))))},f=n(9),C=n(94),p=n(95),v=function(e){var t=e.currencies.sort().map((function(t){return a.a.createElement("tr",{key:t.CharCode},a.a.createElement("td",null,t.Nominal),a.a.createElement("td",null,t.Name),a.a.createElement("td",null,t.Value),a.a.createElement("td",null,"(",(t.Value-t.Previous).toFixed(1),")"),a.a.createElement("td",null,e.favoriteCurrencies.some((function(e){return e.ID===t.ID}))?a.a.createElement(C.a,{size:"sm",variant:"danger",onClick:function(){return e.removeFavoriteCurrency(t)}},"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"):a.a.createElement(C.a,{size:"sm",variant:"success",onClick:function(){return e.addFavoriteCurrency(t)}},"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))})),n=e.favoriteCurrencies.map((function(e){return a.a.createElement("tr",{key:e.CharCode},a.a.createElement("td",null,e.Nominal),a.a.createElement("td",null,e.Name),a.a.createElement("td",null,e.Value),a.a.createElement("td",null,"(",(e.Value-e.Previous).toFixed(1),")"))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",{className:"mt-3 text-uppercase text-center"},"\u041a\u0423\u0420\u0421 \u0426\u0411 \u0420\u0424"),a.a.createElement("h5",null,a.a.createElement("center",null,"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0432\u0430\u043b\u044e\u0442\u044b")),a.a.createElement("div",null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435: ",e.lastUpdate),a.a.createElement(p.a,{size:"sm",striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center"},a.a.createElement("thead",{className:"text-center"},a.a.createElement("tr",null,a.a.createElement("th",null,"\u0415\u0434\u0438\u043d\u0438\u0446"),a.a.createElement("th",null,"\u0412\u0430\u043b\u044e\u0442\u0430"),a.a.createElement("th",null,"\u041a\u0443\u0440\u0441"),a.a.createElement("th",null))),a.a.createElement("tbody",null,n||"")),a.a.createElement("h5",null,a.a.createElement("center",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0432\u0430\u043b\u044e\u0442")),a.a.createElement(p.a,{size:"sm",striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u0415\u0434\u0438\u043d\u0438\u0446"),a.a.createElement("th",null,"\u0412\u0430\u043b\u044e\u0442\u0430"),a.a.createElement("th",null,"\u041a\u0443\u0440\u0441"),a.a.createElement("th",null),a.a.createElement("th",null))),a.a.createElement("tbody",null,t)))},O=n(19),b=n(60),h=n(10),y=n(57),T=function(){return y.get("https://www.cbr-xml-daily.ru/daily_json.js")},R={currencies:[],lastUpdate:"",favoriteCurrencies:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENCIES":return Object(h.a)({},e,{currencies:t.currencies});case"SET_LAST_UPDATE":return Object(h.a)({},e,{lastUpdate:t.date});case"ADD_FAVORITE_CURRENCY":return Object(h.a)({},e,{favoriteCurrencies:[].concat(Object(b.a)(e.favoriteCurrencies),[t.currency])});case"REMOVE_FAVORITE_CURRENCY":return Object(h.a)({},e,{favoriteCurrencies:e.favoriteCurrencies.filter((function(e){return e.ID!==t.currency.ID}))});default:return e}},N=Object(f.d)(Object(O.b)((function(e){return{currencies:e.currencies.currencies,lastUpdate:e.currencies.lastUpdate,favoriteCurrencies:e.currencies.favoriteCurrencies}}),{getCurrencies:function(){return function(e){T().then((function(t){var n=new Date(t.data.Timestamp).toLocaleString();e({type:"SET_CURRENCIES",currencies:Object.values(t.data.Valute)}),e(function(e){return{type:"SET_LAST_UPDATE",date:e}}(n))}))}},addFavoriteCurrency:function(e){return{type:"ADD_FAVORITE_CURRENCY",currency:e}},removeFavoriteCurrency:function(e){return{type:"REMOVE_FAVORITE_CURRENCY",currency:e}}})((function(e){return Object(r.useEffect)((function(){return e.getCurrencies()}),[]),a.a.createElement(v,e)}))),g={currencies:[],inputCurrency:"0",outputCurrency:"0",currencyFrom:"USD",selectedCurOutput:"EUR"},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONVERTOR_LIST":return Object(h.a)({},e,{currencies:t.currencies});case"SET_INPUT_CUR":return Object(h.a)({},e,{inputCurrency:t.input});case"SET_OUTPUT_CUR":return Object(h.a)({},e,{outputCurrency:t.output});case"SET_CURRENCY_FROM":return Object(h.a)({},e,{currencyFrom:t.select});case"SET_CURRENCY_TO":return Object(h.a)({},e,{selectedCurOutput:t.currencyTo});default:return e}},j=n(16),U=function(e,t,n){return(e/(t/n)).toFixed(2)},F=function(e,t){return e.find((function(e){return e.Name===t}))},V=n(96),I=n(97),w=n(98),x=n(58),D=n(99),A=function(e){var t=Object(r.useState)(e.currencies),n=Object(j.a)(t,1)[0],c=Object(r.useState)(e.inputCurrency),l=Object(j.a)(c,2),u=l[0],o=l[1],i=Object(r.useState)(e.outputCurrency),s=Object(j.a)(i,2),m=s[0],E=s[1],d=Object(r.useState)(e.currencyFrom),f=Object(j.a)(d,2),C=f[0],p=f[1],v=Object(r.useState)(e.currencyTo),O=Object(j.a)(v,2),b=O[0],h=O[1],y=Object(r.useState)(!1),T=Object(j.a)(y,2),R=T[0],S=T[1],N=Object(r.useState)(!1),g=Object(j.a)(N,2),_=g[0],A=g[1],k=e.currencies.map((function(e){return a.a.createElement("option",{key:e.CharCode},e.Name)}));return a.a.createElement(V.a,null,a.a.createElement(I.a,null,a.a.createElement(w.a,null,a.a.createElement(x.a,null,a.a.createElement(D.a,null,a.a.createElement(D.a.Group,null,a.a.createElement(D.a.Label,null,a.a.createElement("h3",null,"FROM")),a.a.createElement(D.a.Control,{as:"select",onChange:function(e){S(!0),o(0),E(0),p(e.currentTarget.value)},defaultValue:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"},a.a.createElement("option",{disabled:!0},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"),a.a.createElement("option",null,"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0420\u0443\u0431\u043b\u044c"),k)),a.a.createElement(D.a.Group,null,a.a.createElement(D.a.Control,{as:"input",type:"number",disabled:!(R&&_),min:"0",value:u,onChange:function(e){o(e.currentTarget.value),E(function(e,t,n,r){if("\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0420\u0443\u0431\u043b\u044c"===e)return(n/F(r,t).Value*F(r,t).Nominal).toFixed(2);if("\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0420\u0443\u0431\u043b\u044c"===t)return(n*F(r,e).Value/F(r,e).Nominal).toFixed(2);var a=F(r,e).Value/F(r,e).Nominal,c=F(r,t).Value/F(r,t).Nominal;return U(n,c,a)}(C,b,e.currentTarget.value,n))}})))),a.a.createElement(x.a,null,a.a.createElement(D.a,null,a.a.createElement(D.a.Group,null,a.a.createElement(D.a.Label,null,a.a.createElement("h3",null,"TO")),a.a.createElement(D.a.Control,{as:"select",onChange:function(e){A(!0),o(0),E(0),h(e.currentTarget.value)},defaultValue:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"},a.a.createElement("option",{disabled:!0},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"),a.a.createElement("option",null,"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0420\u0443\u0431\u043b\u044c"),k)),a.a.createElement(D.a.Group,null,a.a.createElement(D.a.Control,{as:"input",value:m,disabled:!0,readOnly:!0})))))))},k=Object(f.d)(Object(O.b)((function(e){return{currencies:e.convertor.currencies,inputCurrency:e.convertor.inputCurrency,outputCurrency:e.convertor.outputCurrency,currencyFrom:e.convertor.currencyFrom,currencyTo:e.convertor.currencyTo}}),{getConvertorList:function(){return function(e){T().then((function(t){e({type:"SET_CONVERTOR_LIST",currencies:Object.values(t.data.Valute)})}))}},setInputCurrency:function(e){return{type:"SET_INPUT_CUR",input:e}},setCurrencyFrom:function(e){return{type:"SET_CURRENCY_FROM",select:e}},setCurrencyTo:function(e){return{type:"SET_CURRENCY_TO",select:e}}})((function(e){return Object(r.useEffect)((function(){e.getConvertorList()}),[]),a.a.createElement(A,e)}))),L=function(e){return a.a.createElement(I.a,null,a.a.createElement(d,null),a.a.createElement(V.a,null,a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:"/",render:function(){return a.a.createElement(u.a,{to:"/ratelist"})}}),a.a.createElement(u.b,{path:"/convertor",render:function(){return a.a.createElement(k,null)}}),a.a.createElement(u.b,{path:"/ratelist",render:function(){return a.a.createElement(N,null)}}),a.a.createElement(u.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(59),Y=Object(f.c)({currencies:S,convertor:_}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,G=Object(f.e)(Y,function(){if(null!==localStorage.getItem("applicationState"))return JSON.parse(localStorage.getItem("applicationState"))}(),M(Object(f.a)(P.a,(function(e){var t=e.getState;return function(e){return function(n){var r=e(n);return localStorage.setItem("applicationState",JSON.stringify(t())),r}}}))));window.store=G;var z=G;n(91);l.a.render(a.a.createElement(s.a,null,a.a.createElement(O.a,{store:z},a.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.91003478.chunk.js.map