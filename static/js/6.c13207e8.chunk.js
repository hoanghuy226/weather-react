(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[6],{126:function(e,t,a){"use strict";var r=a(1),n=a.n(r),s=a(14);t.a=function(e){var t=Object(r.useContext)(s.a).theme;return n.a.createElement("div",{className:"w-full ml-auto mr-auto h-auto bg-".concat(t," border border-red-400 text-red-700 mt-5 px-4 py-2 rounded relative"),role:"alert"},n.a.createElement("span",{className:"w-5/6 block break-words"},e.errorMessage),e.showCloseBtn&&n.a.createElement("span",{className:"absolute top-0 bottom-0 right-0 ml-3 mr-1 py-3",onClick:e.closeError},n.a.createElement("svg",{className:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n.a.createElement("title",null,"Close"),n.a.createElement("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}))))}},127:function(e,t,a){"use strict";a.d(t,"a",(function(){return A})),a.d(t,"b",(function(){return w}));var r=a(148),n=a(24),s=a.n(n),c=a(31),o=a(134),l=a(128),i=a(129),u=a(133),d=a(132),m=a(1),h=a.n(m),p=a(10),f=a(55),v=a.n(f),E=a(9),y=a(123),g=a(124),b=a(140),A=h.a.createContext(null),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),u=0;u<n;u++)i[u]=arguments[u];return(e=t.call.apply(t,[this].concat(i))).updateState=function(t){e.setState(Object(o.a)({},t))},e.updateFavorites=function(t){e.setState(Object(o.a)({},t))},e.state={address:{cityName:"",cityId:""},latlong:"",favorites:[],updateState:e.updateState,updateFavorites:e.updateFavorites},e.formatCoords=function(e,t){return"".concat(e,",").concat(t)},e.updateAddress=function(){var t=Object(c.a)(s.a.mark((function t(a){var r,n,c,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},t.prev=1,t.next=4,v.a.get("https://places-dsn.algolia.net/1/places/reverse?aroundLatLng=".concat(a,",&hitsPerPage=1&language=en"),{headers:b.a});case 4:n=t.sent.data.hits,r=n[0],Object(y.a)(r)||Object(g.a)(r)||(c="".concat(r.city?r.city[0]:"",", ").concat(r.administrative?r.administrative[0]:"",", ").concat(r.country?r.country:""),o=r.objectID?r.objectID:"",e.updateState({address:{cityName:c,cityId:o},latlong:a})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),E.a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),e.getAddress=Object(c.a)(s.a.mark((function t(){var a,r,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("geolocation"in navigator)){t.next=4;break}navigator.geolocation.getCurrentPosition(function(){var t=Object(c.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.formatCoords(a.coords.latitude,a.coords.longitude),e.updateAddress(r);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=16;break;case 4:return t.prev=4,t.next=7,v.a.get("https://ipapi.co/json");case 7:a=t.sent,r=a.data,n=e.formatCoords(r.latitude,r.longitude),e.updateAddress(n),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),E.a(t.t0);case 16:case"end":return t.stop()}}),t,null,[[4,13]])}))),e.getFavorites=function(){localStorage.getItem("favorites")&&e.setState({favorites:Object(r.a)(JSON.parse(localStorage.getItem("favorites")))})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getAddress(),this.getFavorites()}},{key:"render",value:function(){return h.a.createElement(A.Provider,{value:this.state},this.props.children)}}]),a}(m.Component);A.propTypes={address:p.PropTypes.objectOf(p.PropTypes.string),favorites:p.PropTypes.array,updateState:p.PropTypes.func,updateFavorites:p.PropTypes.func}},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o}));var r=a(53),n=a(1),s=a.n(n),c=s.a.createContext({weatherUnit:"C"}),o=function(e){var t=e.children,a=Object(n.useState)("C"),o=Object(r.a)(a,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){localStorage.getItem("unit")?i(JSON.parse(localStorage.getItem("unit"))):localStorage.setItem("unit",JSON.stringify("C"))}),[]),s.a.createElement(c.Provider,{value:{weatherUnit:l,updateWeatherUnit:function(e){i(e),localStorage.setItem("unit",JSON.stringify(e))}}},t)}},135:function(e,t,a){"use strict";var r=a(128),n=a(129),s=a(133),c=a(132),o=a(1),l=a.n(o),i=a(126),u=a(9),d=a(125),m=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={hasError:!1,eventId:null},e}return Object(n.a)(a,[{key:"componentDidCatch",value:function(e,t){var a=this;u.c((function(r){r.setExtras(t);var n=u.a(e);a.setState({eventId:n})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.hasError?l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"w-1/6"}),l.a.createElement("div",{className:"flex-col w-2/3 justify-center text-center"},l.a.createElement(i.a,{errorMessage:"Something went wrong. Reload the page!"}),l.a.createElement("button",{className:"font-semibold py-3 px-6 rounded-full capitalize text-sun",onClick:function(){return d.b({eventId:e.state.eventId})}},"Report feedback"))):this.props.children)}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(o.Component);t.a=m},140:function(e,t,a){"use strict";var r={"X-Algolia-Application-Id":Object({NODE_ENV:"production",PUBLIC_URL:"/weather-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_DARKSKY_API_KEY:"4e27157cf1858c6667c07568e8e21a56",REACT_APP_GA_ID:"UA-85329633-7",REACT_APP_IGNORE_IP:"72.66.83.208,172.58.187.92,72.66.111.127,192.168.200.227,2607:FB90:13D5:3006:CA8:6335:5796:C204",REACT_APP_IPINFO_TOKEN:"89e225c4438961",REACT_APP_LOGROCKET_PROJECT_ID:"fqwvbn/weather-react",REACT_APP_SENTRY_DSN:"https://2f774997cac543cf8235ad8680447518@sentry.io/3657916",REACT_APP_TIMEZONE_DB_API_KEY:"GNB0ZOUNM9BR"}).ALGOLIA_PLACES_APP_ID||"","X-Algolia-API-Key":Object({NODE_ENV:"production",PUBLIC_URL:"/weather-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_DARKSKY_API_KEY:"4e27157cf1858c6667c07568e8e21a56",REACT_APP_GA_ID:"UA-85329633-7",REACT_APP_IGNORE_IP:"72.66.83.208,172.58.187.92,72.66.111.127,192.168.200.227,2607:FB90:13D5:3006:CA8:6335:5796:C204",REACT_APP_IPINFO_TOKEN:"89e225c4438961",REACT_APP_LOGROCKET_PROJECT_ID:"fqwvbn/weather-react",REACT_APP_SENTRY_DSN:"https://2f774997cac543cf8235ad8680447518@sentry.io/3657916",REACT_APP_TIMEZONE_DB_API_KEY:"GNB0ZOUNM9BR"}).ALGOLIA_PLACES_API_KEY||""};t.a=r},161:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t),a.d(t,"HomeContainer",(function(){return M}));var r=a(128),n=a(129),s=a(133),c=a(132),o=a(1),l=a.n(o),i=a(24),u=a.n(i),d=a(31),m=a(55),h=a.n(m),p=a(136),f=a.n(p),v=a(152),E=a.n(v),y=(a(161),a(14)),g=function(e){var t=Object(o.useContext)(y.a),a=t.theme,r=t.colorTheme;return l.a.createElement("p",{className:"px-5 py-1 cursor-pointer item text-".concat(r," hover:text-").concat(a," hover:bg-").concat(r),onClick:e.addressSelected},e.address.cityName)},b=a(52),A=a(126),w=a(127),_=a(141),O=a(162),C=function(e){var t=e.type,a=e.color,r={search:l.a.createElement(_.b,null),up:l.a.createElement(O.b,null),down:l.a.createElement(O.a,null)};return l.a.createElement("p",{className:"opacity-75 text-2xl fill-".concat(a)},r[t])},S=function(e){var t=Object(o.useContext)(y.a),a=t.theme,r=t.colorTheme;return l.a.createElement("div",{className:"h-12 mx-5 mt-5"},l.a.createElement("div",{className:"relative"},l.a.createElement("div",{className:"absolute top-0 left-0 ml-5 mt-3"},l.a.createElement(C,{type:"search",color:r})),l.a.createElement("input",{style:{backgroundColor:"".concat("dark"===a?"#3a3a3a":"#e2e8f0"),letterSpacing:"0.05em"},className:"data-hj-whitelist block appearance-none w-full border-none rounded-full shadow py-3 pl-12 pr-6 mb-3 leading-tight focus:outline-none focus:bg-gray-200 truncate text-".concat(r),id:"grid-first-name",type:"text",placeholder:"Type city name to find weather forecast",onChange:e.citySearch,value:e.city}),e.showCaret?l.a.createElement("div",{className:"flex right-0 absolute top-0 mr-4 mt-3 cursor-pointer",onClick:e.caretClicked},e.showAddresses?l.a.createElement(C,{type:"up",color:r}):l.a.createElement(C,{type:"down",color:r})):null))},P=a(123),x=a(124),N=a(9),j=a(33),T=a(140);f()(h.a,{retryDelay:f.a.exponentialDelay});var I=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={showCaret:!1,showAddresses:!1,showLoader:!1,city:"",addresses:[],errorMessage:""},e.debounceAddress=E()(e.getAddresses,1e3),e.searchCity=function(t){e.setState({city:t.target.value,errorMessage:""}),e.debounceAddress()},e.toggleAddresses=function(){e.setState((function(e){return{showAddresses:!e.showAddresses}}))},e.setCity=function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a&&(e.setState({city:a.cityName.split(",")[0],showAddresses:!1}),Object(j.a)({category:"Address",action:"City Search",label:a.cityName}),e.context.updateState({address:a,latlong:a.latlong}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(n.a)(a,[{key:"handleError",value:function(e){this.setState({errorMessage:e})}},{key:"getAddresses",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.city.trim()){e.next=17;break}return e.prev=1,this.setState({showLoader:!0}),e.next=5,h.a.request({url:"https://places-dsn.algolia.net/1/places/query",method:"post",data:{query:this.state.city,type:"city",aroundLatLng:this.context.address.latlong},headers:T.a});case 5:t=e.sent.data.hits,Object(P.a)(t)||Object(x.a)(t)?(this.setState({showAddresses:!1}),this.handleError("No matching cities found. Try searching with a valid city name!")):(a=t.map((function(e){var t="".concat(e.locale_names.en?e.locale_names.en[0]:e.locale_names.default[0]),a="".concat(e.administrative?e.administrative[0]:""),r="".concat(e.country.en?e.country.en:e.country.default),n="".concat(t,", ").concat(a,", ").concat(r),s=e._geoloc,c=s.lat,o=s.lng;return{cityName:n,cityId:e.objectID,latlong:"".concat(c,",").concat(o)}})),this.setState({addresses:a,showCaret:!0,showAddresses:!0,errorMessage:""})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),N.a(e.t0);case 12:return e.prev=12,this.setState({showLoader:!1}),e.finish(12);case 15:e.next=18;break;case 17:this.clearState();case 18:case"end":return e.stop()}}),e,this,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"clearState",value:function(){this.setState({showCaret:!1,showAddresses:!1,showLoader:!1,addresses:[],errorMessage:""})}},{key:"render",value:function(){var e=this;return l.a.createElement(o.Fragment,null,l.a.createElement("div",{className:"flex justify-center mt-5"},l.a.createElement("div",{className:"w-full sm:w-5/6 md:w-2/3 xl:max-w-5xl"},l.a.createElement(S,{city:this.state.city,showCaret:this.state.showCaret,showAddresses:this.state.showAddresses,citySearch:this.searchCity,caretClicked:this.toggleAddresses}))),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("div",{className:"w-full sm:w-5/6 md:w-2/3 xl:max-w-5xl"},this.state.showLoader?l.a.createElement(b.a,null):this.state.showAddresses&&l.a.createElement("div",{className:"mx-10 mt-0 border-solid border-2 border-gray-400 rounded-b-xl address-list"},this.state.addresses.map((function(t,a){return l.a.createElement(g,{address:t,key:a,addressSelected:function(){return e.setCity(t)}})}))),this.state.errorMessage.length>0&&l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("div",{className:"w-5/6"},l.a.createElement(A.a,{errorMessage:this.state.errorMessage,showCloseBtn:!0,closeError:function(){e.setState({errorMessage:""})}}))))))}}]),a}(o.Component);I.contextType=w.a;var k=I,R=a(130),D=a(135),L=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(9)]).then(a.bind(null,173))})),K=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(10),a.e(1),a.e(8)]).then(a.bind(null,177))})),M=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement(o.Fragment,null,l.a.createElement(R.b,null,l.a.createElement(w.b,null,l.a.createElement(k,null),l.a.createElement(D.a,null,l.a.createElement(o.Suspense,{fallback:l.a.createElement(b.a,{loaderText:"Loading components"})},l.a.createElement(L,null),l.a.createElement(K,null))))))}}]),a}(o.Component);M.contextType=y.a;t.default=M}}]);
//# sourceMappingURL=6.c13207e8.chunk.js.map