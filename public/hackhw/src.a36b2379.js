parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
!function o(){fetch("https://hackhw-web.firebaseio.com/participants.json").then(function(o){200===o.status?o.json().then(function(o){o<50&&(hero_button.parentElement.classList.remove("disabled-parent"),hero_button.classList.remove("disabled")),o<50?hero_info.innerHTML+="<br /><br />Currently ".concat(o," out of 50 participants have signed up so far!"):(hero_button.innerHTML="Sign ups are no longer available.",hero_info.innerHTML+='<br /><br />Sorry we currently are maxed out of participants...<br />You can still sign up for our waitlist <a class="hero--waitlist">here</a>.'),console.log(o)}):console.log("Looks like there was a problem. Status Code: "+o.status)}).catch(function(e){console.log("Fetch Error :-S",e),o()})}(),sponsors_button.addEventListener("click",function(){document.querySelector(".hero").scrollIntoView({behavior:"smooth"})});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/hackhw/src.a36b2379.js.map