"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("effector"),t=require("react"),r=require("effector-react"),n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},n.apply(this,arguments)};var s,i,u,o=(s={useEvent:r.useEvent,useStore:r.useStore},i=s.useStore,u=s.useEvent,{createView:function(r){var s={},o=n(n({},function(e){return{displayName:function(t){return e.displayName=t,this},defaultProps:function(t){return e.defaultProps=t,this},props:function(t){return e.props=t,this},map:function(t){return e.map=t,this},enter:function(t){return e.enter=t,this},exit:function(t){return e.exit=t,this},effect:function(t){return e.effect=t,this}}}(s)),{view:function(o){var a,c=r||o,f=function(t){void 0===t&&(t={});for(var r={},n={},s={},i=0,u=Object.entries(t);i<u.length;i++){var o=u[i],a=o[0],c=o[1];e.is.store(c)?n[a]=c:e.is.event(c)||e.is.effect(c)?r[a]=c:s[a]=c}return{rest:s,events:r,stores:n,hasEvents:Object.keys(r).length>0,hasStores:Object.keys(n).length>0}}(s.props),l=f.hasEvents,p=f.hasStores,v=f.stores,d=f.events,h=f.rest;p&&(a=e.combine(v));var m=function(e){var r,o=n(n(n(n({},e),h),l&&u(d)),p&&i(a));return s.map&&(o=n(n(n({},e),o),s.map(o))),null===(r=s.effect)||void 0===r||r.call(s,o),((null==s?void 0:s.enter)||(null==s?void 0:s.exit))&&t.useEffect((function(){var e;return null===(e=s.enter)||void 0===e||e.call(s),s.exit})),c(o)};return s.displayName&&(m.displayName=s.displayName),s.defaultProps&&(m.defaultProps=s.defaultProps),m.Memo=t.memo(m),m}});return o}}).createView;exports.createView=o;
//# sourceMappingURL=index.js.map
