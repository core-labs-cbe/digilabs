import{c as a}from"./runtime-dom.esm-bundler-1ecb3a83.js";import{_ as l,o as u,c as p,a as d,r as f}from"./_plugin-vue_export-helper-80f064ad.js";import{r as _}from"./index-ff142631.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m={},y={class:"app"};function g(i,t){const r=f("router-view");return u(),p("main",y,[d(r)])}const h=l(m,[["render",g],["__scopeId","data-v-30d3e063"]]),c=a(h);c.use(_);c.mount("#app");
