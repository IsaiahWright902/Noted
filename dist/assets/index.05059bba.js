import{r as f,o as m,c as d,a as p,b as _,d as h}from"./vendor.4731d600.js";const v=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};v();var y=(s,i)=>{const n=s.__vccOpts||s;for(const[r,e]of i)n[r]=e;return n};const g={};function P(s,i,n,r,e,t){const o=f("router-view");return m(),d(o)}var b=y(g,[["render",P]]);const k="modulepreload",c={},$="/",w=function(i,n){return!n||n.length===0?i():Promise.all(n.map(r=>{if(r=`${$}${r}`,r in c)return;c[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":k,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((u,l)=>{o.addEventListener("load",u),o.addEventListener("error",l)})})).then(()=>i())};function L(s){switch(s){case"./pages/HomePage.vue":return w(()=>import("./HomePage.3b23e051.js"),["assets/HomePage.3b23e051.js","assets/HomePage.9d67b77c.css","assets/vendor.4731d600.js"]);default:return new Promise(function(i,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function a(s){return()=>L(`./pages/${s}.vue`)}const E=[{path:"/",name:"Home",component:a("HomePage")},{path:"/test",name:"Test",component:a("TestPage")}],O=p({history:_(),routes:E}),H=h(b);H.use(O).mount("#app");export{y as _};
