import{_ as f}from"./_get-intrinsic@1.2.1@get-intrinsic-d63970a8.js";import{_ as b}from"./_function-bind@1.1.1@function-bind-a5934397.js";var j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function P(e){if(e.__esModule)return e;var n=e.default;if(typeof n=="function"){var t=function r(){return this instanceof r?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),t}var s={exports:{}};(function(e){var n=b,t=f,r=t("%Function.prototype.apply%"),o=t("%Function.prototype.call%"),l=t("%Reflect.apply%",!0)||n.call(o,r),c=t("%Object.getOwnPropertyDescriptor%",!0),a=t("%Object.defineProperty%",!0),_=t("%Math.max%");if(a)try{a({},"a",{value:1})}catch{a=null}e.exports=function(g){var i=l(n,o,arguments);if(c&&a){var v=c(i,"length");v.configurable&&a(i,"length",{value:1+_(0,g.length-(arguments.length-1))})}return i};var p=function(){return l(n,r,arguments)};a?a(e.exports,"apply",{value:p}):e.exports.apply=p})(s);var m=s.exports,d=f,y=m,h=y(d("String.prototype.indexOf")),w=function(n,t){var r=d(n,!!t);return typeof r=="function"&&h(n,".prototype.")>-1?y(r):r};export{P as a,w as b,j as c,x as g};