(this.webpackJsonpflying_iot=this.webpackJsonpflying_iot||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),r=n(3),o=n.n(r),s=(n(13),n(14),n(4)),u=n(5),l=n(7),p=n(6),f=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).mapRef=i.createRef(),e.state={map:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=window.H,t=new e.service.Platform({apikey:"3H10rLgR14JItkoy62qrTqFjcF4rFMfM6G_ZIaNKPk0"}).createDefaultLayers(),n=new e.Map(this.mapRef.current,t.vector.normal.map,{center:{lat:50,lng:5},zoom:4,pixelRatio:window.devicePixelRatio||1});new e.mapevents.Behavior(new e.mapevents.MapEvents(n)),e.ui.UI.createDefault(n,t);this.setState({map:n})}},{key:"componentWillUnmount",value:function(){this.state.map.dispose()}},{key:"render",value:function(){return Object(a.jsx)("div",{ref:this.mapRef,style:{height:"500px"}})}}]),n}(i.Component);var m=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(f,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.4771cbee.chunk.js.map