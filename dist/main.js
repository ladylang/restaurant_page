(()=>{"use strict";var e={876:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"\n#titleDiv {\n    display: block;\n    \n}\n\n\n#resturantName {\n    display: block;\n    font-size: 4em;\n    font-weight: bold;\n    color: brown;\n    padding: 1em;\n}\n\n\n#navbarDiv {\n    display: flex !important;\n    flex-direction: row;\n    justify-content: center;\n    background-color: cadetblue;\n    width: 100%;\n}\n\n\n#content {\n    display: block;\n    align-items: center;\n    background-color: aquamarine;\n    height: 100%;\n    width: 100%;\n}\n\n#menuTable {\n    text-align: center;\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n  \n}\n\nth td {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\ntable {\n    border: 1px solid black;\n}\n\nbutton {\n    margin: 2em;\n    font-size: 1.3em;\n}\n\n\nbody {\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\nhtml {\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n}",""]);const o=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);i&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:(e,n,t)=>{var i,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},i=[],r=0;r<e.length;r++){var c=e[r],l=n.base?c[0]+n.base:c[0],d=t[l]||0,s="".concat(l," ").concat(d);t[l]=d+1;var u=a(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:s,updater:f(p,n),references:1}),i.push(s)}return i}function l(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,s=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=s(n,r);else{var o=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function p(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,h=0;function f(e,n){var t,i,r;if(n.singleton){var o=h++;t=m||(m=l(n)),i=u.bind(null,t,o,!1),r=u.bind(null,t,o,!0)}else t=l(n),i=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=a(t[i]);o[r].references--}for(var l=c(e,n),d=0;d<t.length;d++){var s=a(t[d]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}t=l}}}}},n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(){const e=document.createElement("DIV");e.setAttribute("id","title");const n=document.createElement("H1");n.textContent="Home";const t=document.createElement("P");return t.textContent="We are known for our authantic flavors and quality ingrediants.",e.appendChild(n),e.appendChild(t),console.log("Home loaded"),e}const n=[];class i{constructor(e,n,t){this.item=e,this.description=n,this.price=t}}!function(){let e=new i("Salad","Healthy","$4.00");n.push(e);let t=new i("Fresh wraps","Meat, lettuce, tomato","$8.00");n.push(t);let r=new i("Meat kabobs","Lamb or chicken","$12.00");n.push(r);let o=new i("Curry","Very spicy","$15.99");n.push(o),console.log(n)}();var r=t(379),o=t.n(r),a=t(876);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const c=document.getElementById("content"),l=document.createElement("DIV");l.setAttribute("id","resturantName"),l.innerHTML="Indian Grill";const d=document.createElement("DIV");d.setAttribute("id","navbarDiv"),d.style.display="inline-block";const s=document.createElement("DIV");s.setAttribute("id","mainDiv");class u{constructor(t){this.tabDiv=document.createElement("DIV"),this.tabDiv.setAttribute("id",t),this.tabBtn=document.createElement("BUTTON"),this.tabBtn.innerHTML=t,this.tabBtn.addEventListener("click",(()=>{s.removeChild(s.firstChild),"Home"===t?s.appendChild(e()):"Contacts"===t?s.appendChild(function(){const e=document.createElement("DIV");e.setAttribute("id","title");const n=document.createElement("H1");n.textContent="Contacts";const t=document.createElement("P");return t.textContent="Phone number: 301-000-0000",e.appendChild(n),e.appendChild(t),console.log("Contacts loaded"),e}()):"Menu"===t&&s.appendChild(function(){const e=document.createElement("DIV");e.setAttribute("id","title");const t=document.createElement("H1");t.textContent="Menu";const i=document.createElement("P");i.textContent="Specialities";const r=document.createElement("TABLE");r.setAttribute("id","menuTable");let o=r.insertRow(0),a=document.createElement("TH");a.innerHTML="Item";let c=document.createElement("TH");c.innerHTML="Description";let l=document.createElement("TH");return l.innerHTML="Price",o.appendChild(a),o.appendChild(c),o.appendChild(l),r.appendChild(o),n.forEach((e=>{let n=r.insertRow(-1);n.insertCell(0).innerHTML=e.item,n.insertCell(1).innerHTML=e.description,n.insertCell(2).innerHTML=e.price})),e.appendChild(t),e.appendChild(i),e.appendChild(r),console.log("Menu loaded"),e}())})),this.tabDiv.appendChild(this.tabBtn),d.appendChild(this.tabDiv)}}new u("Home"),new u("Contacts"),new u("Menu"),c.appendChild(l),c.appendChild(d),c.appendChild(s),s.appendChild(e()),console.log("body loaded")})()})();