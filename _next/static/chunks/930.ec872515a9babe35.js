(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{6930:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var r=t(5893),u=t(5243),l=t(7294);let o=(0,l.createContext)(null),i=o.Provider;function a(){let e=(0,l.useContext)(o);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}let f=(0,l.forwardRef)(function({bounds:e,boundsOptions:n,center:t,children:r,className:o,id:a,placeholder:f,style:p,whenReady:s,zoom:d,...v},m){let[y]=(0,l.useState)({className:o,id:a,style:p}),[g,b]=(0,l.useState)(null);(0,l.useImperativeHandle)(m,()=>g?.map??null,[g]);let h=(0,l.useCallback)(r=>{if(null!==r&&null===g){let l=new u.Map(r,v);null!=t&&null!=d?l.setView(t,d):null!=e&&l.fitBounds(e,n),null!=s&&l.whenReady(s),b(Object.freeze({__version:1,map:l}))}},[]);(0,l.useEffect)(()=>()=>{g?.map.remove()},[g]);let x=g?l.createElement(i,{value:g},r):f??null;return l.createElement("div",c({},y,{ref:h}),x)});var p=t(3935);function s(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function d(e,n){return null==n?function(n,t){let r=(0,l.useRef)();return r.current||(r.current=e(n,t)),r}:function(t,r){let u=(0,l.useRef)();u.current||(u.current=e(t,r));let o=(0,l.useRef)(t),{instance:i}=u.current;return(0,l.useEffect)(function(){o.current!==t&&(n(i,t,o.current),o.current=t)},[i,t,r]),u}}function v(e,n){let t=(0,l.useRef)(n);(0,l.useEffect)(function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n},[e,n])}function m(e,n){let t=(0,l.useRef)();(0,l.useEffect)(function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}},[e,n])}function y(e,n){let t=e.pane??n.pane;return t?{...e,pane:t}:e}function g(e){return function(n){var t;let r=a(),u=e(y(n,r),r);return v(r.map,n.attribution),m(u.current,n.eventHandlers),t=u.current,(0,l.useEffect)(function(){let e=r.layerContainer??r.map;return e.addLayer(t.instance),function(){r.layerContainer?.removeLayer(t.instance),r.map.removeLayer(t.instance)}},[r,t]),u}}let b=function(e,n){let t=d(e,n),r=g(t);return(0,l.forwardRef)(function(e,n){let{instance:t}=r(e).current;return(0,l.useImperativeHandle)(n,()=>t),null})}(function({url:e,...n},t){let r=new u.TileLayer(e,y(n,t));return s(r,t)},function(e,n,t){!function(e,n,t){let{opacity:r,zIndex:u}=n;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=u&&u!==t.zIndex&&e.setZIndex(u)}(e,n,t);let{url:r}=n;null!=r&&r!==t.url&&e.setUrl(r)}),h=function(e,n){let t=d(e,n),r=g(t);return(0,l.forwardRef)(function(e,n){let{instance:t,context:u}=r(e).current;return(0,l.useImperativeHandle)(n,()=>t),null==e.children?null:l.createElement(i,{value:u},e.children)})}(function({position:e,...n},t){let r=new u.Marker(e,n);return s(r,Object.freeze({...t,overlayContainer:r}))},function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())}),x=function(e,n){var t;let r=d(e);return t=function(e,t){let u=a(),l=r(y(e,u),u);return v(u.map,e.attribution),m(l.current,e.eventHandlers),n(l.current,u,e,t),l},(0,l.forwardRef)(function(e,n){let[r,u]=(0,l.useState)(!1),{instance:o}=t(e,u).current;(0,l.useImperativeHandle)(n,()=>o),(0,l.useEffect)(function(){r&&o.update()},[o,r,e.children]);let i=o._contentNode;return i?(0,p.createPortal)(e.children,i):null})}(function(e,n){let t=new u.Popup(e,n.overlayContainer);return s(t,n)},function(e,n,{position:t},r){(0,l.useEffect)(function(){let{instance:u}=e;function l(e){e.popup===u&&(u.update(),r(!0))}function o(e){e.popup===u&&r(!1)}return n.map.on({popupopen:l,popupclose:o}),null==n.overlayContainer?(null!=t&&u.setLatLng(t),u.openOn(n.map)):n.overlayContainer.bindPopup(u),function(){n.map.off({popupopen:l,popupclose:o}),n.overlayContainer?.unbindPopup(),n.map.removeLayer(u)}},[e,n,r,t])});t(4358);let C=[53.5511691,10.0402546],w=()=>(0,r.jsxs)(f,{center:C,zoom:18,scrollWheelZoom:!1,style:{height:400,width:"100%"},children:[(0,r.jsx)(b,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,r.jsx)(h,{icon:(0,u.icon)({iconUrl:"/images/marker.png",iconSize:{x:20,y:30}}),position:C,children:(0,r.jsx)(x,{children:"Alfa66Bau"})})]});var O=w},4358:function(){}}]);